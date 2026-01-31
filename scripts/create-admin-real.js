const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB URI - fallback to localhost
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/garde-corps';

// User Schema (Simplified)
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
  name: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function main() {
  const email = process.argv[2] || 'admin@stickit-france.com';
  const password = process.argv[3] || 'admin123';

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected.');

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      console.log(`User ${email} already exists. Updating password...`);
      existing.passwordHash = hash;
      await existing.save();
      console.log('Password updated.');
    } else {
      console.log(`Creating user ${email}...`);
      await User.create({
        email,
        passwordHash: hash,
        role: 'admin',
        name: 'Admin'
      });
      console.log('User created successfully.');
    }

    console.log(`\n✅ Account ready!`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

main();

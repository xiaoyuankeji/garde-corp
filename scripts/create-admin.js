// Script to create an admin user
// Run: node scripts/create-admin.js

const bcrypt = require('bcryptjs');

async function main() {
  const email = process.argv[2] || 'admin@stickit-france.com';
  const password = process.argv[3] || 'admin123';
  
  // Hash password
  const hash = await bcrypt.hash(password, 12);
  
  console.log('\n=== Admin User Creation ===\n');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('\nPassword Hash:');
  console.log(hash);
  console.log('\n=== MongoDB Insert Command ===\n');
  console.log(`db.users.insertOne({
  email: "${email}",
  passwordHash: "${hash}",
  role: "admin",
  name: "Admin",
  createdAt: new Date(),
  updatedAt: new Date()
});`);
  console.log('\n=== Instructions ===');
  console.log('1. Connect to MongoDB: mongosh mongodb://localhost:27017/garde-corps');
  console.log('2. Run the insert command above');
  console.log('3. Access /admin and login with your credentials');
  console.log('\n⚠️  IMPORTANT: Change the default password after first login!');
}

main().catch(console.error);

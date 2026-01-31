// MongoDB initialization script
// This runs when the container is first created

db = db.getSiblingDB('garde-corps');

// Create collections with validation
db.createCollection('users');
db.createCollection('pages');
db.createCollection('projects');
db.createCollection('leads');
db.createCollection('settings');
db.createCollection('events');

// Create indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.pages.createIndex({ slug: 1 }, { unique: true });
db.pages.createIndex({ type: 1, published: 1 });
db.projects.createIndex({ slug: 1 }, { unique: true });
db.projects.createIndex({ 'tags.materials': 1 });
db.projects.createIndex({ 'tags.useCases': 1 });
db.leads.createIndex({ status: 1 });
db.leads.createIndex({ createdAt: -1 });
db.events.createIndex({ type: 1 });
db.events.createIndex({ createdAt: -1 });

// Create default admin user
// Password: admin123 (change this!)
// Hash generated with bcrypt, 12 rounds
db.users.insertOne({
  email: 'admin@stickit-france.com',
  passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4aHEWVCTxjPzv2Gy',
  role: 'admin',
  name: 'Admin',
  createdAt: new Date(),
  updatedAt: new Date()
});

// Create default settings
db.settings.insertOne({
  companyName: 'STICK-IT FRANCE',
  phone: '03 20 34 50 30',
  email: 'contact@stickit-france.com',
  address: 'Z.A. de la Broye, Rue du Chaufour',
  city: 'Ennevelin',
  postalCode: '59710',
  region: 'Nord',
  country: 'France',
  openingHours: {
    weekdays: '8h00 - 18h00',
    saturday: '9h00 - 12h00',
    sunday: 'Fermé'
  },
  socialLinks: {},
  seo: {
    defaultTitle: 'Garde-Corps Sur Mesure | STICK-IT FRANCE',
    defaultDescription: 'Spécialiste garde-corps sur mesure en inox, verre et aluminium.',
    defaultKeywords: ['garde-corps', 'garde corps', 'inox', 'verre', 'aluminium']
  },
  updatedAt: new Date()
});

print('Database initialized successfully!');
print('Default admin user created: admin@stickit-france.com / admin123');
print('IMPORTANT: Change the admin password after first login!');

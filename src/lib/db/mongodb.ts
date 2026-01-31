import mongoose from 'mongoose';

// Mode statique : Base de données désactivée
// Static mode: Database connection disabled

async function connectDB() {
  console.log("Database connection disabled for static export");
  return null;
}

export default connectDB;

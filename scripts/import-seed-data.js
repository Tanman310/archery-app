#!/usr/bin/env node

/**
 * Import seed data into Firestore
 * 
 * This script imports pre-defined archery rounds from data/seed/rounds.json
 * into the Firestore database.
 * 
 * Usage:
 *   node scripts/import-seed-data.js
 * 
 * Requirements:
 *   - Firebase Admin SDK must be initialized
 *   - Service account key file (for local testing)
 *   - Or run in Firebase Functions/Cloud environment
 * 
 * For local testing:
 *   1. Download service account key from Firebase Console
 *   2. Set GOOGLE_APPLICATION_CREDENTIALS environment variable
 *   3. Run this script
 */

const fs = require('fs');
const path = require('path');

// Note: This script requires firebase-admin to be installed
// Run: npm install --save-dev firebase-admin

try {
  const admin = require('firebase-admin');
  
  // Initialize Firebase Admin
  // In production, use environment-based initialization
  // For local development, set GOOGLE_APPLICATION_CREDENTIALS env var
  if (!admin.apps.length) {
    admin.initializeApp();
  }
  
  const db = admin.firestore();
  
  async function importRounds() {
    console.log('Starting seed data import...');
    
    // Read rounds data
    const roundsPath = path.join(__dirname, '..', 'data', 'seed', 'rounds.json');
    const roundsData = JSON.parse(fs.readFileSync(roundsPath, 'utf8'));
    
    console.log(`Found ${roundsData.length} rounds to import`);
    
    // Import in batches (Firestore batch limit is 500 operations)
    const batchSize = 500;
    let imported = 0;
    
    for (let i = 0; i < roundsData.length; i += batchSize) {
      const batch = db.batch();
      const chunk = roundsData.slice(i, i + batchSize);
      
      for (const round of chunk) {
        const { id, ...data } = round;
        const ref = db.collection('rounds').doc(id);
        batch.set(ref, data, { merge: true });
      }
      
      await batch.commit();
      imported += chunk.length;
      console.log(`Imported ${imported}/${roundsData.length} rounds`);
    }
    
    console.log('✓ Seed data import complete!');
    console.log(`\nImported rounds:`);
    roundsData.forEach(round => {
      console.log(`  - ${round.name} (${round.organization})`);
    });
  }
  
  // Run import
  importRounds()
    .then(() => {
      console.log('\nImport successful!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error importing seed data:', error);
      process.exit(1);
    });
    
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('Error: firebase-admin is not installed');
    console.error('Please run: npm install --save-dev firebase-admin');
    console.error('\nFor local development:');
    console.error('1. Download service account key from Firebase Console');
    console.error('2. Set GOOGLE_APPLICATION_CREDENTIALS environment variable:');
    console.error('   export GOOGLE_APPLICATION_CREDENTIALS="path/to/serviceAccountKey.json"');
    console.error('3. Run this script again');
  } else {
    console.error('Unexpected error:', error);
  }
  process.exit(1);
}

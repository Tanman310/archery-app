# Archery App Seed Data

This directory contains seed data for pre-defined archery rounds that can be imported into Firestore.

## Structure

```
data/
└── seed/
    └── rounds.json          # Pre-defined archery rounds
```

## Rounds Seed Data

The `rounds.json` file contains definitions for common archery round formats from various organizations:

### Included Rounds

1. **World Archery (WA)**
   - WA 1440: Olympic round with 36 arrows at each of four distances (90m, 70m, 50m, 30m)
   - WA 720 (70m Round): Standard Olympic qualification round
   - WA 18m Indoor: Indoor round with 60 arrows at 18 meters
   - WA Compound 50m: Standard compound round at 50 meters

2. **National Archery in the Schools Program (NASP)**
   - NASP Basic Tournament: Standard school tournament format

3. **National Field Archery Association (NFAA)**
   - NFAA Indoor 300: Indoor round at 20 yards
   - NFAA Field Round: Field archery round with multiple distances

### Data Format

Each round includes:
- `id`: Unique identifier for the round
- `name`: Display name
- `organization`: Governing body (WA, NASP, NFAA, etc.)
- `description`: Brief description of the round
- `totalEnds`: Total number of ends in the round
- `arrowsPerEnd`: Number of arrows per end
- `maxScore`: Maximum possible score
- `parameters`: Round-specific configuration
  - `distances`: Array of distance objects with value, unit, and number of ends
  - `targetFace`: Description of target face size/type
  - `scoringSystem`: Scoring system description

## Importing Seed Data

### Using Firebase CLI

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firestore (if not already done):
   ```bash
   firebase init firestore
   ```

4. Import the rounds data:
   ```bash
   # Using firestore-import or a custom import script
   node scripts/import-seed-data.js
   ```

### Using Firebase Admin SDK

Create a script to import the data programmatically:

```javascript
const admin = require('firebase-admin');
const rounds = require('./data/seed/rounds.json');

admin.initializeApp();
const db = admin.firestore();

async function importRounds() {
  const batch = db.batch();
  
  for (const round of rounds) {
    const { id, ...data } = round;
    const ref = db.collection('rounds').doc(id);
    batch.set(ref, data);
  }
  
  await batch.commit();
  console.log(`Imported ${rounds.length} rounds`);
}

importRounds().catch(console.error);
```

### Manual Import via Firebase Console

1. Go to Firebase Console > Firestore Database
2. Create a collection named `rounds`
3. For each round in `rounds.json`:
   - Add a new document with the `id` as the document ID
   - Copy the remaining fields as document data

## Extending Seed Data

To add more rounds:

1. Follow the existing format in `rounds.json`
2. Ensure all required fields are included
3. Use a unique `id` for each round
4. Document any new organizations or scoring systems
5. Update this README with the new rounds

## References

- [World Archery Rules](https://worldarchery.sport/rulebook)
- [NASP Rules](https://naspschools.org/)
- [NFAA Constitution and By-Laws](https://nfaausa.com/)

# Archery App (starter)

Minimal starter for the Archery App — a mobile-first PWA to record arrow-by-arrow scores, persist offline, and sync to cloud (Firebase).

## Quickstart
1. Copy `.env.example` to `.env` and fill Firebase values.
2. npm install
3. npm run dev
4. Open http://localhost:5173

## What's included
- React + TypeScript + Vite app skeleton
- Firebase initialization, Auth + Firestore
- Example scorecard page with arrow-by-arrow UI
- PWA manifest placeholder and service-worker stub
- Simple Sessions list showing saved sessions
- **Firestore schema with types** (see `FIRESTORE_SCHEMA.md` and `FIRESTORE_DIAGRAM.md`)
- **Pre-built rounds dataset** with World Archery, NASP, and NFAA rounds
- **Firestore security rules** restricting data access to authenticated users

## Database Schema

The app uses a structured Firestore schema with the following collections:
- `users/{userId}/sessions` - Shooting sessions (private per user)
- `users/{userId}/equipment` - User's archery equipment (private per user)
- `rounds` - Pre-defined round types (global, read-only)

For detailed schema documentation, see:
- **[FIRESTORE_SCHEMA.md](./FIRESTORE_SCHEMA.md)** - Complete schema documentation
- **[FIRESTORE_DIAGRAM.md](./FIRESTORE_DIAGRAM.md)** - Visual diagrams and data flow
- **[src/types/schema.ts](./src/types/schema.ts)** - TypeScript type definitions

## Seed Data

Pre-built archery rounds are available in `data/seed/rounds.json`:
- **World Archery**: WA 1440, WA 720 (70m), WA 18m Indoor, WA Compound 50m
- **NASP**: Basic Tournament
- **NFAA**: Indoor 300, Field Round

To import seed data into Firestore, see [data/README.md](./data/README.md).

## Security

Firestore security rules are defined in `firestore.rules`:
- Users can only read/write their own sessions and equipment
- All users can read from the global rounds collection
- Only server/admin can write to rounds collection

Deploy rules with: `firebase deploy --only firestore:rules`

## Next steps
- Add Sign Up / Login pages and wire up UI flows
- Import seed data into Firestore
- Add round selection UI to use pre-defined rounds
- Add tests and CI pipeline

## License
- MIT. See CONTRIBUTING.md for contribution guidance.

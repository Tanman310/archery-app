# Firestore Schema Documentation

This document describes the Firestore database schema for the Archery App.

## Collection Hierarchy

```
firestore/
├── users/{userId}/                     # Top-level collection for user data
│   ├── sessions/{sessionId}            # Shooting sessions
│   │   ├── roundId: string            # Reference to round type
│   │   ├── roundName: string          # Name of the round (e.g., "WA 1440")
│   │   ├── createdAt: timestamp       # When session was created
│   │   ├── updatedAt: timestamp       # Last update time
│   │   ├── sessionTotal: number       # Total score for the session
│   │   ├── ends: array                # Array of end data
│   │   │   ├── endNumber: number      # End number (1-indexed)
│   │   │   ├── arrows: array          # Array of arrow scores
│   │   │   │   └── value: number|string  # Score value (0-10, X, M)
│   │   │   └── endTotal: number       # Total for this end
│   │   └── metadata: object           # Optional session metadata
│   │       ├── distance: number       # Distance in meters/yards
│   │       ├── targetSize: number     # Target size in cm
│   │       └── notes: string          # User notes
│   └── equipment/{equipmentId}        # User's equipment
│       ├── type: string               # bow, arrows, sight, etc.
│       ├── name: string               # Equipment name/model
│       ├── description: string        # Details
│       └── createdAt: timestamp       # When added
│
└── rounds/{roundId}                    # Pre-defined round types (global)
    ├── name: string                    # Round name
    ├── organization: string            # WA, NASP, NFAA, etc.
    ├── description: string             # Round description
    ├── totalEnds: number               # Total number of ends
    ├── arrowsPerEnd: number            # Arrows per end
    ├── maxScore: number                # Maximum possible score
    └── parameters: object              # Round-specific parameters
        ├── distances: array            # Array of distances
        │   ├── value: number           # Distance value
        │   ├── unit: string            # meters or yards
        │   └── ends: number            # Number of ends at this distance
        ├── targetFace: string          # Target face type
        └── scoringSystem: string       # Scoring system (10-zone, 5-zone, etc.)
```

## Data Model

### User Document
Users are managed by Firebase Authentication. Their UID is used as the document ID in the `users` collection.

### Session Document
Represents a single shooting session/scorecard.

**Fields:**
- `roundId` (string, optional): Reference to a pre-defined round
- `roundName` (string, required): Display name of the round
- `createdAt` (timestamp, required): Creation timestamp
- `updatedAt` (timestamp, optional): Last update timestamp
- `sessionTotal` (number, required): Total score
- `ends` (array, required): Array of end objects
- `metadata` (object, optional): Additional session data

**End Object:**
```typescript
{
  endNumber: number,      // 1-indexed
  arrows: Arrow[],        // Array of arrow values
  endTotal: number        // Sum of arrow scores
}
```

**Arrow Values:**
- Numbers: 0-10 (scoring zones)
- String "X": Inner 10 (bull's-eye)
- String "M": Miss
- null: Not yet scored

### Equipment Document
Represents a piece of archery equipment owned by the user.

**Fields:**
- `type` (string, required): Equipment category (bow, arrows, sight, stabilizer, etc.)
- `name` (string, required): Equipment name/model
- `description` (string, optional): Additional details
- `createdAt` (timestamp, required): When added

### Round Document
Represents a pre-defined round type (stored globally, not per-user).

**Fields:**
- `name` (string, required): Official round name
- `organization` (string, required): Governing body (WA, NASP, NFAA, etc.)
- `description` (string, optional): Round description
- `totalEnds` (number, required): Total number of ends
- `arrowsPerEnd` (number, required): Arrows shot per end
- `maxScore` (number, required): Maximum possible score
- `parameters` (object, required): Round-specific configuration

**Parameters Object:**
```typescript
{
  distances: [
    {
      value: number,      // Distance value
      unit: string,       // "meters" or "yards"
      ends: number        // Number of ends at this distance
    }
  ],
  targetFace: string,     // Target face type/size
  scoringSystem: string   // Scoring system description
}
```

## Security Model

All user data is private and scoped to the authenticated user:
- Users can only read/write their own sessions under `/users/{userId}/sessions`
- Users can only read/write their own equipment under `/users/{userId}/equipment`
- All users can read from the global `/rounds` collection (read-only for clients)
- Only server/admin can write to the global `/rounds` collection

## Indexes

The following composite indexes are recommended:

1. **sessions by user and creation date:**
   - Collection: `users/{userId}/sessions`
   - Fields: `createdAt` (descending)

2. **rounds by organization:**
   - Collection: `rounds`
   - Fields: `organization` (ascending), `name` (ascending)

## Data Integrity

- All timestamps use Firebase `serverTimestamp()`
- Session totals are calculated client-side and stored for quick retrieval
- Arrow values are validated before storage
- Round definitions are immutable once created

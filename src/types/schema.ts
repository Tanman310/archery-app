/**
 * Firestore schema types for the Archery App
 * These types match the schema documented in FIRESTORE_SCHEMA.md
 */

import { Timestamp } from 'firebase/firestore'

/**
 * Arrow score value
 * - number: 0-10 for scoring zones
 * - "X": Inner 10 (bull's-eye)
 * - "M": Miss
 * - null: Not yet scored
 */
export type Arrow = number | 'X' | 'M' | null

/**
 * Single end of arrows
 */
export interface End {
    endNumber: number
    arrows: Arrow[]
    endTotal: number
}

/**
 * Optional session metadata
 */
export interface SessionMetadata {
    distance?: number
    targetSize?: number
    notes?: string
}

/**
 * Shooting session document
 * Path: users/{userId}/sessions/{sessionId}
 */
export interface Session {
    roundId?: string
    roundName: string
    createdAt: Timestamp
    updatedAt?: Timestamp
    sessionTotal: number
    ends: End[]
    metadata?: SessionMetadata
}

/**
 * Equipment document
 * Path: users/{userId}/equipment/{equipmentId}
 */
export interface Equipment {
    type: string
    name: string
    description?: string
    createdAt: Timestamp
}

/**
 * Distance specification for a round
 */
export interface RoundDistance {
    value: number
    unit: 'meters' | 'yards'
    ends: number
}

/**
 * Round parameters
 */
export interface RoundParameters {
    distances: RoundDistance[]
    targetFace: string
    scoringSystem: string
}

/**
 * Pre-defined round type document
 * Path: rounds/{roundId}
 */
export interface Round {
    name: string
    organization: string
    description?: string
    totalEnds: number
    arrowsPerEnd: number
    maxScore: number
    parameters: RoundParameters
}

/**
 * User profile document (for future use)
 * Path: users/{userId}
 */
export interface UserProfile {
    displayName?: string
    email?: string
    createdAt: Timestamp
    lastActive?: Timestamp
}

import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

interface Session {
    id: string
    roundName?: string
    sessionTotal?: number
}

export default function Sessions() {
    const [sessions, setSessions] = useState<Session[]>([])

    useEffect(() => {
        const user = auth.currentUser
        if (!user) return
        const q = query(collection(db, 'users', user.uid, 'sessions'), orderBy('createdAt', 'desc'))
        const unsub = onSnapshot(q, (snap) => {
            setSessions(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        })
        return () => unsub()
    }, [])

    if (!auth.currentUser) {
        return <div>Please sign in to view sessions.</div>
    }

    return (
        <div>
            <h2>Your Sessions</h2>
            {sessions.length === 0 ? (
                <div>No sessions yet — start a new scorecard.</div>
            ) : (
                <ul>
                    {sessions.map((s) => (
                        <li key={s.id}>
                            <strong>{s.roundName}</strong> — total: {s.sessionTotal ?? '—'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
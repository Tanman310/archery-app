import React, { useState, useMemo } from 'react'
import ArrowInput from '../components/ArrowInput'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

type Arrow = number | 'X' | 'M' | null

export default function Scorecard() {
    // Minimal defaults for a round: 10 ends of 3 arrows (example)
    const defaultEnds = 10
    const arrowsPerEnd = 3

    // initialize ends as array of arrays
    const [ends, setEnds] = useState<Arrow[][]>(
        Array.from({ length: defaultEnds }, () => Array.from({ length: arrowsPerEnd }).fill(null))
    )

    const endTotals = useMemo(
        () => ends.map((end) => end.reduce((sum, a) => sum + (a === null ? 0 : a === 'X' ? 10 : a === 'M' ? 0 : (a as number)), 0)),
        [ends]
    )
    const runningTotal = useMemo(() => endTotals.reduce((s, v) => s + v, 0), [endTotals])

    const updateArrow = (endIndex: number, arrowIndex: number, value: Arrow) => {
        setEnds((prev) => {
            const copy = prev.map((e) => [...e])
            copy[endIndex][arrowIndex] = value
            return copy
        })
    }

    async function saveSession() {
        const user = auth.currentUser
        if (!user) {
            alert('Please sign in before saving sessions (or add a local-only flow).')
            return
        }
        const session = {
            roundName: `Custom ${defaultEnds}x${arrowsPerEnd}`,
            createdAt: serverTimestamp(),
            ends: ends.map((arrows, i) => ({
                endNumber: i + 1,
                arrows,
                endTotal: endTotals[i]
            })),
            sessionTotal: runningTotal
        }
        try {
            await addDoc(collection(db, 'users', user.uid, 'sessions'), session)
            alert('Session saved.')
        } catch (err) {
            console.error(err)
            alert('Failed to save session.')
        }
    }

    return (
        <div className="scorecard">
            <h2>Scorecard</h2>
            <div className="summary">
                <strong>Running total: {runningTotal}</strong>
                <button onClick={saveSession}>Save session</button>
            </div>

            <div className="ends">
                {ends.map((arrows, ei) => (
                    <div key={ei} className="end-row">
                        <div className="end-header">End {ei + 1} — Total: {endTotals[ei]}</div>
                        <div className="arrow-list">
                            {arrows.map((val, ai) => (
                                <ArrowInput
                                    key={ai}
                                    value={val}
                                    onChange={(v) => updateArrow(ei, ai, v)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
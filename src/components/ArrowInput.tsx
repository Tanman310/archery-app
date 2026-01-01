import React from 'react'

type Arrow = number | 'X' | 'M' | null

export default function ArrowInput({ value, onChange }: { value: Arrow; onChange: (v: Arrow) => void }) {
    return (
        <div className="arrow-input" role="group">
            <input
                type="number"
                min={0}
                max={10}
                value={typeof value === 'number' ? value : ''}
                placeholder="—"
                onChange={(e) => {
                    const v = e.target.value === '' ? null : Number(e.target.value)
                    if (v === null || (!isNaN(v) && v >= 0 && v <= 10)) onChange(v)
                }}
                className="arrow-score"
            />
            <div className="specials">
                <button type="button" onClick={() => onChange('X')}>X</button>
                <button type="button" onClick={() => onChange('M')}>M</button>
                <button type="button" onClick={() => onChange(null)}>Clear</button>
            </div>
        </div>
    )
}
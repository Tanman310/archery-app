import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Scorecard from './pages/Scorecard'
import Sessions from './pages/Sessions'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export default function App() {
    const [user] = useAuthState(auth)

    return (
        <div className="app">
            <header className="app-header">
                <h1>Archery App</h1>
                <nav>
                    <Link to="/">Sessions</Link> | <Link to="/scorecard">Scorecard</Link>
                </nav>
                <div className="auth">
                    {user ? (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={() => auth.signOut()}>Sign out</button>
                        </div>
                    ) : (
                        <Link to="/login">Sign in</Link>
                    )}
                </div>
            </header>

            <main>
                <Routes>
                    <Route index element={<Sessions />} />
                    <Route path="scorecard" element={<Scorecard />} />
                    {/* add login route later */}
                </Routes>
            </main>
        </div>
    )
}
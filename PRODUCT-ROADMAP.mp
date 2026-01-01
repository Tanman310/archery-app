# Archery App — Product Roadmap & Prioritized Backlog

Last updated: 2026-01-01  
Inputs used: competitive target archers; web-first PWA (mobile-first); offline-first; arrow-by-arrow scoring; pre-built rounds (World Archery, NASP, NFAA/IFAA); Firebase/Auth provider; solo dev; hobby project; open source.

---

## Summary / Vision
A mobile-first, offline-first web app (PWA) for competitive target archers to record arrow-level scores, store session history, and view automatic analytics to improve performance. The initial release (MVP) focuses on a robust, simple digital scorecard, pre-built rounds, offline sync, and essential analytics. Open-source, low-cost hosting and managed auth are preferred for speed-to-MVP.

## Key success metrics (examples)
- Local team adoption: X archers in one club using app weekly
- Core flows: log a full round (arrow-level) and view analytics without errors
- Stability: offline->sync works reliably for basic sessions

---

## Tech Assumptions (MVP)
- Frontend: React + TypeScript (create-react-app / Vite) or Next.js (client-first). PWA enabled.
- Auth & Backend: Firebase Authentication (email/password) + Firestore (or Firebase Realtime DB) with offline persistence enabled. Option: Supabase (Postgres) if you prefer SQL later.
- Offline-first storage: Firestore offline persistence or local IndexedDB (Dexie) + background sync when online.
- Hosting: Firebase Hosting (free / low-cost) or Netlify/Vercel for static assets. Backend managed by Firebase.
- Charts: Chart.js or Recharts for analytics.
- Testing: React Testing Library + Jest; Cypress for end-to-end later.
- License: pick an OSI license (MIT recommended for permissive hobby OSS).

Note: Firebase chosen to minimize backend work and speed up MVP. If you want SQL or self-hosting later, design sync and data model to be portable.

---

## High-level Milestones (no fixed dates)
- Discovery & design: finalize data model, core UI flows (scorecard, rounds library, analytics).
- Prototype: clickable wireframes + small proof of concept for arrow-entry UI.
- Core MVP implementation: account & auth, pre-built rounds, arrow-level score entry, offline persistence, session history, basic analytics.
- Beta testing with local archery team: real-world testing and bug fixes.
- Launch v1: public repo, release notes, CONTRIBUTING.md, code of conduct.
- Post-launch v1: gather feedback, plan v2 features (custom rounds, CSV export, social/club features, deeper analytics).

---

## MVP Scope (must-haves)
- User accounts via Firebase Auth (email/password).
- Digital scorecard:
  - Arrow-by-arrow entry
  - End totals and running total
  - Pre-built rounds library (World Archery, NASP, NFAA/IFAA)
- Offline-first operation and automatic sync when online
- Session history (list of past rounds/sessions with quick view)
- Automatic analytics (score trends, simple handicap calculation)
- Basic responsive UI (mobile-first) and PWA installability

MVP Exclusions (defer to v2+): hardware integrations, advanced ML analytics, leaderboards, in-app social, deep localization.

---

## Epics, User Stories & Acceptance Criteria (core)

Epic: Account & Sync
- US-001: As a user, I can sign up and sign in with email/password.
  - Acceptance: user can create an account using email/password, receive client-feedback on errors; auth persists across sessions.
- US-002: As a user, I can operate offline and have sessions sync when I reconnect.
  - Acceptance: create/edit a session offline, app stores locally, when online it syncs to cloud and is visible on another signed-in device.

Epic: Round Library & Session Creation
- US-010: As a user, I can select from pre-built rounds when creating a session.
  - Acceptance: World Archery/NASP/NFAA rounds appear; selecting a round pre-fills ends/arrow counts.
- US-011: As a user, I can create a session (date, round type, equipment, notes).
  - Acceptance: session stored locally and in cloud on sync.

Epic: Digital Scorecard (core)
- US-020: As a user, I can enter arrow-by-arrow scores for each end.
  - Acceptance: arrow entries accept valid scores; end totals and running total auto-calc; mistakes can be corrected prior to finalizing.
- US-021: As a user, I can mark/record misses, Xs, and special notations as applicable to the round.
  - Acceptance: UI supports miss/X markers and interprets them in totals.

Epic: Session History & Detail
- US-030: As a user, I can view a list of past sessions and open details.
  - Acceptance: sessions list paginates/filters by date; tapping opens arrow-level details and analytics.

Epic: Basic Analytics
- US-040: As a user, I can view score trends for recent sessions.
  - Acceptance: time-series chart of end totals; quick stats (avg, best, variance); handicap computed per selected formula.

---

## Prioritized Backlog (releases)

Release: MVP (v1) — high priority
- Repo & project setup (README, license, CI skeleton)
- Auth integration (Firebase Auth)
- Data model + Firestore rules + offline persistence
- Pre-built rounds library (initial set)
- Scorecard UI: arrow-by-arrow entry, end and running totals
- Session create/edit/delete and local persistence
- Basic analytics (score trend chart + avg/variance)
- PWA support + offline sync
- Basic responsive UI (mobile-first)
- CONTRIBUTING.md and CODE_OF_CONDUCT.md; simple issue templates

Release: v2 — medium priority
- Custom round creation UI
- CSV export / import
- Profile & equipment (bow, arrows) management
- Improved analytics: arrow distribution (histogram), consistency metrics, heatmap blueprint (if coordinates captured)
- User preferences and settings (units, target faces)
- Dark mode and basic localization scaffolding

Release: v3 — lower priority / advanced
- Club & shared sessions, coach accounts / sharing
- Live tournament scoring mode (real-time updates)
- ML-driven insights: predicted score, practice recommendations
- Hardware integrations (sensors or camera-based)
- Leaderboards & social features

---

## Rough effort estimates (solo developer, hobby scale)
Estimates use size buckets: Small = 1–3 days, Medium = 1–2 weeks, Large = 3–6+ weeks (depends on polish).

MVP items:
- Repo skeleton, README, license, CI skeleton — Small
- Firebase project + Auth + local login UI — Small
- Data model design + Firestore rules — Medium
- Scorecard UI (arrow-by-arrow, editing) — Large
- Pre-built rounds library (data import + UI) — Small → Medium
- Offline persistence + sync testing — Large
- Session history UI + details page — Medium
- Basic analytics (chart + stats) — Medium
- PWA setup & manifest + service worker — Small

Total rough effort for MVP implementation: ~2–3 months of focused part-time work (but large variance depending on polish and developer time).

---

## Data model (sketch)
Entities (simplified)
- users: { userId, email, displayName, createdAt }
- sessions: { sessionId, userId, roundId, date, equipmentId, notes, syncedAt, createdAt }
- rounds: { roundId, name, governingBody, ends[], arrowsPerEnd, distances[] } (pre-built static data)
- ends: { endId, sessionId, endNumber, arrows: [arrowId], endTotal }
- arrows: { arrowId, endId, value, ring (optional), isX, notes, timestamp }
- equipment: { equipmentId, userId, type, name, sightSettings, notes }

Design notes:
- Use Firestore collections: users/{uid}/sessions/{sessionId}/ends/{endId}/arrows/{arrowId}
- Keep read patterns efficient for session detail and analytics (store precomputed endTotal and sessionTotal).

---

## Security & privacy (MVP)
- Use Firebase Auth and Firestore security rules to restrict reads/writes to authenticated user data by default.
- Avoid storing sensitive PII beyond name/DOB/email unless necessary. Provide clear privacy README.
- Optionally allow local-only accounts (no cloud) via localStorage / IndexedDB.

---

## Initial GitHub issues & tasks (templates you can create)
Below are ready-to-use issue titles and short descriptions (include acceptance criteria and labels when creating).

1) Project: Initialize repository, README, license, and issue templates
   - Description: Create repo skeleton, add README with project purpose, choose MIT license, add ISSUE_TEMPLATE.md, PR_TEMPLATE.md.
   - Labels: setup, docs
   - Estimate: Small

2) Setup: UI skeleton with React + TypeScript + Vite (or Next.js)
   - Description: Initialize app, add basic routing, placeholder pages for Home, Sessions, Scorecard, Profile.
   - Labels: frontend, setup
   - Estimate: Small

3) Auth: Integrate Firebase Auth (email/password)
   - Description: Add sign up / sign in / sign out flows, handle auth state and protected routes.
   - Acceptance: user can sign up and sign in; protected pages require auth.
   - Labels: backend, auth
   - Estimate: Small

4) Data: Design Firestore schema and add seed pre-built rounds
   - Description: Define collections and rules. Add JSON seed with World Archery / NASP / NFAA rounds.
   - Labels: backend, data
   - Estimate: Medium

5) Feature: Scorecard UI — arrow-by-arrow entry
   - Description: Implement per-end UI to add arrow values, display end total and running total.
   - Acceptance: add/edit arrow values; totals correct.
   - Labels: frontend, feature
   - Estimate: Large

6) Feature: Create & edit session (choose round, date, equipment)
   - Description: Build session creation form wired to pre-built rounds; persist locally/cloud.
   - Labels: frontend, feature
   - Estimate: Medium

7) Feature: Offline persistence & sync
   - Description: Enable Firestore offline persistence or local Dexie + sync; test offline create/edit/sync flows.
   - Labels: backend, infra
   - Estimate: Large

8) Feature: Session history list & detail view
   - Description: Implement sessions list and detail view (arrow-level).
   - Labels: frontend
   - Estimate: Medium

9) Feature: Basic analytics (score trend)
   - Description: Add chart displaying end totals over time and basic stats (avg, best, variance).
   - Labels: frontend, analytics
   - Estimate: Medium

10) Infra: PWA + manifest + service worker
    - Description: Add PWA capabilities and installability.
    - Labels: infra
    - Estimate: Small

11) Docs: Add CONTRIBUTING.md and CODE_OF_CONDUCT.md
    - Description: Prepare contribution guide and code of conduct for OSS contributors.
    - Labels: docs
    - Estimate: Small

12) QA: End-to-end smoke tests for core flows (signup, create session, enter arrows, sync)
    - Description: Add Cypress tests to exercise main user journeys.
    - Labels: test
    - Estimate: Medium

(You can copy these into GitHub issues; if you want, I can draft the full issue bodies/PR templates for you.)

---

## Acceptance criteria — core stories (quick reference)
- Scorecard: arrows accepted and validated; end totals and running totals always match arrow values; users can edit arrow entries before session finalization.
- Offline & sync: sessions created offline are visible after reconnect; conflict resolution strategy: last-writer-wins for MVP, with clear UI warning on conflicts.
- Pre-built rounds: selecting a round populates expected ends and arrow counts.
- Analytics: trend chart loads without errors and supports at least 12 months / last N sessions filter.

---

## Next recommended actions (what I'd do next)
- Create the repo skeleton with README, license, and issue templates.
- Initialize a small prototype for the scorecard UI (arrow entry) and test offline persistence approach (Firestore offline or Dexie).
- Iterate on the data model and import a small set of pre-built rounds.

If you want, I can produce the first batch of ready-to-create GitHub issues (full titles, descriptions, labels, and acceptance criteria) in the exact JSON/Markdown format you prefer, or I can inspect your GitHub repo and open those issues for you. Tell me which you prefer and I’ll proceed.
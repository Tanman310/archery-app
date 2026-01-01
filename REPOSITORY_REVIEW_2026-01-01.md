# Archery App Repository Review
**Date:** 2026-01-01  
**Repository:** Tanman310/archery-app  
**Branch:** main  
**Review Type:** Solo Open-Source Hobby Project MVP Assessment

---

## Executive Summary

The Archery App is a well-structured mobile-first PWA starter project for recording arrow-by-arrow archery scores with Firebase backend integration. The repository has a solid foundation with React, TypeScript, Vite, and Firebase initialized. However, the project is in early prototype stage and requires significant development work to reach MVP status.

**Current State:** Early prototype with skeleton UI and basic Firebase integration  
**MVP Readiness:** ~20% complete (foundation laid, core features incomplete)  
**Estimated Effort to MVP:** 2-3 months of focused part-time development

---

## 1. Repository Structure

### Top-Level Files and Folders

```
archery-app/
├── .github/                    # GitHub configuration
│   ├── ISSUE_TEMPLATE/        # Issue templates (feature, general, docs)
│   │   ├── config.yml
│   │   ├── docs.md
│   │   ├── feature.md
│   │   └── general.md
│   ├── workflows/             # CI workflows
│   │   ├── ci.yml            # Basic CI (placeholder)
│   │   └── dependency-review.yml
│   ├── CODEOWNERS            # @Tanman310
│   └── PULL_REQUEST_TEMPLATE.md
├── public/                    # Static assets
│   └── manifest.json         # PWA manifest (icons missing)
├── src/                       # Application source code
│   ├── components/           # React components
│   │   └── ArrowInput.tsx   # Arrow score input component
│   ├── pages/               # Page components
│   │   ├── Scorecard.tsx    # Main scorecard entry page
│   │   └── Sessions.tsx     # Session history list
│   ├── app.tsx              # Main app component with routing
│   ├── firebase.ts          # Firebase initialization
│   ├── main.tsx             # React entry point
│   ├── service-worker.ts    # PWA service worker stub
│   └── styles.css           # Global styles
├── .env.example              # Environment variable template
├── .gitignore               # Git ignore rules
├── CODE_OF_CONDUCT.md       # Contributor Covenant v2.1 reference
├── CONTRIBUTING.md          # Contribution guidelines
├── LICENSE                  # MIT License
├── PRODUCT-ROADMAP.mp       # Comprehensive product roadmap
├── README.md                # Project documentation
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite bundler configuration
```

### Notable Files

**Strengths:**
- ✅ Comprehensive `PRODUCT-ROADMAP.mp` with detailed epics, user stories, and acceptance criteria
- ✅ Well-documented `README.md` with quickstart instructions
- ✅ Proper open-source governance: LICENSE (MIT), CODE_OF_CONDUCT.md, CONTRIBUTING.md
- ✅ GitHub templates for issues and PRs
- ✅ Modern tech stack: React 18 + TypeScript + Vite 5
- ✅ Firebase initialization with offline persistence configured
- ✅ Basic routing structure with react-router-dom
- ✅ PWA manifest (though incomplete)

**Gaps:**
- ❌ No actual implementation of CI workflows (placeholders only)
- ❌ No test infrastructure (no Jest, Vitest, or E2E tests)
- ❌ No linting configuration (ESLint referenced in package.json but not configured)
- ❌ No Firebase security rules defined
- ❌ No pre-built rounds data/library
- ❌ Missing PWA icons (referenced in manifest.json)
- ❌ No login/signup UI pages
- ❌ No analytics or charting implemented
- ❌ Missing `react-firebase-hooks` dependency (used but not in package.json)
- ❌ Missing Vite React plugin dependency (`@vitejs/plugin-react`)

---

## 2. Project Readiness Assessment

### What Exists ✅

**Infrastructure:**
- Repository skeleton with proper governance (MIT license, CoC, contributing guide)
- Modern build tooling: Vite + TypeScript with strict mode enabled
- Basic CI workflow files (skeleton only)
- Issue templates for features, bugs, and documentation

**Application Foundation:**
- React 18 application structure with proper routing
- Firebase project integration (Auth + Firestore)
- Offline persistence enabled for Firestore
- Mobile-first CSS with CSS variables for theming
- PWA manifest and service worker stubs

**Core Features (Partial):**
- Arrow input component with number entry and special markers (X, M, Clear)
- Scorecard page with 10 ends × 3 arrows (hardcoded)
- End totals and running total calculation
- Session save to Firestore (per-user collections)
- Sessions list page with real-time Firestore listener
- Basic auth state management with `useAuthState` hook

### What's Missing ❌

**Critical for Development:**
1. **Dependencies not installed** - `node_modules` directory missing
2. **Missing required dependencies:**
   - `react-firebase-hooks` (used in app.tsx but not in package.json)
   - `@vitejs/plugin-react` (used in vite.config.ts but not in package.json)
   - `eslint` and related plugins (referenced in npm script)
3. **No linting configuration** - ESLint referenced but `.eslintrc` missing
4. **No test framework** - No Jest/Vitest, no test files, no testing scripts
5. **CI workflows incomplete** - Placeholder echo commands only

**Critical for MVP:**
1. **Authentication UI:**
   - No sign-up page
   - No login page
   - No password reset flow
   - Auth link in app.tsx points to non-existent `/login` route

2. **Firebase Security:**
   - No Firestore security rules defined or documented
   - No rules for user data isolation
   - No validation rules for data writes

3. **Pre-built Rounds:**
   - No rounds database/library
   - No data seed files
   - No rounds selection UI
   - Round types hardcoded in Scorecard

4. **Analytics:**
   - No charts implementation (Chart.js dependency installed but unused)
   - No statistics calculations
   - No trends visualization
   - No session detail view

5. **PWA Capabilities:**
   - Icons missing (192x192 and 512x512 referenced but not present)
   - Service worker is empty stub
   - No offline indicator
   - No install prompt

6. **Data Management:**
   - No session editing capability
   - No session deletion
   - No session export (JSON/CSV)
   - No equipment tracking

**Nice-to-Have (Deferred):**
- Dark mode support
- Custom round creation
- Equipment management
- User profile page
- Settings page
- Accessibility improvements (ARIA labels, keyboard nav)

---

## 3. Immediate Next Steps to Reach MVP

### Phase 1: Fix Foundation (1-2 weeks)

**Priority 1: Make Project Runnable**
1. **Fix package.json dependencies:**
   ```json
   "dependencies": {
     "firebase": "^10.0.0",
     "react": "^18.0.0",
     "react-dom": "^18.0.0",
     "react-router-dom": "^6.0.0",
     "react-firebase-hooks": "^5.1.1",
     "chart.js": "^4.0.0",
     "react-chartjs-2": "^5.2.0"
   },
   "devDependencies": {
     "typescript": "^5.0.0",
     "vite": "^5.0.0",
     "@vitejs/plugin-react": "^4.2.0",
     "@types/react": "^18.0.0",
     "@types/react-dom": "^18.0.0",
     "@typescript-eslint/eslint-plugin": "^6.0.0",
     "@typescript-eslint/parser": "^6.0.0",
     "eslint": "^8.56.0",
     "eslint-plugin-react-hooks": "^4.6.0",
     "eslint-plugin-react-refresh": "^0.4.5"
   }
   ```

2. **Add ESLint configuration (.eslintrc.json):**
   - Configure TypeScript and React rules
   - Enable strict type checking
   - Add accessibility rules

3. **Implement working CI workflow:**
   - Add proper `npm install` step
   - Add `npm run lint` with actual linting
   - Add `npm run build` to verify builds succeed
   - Add dependency caching for faster runs

4. **Add test infrastructure:**
   - Install Vitest (Vite-native alternative to Jest)
   - Add example unit test for ArrowInput component
   - Add test script to package.json
   - Add test step to CI workflow

**Priority 2: Firebase Security Rules**
5. **Create firestore.rules file:**
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
         
         match /sessions/{sessionId} {
           allow read, write: if request.auth != null && request.auth.uid == userId;
         }
       }
     }
   }
   ```

6. **Document Firebase setup in README:**
   - How to create Firebase project
   - How to enable Auth (email/password)
   - How to deploy security rules
   - How to configure authorized domains

### Phase 2: Core Authentication (1 week)

7. **Create Login page (src/pages/Login.tsx):**
   - Email/password sign-in form
   - Link to sign-up page
   - Error handling and validation
   - Password reset link

8. **Create SignUp page (src/pages/SignUp.tsx):**
   - Email/password registration
   - Form validation
   - Error handling
   - Auto-redirect after signup

9. **Add auth routes to app.tsx:**
   - `/login` route
   - `/signup` route
   - Protected route wrapper for authenticated pages

10. **Add auth context/provider (optional but recommended):**
    - Centralize auth state management
    - Provide loading states
    - Handle auth redirects

### Phase 3: Pre-built Rounds Library (1-2 weeks)

11. **Create rounds data structure (src/data/rounds.json):**
    ```json
    [
      {
        "id": "wa-70m-72-arrows",
        "name": "WA 70m Round",
        "governingBody": "World Archery",
        "distance": 70,
        "distanceUnit": "meters",
        "ends": 12,
        "arrowsPerEnd": 6,
        "targetFace": "122cm-10-ring"
      }
    ]
    ```

12. **Implement rounds selection UI:**
    - Rounds library browser page
    - Search/filter by governing body
    - "Start Round" button creates session

13. **Update Scorecard to use selected round:**
    - Remove hardcoded 10×3 configuration
    - Load round configuration from session
    - Dynamic end/arrow rendering

### Phase 4: Session Management (1 week)

14. **Add session detail page:**
    - Full arrow-by-arrow display
    - End totals visualization
    - Edit capability (navigate back to scorecard)
    - Delete confirmation

15. **Enhance Sessions list:**
    - Display round name and date
    - Show score summary
    - Filter by date range
    - Sort options

### Phase 5: Basic Analytics (1-2 weeks)

16. **Implement analytics page (src/pages/Analytics.tsx):**
    - Chart.js integration
    - Score trend line chart (last 10 sessions)
    - Basic statistics (avg, min, max, std dev)
    - Accuracy percentage (hits vs misses)

17. **Add analytics to session detail:**
    - End-by-end breakdown
    - Arrow distribution histogram
    - X-count and miss-count

### Phase 6: PWA Polish (1 week)

18. **Generate PWA icons:**
    - Create 192×192 and 512×512 icons
    - Add to public/icons/
    - Ensure proper manifest references

19. **Implement real service worker:**
    - Use Vite PWA plugin (vite-plugin-pwa)
    - Cache static assets
    - Implement offline fallback
    - Add update prompt

20. **Add offline indicator:**
    - Visual indicator when offline
    - Sync status notification
    - Pending changes counter

### Phase 7: Testing & Documentation (1 week)

21. **Add unit tests:**
    - ArrowInput component
    - Scorecard calculations
    - Firebase utilities
    - Form validations

22. **Add E2E tests (optional for MVP):**
    - Sign up flow
    - Create session flow
    - Enter scores flow
    - View sessions flow

23. **Update documentation:**
    - Complete README with screenshots
    - Add deployment guide
    - Document environment variables
    - Create user guide (wiki or docs folder)

---

## 4. Suggested Repository Structure

### Current Structure
The current structure is good for a small project. As the project grows, consider this enhanced organization:

### Recommended Structure (Future)

```
archery-app/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── deploy-preview.yml
│   │   ├── deploy-production.yml
│   │   └── codeql.yml         # Security scanning
│   └── dependabot.yml         # Dependency updates
├── docs/                       # Extended documentation
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── FIREBASE-SETUP.md
│   └── USER-GUIDE.md
├── firebase/                   # Firebase configuration
│   ├── firestore.rules
│   ├── firestore.indexes.json
│   └── firebase.json
├── public/
│   ├── icons/
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/            # Reusable components
│   │   ├── ArrowInput/
│   │   │   ├── ArrowInput.tsx
│   │   │   ├── ArrowInput.test.tsx
│   │   │   └── index.ts
│   │   ├── SessionCard/
│   │   └── Chart/
│   ├── contexts/              # React contexts
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── data/                  # Static data
│   │   ├── rounds.json
│   │   └── targets.json
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useSessions.ts
│   │   └── useOfflineSync.ts
│   ├── layouts/               # Layout components
│   │   ├── MainLayout.tsx
│   │   └── AuthLayout.tsx
│   ├── lib/                   # Utilities
│   │   ├── firebase.ts
│   │   ├── analytics.ts
│   │   └── validation.ts
│   ├── pages/
│   │   ├── Analytics.tsx
│   │   ├── Login.tsx
│   │   ├── Scorecard.tsx
│   │   ├── Sessions.tsx
│   │   └── SignUp.tsx
│   ├── types/                 # TypeScript types
│   │   ├── arrow.ts
│   │   ├── round.ts
│   │   ├── session.ts
│   │   └── index.ts
│   ├── app.tsx
│   ├── main.tsx
│   └── styles/
│       ├── global.css
│       ├── components.css
│       └── themes.css
├── tests/                     # E2E tests
│   ├── e2e/
│   │   ├── auth.spec.ts
│   │   └── scorecard.spec.ts
│   └── setup.ts
├── .env.example
├── .eslintrc.json
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

### Key Organizational Improvements:

1. **Component co-location:** Each component gets its own folder with tests and index
2. **Separate contexts:** Authentication and other state management centralized
3. **Custom hooks:** Extract reusable logic (auth, Firestore queries)
4. **Type definitions:** Dedicated types folder for better type organization
5. **Firebase folder:** Keep Firebase-specific config separate
6. **Documentation folder:** Extended guides beyond README
7. **Layout components:** Consistent page layouts
8. **Test organization:** E2E tests separate from unit tests

---

## 5. Branch Strategy

For a solo hobby project, keep it simple. Recommended strategy:

### Branch Structure

**Main Branches:**
- `main` - Production-ready code, always deployable
- `develop` - Integration branch for features (optional for solo work)

**Feature Branches:**
- `feat/<short-description>` - New features
- `fix/<bug-description>` - Bug fixes
- `docs/<what-changed>` - Documentation updates
- `chore/<task>` - Maintenance tasks

### Workflow

**Simple Solo Workflow (Recommended for MVP):**
1. Create feature branch from `main`
2. Develop and test locally
3. Create PR to `main`
4. Self-review or merge directly (your choice)
5. Delete feature branch after merge

**Example:**
```bash
git checkout main
git pull
git checkout -b feat/login-page
# ... make changes ...
git add .
git commit -m "feat: Add login page with email/password auth"
git push -u origin feat/login-page
# Create PR on GitHub
```

**With Develop Branch (Optional - for more structured flow):**
1. Feature branches from `develop`
2. PR to `develop` for integration testing
3. Periodic releases: merge `develop` → `main` with version tag
4. Hotfixes branch from `main`, merge to both `main` and `develop`

### Commit Message Convention

Use conventional commits for clarity:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation only
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding/updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: Add Firebase authentication with email/password
fix: Correct end total calculation for X values
docs: Update README with Firebase setup instructions
test: Add unit tests for ArrowInput component
chore: Configure ESLint for TypeScript and React
```

### Release Tagging

When releasing versions:
```bash
git checkout main
git tag -a v0.1.0 -m "Release v0.1.0 - MVP launch"
git push origin v0.1.0
```

Use semantic versioning: `vMAJOR.MINOR.PATCH`

---

## 6. CI Checkpoints

### Current CI Status
The existing `.github/workflows/ci.yml` has placeholder commands only. It needs real implementation.

### Recommended CI Workflow

**File: `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-test:
    name: Lint and Test
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npx tsc --noEmit
      
      - name: Run tests
        run: npm test
        env:
          CI: true
  
  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: lint-and-test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: dist/
          retention-days: 7

  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      contents: read
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'
      
      - name: Upload Trivy results to GitHub Security
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: 'trivy-results.sarif'
```

### Additional Recommended Workflows

**Deploy Preview (for Firebase Hosting):**
```yaml
name: Deploy Preview

on:
  pull_request:
    branches: [main]

jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

**Dependabot Configuration:**
```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    reviewers:
      - "Tanman310"
```

### CI Quality Gates

**Required Checks Before Merge:**
1. ✅ Linting passes (ESLint)
2. ✅ Type checking passes (TypeScript)
3. ✅ Unit tests pass (Vitest)
4. ✅ Build succeeds
5. ✅ No high-severity security vulnerabilities
6. ✅ Dependency review passes (existing workflow)

**Optional but Recommended:**
- Code coverage threshold (e.g., 70%)
- E2E tests pass (when implemented)
- Bundle size check (warn if >500KB increase)
- Lighthouse CI scores (performance, accessibility)

---

## 7. Security & Privacy Checklist for Firebase/Auth

### Authentication Security

**Firebase Auth Configuration:**
- [ ] Enable Email/Password authentication in Firebase Console
- [ ] Disable sign-ups if you want invite-only (optional)
- [ ] Enable email verification for new accounts
- [ ] Configure password reset email templates
- [ ] Set password strength requirements (Firebase defaults are reasonable)
- [ ] Configure authorized domains for OAuth (for production deployment)
- [ ] Enable multi-factor authentication (optional, recommended for v2)

**Auth Implementation Checklist:**
- [ ] Validate email format client-side before Firebase call
- [ ] Handle all Firebase Auth error codes gracefully
  - auth/email-already-in-use
  - auth/invalid-email
  - auth/weak-password
  - auth/user-not-found
  - auth/wrong-password
  - auth/too-many-requests
- [ ] Implement rate limiting or use Firebase's built-in protection
- [ ] Don't expose sensitive error details to users (generic messages)
- [ ] Use secure password input (type="password")
- [ ] Clear sensitive form data after submission
- [ ] Implement logout on all tabs (use Firebase Auth state listener)
- [ ] Set appropriate session duration

**Token Security:**
- [ ] Never expose Firebase API key in logs/errors (it's ok in .env for Firebase web)
- [ ] Use Firebase App Check to prevent API abuse (recommended for production)
- [ ] Implement ID token verification if using custom backend
- [ ] Refresh tokens automatically (Firebase SDK handles this)
- [ ] Invalidate sessions on password change

### Firestore Security Rules

**Current Status:** ❌ No security rules defined

**Required Rules (Priority 1):**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    function isValidSession(session) {
      return session.keys().hasAll(['roundName', 'createdAt', 'ends', 'sessionTotal'])
        && session.roundName is string
        && session.roundName.size() > 0
        && session.roundName.size() <= 100
        && session.ends is list
        && session.ends.size() <= 50  // Max 50 ends per session
        && session.sessionTotal is number
        && session.sessionTotal >= 0
        && session.sessionTotal <= 5000;  // Reasonable max score
    }
    
    // User documents
    match /users/{userId} {
      allow read: if isOwner(userId);
      allow create: if isOwner(userId);
      allow update: if isOwner(userId);
      allow delete: if false;  // Prevent accidental deletion
      
      // User sessions subcollection
      match /sessions/{sessionId} {
        allow read: if isOwner(userId);
        allow create: if isOwner(userId) && isValidSession(request.resource.data);
        allow update: if isOwner(userId) && isValidSession(request.resource.data);
        allow delete: if isOwner(userId);
      }
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

**Security Rules Checklist:**
- [ ] Users can only read/write their own data
- [ ] Validate all data types and required fields
- [ ] Set reasonable size limits (string lengths, array sizes)
- [ ] Set reasonable value ranges (scores can't be negative or impossibly high)
- [ ] Prevent accidental deletion of critical data
- [ ] Test rules with Firebase Emulator Suite
- [ ] Test rules with different user contexts
- [ ] Document rules and their purpose
- [ ] Review rules before every production deployment

### Data Privacy

**Personal Data Handling:**
- [ ] Collect minimal personal data (email only for MVP)
- [ ] Document what data you collect in Privacy Policy
- [ ] Don't store sensitive data in Firestore without encryption
- [ ] Implement data export capability (GDPR compliance)
- [ ] Implement account deletion capability (GDPR compliance)
- [ ] Don't log personal data to console or error tracking
- [ ] Use Firestore security rules to isolate user data

**Privacy Policy Requirements:**
- [ ] Create Privacy Policy page/document
- [ ] Explain what data is collected (email, scores, timestamps)
- [ ] Explain how data is used (app functionality only)
- [ ] Explain data retention (kept until user deletes account)
- [ ] Explain user rights (access, export, delete)
- [ ] Link to Firebase's privacy policy
- [ ] Provide contact information for privacy questions

**Recommended Privacy Policy location:** `/docs/PRIVACY.md` and link in app footer

### Environment Variables Security

**Current Status:** ✅ `.env.example` provided, `.env` in `.gitignore`

**Environment Security Checklist:**
- [x] `.env` file is in `.gitignore`
- [x] `.env.example` provided with placeholder values
- [ ] Document that Firebase API keys for web are public (not secrets)
- [ ] Never commit `.env` file to Git
- [ ] Use different Firebase projects for dev/staging/prod
- [ ] Set up Firebase App Check for production
- [ ] Rotate API keys if accidentally committed

**Note on Firebase Web API Keys:**
Firebase web API keys are not secrets—they're meant to be public. Security comes from:
1. Firestore security rules (enforce server-side)
2. Firebase App Check (validate requests come from your app)
3. Authorized domains in Firebase Console

### Offline Data Security

**Local Storage Security:**
- [ ] IndexedDB data is accessible to user (inform in docs)
- [ ] Don't store sensitive data that shouldn't be offline
- [ ] Clear local data on logout (optional, UX tradeoff)
- [ ] Implement data encryption for offline storage (optional, v2+)
- [ ] Handle data conflicts gracefully (last-write-wins for MVP)

### Dependency Security

**Current Status:** ✅ Dependency Review workflow exists

**Dependency Security Checklist:**
- [x] Dependency Review GitHub Action enabled
- [ ] Run `npm audit` regularly
- [ ] Fix high/critical vulnerabilities promptly
- [ ] Keep dependencies up to date (use Dependabot)
- [ ] Review dependency licenses for compatibility
- [ ] Minimize dependency count (current count is good)
- [ ] Pin major versions to avoid breaking changes
- [ ] Test after dependency updates

### Production Security Checklist

**Before Public Launch:**
- [ ] All security rules deployed and tested
- [ ] Firebase App Check enabled
- [ ] Email verification enabled
- [ ] Rate limiting configured
- [ ] Error tracking configured (Sentry/LogRocket) with PII filtering
- [ ] HTTPS enforced (Firebase Hosting does this automatically)
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Regular security audits scheduled
- [ ] Incident response plan documented
- [ ] Backup strategy implemented

### Security Resources

- [Firebase Security Rules Documentation](https://firebase.google.com/docs/rules)
- [Firebase App Check](https://firebase.google.com/docs/app-check)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Google's Web Security Guidelines](https://web.dev/secure/)

---

## 8. Suggested Issues/PRs to Create

Below are ready-to-create GitHub issues organized by priority. Each includes title, description, labels, and acceptance criteria.

### Phase 1: Foundation (Critical Path)

#### Issue #1: Fix package.json Missing Dependencies
**Title:** `[Setup] Add missing dependencies to package.json`

**Description:**
The project currently cannot run because several dependencies referenced in code are missing from `package.json`. Specifically:
- `react-firebase-hooks` (used in `app.tsx`)
- `@vitejs/plugin-react` (used in `vite.config.ts`)
- ESLint and related plugins (referenced in npm script)

**Tasks:**
- [ ] Add `react-firebase-hooks` to dependencies
- [ ] Add `@vitejs/plugin-react` to devDependencies
- [ ] Add ESLint and plugins to devDependencies
- [ ] Run `npm install` to verify
- [ ] Run `npm run dev` to verify app starts

**Labels:** `setup`, `bug`, `priority: high`  
**Acceptance Criteria:**
- All dependencies resolve without errors
- App runs with `npm run dev`
- No console errors about missing modules

---

#### Issue #2: Configure ESLint for TypeScript and React
**Title:** `[Setup] Add ESLint configuration for TypeScript and React`

**Description:**
The npm script references `npm run lint` but there's no ESLint configuration file. Add proper linting setup.

**Tasks:**
- [ ] Create `.eslintrc.json` with TypeScript and React rules
- [ ] Add recommended rules for React Hooks
- [ ] Configure to extend `@typescript-eslint/recommended`
- [ ] Add `eslint-plugin-react-refresh` for Vite HMR
- [ ] Run linter and fix any existing issues
- [ ] Document linting rules in CONTRIBUTING.md

**Labels:** `setup`, `code-quality`, `priority: high`  
**Acceptance Criteria:**
- `npm run lint` executes successfully
- Linting rules catch common issues
- No linting errors in existing code (or all fixed)

---

#### Issue #3: Implement Working CI Pipeline
**Title:** `[CI] Replace placeholder CI workflow with real implementation`

**Description:**
Current `.github/workflows/ci.yml` has placeholder echo commands. Implement real CI with install, lint, build, and test steps.

**Tasks:**
- [ ] Add Node.js setup with version 20
- [ ] Add npm caching for faster builds
- [ ] Implement `npm ci` for installing dependencies
- [ ] Add `npm run lint` step
- [ ] Add `npm run build` step
- [ ] Add TypeScript type checking (`tsc --noEmit`)
- [ ] Add test step (once tests exist)
- [ ] Add build artifact upload

**Labels:** `ci`, `infra`, `priority: high`  
**Acceptance Criteria:**
- CI runs on push and pull requests
- All steps execute and report status
- Build artifacts are uploaded
- Failing builds block PR merge

---

#### Issue #4: Add Test Framework with Example Tests
**Title:** `[Testing] Set up Vitest with initial component tests`

**Description:**
No testing infrastructure exists. Add Vitest (Vite-native test runner) and write example tests for the ArrowInput component.

**Tasks:**
- [ ] Install Vitest and @testing-library/react
- [ ] Create `vitest.config.ts`
- [ ] Add test script to package.json
- [ ] Write tests for ArrowInput component
  - Render test
  - Number input test
  - Special buttons (X, M, Clear) test
  - Value range validation test
- [ ] Add test command to CI workflow
- [ ] Document testing approach in CONTRIBUTING.md

**Labels:** `testing`, `setup`, `priority: high`  
**Acceptance Criteria:**
- Tests run with `npm test`
- Example tests pass
- Test coverage report generated
- CI runs tests automatically

---

#### Issue #5: Define and Deploy Firestore Security Rules
**Title:** `[Security] Create and deploy Firestore security rules`

**Description:**
No Firestore security rules are currently defined, meaning the database is either locked down or wide open. Define rules that restrict access to authenticated users' own data only.

**Tasks:**
- [ ] Create `firestore.rules` file
- [ ] Define rules for users/{userId}/sessions
- [ ] Add data validation (types, ranges, required fields)
- [ ] Test rules with Firebase Emulator
- [ ] Document deployment process in README
- [ ] Add rules to version control
- [ ] Deploy rules to Firebase project

**Labels:** `security`, `firebase`, `priority: critical`  
**Acceptance Criteria:**
- Users can only access their own data
- Data validation prevents invalid writes
- Rules tested with emulator
- Documentation explains how to deploy rules

---

### Phase 2: Authentication (Core Feature)

#### Issue #6: Create Login Page with Email/Password Auth
**Title:** `[Auth] Implement login page with Firebase Authentication`

**Description:**
Users currently cannot sign in. Create a login page with email/password authentication using Firebase Auth.

**Tasks:**
- [ ] Create `src/pages/Login.tsx` component
- [ ] Add form with email and password inputs
- [ ] Implement client-side validation
- [ ] Call Firebase `signInWithEmailAndPassword`
- [ ] Handle all auth error codes with user-friendly messages
- [ ] Add "Forgot Password" link (placeholder for now)
- [ ] Add "Sign Up" link
- [ ] Style with existing CSS variables
- [ ] Add route in app.tsx
- [ ] Redirect to home after successful login

**Labels:** `feature`, `auth`, `priority: high`  
**Acceptance Criteria:**
- User can log in with valid credentials
- Invalid credentials show appropriate error
- Successful login redirects to home page
- Form has proper validation
- Responsive on mobile

---

#### Issue #7: Create Sign Up Page
**Title:** `[Auth] Implement sign-up page with Firebase Authentication`

**Description:**
New users need a way to create accounts. Create sign-up page with email/password registration.

**Tasks:**
- [ ] Create `src/pages/SignUp.tsx` component
- [ ] Add form with email, password, and confirm password
- [ ] Implement client-side validation
  - Valid email format
  - Password minimum length (6+ chars)
  - Passwords match
- [ ] Call Firebase `createUserWithEmailAndPassword`
- [ ] Handle auth error codes
- [ ] Add terms of service acknowledgment
- [ ] Add route in app.tsx
- [ ] Redirect to home after signup
- [ ] Auto-login after successful signup

**Labels:** `feature`, `auth`, `priority: high`  
**Acceptance Criteria:**
- User can create account with valid credentials
- Validation prevents invalid submissions
- Duplicate email shows appropriate error
- Successful signup logs user in automatically
- Link to login page for existing users

---

#### Issue #8: Add Password Reset Flow
**Title:** `[Auth] Implement password reset functionality`

**Description:**
Users need ability to reset forgotten passwords. Implement password reset flow using Firebase Auth.

**Tasks:**
- [ ] Create `src/pages/ResetPassword.tsx`
- [ ] Add email input form
- [ ] Call Firebase `sendPasswordResetEmail`
- [ ] Show success/error messages
- [ ] Configure Firebase email template (via console)
- [ ] Add link from login page
- [ ] Document process in user guide

**Labels:** `feature`, `auth`, `priority: medium`  
**Acceptance Criteria:**
- User can request password reset
- Reset email is sent successfully
- Success message shows after submission
- Link from login page works
- Instructions are clear

---

### Phase 3: Pre-built Rounds Library

#### Issue #9: Create Pre-built Rounds Data Structure
**Title:** `[Feature] Add pre-built rounds JSON data file`

**Description:**
Create a comprehensive rounds database with World Archery, NASP, and NFAA/IFAA rounds. This enables users to select standard rounds instead of manually configuring.

**Tasks:**
- [ ] Create `src/data/rounds.json`
- [ ] Add World Archery rounds (70m, 60m, 50m, 30m)
- [ ] Add NASP rounds
- [ ] Add NFAA rounds (Indoor, Field, 3D)
- [ ] Include for each round:
  - Name, governing body
  - Distance(s) and unit
  - Number of ends and arrows per end
  - Target face specification
  - Scoring system (if different from standard)
- [ ] Create TypeScript type definitions
- [ ] Add utility function to load rounds
- [ ] Document data structure in code comments

**Labels:** `feature`, `data`, `priority: high`  
**Acceptance Criteria:**
- At least 10 common rounds included
- Data structure supports all round variations
- TypeScript types defined
- Data validated (no errors)

---

#### Issue #10: Create Round Selection UI
**Title:** `[Feature] Build rounds library browser and selection UI`

**Description:**
Create a page where users can browse and select from pre-built rounds when starting a new session.

**Tasks:**
- [ ] Create `src/pages/RoundSelection.tsx`
- [ ] Display rounds grouped by governing body
- [ ] Add search/filter functionality
- [ ] Show round details on selection
- [ ] "Start Round" button creates new session
- [ ] Pass round config to Scorecard page
- [ ] Add route and navigation link
- [ ] Style for mobile-first

**Labels:** `feature`, `ui`, `priority: high`  
**Acceptance Criteria:**
- All rounds displayed and searchable
- User can select a round
- Selected round creates session
- Round config passed to Scorecard correctly
- Responsive design

---

#### Issue #11: Update Scorecard to Use Dynamic Round Config
**Title:** `[Feature] Make Scorecard component use dynamic round configuration`

**Description:**
Currently Scorecard has hardcoded 10 ends × 3 arrows. Update to use round configuration from selected round.

**Tasks:**
- [ ] Update Scorecard to accept round config as prop/context
- [ ] Remove hardcoded defaultEnds and arrowsPerEnd
- [ ] Dynamically create ends based on config
- [ ] Show round name in Scorecard header
- [ ] Show distance and target face info
- [ ] Update session save to include roundId reference
- [ ] Handle missing round config gracefully

**Labels:** `feature`, `refactor`, `priority: high`  
**Acceptance Criteria:**
- Scorecard adapts to any round configuration
- Round details displayed correctly
- Session saves round reference
- Works with all pre-built rounds

---

### Phase 4: Session Management

#### Issue #12: Create Session Detail Page
**Title:** `[Feature] Add session detail view with full arrow breakdown`

**Description:**
Users need to view completed sessions in detail. Create a page showing full arrow-by-arrow breakdown with statistics.

**Tasks:**
- [ ] Create `src/pages/SessionDetail.tsx`
- [ ] Load session by ID from Firestore
- [ ] Display round name, date, total score
- [ ] Show end-by-end breakdown
- [ ] Show all arrow values
- [ ] Calculate and display stats (avg per end, X count, miss count)
- [ ] Add "Edit" button (navigates back to Scorecard)
- [ ] Add "Delete" button with confirmation
- [ ] Style for readability

**Labels:** `feature`, `ui`, `priority: medium`  
**Acceptance Criteria:**
- Session loads and displays correctly
- All arrows and totals visible
- Edit and delete work
- Statistics calculate correctly
- Good mobile UX

---

#### Issue #13: Enhance Sessions List
**Title:** `[Feature] Improve sessions list with filtering and sorting`

**Description:**
Current sessions list is minimal. Add filtering, sorting, and better visual design.

**Tasks:**
- [ ] Add date range filter
- [ ] Add round type filter
- [ ] Add sort options (date, score, round)
- [ ] Show score prominently
- [ ] Show date in friendly format
- [ ] Add session cards with better layout
- [ ] Click card to view detail
- [ ] Show empty state when no sessions
- [ ] Add loading state
- [ ] Handle errors gracefully

**Labels:** `feature`, `ui`, `priority: medium`  
**Acceptance Criteria:**
- Filtering works correctly
- Sorting works correctly
- Visual design is improved
- Sessions clickable to detail page
- Good mobile UX

---

### Phase 5: Analytics

#### Issue #14: Create Analytics Page with Score Trends
**Title:** `[Feature] Build analytics page with score trend visualization`

**Description:**
Implement analytics page showing score trends over time using Chart.js.

**Tasks:**
- [ ] Create `src/pages/Analytics.tsx`
- [ ] Install and configure react-chartjs-2
- [ ] Fetch last 30 sessions from Firestore
- [ ] Create line chart of session totals over time
- [ ] Calculate statistics (avg, min, max, std dev)
- [ ] Show X count and miss count trends
- [ ] Add date range selector
- [ ] Add round type filter
- [ ] Style charts for mobile
- [ ] Add route and navigation link

**Labels:** `feature`, `analytics`, `priority: medium`  
**Acceptance Criteria:**
- Chart displays correctly
- Statistics calculate accurately
- Data filters work
- Responsive on mobile
- Handles empty data gracefully

---

#### Issue #15: Add Per-End Analytics to Session Detail
**Title:** `[Feature] Add end-by-end analytics to session detail page`

**Description:**
Enhance session detail with visual analytics: end-by-end bar chart and arrow distribution histogram.

**Tasks:**
- [ ] Add bar chart of end totals
- [ ] Add histogram of arrow values (0-10, X, M)
- [ ] Calculate consistency metrics
- [ ] Show best/worst ends
- [ ] Highlight areas for improvement
- [ ] Use color coding for performance
- [ ] Make charts responsive

**Labels:** `feature`, `analytics`, `priority: medium`  
**Acceptance Criteria:**
- Charts render correctly
- Data is accurate
- Insights are helpful
- Responsive design

---

### Phase 6: PWA Polish

#### Issue #16: Generate PWA Icons and Assets
**Title:** `[PWA] Create app icons and update manifest`

**Description:**
PWA manifest references icons that don't exist. Generate proper icons and add to project.

**Tasks:**
- [ ] Design or generate 192×192 icon
- [ ] Design or generate 512×512 icon
- [ ] Create favicon.ico
- [ ] Add icons to public/icons/
- [ ] Update manifest.json with correct paths
- [ ] Add maskable icon variants (optional)
- [ ] Test icon display in browser
- [ ] Test PWA install flow

**Labels:** `pwa`, `design`, `priority: medium`  
**Acceptance Criteria:**
- All icons exist and display correctly
- PWA install works on mobile
- Icons match brand/theme
- All sizes optimized

---

#### Issue #17: Implement Production Service Worker
**Title:** `[PWA] Replace service worker stub with Vite PWA plugin`

**Description:**
Current service worker is an empty stub. Implement real service worker for offline functionality.

**Tasks:**
- [ ] Install vite-plugin-pwa
- [ ] Configure plugin in vite.config.ts
- [ ] Define caching strategy
  - Static assets: cache first
  - API calls: network first with fallback
- [ ] Implement offline fallback page
- [ ] Add update notification UI
- [ ] Test offline functionality
- [ ] Document service worker behavior

**Labels:** `pwa`, `infra`, `priority: medium`  
**Acceptance Criteria:**
- App works offline
- Updates prompt user
- Static assets cached
- Firestore offline works
- Install prompt appears

---

#### Issue #18: Add Offline Indicator and Sync Status
**Title:** `[Feature] Add offline mode indicator and sync status`

**Description:**
Users need to know when they're offline and when data is syncing. Add visual indicators.

**Tasks:**
- [ ] Create offline indicator component
- [ ] Detect online/offline state
- [ ] Show indicator when offline
- [ ] Show sync status for Firestore
- [ ] Show pending changes count
- [ ] Add sync error handling
- [ ] Style for non-intrusive display
- [ ] Add to app header

**Labels:** `feature`, `pwa`, `priority: medium`  
**Acceptance Criteria:**
- Indicator shows when offline
- Sync status is clear
- Errors communicated to user
- Non-intrusive design

---

### Phase 7: Testing & Documentation

#### Issue #19: Add Comprehensive Unit Tests
**Title:** `[Testing] Write unit tests for core components and utilities`

**Description:**
Expand test coverage beyond initial example tests to cover critical functionality.

**Tasks:**
- [ ] Test Scorecard calculations
- [ ] Test ArrowInput validation
- [ ] Test Sessions list rendering
- [ ] Test Firebase utility functions
- [ ] Test form validations
- [ ] Test analytics calculations
- [ ] Aim for 70%+ code coverage
- [ ] Add coverage reporting to CI

**Labels:** `testing`, `code-quality`, `priority: medium`  
**Acceptance Criteria:**
- All critical paths tested
- Tests pass consistently
- Coverage threshold met
- CI reports coverage

---

#### Issue #20: Add End-to-End Tests for Core Flows
**Title:** `[Testing] Add E2E tests with Playwright for critical user journeys`

**Description:**
Add end-to-end tests for sign-up, scoring, and session viewing flows using Playwright.

**Tasks:**
- [ ] Install Playwright
- [ ] Configure Playwright for Firebase
- [ ] Write test: Sign up flow
- [ ] Write test: Create and save session
- [ ] Write test: View session history
- [ ] Write test: Offline functionality
- [ ] Add E2E tests to CI (optional)
- [ ] Document test setup

**Labels:** `testing`, `e2e`, `priority: low`  
**Acceptance Criteria:**
- Core flows tested end-to-end
- Tests run reliably
- Documentation for running tests
- Optional: Run in CI

---

#### Issue #21: Complete Documentation and User Guide
**Title:** `[Docs] Create comprehensive documentation for users and developers`

**Description:**
Expand documentation with deployment guide, user guide, and architecture overview.

**Tasks:**
- [ ] Create docs/ folder
- [ ] Write FIREBASE-SETUP.md with step-by-step Firebase config
- [ ] Write DEPLOYMENT.md with hosting instructions
- [ ] Write USER-GUIDE.md with features and usage
- [ ] Write ARCHITECTURE.md explaining code structure
- [ ] Add screenshots to README
- [ ] Update CONTRIBUTING.md with complete workflow
- [ ] Add PRIVACY.md with privacy policy
- [ ] Link all docs from README

**Labels:** `documentation`, `priority: medium`  
**Acceptance Criteria:**
- All guides are complete and accurate
- Screenshots included
- Easy for new contributors to understand
- Privacy policy meets requirements

---

### Additional Issues (Lower Priority / Future)

#### Issue #22: Add Dark Mode Support
**Title:** `[Feature] Implement dark mode theme`  
**Labels:** `feature`, `ui`, `priority: low`  
**Description:** Add dark mode with theme toggle and persistence.

#### Issue #23: Add Session Export (JSON/CSV)
**Title:** `[Feature] Enable session data export`  
**Labels:** `feature`, `priority: low`  
**Description:** Allow users to export their session data in JSON or CSV format.

#### Issue #24: Add Equipment Tracking
**Title:** `[Feature] Add bow and arrow equipment management`  
**Labels:** `feature`, `priority: low`  
**Description:** Let users track equipment and link to sessions.

#### Issue #25: Add Custom Round Creation
**Title:** `[Feature] Enable users to create custom rounds`  
**Labels:** `feature`, `priority: low`  
**Description:** UI for creating custom round configurations.

---

## 9. Pull Request Recommendations

For maximum efficiency, consider combining related issues into single PRs:

**Recommended PR Groupings:**

**PR #1: Project Setup and CI**
- Issues #1, #2, #3, #4
- One PR to fix all foundational setup issues
- ~8-12 hours of work

**PR #2: Firebase Security**
- Issue #5
- Critical security implementation
- ~4-6 hours of work

**PR #3: Authentication System**
- Issues #6, #7, #8
- Complete auth implementation in one PR
- ~12-16 hours of work

**PR #4: Pre-built Rounds System**
- Issues #9, #10, #11
- Complete rounds feature
- ~12-16 hours of work

**PR #5: Session Management**
- Issues #12, #13
- Enhanced session viewing
- ~8-12 hours of work

**PR #6: Analytics Dashboard**
- Issues #14, #15
- Complete analytics feature
- ~12-16 hours of work

**PR #7: PWA Production Ready**
- Issues #16, #17, #18
- Complete PWA setup
- ~8-12 hours of work

**PR #8: Testing & Documentation**
- Issues #19, #20, #21
- Quality and docs
- ~16-24 hours of work

---

## 10. Risk Assessment & Mitigation

### Technical Risks

**Risk: Firebase costs escalate beyond free tier**
- **Likelihood:** Medium (if app gains unexpected users)
- **Impact:** Medium (hosting costs)
- **Mitigation:** 
  - Monitor Firebase usage dashboard
  - Set budget alerts in Firebase Console
  - Implement Firestore query limits
  - Use Firebase Emulator for development

**Risk: Offline sync conflicts**
- **Likelihood:** High (inherent in offline-first design)
- **Impact:** Medium (potential data loss)
- **Mitigation:**
  - Use last-write-wins strategy for MVP
  - Add conflict detection UI
  - Document sync behavior clearly
  - Consider Firestore's built-in conflict resolution

**Risk: Browser compatibility issues**
- **Likelihood:** Medium (PWA features vary by browser)
- **Impact:** Low (graceful degradation possible)
- **Mitigation:**
  - Test on iOS Safari, Chrome, Firefox
  - Implement feature detection
  - Provide fallbacks for unsupported features
  - Document browser requirements

**Risk: Performance with large session history**
- **Likelihood:** Low (solo user unlikely to create thousands of sessions quickly)
- **Impact:** Medium (slow load times)
- **Mitigation:**
  - Implement pagination on sessions list
  - Use Firestore query limits
  - Lazy load analytics data
  - Add loading states

### Development Risks

**Risk: Solo developer burnout**
- **Likelihood:** High (ambitious roadmap)
- **Impact:** High (project stalls)
- **Mitigation:**
  - Focus on MVP only
  - Take breaks between phases
  - Lower expectations for v1
  - Accept "good enough" for MVP

**Risk: Scope creep**
- **Likelihood:** High (temptation to add features)
- **Impact:** High (delays MVP)
- **Mitigation:**
  - Strictly follow MVP scope in roadmap
  - Defer all "nice-to-have" features
  - Create separate v2 backlog
  - Review scope regularly

**Risk: Technology changes (React, Firebase updates)**
- **Likelihood:** Medium (frequent updates in ecosystem)
- **Impact:** Low (usually backward compatible)
- **Mitigation:**
  - Pin major versions in package.json
  - Test updates in separate branch
  - Read changelogs before updating
  - Use Dependabot gradually

---

## 11. Success Metrics for MVP

### Launch Criteria (Must-Have)

- [ ] User can sign up and log in
- [ ] User can select a pre-built round
- [ ] User can enter arrow scores for a complete round
- [ ] User can view session history
- [ ] User can view basic score trends
- [ ] App works offline and syncs online
- [ ] App installable as PWA on mobile
- [ ] No critical security vulnerabilities
- [ ] All CI checks pass
- [ ] Basic documentation complete

### Quality Metrics

- **Code Coverage:** Target 70%+ for unit tests
- **Build Time:** < 30 seconds
- **Bundle Size:** < 500KB (initial load)
- **Lighthouse Scores:**
  - Performance: > 80
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 80
  - PWA: 100

### User Experience Metrics (Post-Launch)

- **Time to First Score Entry:** < 2 minutes from signup
- **Session Completion Rate:** > 80% of started sessions saved
- **Offline Success Rate:** > 95% of offline actions sync successfully
- **Return User Rate:** > 40% return within 7 days

---

## 12. Recommended Timeline (Part-Time Development)

**Weeks 1-2: Foundation**
- Fix dependencies and setup
- Configure ESLint
- Implement CI
- Add test framework
- Deploy Firebase security rules

**Weeks 3-4: Authentication**
- Build login page
- Build signup page
- Add password reset
- Test auth flows

**Weeks 5-7: Core Scoring**
- Create rounds data
- Build round selection UI
- Update scorecard for dynamic rounds
- Test with various round types

**Weeks 8-9: Session Management**
- Build session detail page
- Enhance sessions list
- Add filtering and sorting
- Test data persistence

**Weeks 10-11: Analytics**
- Implement analytics page
- Add charts and statistics
- Enhance session detail with analytics
- Test calculations

**Weeks 12-13: PWA Polish**
- Generate icons
- Implement service worker
- Add offline indicators
- Test PWA functionality

**Weeks 14-16: Testing & Docs**
- Write comprehensive tests
- Add E2E tests (optional)
- Complete documentation
- Final QA and bug fixes

**Week 17: Launch Preparation**
- Security audit
- Performance optimization
- Deploy to production
- Announce launch

**Total: ~4 months of part-time work** (consistent with roadmap estimate)

---

## 13. Conclusion and Next Actions

### Summary

The Archery App has an **excellent foundation** with:
- Modern, appropriate technology choices
- Comprehensive planning (PRODUCT-ROADMAP.mp)
- Proper open-source governance
- Clear MVP scope

However, the project is in **early prototype stage** (~20% to MVP) and requires:
- Dependency fixes to make project runnable
- Security rules implementation (critical)
- Authentication UI (3 pages)
- Pre-built rounds library (data + UI)
- Analytics implementation
- PWA production readiness

### Immediate Next Actions (This Week)

1. **Fix dependencies** (Issue #1) - 2 hours
2. **Add ESLint config** (Issue #2) - 1 hour
3. **Implement real CI** (Issue #3) - 2 hours
4. **Deploy Firestore rules** (Issue #5) - 2 hours
5. **Create GitHub issues** from this review - 1 hour

**Total: ~8 hours to make project development-ready**

### Recommended Approach

**Option A: Sequential PRs** (More organized)
- Create 8 PRs following the groupings in Section 9
- Merge each after review/testing
- More overhead but cleaner git history

**Option B: Rapid Prototyping** (Faster to MVP)
- Work on main or long-lived feature branch
- Focus on functionality over perfect git history
- Large PR at end with full MVP
- Suitable for solo hobby project

**Recommendation:** Start with Option B for speed, transition to Option A after MVP when accepting contributions.

### Final Notes

This is a **well-conceived project** with realistic scope for a solo developer. The product roadmap is thorough and the technology choices are solid. The main challenge will be maintaining momentum through ~4 months of development. Consider:

- Setting weekly goals based on the timeline
- Celebrating small wins (each issue completed)
- Sharing progress (blog posts, social media)
- Getting early user feedback (friends, local archery club)

**The project is absolutely achievable and well-positioned for success!**

---

## Appendix: Quick Reference

### Commands Cheat Sheet

```bash
# Setup
npm install
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint (after config added)
npm test             # Run tests (after setup)

# Git workflow
git checkout -b feat/feature-name
git add .
git commit -m "feat: description"
git push -u origin feat/feature-name

# Firebase
firebase login
firebase init
firebase deploy --only hosting
firebase deploy --only firestore:rules
```

### Key Files to Review/Create

**To Review:**
- `src/firebase.ts` - Firebase config (check API keys)
- `package.json` - Dependencies (needs updates)
- `PRODUCT-ROADMAP.mp` - Product strategy (excellent)
- `.github/workflows/ci.yml` - CI config (needs real implementation)

**To Create:**
- `.eslintrc.json` - Linting rules
- `firestore.rules` - Security rules (critical)
- `vitest.config.ts` - Test configuration
- `src/pages/Login.tsx` - Login page
- `src/pages/SignUp.tsx` - Signup page
- `src/data/rounds.json` - Rounds library
- `docs/FIREBASE-SETUP.md` - Setup guide
- `docs/PRIVACY.md` - Privacy policy

### Resources

- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vitest Documentation](https://vitest.dev)
- [PWA Documentation](https://web.dev/progressive-web-apps)

---

**End of Repository Review**  
**Generated:** 2026-01-01  
**Reviewer:** GitHub Copilot Agent  
**Review Format:** Solo Open-Source Hobby Project MVP Assessment

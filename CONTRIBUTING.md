# Contributing to Archery App

Thanks for your interest! High-level guidance:
- Code style: TypeScript + React. Use ESLint and Prettier if you add them.
- Branching: Feature branches named `feat/<short-description>`.
- Pull requests: Small PRs are easier to review. Include screenshots for UI changes.
- Tests: Add unit tests for logic and E2E tests for core flows where possible.

How to run locally
1. Copy `.env.example` to `.env` and populate Firebase values.
2. npm install
3. npm run dev

Reporting issues
- Open issues for bugs or feature requests. Use templates provided.

Code of conduct
- Please follow the Code of Conduct in CODE_OF_CONDUCT.md.

## Branch Naming Conventions

This repository uses branch naming conventions to support automated labeling and consistent workflow.

## Template
{type}/{ticket-id}-short-description

### Branch prefixes

| Prefix | Purpose |
|------|--------|
| `feature/` | New functionality |
| `fix/` | Bug fixes |
| `hotfix/` | Critical production fixes |
| `refactor/` | Code restructuring |
| `docs/` | Documentation updates |
| `test/` | Test-related changes |
| `perf/` | Performance optimizations |
| `chore/` | Maintenance and tooling |
| `experiment/` | Experimental or exploratory work |
| `release/` | Release preparation |

**Examples**
- `feature/iss-01-session-history`
- `fix/iss-73-scorecard-validation`
- `perf/iss-102-render-optimization`

## Pull Request Naming

Pull request titles should be concise and imperative, and reflect the primary change.

Recommended format:
<type>/<issue number>-<short description>

Where `<type>` corresponds to the branch prefix.

**Example**
- `feature/iss-01-add-session-history-view`
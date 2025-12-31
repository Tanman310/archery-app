# ADR-0001: MVP Web Architecture (Single Full-Stack Next.js Application)

## Status
Accepted

## Date
2025-12-31

## Context

The project is an archery scoring and practice-tracking application. The initial objective is to deliver a minimum viable product (MVP) as a web application that functions well on mobile devices. The MVP must support rapid iteration, low operational overhead, and a clean path to future expansion.

Current constraints and priorities:
- Small team / single maintainer
- Emphasis on correctness and data integrity over early optimization
- Need for strong mobile usability without committing to native mobile development
- Desire to minimize hard-to-reverse architectural decisions early

Two architectural approaches were evaluated:
1. A single full-stack web application using Next.js.
2. A split architecture with a separate Express.js backend API and frontend.

The second approach introduces additional infrastructure, deployment complexity, and maintenance cost that are not currently justified by MVP requirements.

## Decision

The MVP will be implemented as a **single full-stack Next.js application** using the App Router. Backend logic will be implemented using Next.js route handlers and/or server actions. No separate backend service will be created for the MVP.

This decision applies only to the MVP phase and does not preclude introducing additional services or APIs in the future.

## Rationale

**Pros**
- Reduces architectural complexity and operational overhead.
- Enables faster iteration by keeping frontend and backend logic in one codebase.
- Simplifies authentication, authorization, and data access patterns.
- Aligns well with managed hosting platforms and CI/CD workflows.
- Keeps future options open: a separate API can be extracted later if needed.

**Cons**
- Less explicit service boundary compared to a separate API.
- If external clients or integrations are required early, refactoring may be needed.

Given current scope and priorities, the benefits of simplicity and speed outweigh the drawbacks.

## Consequences

### Positive
- Faster development velocity during MVP phase.
- Fewer deployment targets and infrastructure components to manage.
- Lower cognitive load for contributors and reviewers.
- Easier to reason about end-to-end behavior and data flow.

### Negative
- If the project later requires a stable public API or multiple client types, additional architectural work will be required.
- Some concerns (e.g., horizontal scaling of backend logic) are deferred rather than solved upfront.

### Follow-ups
- Subsequent ADRs are expected to address:
  - Database choice and data modeling strategy.
  - Authentication approach.
  - Mobile/offline behavior expectations.
  - Criteria for introducing a separate backend or public API.

### Review
- This ADR should be reviewed after the MVP has been in active use for approximately one month to validate assumptions against real development and usage patterns.
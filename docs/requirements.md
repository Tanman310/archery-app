# Requirements

## Purpose

This document defines the initial functional and non-functional requirements for the Archery App project.  
Requirements are intended to constrain scope, guide design decisions, and provide traceability as the project evolves.

This document is a living artifact and will be revised as understanding improves.

---

## Scope Definition

### In Scope

- Support for **recurve barebow archery** use cases
- Alignment with **World Archery** barebow rules as a reference standard
- Representation of equipment configurations and relevant parameters
- Deterministic, rule-based calculations and validations
- User-controlled data entry and review

### Out of Scope

- Coaching, training plans, or performance advice
- Medical, injury prevention, or health guidance
- Real-time shot execution or motion tracking
- Competitive ranking, matchmaking, or social features
- Enforcement of unofficial or local rule variations unless explicitly added later

---

## Functional Requirements

### FR-1: Equipment Configuration Representation

The system shall allow users to represent an archery equipment setup, including but not limited to:

- Bow riser characteristics
- Limbs and draw weight parameters
- Arrow specifications
- Accessories relevant to barebow configuration

The system shall not assume proprietary manufacturers or models.

---

### FR-2: Rule Compliance Validation

The system shall support validation of equipment configurations against defined rule constraints, including:

- Presence or absence of prohibited accessories
- Dimensional or mass-related constraints, where applicable
- Logical consistency of configurations

Rule validation shall be deterministic and reproducible.

---

### FR-3: Data Persistence

The system shall allow users to:

- Create, view, update, and delete equipment configurations
- Retain historical configurations without automatic modification

Data persistence requirements do not imply a specific storage mechanism.

---

### FR-4: Transparency of Calculations

For any computed output or validation result, the system shall:

- Expose the inputs used
- Provide a traceable explanation of how the result was derived

Hidden or opaque calculations are not permitted.

---

### FR-5: User Control

The system shall not automatically modify user-entered data without explicit user action or confirmation.

---

## Non-Functional Requirements

### NFR-1: Correctness

- Calculations and validations shall prioritize correctness over performance.
- Where rules are ambiguous, the system shall surface assumptions explicitly.

---

### NFR-2: Traceability

- Requirements, design decisions, and implementations shall be traceable.
- Significant design decisions shall reference relevant requirements.

---

### NFR-3: Maintainability

- The system shall favor clear structure and documentation over optimization.
- Future rule updates shall be incorporable without extensive refactoring.

---

### NFR-4: Determinism

- Given identical inputs, the system shall produce identical outputs.
- No stochastic or heuristic behavior is permitted unless explicitly approved.

---

### NFR-5: Portability (Deferred)

- The system should not preclude operation across common platforms.
- Specific platform targets are not yet defined.

---

## Assumptions

- Users are responsible for interpreting official competition rules.
- World Archery rules are treated as a reference baseline, not an authoritative replacement.
- Rule interpretations may evolve and require versioning.

---

## Open Questions

- Which editions or versions of World Archery rules should be supported?
- How should rule changes over time be represented?
- Should configurations be shareable between users in the future?

These questions are intentionally unresolved at this stage.

---

## Change Control

- Modifications to functional requirements should be explicit and justified.
- Additions that materially expand scope should be reviewed before implementation.

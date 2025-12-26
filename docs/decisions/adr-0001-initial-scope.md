# ADR 0001: Project Scope and Rule Baseline

## Status
Accepted

## Context

The Archery App project requires a clearly defined initial scope and a rule baseline to ensure consistency, correctness, and traceability. Early ambiguity around scope and rules would introduce risk of feature creep, inconsistent behavior, and premature architectural commitments.

A decision is required to define:
- The archery discipline covered
- The rule authority used as a reference
- The intended role of the software with respect to those rules

## Decision

- The project scope is limited to **recurve barebow archery**.
- **World Archery barebow rules** are adopted as the initial reference baseline.
- The application acts as a **rule-aware tool**, not an authoritative rules engine.
- The software surfaces assumptions and interpretations explicitly rather than enforcing implicit judgments.

The system does not replace official rulebooks or governing body determinations.

## Alternatives Considered

1. **Support multiple archery disciplines from the start**
   - Rejected due to increased complexity and diluted focus.

2. **Treat World Archery rules as authoritative and fully enforced**
   - Rejected due to ambiguity in rule interpretation and risk of incorrect enforcement.

3. **Avoid committing to any rule set**
   - Rejected because it would undermine correctness and traceability.

## Consequences

### Positive
- Clear scope boundaries reduce ambiguity.
- Future requirements and designs can be evaluated against a stable reference.
- Rule changes can be versioned without redefining project purpose.

### Negative
- Supporting other disciplines will require explicit future decisions.
- Some users may expect stricter enforcement than provided.

## Related Requirements

- FR-2: Rule Compliance Validation
- NFR-1: Correctness
- NFR-4: Determinism

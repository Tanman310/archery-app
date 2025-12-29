# ADR 0001: Project Scope and Rule Baseline

## Status
Accepted (Initial)

## Context

The Archery App project requires a clearly defined **initial scope** and a **rule reference baseline** to ensure consistency, correctness, and traceability during early design and implementation.

Without an explicit scope and rule reference, the project risks feature creep, inconsistent behavior, and premature architectural commitments that are costly to reverse.

A decision is required to define:

- The archery discipline covered at project inception
- The rule authority used as a reference
- The intended role of the software with respect to those rules

## Decision

- The **initial project scope** is limited to **recurve barebow archery**.
- **World Archery barebow rules** are adopted as the **initial reference baseline**.
- The application acts as a **rule-aware tool**, not an authoritative rules engine.
- The software surfaces assumptions, interpretations, and ambiguities explicitly rather than enforcing implicit judgments.
- Rule references are treated as **versioned artifacts**, even when the specific version is “current at time of use.”

The system does not replace official rulebooks or governing body determinations.

Expansion beyond this scope or rule baseline requires a **superseding ADR**.

## Alternatives Considered

1. **Support multiple archery disciplines from the start**  
   Rejected due to increased complexity, diluted focus, and higher risk of premature abstraction.

2. **Treat World Archery rules as authoritative and fully enforced**  
   Rejected due to ambiguity in real-world rule interpretation and the risk of incorrect or misleading enforcement.

3. **Avoid committing to any rule set**  
   Rejected because it would undermine correctness, traceability, and meaningful validation.

## Consequences

### Positive
- Clear initial scope boundaries reduce ambiguity and decision churn.
- Future requirements and designs can be evaluated against a stable reference.
- Rule changes can be handled through versioning rather than redefining project intent.

### Negative
- Supporting additional disciplines or rule sets requires explicit future decisions.
- Some users may expect stricter rule enforcement than the project intentionally provides.

## Related Requirements

- FR-2: Rule Compliance Validation  
- NFR-1: Correctness  
- NFR-4: Determinism

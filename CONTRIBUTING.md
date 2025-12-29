# Contributing

This repository is in a **pre-implementation / planning** phase. The primary objective at this stage is to establish clear problem definitions, constraints, and durable decisions before introducing code.

## Scope of Contributions

Contributions may include:
- Documentation and clarifications
- Problem definition and analysis
- Architectural and workflow decisions
- Repository structure and governance improvements

Feature implementation, APIs, data models, and UI work are intentionally out of scope unless explicitly approved.

## Change Workflow

- All changes must be made via pull requests.
- Direct commits to the `main` branch are not permitted.
- An issue should exist before opening a pull request, unless the change is purely editorial or corrective.

Issues are used for exploration and discussion. Pull requests are used to propose concrete changes.

## Issues

Two issue types are used:

### Problem
Used to describe a problem that requires investigation, clarification, or framing.  
A problem issue should focus on *what is wrong or missing*, not on solutions.

### Decision
Used when evaluating or proposing a solution where trade-offs exist.  
Decision issues should summarize options and surface reversibility concerns.

## Architectural Decision Records (ADRs)

An Architectural Decision Record is required when a change:
- Is hard to reverse
- Constrains future implementation choices
- Affects architecture, data models, or long-term workflow

The ADR process, requirements, and lifecycle are defined in **ADR-0000**.  
Pull requests that introduce or rely on hard-to-reverse decisions must reference an accepted ADR.

## Review Standard

At minimum, pull requests must demonstrate:
- Clear intent and motivation
- Explicit scope boundaries
- Consistency with accepted ADRs

The repository owner is the final reviewer and decision authority.

## Status of This Document

This document may evolve as the project moves from planning to implementation. Changes to contribution rules that affect governance or decision authority should be accompanied by a Decision issue and, if applicable, an ADR.

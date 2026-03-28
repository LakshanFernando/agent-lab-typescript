# Workspace Instructions

This repository is a React + TypeScript + Vite project for a social bingo web app.

## Core Stack

- TypeScript (strict mode)
- React 19 with function components and hooks
- Vite for dev/build
- Tailwind CSS v4
- Vitest + Testing Library for tests

## Project Structure

- `src/components`: UI components
- `src/hooks`: stateful React hooks
- `src/utils`: pure logic helpers (prefer test coverage here)
- `src/data`: static app content and seed data
- `src/types`: shared TypeScript types

## Implementation Guidelines

- Keep UI components focused on presentation and composition.
- Keep game rules and deterministic logic in `src/utils`.
- Prefer small, pure functions with clear names and explicit types.
- Reuse existing types before introducing new ones.
- Match existing naming and file organization conventions.
- Avoid broad refactors unless explicitly requested.

## Testing Guidelines

- Add or update tests when changing behavior, especially in `src/utils`.
- Prefer fast unit tests for core logic.
- Keep tests deterministic and easy to read.

## Commands

- `npm run dev` for local development
- `npm run build` for production build
- `npm run lint` for lint checks
- `npm run test` for test suite

## Design and Styling Rules

Also follow these repository instruction files:

- `.github/instructions/frontend-design.instructions.md`
- `.github/instructions/tailwind-4.instructions.md`

When building UI, avoid generic boilerplate aesthetics. Prefer a deliberate visual direction, expressive typography, and meaningful motion while preserving accessibility and responsive behavior.
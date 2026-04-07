# Architecture

This repository uses a feature-oriented structure on top of the Next.js App Router.

## High-Level Layout

- `src/app`: Routes, metadata, and server entry points.
- `src/components`: Reusable UI grouped by domain (`home`, `layout`, `social`).
- `src/hooks`: Reusable React hooks.
- `src/lib`: Domain utilities, content data, metadata helpers.
- `public`: Static assets and generated web metadata files.

## Design Principles

- Keep route files thin; move reusable UI and logic to `src/components` and `src/lib`.
- Prefer small components with one clear responsibility.
- Extract cross-cutting browser behaviors to hooks (`src/hooks`).
- Keep content/config in `src/lib/content` and avoid hardcoding in components.

## Naming Conventions

- React components: `PascalCase.tsx`.
- Hooks: `use-kebab-case.ts` (example: `use-media-query.ts`).
- Utilities/config: `kebab-case.ts`.
- Route files: Next.js conventions (`page.tsx`, `layout.tsx`, `route.ts`).
- Constants scoped to one component should stay near that component.

## Boundaries

- `src/components` can import from `src/lib` and `src/hooks`.
- `src/lib` must not import from `src/components`.
- Route handlers and server actions should delegate reusable logic to `src/lib`.

## Quality Gates

- Lint: `npm run lint`
- Type check: `npm run typecheck`
- Tests: `npm run test`
- Build verification: `npm run build`
- Full local gate: `npm run check`

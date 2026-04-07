# Contributing

## Development Workflow

1. Create a branch from `main`.
2. Make focused changes with clear scope.
3. Run local quality gates:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`
4. Open a PR with a concise summary and testing notes.

## File and Naming Standards

- Use `PascalCase.tsx` for React components.
- Use `use-kebab-case.ts` for hooks.
- Use `kebab-case.ts` for utility modules.
- Keep route files in Next.js convention (`page.tsx`, `layout.tsx`, `route.ts`).
- Avoid ambiguous names (`utils2`, `helpers-new`, `final-component`).

## Component Standards

- One primary responsibility per component.
- If a component exceeds ~200 lines, consider splitting by concern.
- Extract repeated patterns to dedicated child components or hooks.
- Keep visual classes in component scope unless shared globally.

## Server and API Standards

- Keep request validation and upstream relay logic in shared libraries.
- Keep route handlers and server actions thin.
- Return stable error shapes for client handling.

## Pull Request Checklist

- [ ] No visual regressions.
- [ ] No behavior regressions in existing navigation flows.
- [ ] New/changed code follows naming conventions.
- [ ] Lint, type check, and build pass.
- [ ] PR description includes rationale and impact.

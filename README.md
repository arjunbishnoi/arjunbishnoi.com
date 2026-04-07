# Arjun Bishnoi - Portfolio

Web & Mobile Designer / Developer portfolio website built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Engine**: [React 19](https://react.dev/) (Server Actions, useActionState)
- **Language**: [TypeScript 6.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3.4](https://tailwindcss.com/)
- **Animations**: [Motion 12](https://motion.dev/)
- **State Management**: [Zustand 5](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project uses the standard Next.js production build and deploys cleanly on Vercel.

```bash
npm run build
```

The build output is written to `.next`.

## Quality Checks

Run these before creating a PR:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Or run all checks in one command:

```bash
npm run check
```

## Contact Relay

The contact form uses a shared server-side relay with unified validation, timeout handling, and lightweight rate limiting.

Both the Server Action and `/api/contact` route use the same relay logic.

If you want to change the upstream relay target, set `CONTACT_FORM_ENDPOINT`.

Optional relay tuning environment variables:

- `CONTACT_REQUEST_TIMEOUT_MS`
- `CONTACT_RATE_LIMIT_WINDOW_MS`
- `CONTACT_RATE_LIMIT_MAX_REQUESTS`

## Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: React components
  - `ui`: Shadcn UI primitives
  - `layout`: Header, Footer, etc.
  - `home`: Homepage specific sections
- `src/lib`: Utilities and site data
- `public`: Static assets

## Engineering Standards

- Architecture reference: `ARCHITECTURE.md`
- Contribution and naming rules: `CONTRIBUTING.md`

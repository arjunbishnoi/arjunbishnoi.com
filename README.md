# Arjun Bishnoi - Portfolio

Web & Mobile Designer / Developer portfolio website built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
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

## Contact Relay

The contact form posts to the app's `/api/contact` route first so failures are visible in Vercel logs.

If you want to change the upstream relay target, set `CONTACT_FORM_ENDPOINT`.

## Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: React components
  - `ui`: Shadcn UI primitives
  - `layout`: Header, Footer, etc.
  - `home`: Homepage specific sections
- `src/lib`: Utilities and site data
- `public`: Static assets

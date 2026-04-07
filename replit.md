# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### The Stroke Comeback Protocol (`artifacts/stroke-comeback`)
- **Type**: React + Vite, frontend-only landing page
- **Preview path**: `/` (root)
- **Purpose**: Conversion-focused one-page landing page for a 12-week stroke recovery program
- **Key files**:
  - `src/content.ts` — all copy, links, and editable content in one file
  - `src/components/CTAButton.tsx` — reusable CTA button (links to Thinkific)
  - `src/components/SectionContainer.tsx` — reusable section wrapper
  - `src/components/Navbar.tsx` — sticky nav with mobile hamburger + mobile bottom CTA
  - `src/sections/` — one file per section (Hero, Problem, Solution, etc.)
- **To change the Thinkific URL**: Edit `THINKIFIC_URL` in `src/content.ts`
- **To add founder details**: Edit the `founder` object in `src/content.ts`
- **To swap in real images**: See comments in `src/sections/HeroSection.tsx` and `src/sections/FounderSection.tsx`
- **To connect a custom domain**: Use Replit deployment settings (update `og:url` in `index.html`)

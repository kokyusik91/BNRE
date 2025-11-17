# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.0.3 application built with:
- **React 19.2.0** with TypeScript
- **Tailwind CSS v4** (using the new `@tailwindcss/postcss` plugin)
- **App Router** (Next.js app directory structure)
- **pnpm** as the package manager

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Architecture

### Directory Structure
- `app/` - Next.js App Router directory containing all routes and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `public/` - Static assets (SVG files)
- Path alias `@/*` maps to the project root

### Styling
- Uses Tailwind CSS v4 with the new inline `@theme` directive
- CSS variables for theming: `--background`, `--foreground`
- Built-in dark mode support via `prefers-color-scheme`
- Geist Sans and Geist Mono fonts loaded via `next/font/google`

### TypeScript Configuration
- Strict mode enabled
- Module resolution set to "bundler"
- JSX mode: `react-jsx` (React 19 automatic runtime)
- Path alias: `@/*` for imports from root

### ESLint Configuration
- Uses flat config format (`eslint.config.mjs`)
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Patterns

### App Router
- All routes are file-based in the `app/` directory
- Server Components by default (use `"use client"` directive for client components)
- Layouts wrap nested routes and preserve state

### Tailwind CSS v4
- Import via `@import "tailwindcss"` in CSS files (not traditional `@tailwind` directives)
- Use `@theme inline` for custom design tokens
- PostCSS configured with `@tailwindcss/postcss` plugin

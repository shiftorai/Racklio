# Racklio

Racklio is Keleva LLC's premium buying intelligence platform for web infrastructure. This repository currently contains the technical foundation only; product pages and affiliate integrations are intentionally out of scope.

## Stack

- React and TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint and Prettier

## Requirements

- Node.js 20.19 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

The development server prints the local URL when it starts.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

## Project structure

```text
src/
├── app/          # Application composition and routing
├── components/   # Reusable UI and layout components
├── lib/          # Framework-independent helpers
├── pages/        # Route-level components
└── styles/       # Global styles and design tokens
```

Keep route components focused on composition. Put reusable interface elements in `components`, and keep general-purpose TypeScript helpers in `lib`.

## Design system

The initial tokens live in `src/styles/globals.css` using Tailwind's theme variables. Add tokens only when the product needs them; prefer semantic names such as `surface`, `foreground`, and `border` over visual names tied to a particular color.

## Environment variables

Only variables prefixed with `VITE_` are exposed to browser code. Never put private keys or Impact credentials in client-side environment variables.

## Current scope

This phase establishes tooling, routing, layout boundaries, accessibility defaults, design tokens, and a small utility layer. It does not include product pages, tracking, advertising, or affiliate integrations.

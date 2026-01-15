# Portfolio2 (Next.js + Tailwind CSS + Material UI) Copilot Instructions

## Project Overview
- Project: Portfolio2
- Stack: Next.js, TypeScript, Tailwind CSS, Material UI, shadcn/ui, aceternityui
- Uses App Router and `src/` directory structure
- Import alias: `@/`

## Best Practices
- Use TypeScript for all code.
- Use Tailwind CSS for styling; combine with Material UI and shadcn/ui as needed.
- Use App Router for routing.
- Organize code in the `src/` directory.
- Use the `@/` import alias for absolute imports.
- Do not use ESLint (per project setup).

## Key Dependencies
- Material UI: `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`, `@mui/styled-engine-sc`
- Tailwind CSS: `tailwindcss`, `autoprefixer`, `postcss`, `tailwind-merge`
- shadcn/ui: `shadcn-ui`
- Aceternity UI: `aceternityui`
- CKEditor: `@ckeditor/ckeditor5-react`, `ckeditor5`
- Prisma ORM: `@prisma/client`, `prisma`
- Auth: `next-auth`, `bcryptjs`, `@types/bcryptjs`
- Animation: `framer-motion`
- Utility: `clsx`, `styled-components`

## Development Guidelines
- Use modern Next.js conventions (App Router, file-based routing, etc.).
- Use TypeScript types for all components and functions.
- Prefer Tailwind CSS for layout and utility classes; use Material UI for advanced UI components.
- Use shadcn/ui and aceternityui for additional UI needs.
- Use Prisma for database access and modeling.
- Use next-auth for authentication flows.
- Use CKEditor for rich text editing.
- Use framer-motion for animations.
- Use `clsx` for conditional class names.
- Use styled-components for custom styled React components if needed.

## File Structure Example
```
src/
  app/
    layout.tsx
    page.tsx
    ...
  components/
  lib/
  styles/
public/
```

## Additional Notes
- Use the provided dependencies and devDependencies as the standard for this project.
- Follow Next.js, Tailwind CSS, and Material UI documentation for best practices.

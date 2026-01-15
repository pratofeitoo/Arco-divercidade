# Next.js + React + Tailwind Copilot Instructions

## Code Style and Structure
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names (e.g., isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content, types.

## Naming Conventions
- Place all components in `src/components`, named like `new-component.tsx`.
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`).
- Favor named exports for components.

## TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.

## Syntax and Formatting
- Use the `function` keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

## UI and Styling
- Use Shadcn UI and Tailwind for components and styling.
- Implement responsive design with Tailwind CSS (mobile-first).

## Performance Optimization
- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP, include size data, implement lazy loading.

## Key Conventions
- Use 'nuqs' for URL search parameter state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Limit 'use client':
  - Favor server components and Next.js SSR.
  - Use only for Web API access in small components.
  - Avoid for data fetching or state management.
- Follow Next.js docs for Data Fetching, Rendering, and Routing.
- Use https://placekitten.com/ for placeholder images in seed data.
- Place both `/app` and `/components` under `/src` for a clean, modular structure.
- Separate application logic (`/src/app`) from UI components (`/src/components`).

## Components Organization
- Organize components in `/src/components` by type (e.g., ui, forms, layout) or by feature/domain.
- For private components, use a `_components` folder within the relevant `/app` subdirectory.
- Shared components go in `/src/components` for reuse.
- For large projects, adopt a modular structure with feature/domain folders containing components, hooks, and utilities.

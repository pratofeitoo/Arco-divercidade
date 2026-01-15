# Next.js + Vercel + AI SDK RSC Copilot Instructions

## Environment and Tools
- Use TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, Tailwind, and Vercel middleware.
- Use Vercel's KV database for stateful data.

## Code Style and Structure
- Write concise, technical TypeScript code.
- Use functional, declarative programming; avoid classes.
- Prefer iteration and modularization over duplication.
- Use descriptive variable names (e.g., isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content, types.

## Naming Conventions
- Use lowercase with dashes for directories.
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
- Use Shadcn UI, Radix UI, and Tailwind for components and styling.
- Implement responsive, mobile-first design with Tailwind CSS.

## Performance Optimization
- Minimize `use client`, `useEffect`, and `setState`; favor React Server Components (RSC).
- Wrap client components in `Suspense` with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP, include size data, implement lazy loading.

## Key Conventions
- Use `nuqs` for URL search parameter state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Limit `use client` to small Web API access components; avoid for data fetching/state management.
- Follow Next.js docs for Data Fetching, Rendering, and Routing.

## AI SDK RSC Integration
- Integrate `ai-sdk-rsc` into your Next.js project.
- Use Vercel middleware and KV database for session management.
- Use `ai-sdk-rsc` hooks in React Server Components for generative UI.
- Store/retrieve session data with Vercel's KV database using async operations.
- Use Next.js data fetching methods for server-side state.
- Securely store environment variables in Vercel settings.

Refer to project documentation and the above conventions for best practices.

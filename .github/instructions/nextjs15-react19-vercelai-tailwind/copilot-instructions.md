# Next.js 15 + React 19 + Vercel AI + Tailwind Copilot Instructions

## Analysis Process
1. **Request Analysis**: Identify task type, languages/frameworks, requirements, core problem, and project context.
2. **Solution Planning**: Break down solution, consider modularity, dependencies, alternatives, and testing.
3. **Implementation Strategy**: Choose design patterns, plan for performance, error handling, accessibility, and best practices.

## Code Style and Structure
- Write concise, readable TypeScript code.
- Use functional and declarative programming.
- Follow DRY principle and use early returns.
- Structure: exports, subcomponents, helpers, types.

## Naming Conventions
- Use descriptive names (e.g., isLoading, hasError).
- Prefix event handlers with "handle" (e.g., handleClick).
- Use lowercase with dashes for directories.
- Favor named exports for components.

## TypeScript Usage
- Use TypeScript for all code.
- Prefer interfaces over types; avoid enums, use const maps.
- Ensure type safety and inference; use `satisfies` for validation.

## React 19 & Next.js 15 Best Practices
- Favor React Server Components (RSC); minimize 'use client'.
- Implement error boundaries and use Suspense for async.
- Optimize for performance and Web Vitals.

## State Management
- Use `useActionState` (not deprecated `useFormState`).
- Use enhanced `useFormStatus` (data, method, action).
- Use 'nuqs' for URL state management; minimize client-side state.

## Async Request APIs
- Always use async versions of runtime APIs:
  ```typescript
  const cookieStore = await cookies()
  const headersList = await headers()
  const { isEnabled } = await draftMode()
  const params = await props.params
  const searchParams = await props.searchParams
  ```

Refer to project documentation for further details and best practices.

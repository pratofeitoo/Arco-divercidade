# Next.js 14 + Tailwind CSS Copilot Instructions

## Key Requirements
- Use the App Router: Place all components in the `app` directory, following Next.js 14 conventions.
- Default to Server Components; use Client Components only when necessary for interactivity or client-side state.
- Use modern TypeScript syntax and proper typing for all components and functions.
- Ensure responsive design using Tailwind CSS classes.
- Build modular, reusable components matching design sections.
- Implement efficient data fetching in server components using the `fetch` API with caching and revalidation.
- Use Next.js 14's metadata API for SEO.
- Use the Next.js Image component for optimized images.
- Ensure accessibility with ARIA attributes and semantic HTML.
- Use error boundaries and error.tsx for error handling.
- Use loading.tsx for loading states.
- Use route handlers (route.ts) for API routes.
- Implement SSG and SSR using App Router conventions as appropriate.

## Guidelines
- Always use TypeScript for type safety; provide interfaces for props.
- Use Tailwind CSS classes exclusively for styling; avoid inline styles.
- Use functional components and hooks for state management.
- Add clear comments for complex logic or design decisions.
- Follow Next.js 14 file structure and naming conventions.
- Use environment variables for configuration.
- Optimize performance with code splitting, lazy loading, and parallel data fetching.
- Ensure accessibility (WCAG guidelines).
- Use built-in caching and revalidation features.
- Let TypeScript infer types when possible; use `React.FC` or `React.ReactNode` only when explicit typing is needed.
- Write concise component definitions without redundant type annotations.

## Code Generation Rules
- Use `'use client'` only for Client Components.
- Define components as:
  ```tsx
  const ComponentName = () => {
    // ...
  };
  ```
- For props, use interface definitions:
  ```tsx
  interface ComponentNameProps {
    // ...
  }
  const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
    // ...
  };
  ```
- Use named exports for components, default exports for pages.
- For data fetching in server components:
  ```tsx
  async function getData() {
    const res = await fetch('<API_URL>', { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
  }
  export default async function Page() {
    const data = await getData()
    // ...
  }
  ```
- For metadata:
  ```tsx
  import type { Metadata } from 'next'
  export const metadata: Metadata = {
    title: 'Page Title',
    description: 'Page description',
  }
  ```
- For error handling in error.tsx:
  ```tsx
  'use client'
  export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
      // ...
    );
  }
  ```

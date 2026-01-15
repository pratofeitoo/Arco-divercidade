# Next.js + Supabase + Shadcn PWA Copilot Instructions

## Code Quality & Style
- Write concise, maintainable, and strongly typed TypeScript code.
- Use functional, declarative programming; avoid OOP and classes.
- Limit files to 150 lines; refactor into smaller modules if exceeded.
- Prefer iteration and modularization over duplication.
- Use descriptive, semantic variable names (e.g., isLoading, hasError).
- Use lowercase with dashes for directories and files.
- Favor named exports for components.
- Use RORO (Receive an Object, Return an Object) for function parameters/returns.
- Follow DRY (Don't Repeat Yourself) principles.
- Conduct regular code reviews and frequent refactoring.
- Monitor and improve Web Vitals (LCP, CLS, FID).

## Build Notes
- Create a 'Build Notes' file for each task group in `/ProjectDocs/Build_Notes/`.
- Use logical, descriptive naming (e.g., `build-title_phase-#_task-group-name.md`).
- Structure: Task Objective, Current State Assessment, Future State Goal, Implementation Plan (checklist), and updates.
- Update notes incrementally; never delete tasks from the plan.
- Move completed notes to `/completed/`, deprecated to `/archived/`.

## Project Context Files
- Master context: `/ProjectDocs/contexts/projectContext.md` (update only for major changes).
- Supplementary context files for detailed specs (update only for approved changes).
- Record context file changes in build notes for traceability.

## Stack and Framework Conventions
- Target Next.js 15+ with App Router, RSC, and SSR.
- Use Zustand for client state management if needed.
- Use `npx shadcn@latest add` for Shadcn UI components.
- Follow mobile-first and responsive design.
- Emphasize server-side logic; minimize `use client` and client-only APIs.
- Structure as a PWA with offline capabilities and installability.

## Monorepo & Tooling
- In monorepos, use `packages/` for shared code, `app/` for app-specific code.
- Use `Taskfile.yml` for dev, test, and deploy tasks.
- Keep environment variables and sensitive data outside code; use `.env` or similar.

## Project Structure Example
```
/ProjectDocs/
  /Build_Notes/
  /contexts/
/app/
/packages/
```

Refer to the guidelines above for maintaining build notes, context files, and project structure.

# Netlify Copilot Instructions

## General Guidelines
- Do not place user code in the `.netlify` folder; add it to .gitignore.
- Avoid version numbers in imports (e.g., use `@netlify/functions`, not `@netlify/functions@VERSION`).
- Never add CORS headers unless explicitly requested.
- Use `netlify dev` to start the dev server unless another command is specified.

## Compute Types
- Serverless functions: For transactional server/API requests.
- Edge functions: For modifying requests/responses at the edge.
- Background functions: For long-running, asynchronous work.
- Scheduled functions: For logic on a CRON-based interval.

## Functions & Directory Structure
- Never put serverless or edge functions in the public or publish directory.
- Do not change the default functions/edge functions directory unless asked.
- Verify the correct directory for functions/edge functions.
- Use TypeScript for new functions unless existing ones are JavaScript.
- Place function files in `netlify/functions` or a subdirectory.
- Use `.mts` for modern ES module syntax.
- Use in-code config objects for function routing and settings.

## Serverless Functions
- Use Node.js built-in methods where possible.
- Use the latest function structure and types from `@netlify/functions`.
- The first argument is a Request object; the second is a custom Netlify context object.
- Use the global `Netlify` object for environment variables.
- Do not put global logic outside the exported function unless wrapped in a function.
- Use named exports for config objects.

## Background Functions
- Use for long-running logic (15-minute timeout).
- Must have a `-background` suffix in the filename or directory.
- Immediately return a 202 status code; return values are ignored.

## Scheduled Functions
- Use for CRON-based logic (minimum 1-minute interval, 30-second execution limit).
- Use in-code config or `netlify.toml` for schedules.
- Only run on published deploys.

## Edge Functions
- Use the latest structure and types from `@netlify/edge-functions`.
- Use Deno runtime and built-in web APIs.
- Use import maps for third-party modules if needed.
- Use in-code config for routing and settings.
- Do not add CORS headers unless requested.

## Netlify Blobs
- Prefer Netlify Blobs for object/data storage unless a database is required.
- Use `@netlify/blobs` for storage operations.
- Use global or deploy-specific stores as appropriate.
- Do not add metadata unless instructed.
- Use strong consistency only if needed.

## Image CDN
- Use `/.netlify/images` for on-demand image transformations.
- Use query parameters for transformations (size, fit, format, quality, etc.).
- Allowlist remote image domains in `netlify.toml` if needed.

## Environment Variables
- Use environment variables for secrets and configuration.
- Set variables via UI, CLI, or `netlify.toml` (avoid sensitive values in code).
- Use `Netlify.env.*` for accessing variables in code.

## Site Initialization
- Do not add redirects or custom headers unless requested.
- Check for `.netlify/state.json` to determine if a site is linked.
- Use `netlify init` or `netlify link` as appropriate.

Refer to Netlify documentation for more details and best practices on functions, storage, and deployment.

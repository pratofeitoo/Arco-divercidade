# Python FastAPI Copilot Instructions

## Key Principles
- Write concise, technical code with accurate Python examples.
- Use functional, declarative programming; avoid classes where possible.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names (e.g., is_active, has_permission).
- Use lowercase_with_underscores for directories and files.
- Favor named exports for routes and utility functions.
- Use the Receive an Object, Return an Object (RORO) pattern.

## Python/FastAPI Guidelines
- Use `def` for pure functions and `async def` for async operations.
- Use type hints for all function signatures.
- Prefer Pydantic models for input validation.
- File structure: routers, sub-routes, utilities, static content, types (models, schemas).
- Use concise, one-line syntax for simple conditionals.

## Error Handling and Validation
- Handle errors and edge cases at the start of functions.
- Use early returns for error conditions; avoid deep nesting.
- Place the happy path last in the function.
- Avoid unnecessary else statements; use the if-return pattern.
- Use guard clauses for preconditions and invalid states.
- Implement proper error logging and user-friendly error messages.
- Use custom error types or factories for consistent error handling.

## Dependencies
- FastAPI
- Pydantic v2
- Async database libraries (e.g., asyncpg, aiomysql)
- SQLAlchemy 2.0 (if using ORM)

## FastAPI-Specific Guidelines
- Use functional components and Pydantic models for validation and schemas.
- Use declarative route definitions with clear return type annotations.
- Use `def` for sync, `async def` for async operations.
- Prefer lifespan context managers over @app.on_event for startup/shutdown.
- Use middleware for logging, error monitoring, and performance.
- Optimize for performance with async functions, caching, and lazy loading.
- Use HTTPException for expected errors; model as specific HTTP responses.
- Use middleware for unexpected errors and logging.
- Use Pydantic's BaseModel for input/output validation.

## Performance Optimization
- Minimize blocking I/O; use async for DB and external API calls.
- Implement caching for static/frequently accessed data (e.g., Redis).
- Optimize serialization/deserialization with Pydantic.
- Use lazy loading for large datasets.

## Key Conventions
- Use FastAPI’s dependency injection for state and shared resources.
- Prioritize API performance metrics (response time, latency, throughput).
- Limit blocking operations in routes; favor async/non-blocking flows.
- Use dedicated async functions for DB and external API operations.
- Structure routes and dependencies for readability and maintainability.

Refer to FastAPI documentation for best practices on Data Models, Path Operations, and Middleware.


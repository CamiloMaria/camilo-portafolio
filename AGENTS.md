# Agent Coding Guidelines

This file provides context for agentic coding agents operating in this repository.

## Project Overview

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5.x (strict mode)
- **UI**: React 19.2.3 with Tailwind CSS v4
- **Linting**: ESLint 9.x with eslint-config-next

## Commands

### Development

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
```

### Linting

```bash
npm run lint       # Run ESLint on all files
npx eslint path/to/file.ts    # Lint specific file
npx eslint --fix path/to/file.ts    # Lint and auto-fix
```

### Type Checking

```bash
npx tsc --noEmit   # Type check without emitting files
```

### Running Tests

> **Note**: No test framework is currently configured. Install one before writing tests:
> - For unit tests: `npm install -D vitest @vitejs/plugin-react`
> - For E2E tests: `npm install -D @playwright/test`

## Code Style Guidelines

### TypeScript

- **Strict mode enabled**: All TypeScript strict checks are on
- **Explicit types**: Always annotate function parameters and return types
- **Avoid `any`**: Use `unknown` if type is truly unknown, or use type guards
- **Use `Readonly<T>`** for props and immutable data
- **Use `interface` for object shapes**, `type` for unions/intersections

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `UserProfile`, `ButtonGroup` |
| Functions | camelCase | `getUserData`, `formatCurrency` |
| Variables | camelCase | `isActive`, `userList` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES`, `API_BASE_URL` |
| File names | kebab-case | `user-profile.tsx`, `api-utils.ts` |
| Types/Interfaces | PascalCase | `UserProfile`, `ApiResponse` |

### Imports

```typescript
// 1. React/Next imports first
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// 2. External libraries
import { format } from "date-fns";
import { z } from "zod";

// 3. Internal absolute imports (@/*)
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

// 4. Relative imports (only when @/* not possible)
import { utils } from "../utils";

// 5. Type imports (separate line)
import type { User } from "@/types";
```

- Use absolute imports with `@/` prefix (configured in tsconfig.json)
- Group imports by type with blank lines between groups
- Use `import type` for types only

### React Patterns

- Use functional components with arrow functions or `function` keyword consistently
- Use `use client` directive only when needed (for hooks, event handlers, browser APIs)
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Use the container/presentational pattern for complex components

### Error Handling

```typescript
// Preferred: Result pattern for expected errors
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const response = await api.get(`/users/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    if (error instanceof NotFoundError) {
      return { success: false, error: error };
    }
    // Log unexpected errors, return generic message
    console.error("Unexpected error:", error);
    return { success: false, error: new Error("Failed to fetch user") };
  }
}

// Avoid: Throwing exceptions for expected errors (validation, not found, etc.)
```

### Component Structure

```typescript
// components/example.tsx
import type { FC } from "react";

interface ExampleProps {
  title: string;
  items: readonly string[];  // Use readonly for props
  onSelect: (item: string) => void;
}

// Use FC only when you need children or explicit typing
export const Example: FC<ExampleProps> = ({ title, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      {/* Component body */}
    </div>
  );
};
```

### Tailwind CSS

- Use utility classes directly in JSX (Tailwind v4 with @tailwindcss/postcss)
- Use dark mode with `dark:` prefix
- Use `clsx` or `cva` for conditional classes
- Group related classes visually in JSX

### File Organization

```
app/                    # Next.js App Router pages
├── page.tsx           # Route page
├── layout.tsx        # Layout wrapper
├── globals.css       # Global styles
├── api/              # API routes
│   └── users/
│       └── route.ts
├── (group)/          # Route groups (no URL path)
│   └── dashboard/
│       └── page.tsx
components/            # Reusable UI components
├── ui/               # Base UI components
└── features/         # Feature-specific components
hooks/                # Custom React hooks
lib/                  # Utility functions, helpers
types/                # TypeScript type definitions
```

### Next.js Specific

- Use Server Components by default; add `use client` only when necessary
- Fetch data directly in Server Components
- Use Server Actions for form submissions
- Use `next/image` for images, `next/link` for navigation
- Use `next/font` for font optimization
- Mark static content with `export const dynamic = 'force-static'`

### Git Conventions

- Use Conventional Commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- Keep commits atomic and focused
- Write meaningful commit messages

### What NOT to Do

- ❌ Don't use `eslint-disable` unless absolutely necessary
- ❌ Don't use `// @ts-ignore` or `// @ts-expect-error`
- ❌ Don't commit secrets or credentials
- ❌ Don't leave console.log in production code
- ❌ Don't use inline styles (use Tailwind utilities)
- ❌ Don't use default exports (use named exports)

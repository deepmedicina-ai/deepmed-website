# DeepMed - Educational Medical Ecosystem

## Overview

DeepMed is a Brazilian educational platform for medical students, offering podcasts, study guides, infographics, and academic tools aligned with medical school curricula. The platform includes a landing page, student portal with calculators, curriculum matrix viewer, and legal pages. Built as a full-stack application with React frontend and Express backend, deployable to Vercel or as a standalone Node.js server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for meta image handling
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for development
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Storage Pattern**: Interface-based storage with memory fallback when no database is configured

### Data Storage
- **Primary**: PostgreSQL with Drizzle ORM (optional)
- **Fallback**: In-memory storage when DATABASE_URL is not set
- **Schema Location**: `shared/schema.ts` with Zod validation via drizzle-zod
- **Client-side**: Local Storage for user preferences and calculator data (no server-side personal data collection)

### Build and Deployment
- **Development**: Vite dev server with HMR proxied through Express
- **Production Build**: Vite builds to `dist/public`, Express serves static files
- **Deployment Targets**: Vercel (static export), GitHub Pages, or standalone Node.js server
- **PWA Support**: Service worker and manifest for installable web app

### Project Structure
```
client/           # React frontend
  src/
    components/ui/  # shadcn/ui components
    pages/          # Route components
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
  public/         # Static assets (PWA icons, manifest)
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage abstraction
  static.ts       # Static file serving
shared/           # Shared types and schemas
  schema.ts       # Drizzle schema definitions
```

## External Dependencies

### Third-Party Services
- **Spotify**: Embedded podcast player integration
- **YouTube**: Embedded video content
- **Google Drive**: External links to study guides and infographics
- **Google Search Console**: Site verification for SEO

### Key NPM Packages
- **Database**: `drizzle-orm`, `pg` (PostgreSQL client), `connect-pg-simple` (session store)
- **Validation**: `zod`, `drizzle-zod`, `@hookform/resolvers`
- **UI**: Full Radix UI primitive suite, `lucide-react` icons, `embla-carousel-react`
- **Build**: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (optional - falls back to memory storage)
- `NODE_ENV`: development/production mode
- `GH_TOKEN`: GitHub token for deployment (optional)
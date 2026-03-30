#!/usr/bin/env zsh

# ============================================================
# juanma.dev Migration TD Task Board Creation Script
# ============================================================
# This script creates the complete TD task board for the
# Vite+React to Next.js+Payload CMS migration
# ============================================================

set -e

echo "Creating juanma.dev Migration TD Task Board..."

cd /home/juan_ma7u7/Documents/Proyectos/juanma.dev

# Create Epic
td epic create "juanma.dev Migration Project" -p P0 -d "Migration from Vite+React to Next.js+Payload CMS with Turborepo"

echo "Creating tasks..."

# ===== Phase 1: Monorepo Architecture Setup (P0) =====
td create "Initialize Turborepo workspace with apps/ and packages/" --epic td-1232f5 -p P0 -d "Set up root package.json, create apps/ and packages/ directories" --type task
td create "Create workspace package structure for web studio storybook" --epic td-1232f5 -p P0 -d "Create empty package directories and package.json files" --depends-on td-1f1199 --type task
td create "Set up shared TypeScript configuration packages config typescript" --epic td-1232f5 -p P0 -d "Create tsconfig.base.json with paths, compiler options" --depends-on td-1f1199 --type task
td create "Create turbo.json with build pipeline configuration" --epic td-1232f5 -p P0 -d "Configure turbo.json with build, dev, lint, typecheck tasks" --depends-on td-1f1199 --type task

# ===== Phase 2: Core Framework Setup (P0) =====
td create "Initialize Next.js app in apps web with App Router" --epic td-1232f5 -p P0 -d "Run create-next-app with TypeScript, Tailwind, App Router" --depends-on td-1f1199 --type task
td create "Initialize Payload CMS in apps studio" --epic td-1232f5 -p P0 -d "Set up Payload CMS 3.x in apps/studio with MongoDB adapter" --depends-on td-1f1199 --type task
td create "Install and configure Tailwind CSS in apps web" --epic td-1232f5 -p P0 -d "Install tailwindcss, postcss, autoprefixer" --depends-on td-d23ad6 --type task
td create "Create Tailwind design tokens from MUI theme" --epic td-1232f5 -p P0 -d "Map MUI theme colors to Tailwind theme" --depends-on td-453c96 --type task

# ===== Phase 3: CMS Collections (P0) =====
td create "Create payload.config.ts with MongoDB adapter" --epic td-1232f5 -p P0 -d "Configure payload.config.ts with MongoDB, collections, globals" --depends-on td-f51fa5 --type task
td create "Create Projects collection in Payload CMS" --epic td-1232f5 -p P0 -d "Create apps/studio/src/collections/Projects.ts" --depends-on td-1a7c9f --type task
td create "Create Skills collection in Payload CMS" --epic td-1232f5 -p P0 -d "Create apps/studio/src/collections/Skills.ts" --depends-on td-1a7c9f --type task
td create "Create Education collection in Payload CMS" --epic td-1232f5 -p P0 -d "Create apps/studio/src/collections/Education.ts" --depends-on td-1a7c9f --type task
td create "Create Experience collection in Payload CMS" --epic td-1232f5 -p P0 -d "Create apps/studio/src/collections/Experience.ts" --depends-on td-1a7c9f --type task

# ===== Phase 4: Infrastructure (P0) =====
td create "Create MongoDB Docker Compose file in docker mongodb" --epic td-1232f5 -p P0 -d "Create docker-compose.yml with MongoDB 7.0, auth, volume" --depends-on td-1f1199 --type task
td create "Configure MongoDB connection in Payload CMS" --epic td-1232f5 -p P0 -d "Update payload.config.ts with DATABASE_URI" --depends-on td-5b8c64 --type task
td create "Configure Bun as package manager in root package.json" --epic td-1232f5 -p P0 -d "Install Bun, update package.json scripts" --depends-on td-1f1199 --type task

# ===== Phase 5: Core Components (P0) =====
td create "Create Welcome Hero section component" --epic td-1232f5 -p P0 -d "Build Hero component with profile, name, title" --depends-on td-d23ad6 --type task

# ===== Phase 6: Final Testing (P0) =====
td create "Final integration testing" --epic td-1232f5 -p P0 -d "Run full end-to-end testing" --depends-on td-d23ad6 --type task

# ===== Phase 1: Supporting Tasks (P1) =====
td create "Configure ESLint for monorepo in packages config eslint" --epic td-1232f5 -p P1 -d "Create eslint.config.js" --depends-on td-d69cc8 --type task
td create "Set up workspace dependencies and symlinks" --epic td-1232f5 -p P1 -d "Configure package.json with workspace protocols" --depends-on td-d69cc8 --type task
td create "Create UI component library in packages ui" --epic td-1232f5 -p P1 -d "Set up packages/ui with barrel exports" --depends-on td-d69cc8 --type task
td create "Create utils package in packages utils" --epic td-1232f5 -p P1 -d "Set up packages/utils" --depends-on td-d69cc8 --type task
td create "Create content package in packages content" --epic td-1232f5 -p P1 -d "Set up packages/content with Payload types" --depends-on td-d69cc8 --type task

# ===== Phase 2: Next.js Configuration (P1) =====
td create "Configure Next.js configuration next.config.ts" --epic td-1232f5 -p P1 -d "Configure next.config.ts with monorepo paths" --depends-on td-d23ad6 --type task
td create "Create app layout template with providers" --epic td-1232f5 -p P1 -d "Create apps/web/src/app/layout.tsx" --depends-on td-d23ad6 --type task
td create "Set up SSR CSR hybrid rendering configuration" --epic td-1232f5 -p P1 -d "Configure page.tsx with use client" --depends-on td-d23ad6 --type task
td create "Create page routing structure" --epic td-1232f5 -p P1 -d "Create apps/web/src/app/[lang]/ pages" --depends-on td-8a776a --type task

# ===== Phase 3: CMS Globals & API (P1) =====
td create "Create SiteSettings singleton global" --epic td-1232f5 -p P1 -d "Create apps/studio/src/globals/SiteSettings.ts" --depends-on td-1a7c9f --type task
td create "Create Navigation global for header footer" --epic td-1232f5 -p P1 -d "Create apps/studio/src/globals/Navigation.ts" --depends-on td-1a7c9f --type task
td create "Configure CMS API routes in Next.js" --epic td-1232f5 -p P1 -d "Set up /api/[...slug] route for Payload" --depends-on td-1a7c9f --type task

# ===== Phase 4: Styling Migration (P1) =====
td create "Build Tailwind component classes" --epic td-1232f5 -p P1 -d "Extend Tailwind with custom components" --depends-on td-3b90c4 --type task
td create "Create CSS variables for design system" --epic td-1232f5 -p P1 -d "Create globals.css with CSS custom properties" --depends-on td-3b90c4 --type task
td create "Migrate typography styles from MUI Typography" --epic td-1232f5 -p P1 -d "Create typography utilities" --depends-on td-c83ec0 --type task
td create "Migrate layout styles spacing grid flex" --epic td-1232f5 -p P1 -d "Create layout components" --depends-on td-c83ec0 --type task

# ===== Phase 5: Component Migration (P1) =====
td create "Create About Me section component" --epic td-1232f5 -p P1 -d "Build About section" --depends-on td-8f6362 --type task
td create "Create Portfolio section with project cards" --epic td-1232f5 -p P1 -d "Build Portfolio section" --depends-on td-b5c324 --type task
td create "Create ProjectCard component" --epic td-1232f5 -p P1 -d "Build ProjectCard component" --depends-on td-5d53b8 --type task
td create "Create Education section component" --epic td-1232f5 -p P1 -d "Build Education section" --depends-on td-f4363e --type task
td create "Create Skills section with TechCards" --epic td-1232f5 -p P1 -d "Build Skills section" --depends-on td-3b363e --type task
td create "Create Sidebar navigation component" --epic td-1232f5 -p P1 -d "Build Sidebar component" --depends-on td-2c27ef --type task

# ===== Phase 6: i18n (P1) =====
td create "Set up Next.js i18n with next-intl" --epic td-1232f5 -p P1 -d "Install next-intl, create i18n/request.ts" --depends-on td-d23ad6 --type task
td create "Migrate language files to messages folder" --epic td-1232f5 -p P1 -d "Copy src/lang/*.json to messages/" --depends-on td-0aa6a8 --type task

# ===== Phase 7: Infrastructure (P1) =====
td create "Create MongoDB initialization script with seed data" --epic td-1232f5 -p P1 -d "Create init.js to seed collections" --depends-on td-5b8c64 --type task

# ===== Phase 8: Storybook (P1) =====
td create "Initialize Storybook in apps storybook" --epic td-1232f5 -p P1 -d "Run npx storybook@latest init" --depends-on td-4c1a34 --type task

# ===== Phase 9: DevOps (P1) =====
td create "Configure direnv with envrc for environment management" --epic td-1232f5 -p P1 -d "Create .envrc file" --depends-on td-1f1199 --type task
td create "Create development scripts dev build lint typecheck" --epic td-1232f5 -p P1 -d "Update package.json scripts to use turbo" --depends-on td-d23ad6 --type task
td create "Configure Vercel deployment vercel.json" --epic td-1232f5 -p P1 -d "Create vercel.json" --depends-on td-d23ad6 --type task

# ===== Phase 10: CI/CD (P1) =====
td create "Create GitHub Actions workflow for CI" --epic td-1232f5 -p P1 -d "Create .github/workflows/ci.yml" --depends-on td-6ab93b --type task
td create "Configure environment variables in Vercel dashboard" --epic td-1232f5 -p P1 -d "Document required env vars" --depends-on td-6ab93b --type task

# ===== Phase 11: Testing (P1) =====
td create "Set up testing framework Vitest" --epic td-1232f5 -p P1 -d "Install vitest, @testing-library/react" --depends-on td-4c1a34 --type task
td create "Remove old Vite React source code" --epic td-1232f5 -p P1 -d "Delete src/, index.html, vite.config.js" --depends-on td-8f6362 --type task

# ===== Supporting Tasks (P2) =====
td create "Create Button component with Tailwind" --epic td-1232f5 -p P2 -d "Build Button component" --depends-on td-c27be0 --type task
td create "Create Card component with Tailwind" --epic td-1232f5 -p P2 -d "Build Card component" --depends-on td-c27be0 --type task
td create "Create Container component for page layouts" --epic td-1232f5 -p P2 -d "Build Container component" --depends-on td-c27be0 --type task
td create "Create TechCards component" --epic td-1232f5 -p P2 -d "Build TechCards component" --depends-on td-e2b533 --type task
td create "Create Contact section component" --epic td-1232f5 -p P2 -d "Build Contact section" --depends-on td-429cd4 --type task
td create "Create Language Selector component" --epic td-1232f5 -p P2 -d "Build LanguageSelector component" --depends-on td-02c52c --type task
td create "Create LanguageSwitcher component" --epic td-1232f5 -p P2 -d "Build LanguageSwitcher" --depends-on td-0aa6a8 --type task
td create "Create MongoDB Atlas configuration for production" --epic td-1232f5 -p P2 -d "Document MongoDB Atlas setup" --depends-on td-e601ec --type task

# ===== Storybook (P2) =====
td create "Configure Storybook with Tailwind and dark mode" --epic td-1232f5 -p P2 -d "Update .storybook/preview.tsx" --depends-on td-46d72a --type task
td create "Create Button component stories" --epic td-1232f5 -p P2 -d "Create stories/Button.stories.tsx" --depends-on td-46d72a --type task
td create "Create Card component stories" --epic td-1232f5 -p P2 -d "Create stories/Card.stories.tsx" --depends-on td-46d72a --type task
td create "Create section component stories" --epic td-1232f5 -p P2 -d "Create stories for sections" --depends-on td-46d72a --type task
td create "Set up Payload access control and hooks" --epic td-1232f5 -p P2 -d "Configure collections/access" --depends-on td-1a7c9f --type task

# ===== SEO (P2) =====
td create "Configure SEO metadata in Next.js pages" --epic td-1232f5 -p P2 -d "Add generateMetadata" --depends-on td-a12857 --type task
td create "Create robots.txt and sitemap.xml" --epic td-1232f5 -p P2 -d "Add robots.txt and sitemap.ts" --depends-on td-a12857 --type task
td create "Set up preview deployments for PRs" --epic td-1232f5 -p P2 -d "Configure Vercel previews" --depends-on td-b414a9 --type task

# ===== Testing (P2) =====
td create "Write unit tests for UI components" --epic td-1232f5 -p P2 -d "Create __tests__/" --depends-on td-e9c498 --type task
td create "Validate accessibility with axe-core" --epic td-1232f5 -p P2 -d "Run accessibility audit" --depends-on td-8f6362 --type task
td create "Run performance audit with Lighthouse" --epic td-1232f5 -p P2 -d "Run Lighthouse" --depends-on td-8f6362 --type task

# ===== Documentation (P2) =====
td create "Update README with new architecture" --epic td-1232f5 -p P2 -d "Update README.md" --depends-on td-0f7d1f --type task
td create "Create MIGRATION_PLAN.md documentation" --epic td-1232f5 -p P2 -d "Create MIGRATION_PLAN.md" --depends-on td-acf7ea --type task

# ===== Optional (P3) =====
td create "Configure favicon and app icons" --epic td-1232f5 -p P3 -d "Add favicon.ico" --depends-on td-a12857 --type task
td create "Set up hot reload for shared packages" --epic td-1232f5 -p P2 -d "Configure turbo watch" --depends-on td-f7309f --type task
td create "Add Lighthouse CI for performance monitoring" --epic td-1232f5 -p P3 -d "Configure lighthouse ci" --depends-on td-b414a9 --type task
td create "Set up Storybook deployment to chromatic" --epic td-1232f5 -p P3 -d "Configure chromatic" --depends-on td-5be670 --type task
td create "Add E2E tests with Playwright" --epic td-1232f5 -p P3 -d "Install playwright" --depends-on td-e9c498 --type task

echo "Migration TD Task Board created successfully!"
echo ""
echo "Summary:"
echo "- Epic: juanma.dev Migration Project"
echo "- Total Tasks: 50"
echo ""
echo "Run 'td list --epic td-1232f5' to view all tasks"

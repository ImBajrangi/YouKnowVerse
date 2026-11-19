# AcademicPro India — Deployment Guide

## 1. Production Build & Hosting
The application is built with Vite and React 19 for maximum performance and minimal payload size.

```bash
# Production Build
npm run build
```

This compiles optimized client bundles into `dist/`.

## 2. Environment Variables
Create `.env` in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

If Supabase credentials are not supplied, the platform automatically runs in seamless local reactive caching mode with demo personas, making it immediately testable and zero-friction.

## 3. Cloudflare Pages Deployment
To deploy via Wrangler:

```bash
npx wrangler pages deploy dist --project-name academicpro-india --branch main --commit-dirty=true
```
*(Note: Never use `--project-name the-vrinda` for AcademicPro India, as `the-vrinda` is reserved strictly for the Vrindopnisad codebase).*

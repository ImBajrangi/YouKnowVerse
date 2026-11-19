# AcademicPro India — Architecture Blueprint

## 1. System Topology

```
                      ┌───────────────────────────────────────────────┐
                      │              AcademicPro Client App           │
                      │ (React 19 + TypeScript + Vite + Tailwind CSS) │
                      └───────┬───────────────────────────────┬───────┘
                              │                               │
                ┌─────────────▼─────────────┐   ┌─────────────▼─────────────┐
                │ Public Portal & Marketing │   │   Client & Admin Portals  │
                │  - Home, Services, About  │   │  - Auth (Supabase/JWT)    │
                │  - Lead Inquiry Forms     │   │  - Project Tracker (11 St)│
                │  - Consultation Booking   │   │  - Quotations & Invoicing │
                │  - Resource Guides & Blog │   │  - Secure File Vault      │
                └─────────────┬─────────────┘   └─────────────┬─────────────┘
                              │                               │
                              └───────────────┬───────────────┘
                                              │
                      ┌───────────────────────▼───────────────────────┐
                      │    Data Access & Offline-Ready Cache Layer    │
                      │  - SWR (Stale-While-Revalidate) Cache Engine   │
                      │  - Supabase Database Client & Edge Adapters   │
                      │  - Local Mock Storage Fallback for Dev/Demo   │
                      └───────────────────────┬───────────────────────┘
                                              │
                              ┌───────────────▼───────────────┐
                              │    Supabase Postgres 15+      │
                              │   - 26 Normalized Tables      │
                              │   - Strict Row Level Security │
                              │   - Encrypted File Storage    │
                              └───────────────────────────────┘
```

## 2. Directory Structure

```
academicpro-india/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, WhatsAppButton
│   │   └── ui/           # Concentric Button, Card, Badge, Modal
│   ├── features/
│   │   ├── admin/        # AdminDashboard (Lead Pipeline, Project QA, CMS)
│   │   ├── consultations/# BookingModal
│   │   ├── inquiries/    # InquiryFormModal
│   │   └── portal/       # ClientPortal (Projects, Docs, Chat, Payments)
│   ├── pages/            # Home, Services, Details, About, Works, Blog, FAQ, Contact, Policies, Quote
│   ├── lib/              # CacheStore, initialMockData, Supabase client
│   ├── types/            # Strict TypeScript interfaces
│   ├── index.css         # Tailwind directives & Concentric UI helpers
│   ├── App.tsx           # Master App Orchestrator
│   └── main.tsx          # Application Entrypoint
├── docs/                 # Complete Architecture & Database Documentation
└── dist/                 # Production Build Assets
```

## 3. The 11-Stage Project Status Lifecycle
1. `inquiry_received`
2. `requirements_under_review`
3. `consultation_scheduled`
4. `quotation_sent`
5. `awaiting_payment`
6. `project_confirmed`
7. `in_progress`
8. `under_review`
9. `revision_requested`
10. `completed`
11. `closed`

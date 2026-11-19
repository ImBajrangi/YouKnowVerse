# AcademicPro India — Database Schema Documentation

Complete PostgreSQL / Supabase normalized schema comprising 26 dedicated tables with referential constraints, indexes, and Row Level Security. Full executable DDL is available at `docs/DATABASE_SCHEMA.sql`.

## 1. Table Registry

1. `profiles`: Scholar and admin identity, university, academic degree, contact.
2. `user_roles`: RBAC mappings (`super_admin`, `admin`, `consultant`, `client`).
3. `service_categories`: Classification of academic offerings.
4. `services`: Detailed catalogue with deliverables JSON, pricing models, slugs.
5. `inquiries`: Inbound lead generation records with unique `INQ-` identifiers.
6. `inquiry_activities`: Internal follow-up notes and contact status logs.
7. `projects`: Central project entities with codes (`AP-2026-XXX`) and status.
8. `project_members`: Consultant assignments and roles.
9. `project_milestones`: Step-by-step deliverable milestones.
10. `project_updates`: Chronological changelog visible to clients.
11. `quotations`: Formal price quotes with expiry dates and approval status.
12. `quotation_items`: Line-item breakdown of services, units, and rates.
13. `payments`: Payment records with transaction IDs and gateway verification.
14. `invoices`: Formal tax invoices generated upon payment verification.
15. `consultations`: Scheduled 1-on-1 research consultation sessions.
16. `availability_slots`: Consultant availability calendar slots.
17. `documents`: Secure document registry for manuscripts, drafts, and deliverables.
18. `document_versions`: Version history tracking revisions.
19. `conversations`: Messaging threads linked to projects.
20. `messages`: Messages and file links between clients and consultants.
21. `notifications`: In-app and follow-up alerts with read/unread statuses.
22. `testimonials`: Verified student and researcher feedback with consent.
23. `faqs`: Searchable knowledgebase articles categorized by topic.
24. `blog_posts`: SEO-optimized academic research guides.
25. `audit_logs`: Security and administrative activity logs.
26. `system_settings`: Key-value configuration for business parameters.

## 2. Row Level Security (RLS) Policies
- `profiles`: Users view/update own; admins view all.
- `projects`: Clients view own; assigned consultants view assigned; admins view all.
- `documents`: Strict project-participant access only.
- `messages`: Project participants only.
- `inquiries`: Public insert (rate-limited); admin read/update.

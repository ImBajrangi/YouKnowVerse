# AcademicPro India — Security & Privacy Architecture

## 1. Document & Manuscript Confidentiality
Academic researchers entrust unpublished hypotheses, proprietary survey data, and draft manuscripts to AcademicPro India.
- **Private Encrypted Storage**: Documents are stored in secure buckets accessible only via signed URLs with time-limited expiration.
- **Strict Access Control**: Only the authenticated author, assigned consultant, and supervising director may view project files.
- **Mutual Non-Disclosure Agreements (NDAs)**: Executed upon request prior to initial file exchange.

## 2. Authentication & Authorization
- **Supabase Authentication**: Secure JWT session management with HTTP-only cookies and automatic token refreshes.
- **Role-Based Access Control (RBAC)**: Enforced via PostgreSQL Row Level Security (RLS) across 4 roles: `super_admin`, `admin`, `consultant`, `client`.

## 3. Financial Integrity & Payment Verification
- **Zero Client-Side Trust**: Client payment success events are never trusted directly.
- **Server Verification**: Razorpay/Cashfree webhook signatures and transaction IDs are verified before marking any quotation as paid or activating project milestones.
- **Audit Trails**: All status transitions, payment logs, and administrative modifications are logged in `audit_logs`.

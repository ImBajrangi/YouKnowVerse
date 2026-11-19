-- ============================================================================
-- AcademicPro India — Complete Production PostgreSQL / Supabase Schema
-- 26 Normalized Tables with Row Level Security (RLS) & Role-Based Access Control
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- 1. ENUMS
-- ============================================================================
CREATE TYPE user_role_enum AS ENUM ('super_admin', 'admin', 'consultant', 'client');
CREATE TYPE lead_status_enum AS ENUM ('new', 'contacted', 'qualified', 'consultation_scheduled', 'quotation_sent', 'converted', 'lost');
CREATE TYPE project_status_enum AS ENUM (
  'inquiry_received',
  'requirements_under_review',
  'consultation_scheduled',
  'quotation_sent',
  'awaiting_payment',
  'project_confirmed',
  'in_progress',
  'under_review',
  'revision_requested',
  'completed',
  'closed'
);
CREATE TYPE payment_method_enum AS ENUM ('upi', 'razorpay', 'card', 'netbanking');
CREATE TYPE payment_status_enum AS ENUM ('pending', 'verified', 'failed', 'refunded');
CREATE TYPE doc_category_enum AS ENUM ('synopsis', 'manuscript', 'dataset', 'reference', 'deliverable', 'revision', 'other');
CREATE TYPE consultation_mode_enum AS ENUM ('online_video', 'in_person_mathura', 'phone_call');

-- ============================================================================
-- 2. USER PROFILES & ROLES (Tables 1 & 2)
-- ============================================================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  role user_role_enum DEFAULT 'client' NOT NULL,
  academic_level TEXT,
  university TEXT,
  research_field TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  role user_role_enum NOT NULL,
  granted_by UUID REFERENCES profiles(id),
  granted_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, role)
);

-- ============================================================================
-- 3. SERVICES & CATEGORIES (Tables 3 & 4)
-- ============================================================================
CREATE TABLE service_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  display_order INT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES service_categories(id) ON DELETE SET NULL,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  key_deliverables JSONB DEFAULT '[]'::jsonb NOT NULL,
  ideal_for JSONB DEFAULT '[]'::jsonb NOT NULL,
  workflow_steps JSONB DEFAULT '[]'::jsonb NOT NULL,
  pricing_model TEXT DEFAULT 'custom_quote' NOT NULL,
  starting_price TEXT,
  estimated_days TEXT DEFAULT '5-7 business days' NOT NULL,
  is_active BOOLEAN DEFAULT TRUE NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE NOT NULL,
  icon TEXT DEFAULT 'BookOpen' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 4. INQUIRIES & LEAD MANAGEMENT (Tables 5 & 6)
-- ============================================================================
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_number TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  academic_level TEXT NOT NULL,
  university TEXT NOT NULL,
  research_field TEXT NOT NULL,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  service_title TEXT NOT NULL,
  project_description TEXT NOT NULL,
  expected_deadline DATE,
  budget_range TEXT,
  status lead_status_enum DEFAULT 'new' NOT NULL,
  internal_notes TEXT,
  assigned_to UUID REFERENCES profiles(id) ON DELETE SET NULL,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE inquiry_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE NOT NULL,
  actor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  activity_type TEXT NOT NULL,
  notes TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 5. PROJECTS, MILESTONES & UPDATES (Tables 7, 8, 9, 10)
-- ============================================================================
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_code TEXT UNIQUE NOT NULL,
  inquiry_id UUID REFERENCES inquiries(id) ON DELETE SET NULL,
  client_id UUID REFERENCES profiles(id) ON DELETE RESTRICT NOT NULL,
  service_id UUID REFERENCES services(id) ON DELETE RESTRICT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status project_status_enum DEFAULT 'inquiry_received' NOT NULL,
  current_stage_label TEXT NOT NULL,
  total_amount NUMERIC(12, 2) DEFAULT 0.00 NOT NULL,
  paid_amount NUMERIC(12, 2) DEFAULT 0.00 NOT NULL,
  start_date DATE DEFAULT CURRENT_DATE NOT NULL,
  target_completion_date DATE,
  assigned_consultant_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE project_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  role_in_project TEXT DEFAULT 'consultant' NOT NULL,
  assigned_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(project_id, user_id)
);

CREATE TABLE project_milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INT DEFAULT 1 NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL, -- pending, in_progress, completed
  due_date DATE,
  completed_at TIMESTAMPTZ
);

CREATE TABLE project_updates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  notes TEXT NOT NULL,
  stage_update TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 6. QUOTATIONS & ITEMS (Tables 11 & 12)
-- ============================================================================
CREATE TABLE quotations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_number TEXT UNIQUE NOT NULL,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  inquiry_id UUID REFERENCES inquiries(id) ON DELETE SET NULL,
  client_id UUID REFERENCES profiles(id) ON DELETE RESTRICT NOT NULL,
  subtotal NUMERIC(12, 2) NOT NULL,
  discount_amount NUMERIC(12, 2) DEFAULT 0.00 NOT NULL,
  net_amount NUMERIC(12, 2) NOT NULL,
  advance_required NUMERIC(12, 2) NOT NULL,
  scope_description TEXT NOT NULL,
  deliverables_summary JSONB DEFAULT '[]'::jsonb NOT NULL,
  terms TEXT NOT NULL,
  valid_until DATE NOT NULL,
  status TEXT DEFAULT 'sent' NOT NULL, -- draft, sent, accepted, revision_requested, expired
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE quotation_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quotation_id UUID REFERENCES quotations(id) ON DELETE CASCADE NOT NULL,
  description TEXT NOT NULL,
  quantity NUMERIC(8, 2) DEFAULT 1.00 NOT NULL,
  unit_rate NUMERIC(12, 2) NOT NULL,
  total NUMERIC(12, 2) NOT NULL
);

-- ============================================================================
-- 7. PAYMENTS & INVOICES (Tables 13 & 14)
-- ============================================================================
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quotation_id UUID REFERENCES quotations(id) ON DELETE SET NULL,
  project_id UUID REFERENCES projects(id) ON DELETE RESTRICT NOT NULL,
  client_id UUID REFERENCES profiles(id) ON DELETE RESTRICT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  payment_method payment_method_enum NOT NULL,
  transaction_ref TEXT NOT NULL,
  status payment_status_enum DEFAULT 'pending' NOT NULL,
  invoice_number TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  verified_at TIMESTAMPTZ
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_number TEXT UNIQUE NOT NULL,
  payment_id UUID REFERENCES payments(id) ON DELETE CASCADE NOT NULL,
  project_id UUID REFERENCES projects(id) ON DELETE RESTRICT NOT NULL,
  client_id UUID REFERENCES profiles(id) ON DELETE RESTRICT NOT NULL,
  billing_name TEXT NOT NULL,
  billing_address TEXT,
  tax_identifier TEXT, -- GSTIN if applicable
  subtotal NUMERIC(12, 2) NOT NULL,
  tax_amount NUMERIC(12, 2) DEFAULT 0.00 NOT NULL,
  total_paid NUMERIC(12, 2) NOT NULL,
  pdf_url TEXT,
  issued_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 8. CONSULTATIONS & SLOTS (Tables 15 & 16)
-- ============================================================================
CREATE TABLE availability_slots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  consultant_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  day_of_week INT NOT NULL, -- 0 = Sunday, 1 = Monday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  client_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  academic_level TEXT NOT NULL,
  university TEXT,
  consultation_type TEXT NOT NULL,
  mode consultation_mode_enum DEFAULT 'online_video' NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_time TEXT NOT NULL,
  status TEXT DEFAULT 'scheduled' NOT NULL, -- scheduled, rescheduled, completed, cancelled
  meeting_link TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 9. DOCUMENTS & VERSIONS (Tables 17 & 18)
-- ============================================================================
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  uploader_id UUID REFERENCES profiles(id) ON DELETE SET NULL NOT NULL,
  title TEXT NOT NULL,
  category doc_category_enum NOT NULL,
  file_name TEXT NOT NULL,
  file_size_bytes BIGINT NOT NULL,
  file_type TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  version INT DEFAULT 1 NOT NULL,
  is_deliverable BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE document_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  document_id UUID REFERENCES documents(id) ON DELETE CASCADE NOT NULL,
  version_number INT NOT NULL,
  storage_path TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 10. CONVERSATIONS & MESSAGES (Tables 19 & 20)
-- ============================================================================
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES profiles(id) ON DELETE SET NULL NOT NULL,
  sender_name TEXT NOT NULL,
  sender_role user_role_enum NOT NULL,
  message TEXT NOT NULL,
  attachment_url TEXT,
  attachment_name TEXT,
  is_read BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 11. NOTIFICATIONS, TESTIMONIALS & CMS (Tables 21, 22, 23, 24)
-- ============================================================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  link TEXT,
  type TEXT DEFAULT 'system' NOT NULL,
  is_read BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_name TEXT NOT NULL,
  role_title TEXT NOT NULL,
  university TEXT NOT NULL,
  service_name TEXT NOT NULL,
  rating INT DEFAULT 5 NOT NULL,
  quote TEXT NOT NULL,
  is_verified BOOLEAN DEFAULT TRUE NOT NULL,
  is_featured BOOLEAN DEFAULT TRUE NOT NULL,
  display_order INT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE NOT NULL,
  display_order INT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read' NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[] NOT NULL,
  is_published BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 12. AUDIT LOGS & SYSTEM SETTINGS (Tables 25 & 26)
-- ============================================================================
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE system_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 13. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Helper to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = user_id AND (role = 'super_admin' OR role = 'admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles: Users can read their own; Admins can read all
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id OR is_admin(auth.uid()));
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Projects: Clients can view own projects; Consultants view assigned; Admins view all
CREATE POLICY "Clients view own projects" ON projects
  FOR SELECT USING (
    client_id = auth.uid() 
    OR assigned_consultant_id = auth.uid() 
    OR is_admin(auth.uid())
  );

-- Documents: Client or assigned staff only
CREATE POLICY "Access project documents" ON documents
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM projects p 
      WHERE p.id = documents.project_id 
      AND (p.client_id = auth.uid() OR p.assigned_consultant_id = auth.uid() OR is_admin(auth.uid()))
    )
  );

-- Messages: Project participants only
CREATE POLICY "Access project messages" ON messages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM projects p 
      WHERE p.id = messages.project_id 
      AND (p.client_id = auth.uid() OR p.assigned_consultant_id = auth.uid() OR is_admin(auth.uid()))
    )
  );

-- Inquiries: Public can insert; Admin can view/edit
CREATE POLICY "Public can submit inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins manage inquiries" ON inquiries
  FOR ALL USING (is_admin(auth.uid()));

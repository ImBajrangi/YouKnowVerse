export type UserRole = 'super_admin' | 'admin' | 'consultant' | 'client';

export type AcademicLevel = 
  | 'Undergraduate (UG)'
  | 'Postgraduate / Master\'s (PG)'
  | 'M.Phil / Pre-PhD'
  | 'PhD Research Scholar'
  | 'Post-Doctoral Fellow'
  | 'Faculty / Professor'
  | 'Independent Researcher'
  | 'Other';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  role: UserRole;
  academic_level?: AcademicLevel;
  university?: string;
  research_field?: string;
  avatar_url?: string;
  created_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  display_order: number;
}

export type PricingModel = 'custom_quote' | 'fixed_scope' | 'per_page' | 'consultation_hourly';

export interface Service {
  id: string;
  category_id: string;
  slug: string;
  title: string;
  tagline: string;
  short_description: string;
  full_description: string;
  key_deliverables: string[];
  ideal_for: string[];
  workflow_steps: { step: number; title: string; description: string }[];
  pricing_model: PricingModel;
  starting_price?: string;
  estimated_days: string;
  is_active: boolean;
  is_featured: boolean;
  icon: string;
}

export type LeadStatus = 
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'consultation_scheduled'
  | 'quotation_sent'
  | 'converted'
  | 'lost';

export interface Inquiry {
  id: string;
  inquiry_number: string;
  full_name: string;
  email: string;
  phone: string;
  academic_level: AcademicLevel;
  university: string;
  research_field: string;
  service_id: string;
  service_title: string;
  project_description: string;
  expected_deadline: string;
  budget_range?: string;
  status: LeadStatus;
  internal_notes?: string;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
}

export type ProjectStatus =
  | 'inquiry_received'
  | 'requirements_under_review'
  | 'consultation_scheduled'
  | 'quotation_sent'
  | 'awaiting_payment'
  | 'project_confirmed'
  | 'in_progress'
  | 'under_review'
  | 'revision_requested'
  | 'completed'
  | 'closed';

export interface ProjectMilestone {
  id: string;
  project_id: string;
  title: string;
  description: string;
  order_index: number;
  status: 'pending' | 'in_progress' | 'completed';
  due_date: string;
  completed_at?: string;
}

export type DocumentCategory = 
  | 'synopsis'
  | 'manuscript'
  | 'dataset'
  | 'reference'
  | 'deliverable'
  | 'revision'
  | 'other';

export interface ProjectDocument {
  id: string;
  project_id: string;
  uploader_id: string;
  uploader_name: string;
  title: string;
  category: DocumentCategory;
  file_name: string;
  file_size_formatted: string;
  file_type: string;
  file_url: string;
  version: number;
  is_deliverable: boolean;
  uploaded_at: string;
}

export interface ProjectMessage {
  id: string;
  project_id: string;
  sender_id: string;
  sender_name: string;
  sender_role: UserRole;
  message: string;
  attachment_url?: string;
  attachment_name?: string;
  created_at: string;
}

export interface Project {
  id: string;
  project_code: string;
  client_id: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  service_id: string;
  service_title: string;
  title: string;
  description: string;
  status: ProjectStatus;
  current_stage_label: string;
  total_amount: number;
  paid_amount: number;
  start_date: string;
  target_completion_date: string;
  assigned_consultant_name: string;
  milestones: ProjectMilestone[];
  documents_count: number;
  unread_messages_count: number;
  created_at: string;
  updated_at: string;
}

export interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  unit_rate: number;
  total: number;
}

export interface Quotation {
  id: string;
  quote_number: string;
  project_id?: string;
  inquiry_id?: string;
  client_id: string;
  client_name: string;
  client_email: string;
  service_title: string;
  items: QuotationItem[];
  subtotal: number;
  discount_amount: number;
  net_amount: number;
  advance_required: number;
  scope_description: string;
  deliverables_summary: string[];
  terms: string;
  valid_until: string;
  status: 'draft' | 'sent' | 'accepted' | 'revision_requested' | 'expired';
  created_at: string;
}

export interface Payment {
  id: string;
  quotation_id?: string;
  project_id: string;
  project_code: string;
  client_id: string;
  client_name: string;
  amount: number;
  payment_method: 'upi' | 'razorpay' | 'card' | 'netbanking';
  transaction_ref: string;
  status: 'pending' | 'verified' | 'failed' | 'refunded';
  invoice_number: string;
  created_at: string;
  verified_at?: string;
}

export type ConsultationType =
  | 'topic_guidance'
  | 'synopsis_review'
  | 'methodology'
  | 'thesis_review'
  | 'publication_strategy'
  | 'initial_discussion';

export interface Consultation {
  id: string;
  client_id?: string;
  client_name: string;
  email: string;
  phone: string;
  academic_level: AcademicLevel;
  university?: string;
  consultation_type: ConsultationType;
  consultation_type_label: string;
  mode: 'online_video' | 'in_person_mathura' | 'phone_call';
  scheduled_date: string;
  scheduled_time: string;
  status: 'scheduled' | 'rescheduled' | 'completed' | 'cancelled';
  meeting_link?: string;
  notes?: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  author_name: string;
  role_title: string;
  university: string;
  service_name: string;
  rating: number;
  quote: string;
  date: string;
  is_verified: boolean;
  avatar_initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'timelines' | 'confidentiality' | 'payments_revisions';
  is_featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  read_time: string;
  author: string;
  category: string;
  published_date: string;
  tags: string[];
}

export interface SystemNotification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  link?: string;
  type: 'project' | 'payment' | 'consultation' | 'system';
  is_read: boolean;
  created_at: string;
}

import { 
  Service, 
  Inquiry, 
  Project, 
  Quotation, 
  Payment, 
  Consultation, 
  Testimonial, 
  FAQItem, 
  BlogPost, 
  UserProfile, 
  ProjectMilestone,
  ProjectDocument,
  ProjectMessage,
  LeadStatus,
  ProjectStatus
} from '../types';

import {
  INITIAL_SERVICES,
  INITIAL_INQUIRIES,
  INITIAL_PROJECTS,
  INITIAL_QUOTATIONS,
  INITIAL_PAYMENTS,
  INITIAL_CONSULTATIONS,
  INITIAL_TESTIMONIALS,
  INITIAL_FAQS,
  INITIAL_BLOG_POSTS
} from './initialMockData';

// Cache keys
const STORAGE_PREFIX = 'youknowverse_';
const KEYS = {
  SERVICES: `${STORAGE_PREFIX}services`,
  INQUIRIES: `${STORAGE_PREFIX}inquiries`,
  PROJECTS: `${STORAGE_PREFIX}projects`,
  QUOTATIONS: `${STORAGE_PREFIX}quotations`,
  PAYMENTS: `${STORAGE_PREFIX}payments`,
  CONSULTATIONS: `${STORAGE_PREFIX}consultations`,
  TESTIMONIALS: `${STORAGE_PREFIX}testimonials`,
  FAQS: `${STORAGE_PREFIX}faqs`,
  BLOGS: `${STORAGE_PREFIX}blogs`,
  USER: `${STORAGE_PREFIX}current_user`,
  DOCUMENTS: `${STORAGE_PREFIX}documents`,
  MESSAGES: `${STORAGE_PREFIX}messages`
};

export const DEMO_CLIENT: UserProfile = {
  id: 'usr-client-01',
  email: 'vikas.kushwaha@amu.ac.in',
  full_name: 'Vikas Kushwaha',
  phone: '+91 9837123456',
  role: 'client',
  academic_level: 'PhD Research Scholar',
  university: 'Aligarh Muslim University (AMU)',
  research_field: 'Economics & Rural Development',
  created_at: '2026-11-08T11:00:00Z'
};

export const DEMO_ADMIN: UserProfile = {
  id: 'usr-admin-01',
  email: 'director@youknowverseindia.com',
  full_name: 'Dr. Vivek Upadhyay (Director)',
  phone: '+91 9760498896',
  role: 'super_admin',
  university: 'YouKnowVerse Headquarters, Mathura',
  research_field: 'Academic Administration & Research Ethics',
  created_at: '2026-01-01T00:00:00Z'
};

// In-memory cache for ultra-low latency on low-end mobile devices
const memoryCache: Record<string, { data: unknown; timestamp: number }> = {};
const CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes TTL

// Simple reactive subscriber system
type Listener = () => void;
const listeners: Set<Listener> = new Set();

function notifyListeners() {
  listeners.forEach(fn => {
    try { fn(); } catch (err) { console.error('Cache listener error:', err); }
  });
}

export function subscribeToCache(listener: Listener): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

// Low-overhead Storage helpers with memory cache
function getStorage<T>(key: string, fallback: T): T {
  // Check memory cache first
  const cached = memoryCache[key];
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
    return cached.data as T;
  }

  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      memoryCache[key] = { data: parsed, timestamp: Date.now() };
      return parsed as T;
    }
  } catch (err) {
    console.warn(`Error reading ${key} from storage:`, err);
  }

  // Fallback
  memoryCache[key] = { data: fallback, timestamp: Date.now() };
  setStorage(key, fallback);
  return fallback;
}

function setStorage<T>(key: string, data: T): void {
  memoryCache[key] = { data, timestamp: Date.now() };
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`Error writing ${key} to storage:`, err);
  }
}

// Documents & Messages initial storage
const INITIAL_DOCUMENTS: ProjectDocument[] = [
  {
    id: 'doc-01',
    project_id: 'proj-001',
    uploader_id: 'usr-client-01',
    uploader_name: 'Vikas Kushwaha',
    title: 'AMU PhD Registration Guidelines 2026.pdf',
    category: 'reference',
    file_name: 'AMU_PhD_Guidelines_2026.pdf',
    file_size_formatted: '1.4 MB',
    file_type: 'application/pdf',
    file_url: '#',
    version: 1,
    is_deliverable: false,
    uploaded_at: '2026-11-08T11:30:00Z'
  },
  {
    id: 'doc-02',
    project_id: 'proj-001',
    uploader_id: 'usr-client-01',
    uploader_name: 'Vikas Kushwaha',
    title: 'Draft Synopsis — Microfinance Western UP v1.docx',
    category: 'synopsis',
    file_name: 'Draft_Synopsis_v1.docx',
    file_size_formatted: '2.8 MB',
    file_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    file_url: '#',
    version: 1,
    is_deliverable: false,
    uploaded_at: '2026-11-08T11:45:00Z'
  },
  {
    id: 'doc-03',
    project_id: 'proj-001',
    uploader_id: 'usr-admin-01',
    uploader_name: 'Dr. Ananya Mishra',
    title: 'YouKnowVerse Tracked Edits & Evaluation Report v2.docx',
    category: 'deliverable',
    file_name: 'YouKnowVerse_Tracked_Edits_v2.docx',
    file_size_formatted: '3.1 MB',
    file_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    file_url: '#',
    version: 2,
    is_deliverable: true,
    uploaded_at: '2026-11-16T15:00:00Z'
  }
];

const INITIAL_MESSAGES: ProjectMessage[] = [
  {
    id: 'msg-01',
    project_id: 'proj-001',
    sender_id: 'usr-client-01',
    sender_name: 'Vikas Kushwaha',
    sender_role: 'client',
    message: 'Hello team, I have uploaded my AMU university synopsis format requirements. Please ensure the objectives match section 3.2.',
    created_at: '2026-11-08T12:00:00Z'
  },
  {
    id: 'msg-02',
    project_id: 'proj-001',
    sender_id: 'usr-admin-01',
    sender_name: 'Dr. Ananya Mishra',
    sender_role: 'consultant',
    message: 'Greetings Vikas! We have reviewed your initial draft and validated your sample size calculation across western UP districts. Our senior editor is completing the tracked changes pass.',
    created_at: '2026-11-16T16:00:00Z'
  }
];

export const CacheStore = {
  // Authentication & Session
  getCurrentUser(): UserProfile | null {
    return getStorage<UserProfile | null>(KEYS.USER, DEMO_CLIENT);
  },
  setCurrentUser(user: UserProfile | null) {
    setStorage(KEYS.USER, user);
    notifyListeners();
  },
  switchRole(role: 'client' | 'admin' | 'none') {
    if (role === 'client') {
      this.setCurrentUser(DEMO_CLIENT);
    } else if (role === 'admin') {
      this.setCurrentUser(DEMO_ADMIN);
    } else {
      this.setCurrentUser(null);
    }
  },

  // Services
  getServices(): Service[] {
    return getStorage<Service[]>(KEYS.SERVICES, INITIAL_SERVICES);
  },
  getServiceBySlug(slug: string): Service | undefined {
    return this.getServices().find(s => s.slug === slug);
  },
  updateService(updated: Service) {
    const list = this.getServices().map(s => s.id === updated.id ? updated : s);
    setStorage(KEYS.SERVICES, list);
    notifyListeners();
  },
  toggleServiceActive(id: string) {
    const list = this.getServices().map(s => s.id === id ? { ...s, is_active: !s.is_active } : s);
    setStorage(KEYS.SERVICES, list);
    notifyListeners();
  },

  // Inquiries / Leads
  getInquiries(): Inquiry[] {
    return getStorage<Inquiry[]>(KEYS.INQUIRIES, INITIAL_INQUIRIES);
  },
  addInquiry(inquiryData: Omit<Inquiry, 'id' | 'inquiry_number' | 'created_at' | 'updated_at' | 'status'>): Inquiry {
    const list = this.getInquiries();
    const count = list.length + 100;
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      inquiry_number: `INQ-2026-${count.toString().padStart(4, '0')}`,
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    list.unshift(newInquiry);
    setStorage(KEYS.INQUIRIES, list);
    notifyListeners();
    return newInquiry;
  },
  updateInquiryStatus(id: string, status: LeadStatus, internalNotes?: string) {
    const list = this.getInquiries().map(inq => {
      if (inq.id === id) {
        return {
          ...inq,
          status,
          internal_notes: internalNotes !== undefined ? internalNotes : inq.internal_notes,
          updated_at: new Date().toISOString()
        };
      }
      return inq;
    });
    setStorage(KEYS.INQUIRIES, list);
    notifyListeners();
  },
  convertInquiryToProject(inquiryId: string, estimatedAmount: number): Project {
    const inquiry = this.getInquiries().find(i => i.id === inquiryId);
    if (!inquiry) throw new Error('Inquiry not found');

    this.updateInquiryStatus(inquiryId, 'converted', 'Converted to formal project by Admin');

    const projects = this.getProjects();
    const projCount = projects.length + 43;
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      project_code: `AP-2026-${projCount.toString().padStart(3, '0')}`,
      client_id: 'usr-client-01',
      client_name: inquiry.full_name,
      client_email: inquiry.email,
      client_phone: inquiry.phone,
      service_id: inquiry.service_id,
      service_title: inquiry.service_title,
      title: `${inquiry.service_title}: ${inquiry.research_field}`,
      description: inquiry.project_description,
      status: 'quotation_sent',
      current_stage_label: 'Quotation Generated & Awaiting Client Approval',
      total_amount: estimatedAmount || 7500,
      paid_amount: 0,
      start_date: new Date().toISOString().split('T')[0],
      target_completion_date: inquiry.expected_deadline || new Date(Date.now() + 14*86400000).toISOString().split('T')[0],
      assigned_consultant_name: 'Dr. Vivek Upadhyay (Senior Consultant)',
      milestones: [
        { id: `m-${Date.now()}-1`, project_id: `proj-${Date.now()}`, title: 'Initial Scope Evaluation & Guideline Intake', description: 'Review raw materials and institutional guidelines', order_index: 1, status: 'completed', due_date: new Date().toISOString().split('T')[0] },
        { id: `m-${Date.now()}-2`, project_id: `proj-${Date.now()}`, title: 'Primary Research Guidance & Draft Pass', description: 'Subject specialist work and tracked review', order_index: 2, status: 'pending', due_date: inquiry.expected_deadline }
      ],
      documents_count: 0,
      unread_messages_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    projects.unshift(newProject);
    setStorage(KEYS.PROJECTS, projects);

    // Also generate quotation automatically
    this.createQuotation({
      project_id: newProject.id,
      inquiry_id: inquiry.id,
      client_id: newProject.client_id,
      client_name: newProject.client_name,
      client_email: newProject.client_email,
      service_title: newProject.service_title,
      items: [
        { id: `qi-${Date.now()}`, description: `${newProject.service_title} — Comprehensive Scope`, quantity: 1, unit_rate: estimatedAmount || 7500, total: estimatedAmount || 7500 }
      ],
      subtotal: estimatedAmount || 7500,
      discount_amount: 0,
      net_amount: estimatedAmount || 7500,
      advance_required: (estimatedAmount || 7500) * 0.5,
      scope_description: inquiry.project_description,
      deliverables_summary: [
        'Detailed line-by-line tracked manuscript/dossier',
        'Academic quality and reference compliance report',
        '1-on-1 consultation session for clarifications'
      ],
      terms: 'Standard terms: 50% advance before execution, 50% on preliminary draft delivery.',
      valid_until: new Date(Date.now() + 14*86400000).toISOString().split('T')[0],
      status: 'sent'
    });

    notifyListeners();
    return newProject;
  },

  // Projects
  getProjects(): Project[] {
    return getStorage<Project[]>(KEYS.PROJECTS, INITIAL_PROJECTS);
  },
  getProjectById(id: string): Project | undefined {
    return this.getProjects().find(p => p.id === id);
  },
  updateProjectStatus(id: string, status: ProjectStatus, stageLabel?: string) {
    const list = this.getProjects().map(p => {
      if (p.id === id) {
        return {
          ...p,
          status,
          current_stage_label: stageLabel || p.current_stage_label,
          updated_at: new Date().toISOString()
        };
      }
      return p;
    });
    setStorage(KEYS.PROJECTS, list);
    notifyListeners();
  },
  addMilestone(projectId: string, milestone: Omit<ProjectMilestone, 'id' | 'project_id'>) {
    const list = this.getProjects().map(p => {
      if (p.id === projectId) {
        const newM: ProjectMilestone = {
          ...milestone,
          id: `m-${Date.now()}`,
          project_id: projectId
        };
        return {
          ...p,
          milestones: [...p.milestones, newM],
          updated_at: new Date().toISOString()
        };
      }
      return p;
    });
    setStorage(KEYS.PROJECTS, list);
    notifyListeners();
  },
  toggleMilestone(projectId: string, milestoneId: string) {
    const list = this.getProjects().map(p => {
      if (p.id === projectId) {
        const updatedMilestones = p.milestones.map(m => {
          if (m.id === milestoneId) {
            const nextStatus = m.status === 'completed' ? 'in_progress' : 'completed';
            return {
              ...m,
              status: nextStatus as 'completed' | 'in_progress',
              completed_at: nextStatus === 'completed' ? new Date().toISOString() : undefined
            };
          }
          return m;
        });
        return { ...p, milestones: updatedMilestones, updated_at: new Date().toISOString() };
      }
      return p;
    });
    setStorage(KEYS.PROJECTS, list);
    notifyListeners();
  },

  // Documents
  getDocuments(projectId?: string): ProjectDocument[] {
    const all = getStorage<ProjectDocument[]>(KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    return projectId ? all.filter(d => d.project_id === projectId) : all;
  },
  addDocument(doc: Omit<ProjectDocument, 'id' | 'uploaded_at'>) {
    const list = getStorage<ProjectDocument[]>(KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    const newDoc: ProjectDocument = {
      ...doc,
      id: `doc-${Date.now()}`,
      uploaded_at: new Date().toISOString()
    };
    list.unshift(newDoc);
    setStorage(KEYS.DOCUMENTS, list);

    // Update document count on project
    const projects = this.getProjects().map(p => {
      if (p.id === doc.project_id) {
        return { ...p, documents_count: p.documents_count + 1 };
      }
      return p;
    });
    setStorage(KEYS.PROJECTS, projects);

    notifyListeners();
    return newDoc;
  },

  // Messages
  getMessages(projectId: string): ProjectMessage[] {
    const all = getStorage<ProjectMessage[]>(KEYS.MESSAGES, INITIAL_MESSAGES);
    return all.filter(m => m.project_id === projectId);
  },
  addMessage(msg: Omit<ProjectMessage, 'id' | 'created_at'>) {
    const all = getStorage<ProjectMessage[]>(KEYS.MESSAGES, INITIAL_MESSAGES);
    const newMsg: ProjectMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    all.push(newMsg);
    setStorage(KEYS.MESSAGES, all);
    notifyListeners();
    return newMsg;
  },

  // Quotations
  getQuotations(): Quotation[] {
    return getStorage<Quotation[]>(KEYS.QUOTATIONS, INITIAL_QUOTATIONS);
  },
  createQuotation(quoteData: Omit<Quotation, 'id' | 'quote_number' | 'created_at'>): Quotation {
    const list = this.getQuotations();
    const count = list.length + 183;
    const newQuote: Quotation = {
      ...quoteData,
      id: `quote-${Date.now()}`,
      quote_number: `Q-2026-${count.toString().padStart(4, '0')}`,
      created_at: new Date().toISOString()
    };
    list.unshift(newQuote);
    setStorage(KEYS.QUOTATIONS, list);
    notifyListeners();
    return newQuote;
  },
  updateQuotationStatus(id: string, status: 'draft' | 'sent' | 'accepted' | 'revision_requested' | 'expired') {
    const list = this.getQuotations().map(q => {
      if (q.id === id) {
        return { ...q, status };
      }
      return q;
    });
    setStorage(KEYS.QUOTATIONS, list);
    notifyListeners();
  },

  // Payments
  getPayments(): Payment[] {
    return getStorage<Payment[]>(KEYS.PAYMENTS, INITIAL_PAYMENTS);
  },
  recordPayment(paymentData: Omit<Payment, 'id' | 'invoice_number' | 'created_at'>): Payment {
    const list = this.getPayments();
    const count = list.length + 43;
    const newPayment: Payment = {
      ...paymentData,
      id: `pay-${Date.now()}`,
      invoice_number: `INV-2026-${count.toString().padStart(4, '0')}`,
      created_at: new Date().toISOString(),
      verified_at: paymentData.status === 'verified' ? new Date().toISOString() : undefined
    };
    list.unshift(newPayment);
    setStorage(KEYS.PAYMENTS, list);

    // Update project paid amount & status if verified
    if (newPayment.status === 'verified') {
      const projects = this.getProjects().map(p => {
        if (p.id === newPayment.project_id) {
          const nextPaid = p.paid_amount + newPayment.amount;
          return {
            ...p,
            paid_amount: nextPaid,
            status: nextPaid >= p.total_amount ? ('in_progress' as ProjectStatus) : p.status,
            current_stage_label: nextPaid >= p.total_amount ? 'Payment Received & Project Active in Progress' : p.current_stage_label
          };
        }
        return p;
      });
      setStorage(KEYS.PROJECTS, projects);
    }

    notifyListeners();
    return newPayment;
  },

  // Consultations
  getConsultations(): Consultation[] {
    return getStorage<Consultation[]>(KEYS.CONSULTATIONS, INITIAL_CONSULTATIONS);
  },
  bookConsultation(cData: Omit<Consultation, 'id' | 'status' | 'created_at'>): Consultation {
    const list = this.getConsultations();
    const newC: Consultation = {
      ...cData,
      id: `c-${Date.now()}`,
      status: 'scheduled',
      created_at: new Date().toISOString(),
      meeting_link: cData.mode === 'online_video' 
        ? `https://meet.google.com/youknowverse-${Math.random().toString(36).substring(2, 8)}`
        : 'Mathura Office: Civil Lines, Near Mathura Cantt Railway Station, UP 281001'
    };
    list.unshift(newC);
    setStorage(KEYS.CONSULTATIONS, list);
    notifyListeners();
    return newC;
  },
  cancelConsultation(id: string) {
    const list = this.getConsultations().map(c => c.id === id ? { ...c, status: 'cancelled' as const } : c);
    setStorage(KEYS.CONSULTATIONS, list);
    notifyListeners();
  },

  // Testimonials
  getTestimonials(): Testimonial[] {
    return getStorage<Testimonial[]>(KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
  },
  addTestimonial(t: Omit<Testimonial, 'id' | 'date'>) {
    const list = this.getTestimonials();
    const newT: Testimonial = {
      ...t,
      id: `t-${Date.now()}`,
      date: 'November 2026'
    };
    list.unshift(newT);
    setStorage(KEYS.TESTIMONIALS, list);
    notifyListeners();
    return newT;
  },

  // FAQs
  getFAQs(): FAQItem[] {
    return getStorage<FAQItem[]>(KEYS.FAQS, INITIAL_FAQS);
  },
  addFAQ(faq: Omit<FAQItem, 'id'>) {
    const list = this.getFAQs();
    const newF: FAQItem = { ...faq, id: `faq-${Date.now()}` };
    list.push(newF);
    setStorage(KEYS.FAQS, list);
    notifyListeners();
    return newF;
  },
  deleteFAQ(id: string) {
    const list = this.getFAQs().filter(f => f.id !== id);
    setStorage(KEYS.FAQS, list);
    notifyListeners();
  },

  // Blog Posts
  getBlogPosts(): BlogPost[] {
    return getStorage<BlogPost[]>(KEYS.BLOGS, INITIAL_BLOG_POSTS);
  },
  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.getBlogPosts().find(b => b.slug === slug);
  },

  // Reset to initial
  resetDemoData() {
    localStorage.removeItem(KEYS.SERVICES);
    localStorage.removeItem(KEYS.INQUIRIES);
    localStorage.removeItem(KEYS.PROJECTS);
    localStorage.removeItem(KEYS.QUOTATIONS);
    localStorage.removeItem(KEYS.PAYMENTS);
    localStorage.removeItem(KEYS.CONSULTATIONS);
    localStorage.removeItem(KEYS.TESTIMONIALS);
    localStorage.removeItem(KEYS.FAQS);
    localStorage.removeItem(KEYS.BLOGS);
    localStorage.removeItem(KEYS.DOCUMENTS);
    localStorage.removeItem(KEYS.MESSAGES);
    notifyListeners();
  }
};

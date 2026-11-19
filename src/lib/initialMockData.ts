import { 
  Service, 
  ServiceCategory, 
  Inquiry, 
  Project, 
  Quotation, 
  Payment, 
  Consultation, 
  Testimonial, 
  FAQItem, 
  BlogPost 
} from '../types';

export const INITIAL_CATEGORIES: ServiceCategory[] = [
  { id: 'cat-1', name: 'Foundational Research', slug: 'foundational-research', description: 'Early-stage topic discovery, synopsis drafting, and proposal structuring.', display_order: 1 },
  { id: 'cat-2', name: 'Thesis & Dissertation', slug: 'thesis-dissertation', description: 'Comprehensive editing, chapter formatting, and referencing.', display_order: 2 },
  { id: 'cat-3', name: 'Journal Publication', slug: 'journal-publication', description: 'Peer-reviewed manuscript refinement, formatting, and submission support.', display_order: 3 },
  { id: 'cat-4', name: 'Statistical & Data Support', slug: 'statistical-data', description: 'SPSS, R, Python, quantitative methodology, and empirical modeling.', display_order: 4 },
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'srv-topic-guidance',
    category_id: 'cat-1',
    slug: 'research-topic-guidance',
    title: 'Research Topic Guidance',
    tagline: 'Pinpoint viable, high-impact research problems with academic precision.',
    short_description: 'Comprehensive research area identification, problem statement formulation, research gap discovery, and feasibility analysis tailored to your discipline.',
    full_description: 'Embarking on a PhD, M.Phil, or Master’s journey starts with a resilient research topic. Our senior academic consultants analyze contemporary literature, institutional guidelines, and research trends to help you formulate a novel, defensible, and feasible research title accompanied by clear objectives and research questions.',
    key_deliverables: [
      '3 to 5 tailored, contemporary research topic options with literature rationale',
      'Preliminary research gap & problem statement document',
      'Core research objectives (General & Specific) formulation',
      'Research questions & primary hypotheses draft',
      'Methodological feasibility & data accessibility assessment report',
      '1-on-1 topic defense preparation consultation (45 minutes)'
    ],
    ideal_for: [
      'First-year PhD scholars finalizing doctoral registration',
      'Postgraduate / Master’s students preparing dissertation proposals',
      'Scholars transitioning across interdisciplinary domains'
    ],
    workflow_steps: [
      { step: 1, title: 'Domain & Interest Intake', description: 'Review your academic background, preferred domain, university guidelines, and timeline.' },
      { step: 2, title: 'Literature Scoping & Gap Analysis', description: 'Our domain specialist surveys recent peer-reviewed publications to identify unaddressed gaps.' },
      { step: 3, title: 'Topic Formulation & Feasibility Check', description: 'Develop 3-5 structured research themes with explicit objectives and methodology blueprints.' },
      { step: 4, title: 'Delivery & Discussion Session', description: 'Deliver comprehensive topic dossiers and conduct a live consultation to refine your final choice.' }
    ],
    pricing_model: 'custom_quote',
    starting_price: '₹3,500',
    estimated_days: '3-5 business days',
    is_active: true,
    is_featured: true,
    icon: 'Compass'
  },
  {
    id: 'srv-synopsis-review',
    category_id: 'cat-1',
    slug: 'synopsis-review',
    title: 'Synopsis Review & Refinement',
    tagline: 'Ensure your PhD / Master’s research proposal meets rigorous institutional standards.',
    short_description: 'Structural evaluation, methodology validation, literature gap verification, and academic formatting review before submission to the DRC / RDC.',
    full_description: 'A research synopsis is your formal gateway to doctoral candidacy. AcademicPro India conducts a thorough, critical review of your synopsis draft. We assess conceptual clarity, ensure alignment between objectives and methodology, verify citation integrity, and supply actionable line-by-line editorial feedback.',
    key_deliverables: [
      'Comprehensive Synopsis Evaluation Report (15+ critical audit parameters)',
      'Detailed line-by-line tracked changes MS Word document',
      'Methodology alignment & statistical design review',
      'Literature review assessment & reference audit (APA/IEEE/Chicago/MLA)',
      'Plagiarism/similarity scoping guidance & academic tone refinement',
      'Pre-RDC defense Q&A advisory notes'
    ],
    ideal_for: [
      'PhD scholars submitting synopsis to Departmental Research Committees (DRC/RDC)',
      'Master’s students preparing formal dissertation proposals',
      'Scholars whose initial proposals received revision requests'
    ],
    workflow_steps: [
      { step: 1, title: 'Document & Guideline Submission', description: 'Submit your draft synopsis along with university-specific formatting guidelines.' },
      { step: 2, title: 'Multi-Dimension Academic Review', description: 'Senior subject expert reviews structure, hypothesis validity, and research design.' },
      { step: 3, title: 'Tracked Edits & Evaluation Report', description: 'Receive annotated manuscript highlighting required rectifications and improvements.' },
      { step: 4, title: 'Post-Review Clarification', description: 'Interactive follow-up to address any doubts and polish final submission text.' }
    ],
    pricing_model: 'custom_quote',
    starting_price: '₹4,500',
    estimated_days: '4-6 business days',
    is_active: true,
    is_featured: true,
    icon: 'FileCheck'
  },
  {
    id: 'srv-thesis-editing',
    category_id: 'cat-2',
    slug: 'thesis-editing',
    title: 'Thesis Editing & Formatting',
    tagline: 'Impeccable academic language, chapter-wise coherence, and precise reference styling.',
    short_description: 'Substantive line-editing, grammatical refinement, structural cohesion, and strict university formatting compliance for complete theses and dissertations.',
    full_description: 'Years of doctoral research deserve presentation of the highest caliber. Our academic editing service focuses on academic prose, clarity of argumentation, eliminating colloquialisms, harmonizing chapter transitions, and enforcing exact institutional styling (margins, typography, table numbering, and bibliography consistency).',
    key_deliverables: [
      'Two MS Word versions: Tracked Changes file and Clean Final version',
      'Line-by-line grammatical, syntactical, and idiomatic refinement',
      'Academic tone and scholarly voice enhancement',
      'Uniform formatting of headings, tables, figures, equations, and appendices',
      'Complete citation & reference audit (Cross-checking in-text vs. bibliography)',
      'Certificate of Professional Academic Editing for university submission'
    ],
    ideal_for: [
      'PhD scholars in final thesis drafting stages prior to external evaluation',
      'Non-native English scholars seeking international academic polish',
      'Dissertation authors facing strict university compliance deadlines'
    ],
    workflow_steps: [
      { step: 1, title: 'Sample Chapter Assessment', description: 'Submit sample chapter for initial stylistic evaluation and scope calibration.' },
      { step: 2, title: 'Comprehensive Two-Pass Editing', description: 'Pass 1 focuses on structural logic and academic vocabulary; Pass 2 cleans mechanics.' },
      { step: 3, title: 'Reference Harmonization', description: 'Verify all citations match specified style guide (APA 7th, IEEE, Vancouver, Harvard, etc.).' },
      { step: 4, title: 'Quality Assurance & Delivery', description: 'Final QA review by Senior Editor and delivery with formal Editing Certificate.' }
    ],
    pricing_model: 'per_page',
    starting_price: '₹1.50 / word',
    estimated_days: '7-14 business days',
    is_active: true,
    is_featured: true,
    icon: 'BookOpen'
  },
  {
    id: 'srv-research-paper',
    category_id: 'cat-3',
    slug: 'research-paper-support',
    title: 'Research Paper Support',
    tagline: 'Structure compelling scholarly manuscripts ready for rigorous peer review.',
    short_description: 'End-to-end guidance in manuscript structuring, literature synthesis, methodological clarity, data presentation, and journal author guideline compliance.',
    full_description: 'Publishing in reputable journals requires persuasive framing, clear empirical presentation, and adherence to author guidelines. AcademicPro India assists researchers in transforming raw findings or thesis chapters into tightly written, coherent journal articles conforming to standard IMRaD (Introduction, Methods, Results, and Discussion) structures.',
    key_deliverables: [
      'Complete manuscript structuring and flow optimization',
      'Synthesis of empirical findings and literature comparison',
      'Refinement of Abstract, Highlights, and Graphical Abstract guidance',
      'Table and Figure clarity enhancement conforming to journal resolution standards',
      'Target journal formatting (Word/LaTeX structure adherence)',
      'Cover letter drafting and Declarations of Interest compilation'
    ],
    ideal_for: [
      'Doctoral candidates fulfilling mandatory publication requirements before defense',
      'Faculty members seeking to publish in Q1/Q2 Scopus and Web of Science journals',
      'Independent scholars writing empirical or review papers'
    ],
    workflow_steps: [
      { step: 1, title: 'Manuscript Intake & Journal Scope', description: 'Evaluate current draft, research findings, and target journal guidelines.' },
      { step: 2, title: 'Structural & Methodological Refinement', description: 'Restructure flow, strengthen Discussion section, and sharpen conclusions.' },
      { step: 3, title: 'Formatting & Submission Readiness', description: 'Format manuscript precisely according to journal’s Author Guidelines.' },
      { step: 4, title: 'Pre-Submission Package Finalization', description: 'Deliver formatted manuscript, cover letter draft, and submission checklist.' }
    ],
    pricing_model: 'custom_quote',
    starting_price: '₹5,500',
    estimated_days: '5-8 business days',
    is_active: true,
    is_featured: true,
    icon: 'GraduationCap'
  },
  {
    id: 'srv-publication-assistance',
    category_id: 'cat-3',
    slug: 'publication-assistance',
    title: 'Publication Assistance & Journal Guidance',
    tagline: 'Navigate legitimate indexed journals and conquer the peer-review process ethically.',
    short_description: 'Expert journal identification (UGC-CARE, Scopus, Web of Science), scope matching, manuscript submission guidance, and professional reviewer response preparation.',
    full_description: 'Finding the right journal without falling prey to predatory publications is critical. We provide genuine, ethical guidance to identify reputable indexed journals that align with your research scope, assist with submission documentation, and guide you in drafting respectful, point-by-point responses to peer reviewer critiques.',
    key_deliverables: [
      'Curated list of 3-5 legitimate indexed journals (UGC-CARE / Scopus / WoS) matched to scope',
      'Analysis of journal metrics (Impact Factor, CiteScore, acceptance timelines, APC policies)',
      'Predatory journal verification & blacklist check',
      'Manuscript formatting strictly to journal template',
      'Submission portal guidance & document preparation checklist',
      'Point-by-point Reviewer Response Letter drafting & rebuttal guidance'
    ],
    ideal_for: [
      'Scholars aiming for UGC-CARE List I & II, Scopus, or SCI/SSCI journals',
      'Researchers responding to Major or Minor revision decisions',
      'Academics seeking to avoid predatory and cloned journals'
    ],
    workflow_steps: [
      { step: 1, title: 'Paper Evaluation', description: 'Analyze your manuscript topic, methodology, and novelty level.' },
      { step: 2, title: 'Journal Scouting & Vetting', description: 'Cross-check Scopus, Web of Science, and UGC-CARE portals for verified active indexing.' },
      { step: 3, title: 'Formatting & Documentation', description: 'Format references, title page, blinded manuscript, and author bios.' },
      { step: 4, title: 'Reviewer Response Advisory', description: 'When reviews return, help draft point-by-point responses addressing every query.' }
    ],
    pricing_model: 'custom_quote',
    starting_price: '₹6,000',
    estimated_days: '5-10 business days',
    is_active: true,
    is_featured: true,
    icon: 'Award'
  },
  {
    id: 'srv-literature-search',
    category_id: 'cat-1',
    slug: 'literature-search-support',
    title: 'Literature Search & Research Support',
    tagline: 'Systematic literature mapping, gap identification, and reference management.',
    short_description: 'Exhaustive exploration of scholarly databases, thematic literature matrices, PRISMA framework assistance, and reference manager setup (Mendeley/Zotero).',
    full_description: 'A solid foundation for any thesis or paper is a comprehensive, critical review of prior scholarship. We assist in systematic literature searching across Google Scholar, PubMed, IEEE Xplore, JSTOR, and ScienceDirect, structuring thematic comparison matrices, and highlighting theoretical and empirical research gaps.',
    key_deliverables: [
      'Curated bibliography of 40-80 peer-reviewed articles mapped by theme and chronology',
      'Literature Synthesis Matrix (Excel/Table comparing Objectives, Methods, Findings, & Gaps)',
      'PRISMA flowchart preparation for systematic literature reviews (SLR)',
      'Research Gap Synthesis Summary (5-8 pages of analytical narrative)',
      'Zotero / Mendeley `.ris` / `.bib` library export ready for instant citation'
    ],
    ideal_for: [
      'Scholars writing Chapter 2 (Literature Review) of doctoral thesis',
      'Authors preparing Systematic Literature Reviews (SLR) or Bibliometric studies',
      'Researchers looking for high-impact foundational citations'
    ],
    workflow_steps: [
      { step: 1, title: 'Keyword & Boolean Strategy', description: 'Define primary research keywords, Boolean operators, and inclusion/exclusion criteria.' },
      { step: 2, title: 'Database Querying & Screening', description: 'Extract and screen relevant high-impact peer-reviewed literature.' },
      { step: 3, title: 'Matrix Construction', description: 'Synthesize papers into an analytical matrix mapping methodology, findings, and shortcomings.' },
      { step: 4, title: 'Reference Library Delivery', description: 'Provide structured literature dossier along with reference management database.' }
    ],
    pricing_model: 'custom_quote',
    starting_price: '₹4,000',
    estimated_days: '4-7 business days',
    is_active: true,
    is_featured: true,
    icon: 'Search'
  },
  // Future & Specialized Services
  {
    id: 'srv-statistical-analysis',
    category_id: 'cat-4',
    slug: 'statistical-analysis-spss',
    title: 'Statistical Analysis & SPSS / R Support',
    tagline: 'Turn raw research data into rigorous, publication-grade statistical findings.',
    short_description: 'Descriptive, inferential, regression, SEM-PLS, ANOVA, factor analysis (EFA/CFA) support with detailed interpretation and APA formatted tables.',
    full_description: 'Empirical research requires defensible data analysis. Our quantitative research specialists provide methodological consultation on hypothesis testing, sample size calculation (G*Power), reliability analysis (Cronbach’s alpha), regression modeling, and structural equation modeling (SEM) using SPSS, AMOS, SmartPLS, and R.',
    key_deliverables: [
      'Cleaned dataset with variable labeling and missing value handling',
      'Complete statistical analysis output file (.spv / .RData)',
      'Publication-ready APA 7th style summary tables and visualizations',
      'Narrative interpretation of results and hypothesis acceptance/rejection summary',
      '1-on-1 walkthrough session explaining output tables for your viva'
    ],
    ideal_for: [
      'Social sciences, management, psychology, and medical research scholars',
      'Researchers handling questionnaire and survey dataset analysis',
      'Scholars preparing for statistical questions in thesis defense'
    ],
    workflow_steps: [
      { step: 1, title: 'Dataset & Questionnaire Audit', description: 'Inspect survey instruments, data collection sheets, and stated hypotheses.' },
      { step: 2, title: 'Model Selection & Testing', description: 'Conduct normality checks, reliability testing, and run primary statistical models.' },
      { step: 3, title: 'APA Table Formatting', description: 'Generate publication-standard tables and charts.' },
      { step: 4, title: 'Interpretation & Viva Prep', description: 'Deliver complete interpretive narrative and walk through every statistical coefficient.' }
    ],
    pricing_model: 'custom_quote',
    starting_price: '₹5,000',
    estimated_days: '4-8 business days',
    is_active: true,
    is_featured: false,
    icon: 'BarChart3'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-101',
    inquiry_number: 'INQ-2026-0891',
    full_name: 'Priyanka Sharma',
    email: 'priyanka.sharma.phd@gmail.com',
    phone: '+91 9823456781',
    academic_level: 'PhD Research Scholar',
    university: 'Delhi University (DU)',
    research_field: 'Environmental Economics',
    service_id: 'srv-thesis-editing',
    service_title: 'Thesis Editing & Formatting',
    project_description: 'Final thesis draft comprising 5 chapters (~78,000 words). Require thorough academic language editing, reference check in APA 7th, and university compliance formatting.',
    expected_deadline: '2026-12-15',
    budget_range: '₹25,000 - ₹35,000',
    status: 'qualified',
    internal_notes: 'Client submitted sample chapter 1. Formatting is messy, but methodology is strong. Quotation prepared.',
    assigned_to: 'Dr. R. K. Verma (Senior Editor)',
    created_at: '2026-11-16T14:20:00Z',
    updated_at: '2026-11-17T10:15:00Z'
  },
  {
    id: 'inq-102',
    inquiry_number: 'INQ-2026-0892',
    full_name: 'Amitabh Mukherjee',
    email: 'amitabh.m@iitkgp.ac.in',
    phone: '+91 9711223344',
    academic_level: 'PhD Research Scholar',
    university: 'IIT Kharagpur',
    research_field: 'Computer Science & AI',
    service_id: 'srv-publication-assistance',
    service_title: 'Publication Assistance & Journal Guidance',
    project_description: 'Need assistance responding to Reviewer 2 comments for an IEEE Transactions on Cybernetics manuscript. Reviews ask for additional baseline comparison and clearer mathematical notations.',
    expected_deadline: '2026-12-05',
    budget_range: '₹10,000 - ₹15,000',
    status: 'consultation_scheduled',
    internal_notes: 'Booked online consultation slot for Nov 21st. Technical scope requires machine learning specialist.',
    assigned_to: 'Er. S. Sengupta (AI & Computing Lead)',
    created_at: '2026-11-17T09:45:00Z',
    updated_at: '2026-11-18T16:00:00Z'
  },
  {
    id: 'inq-103',
    inquiry_number: 'INQ-2026-0893',
    full_name: 'Dr. Sunita Aggarwal',
    email: 'sunita.aggarwal@gla.ac.in',
    phone: '+91 9412345678',
    academic_level: 'Faculty / Professor',
    university: 'GLA University, Mathura',
    research_field: 'Pharmaceutical Sciences',
    service_id: 'srv-research-paper',
    service_title: 'Research Paper Support',
    project_description: 'Structuring experimental pharmacological evaluation data into an empirical research article for submission to an Elsevier Scopus Q1 journal.',
    expected_deadline: '2026-12-28',
    budget_range: '₹12,000 - ₹18,000',
    status: 'new',
    internal_notes: 'Local client in Mathura. May prefer in-person discussion at Mathura office.',
    assigned_to: 'Unassigned',
    created_at: '2026-11-18T18:30:00Z',
    updated_at: '2026-11-18T18:30:00Z'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    project_code: 'AP-2026-042',
    client_id: 'usr-client-01',
    client_name: 'Vikas Kushwaha',
    client_email: 'vikas.kushwaha@amu.ac.in',
    client_phone: '+91 9837123456',
    service_id: 'srv-synopsis-review',
    service_title: 'Synopsis Review & Refinement',
    title: 'PhD Synopsis: Microfinance & Rural Women Empowerment in Western UP',
    description: 'Methodological validation, literature gap matrix, and research question formulation for doctoral registration at Aligarh Muslim University.',
    status: 'in_progress',
    current_stage_label: 'Methodology Review & Tracked Changes Pass',
    total_amount: 8500,
    paid_amount: 8500,
    start_date: '2026-11-10',
    target_completion_date: '2026-11-22',
    assigned_consultant_name: 'Dr. Ananya Mishra (Research Methodologist)',
    milestones: [
      { id: 'm-1', project_id: 'proj-001', title: 'Requirements & University Guideline Review', description: 'Review AMU DRC formatting rules and preliminary drafts', order_index: 1, status: 'completed', due_date: '2026-11-12', completed_at: '2026-11-12T16:00:00Z' },
      { id: 'm-2', project_id: 'proj-001', title: 'Methodology & Sample Size Scoping', description: 'Validate stratified sampling framework across 4 districts', order_index: 2, status: 'completed', due_date: '2026-11-15', completed_at: '2026-11-15T18:00:00Z' },
      { id: 'm-3', project_id: 'proj-001', title: 'Tracked Edits & Literature Gap Report', description: 'Comprehensive line-editing and reference audit', order_index: 3, status: 'in_progress', due_date: '2026-11-20' },
      { id: 'm-4', project_id: 'proj-001', title: 'Final Synopsis Dossier & Viva Notes', description: 'Clean final version with pre-RDC defense guidance notes', order_index: 4, status: 'pending', due_date: '2026-11-22' }
    ],
    documents_count: 4,
    unread_messages_count: 1,
    created_at: '2026-11-08T11:00:00Z',
    updated_at: '2026-11-18T17:30:00Z'
  },
  {
    id: 'proj-002',
    project_code: 'AP-2026-039',
    client_id: 'usr-client-02',
    client_name: 'Neha Chawla',
    client_email: 'neha.chawla@jnu.ac.in',
    client_phone: '+91 9910456789',
    service_id: 'srv-thesis-editing',
    service_title: 'Thesis Editing & Formatting',
    title: 'Doctoral Dissertation: Contemporary Hindi Literature & Dalit Consciousness',
    description: 'Complete 300-page doctoral dissertation copyediting, chapter flow alignment, and dual Hindi/English bibliographic formatting.',
    status: 'completed',
    current_stage_label: 'Project Completed & Editing Certificate Issued',
    total_amount: 32000,
    paid_amount: 32000,
    start_date: '2026-10-15',
    target_completion_date: '2026-11-05',
    assigned_consultant_name: 'Prof. S. N. Dwivedi (Senior Academic Editor)',
    milestones: [
      { id: 'm-21', project_id: 'proj-002', title: 'Chapters 1-3 Structural & Grammatical Edit', description: 'Intro, literature review, and conceptual framework', order_index: 1, status: 'completed', due_date: '2026-10-22', completed_at: '2026-10-21T14:00:00Z' },
      { id: 'm-22', project_id: 'proj-002', title: 'Chapters 4-6 Textual Analysis & Synthesis', description: 'Core chapters and philosophical discourse', order_index: 2, status: 'completed', due_date: '2026-10-30', completed_at: '2026-10-29T18:00:00Z' },
      { id: 'm-23', project_id: 'proj-002', title: 'Bibliography Harmonization & Formatting Pass', description: 'MLA 9th edition cross-verification', order_index: 3, status: 'completed', due_date: '2026-11-03', completed_at: '2026-11-03T11:00:00Z' },
      { id: 'm-24', project_id: 'proj-002', title: 'Final Delivery & Certificate', description: 'Tracked changes file, clean printable file, and certificate', order_index: 4, status: 'completed', due_date: '2026-11-05', completed_at: '2026-11-05T09:30:00Z' }
    ],
    documents_count: 6,
    unread_messages_count: 0,
    created_at: '2026-10-14T09:00:00Z',
    updated_at: '2026-11-05T12:00:00Z'
  }
];

export const INITIAL_QUOTATIONS: Quotation[] = [
  {
    id: 'quote-001',
    quote_number: 'Q-2026-0182',
    project_id: 'proj-001',
    inquiry_id: 'inq-101',
    client_id: 'usr-client-01',
    client_name: 'Vikas Kushwaha',
    client_email: 'vikas.kushwaha@amu.ac.in',
    service_title: 'Synopsis Review & Refinement',
    items: [
      { id: 'qi-1', description: 'Doctoral Synopsis Comprehensive Methodological Review', quantity: 1, unit_rate: 4500, total: 4500 },
      { id: 'qi-2', description: 'Empirical Literature Gap Matrix (25 Key Studies)', quantity: 1, unit_rate: 2500, total: 2500 },
      { id: 'qi-3', description: 'Pre-RDC Viva Preparation Notes & Defense Q&A Briefing', quantity: 1, unit_rate: 1500, total: 1500 }
    ],
    subtotal: 8500,
    discount_amount: 0,
    net_amount: 8500,
    advance_required: 4250,
    scope_description: 'Full synopsis review, tracked changes manuscript, sampling design evaluation, and reference check for AMU submission.',
    deliverables_summary: [
      'Tracked changes Word manuscript with line-by-line editorial feedback',
      'Evaluation report with 15 quality benchmark scores',
      'Literature gap matrix table (Word/Excel)',
      'Pre-RDC defense guidance notes'
    ],
    terms: 'Payment schedule: 50% advance before project commencement, 50% upon delivery of preliminary report. Two cycles of follow-up clarification included within 14 days of final delivery.',
    valid_until: '2026-12-01',
    status: 'accepted',
    created_at: '2026-11-09T10:00:00Z'
  }
];

export const INITIAL_PAYMENTS: Payment[] = [
  {
    id: 'pay-001',
    quotation_id: 'quote-001',
    project_id: 'proj-001',
    project_code: 'AP-2026-042',
    client_id: 'usr-client-01',
    client_name: 'Vikas Kushwaha',
    amount: 8500,
    payment_method: 'upi',
    transaction_ref: 'UPI/329847192837/academicpro',
    status: 'verified',
    invoice_number: 'INV-2026-0042',
    created_at: '2026-11-10T12:30:00Z',
    verified_at: '2026-11-10T12:35:00Z'
  },
  {
    id: 'pay-002',
    project_id: 'proj-002',
    project_code: 'AP-2026-039',
    client_id: 'usr-client-02',
    client_name: 'Neha Chawla',
    amount: 32000,
    payment_method: 'razorpay',
    transaction_ref: 'pay_NqR8x09LmnBv',
    status: 'verified',
    invoice_number: 'INV-2026-0039',
    created_at: '2026-10-15T15:20:00Z',
    verified_at: '2026-10-15T15:22:00Z'
  }
];

export const INITIAL_CONSULTATIONS: Consultation[] = [
  {
    id: 'c-001',
    client_name: 'Amitabh Mukherjee',
    email: 'amitabh.m@iitkgp.ac.in',
    phone: '+91 9711223344',
    academic_level: 'PhD Research Scholar',
    university: 'IIT Kharagpur',
    consultation_type: 'publication_strategy',
    consultation_type_label: 'Publication Guidance & Reviewer Rebuttal',
    mode: 'online_video',
    scheduled_date: '2026-11-21',
    scheduled_time: '04:00 PM - 04:45 PM',
    status: 'scheduled',
    meeting_link: 'https://meet.google.com/academicpro-consult-001',
    notes: 'Reviewer 2 feedback discussion for IEEE journal paper.',
    created_at: '2026-11-17T11:00:00Z'
  },
  {
    id: 'c-002',
    client_name: 'Dr. Sunita Aggarwal',
    email: 'sunita.aggarwal@gla.ac.in',
    phone: '+91 9412345678',
    academic_level: 'Faculty / Professor',
    university: 'GLA University, Mathura',
    consultation_type: 'initial_discussion',
    consultation_type_label: 'Initial Research Discussion & Scope Evaluation',
    mode: 'in_person_mathura',
    scheduled_date: '2026-11-22',
    scheduled_time: '11:00 AM - 12:00 PM',
    status: 'scheduled',
    meeting_link: 'Mathura Office: Civil Lines, Near Mathura Cantt Railway Station',
    notes: 'In-person meeting to evaluate pharmacological evaluation paper series.',
    created_at: '2026-11-18T19:00:00Z'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author_name: 'Dr. Rajeshwari Trivedi',
    role_title: 'Assistant Professor & Former PhD Scholar',
    university: 'Banaras Hindu University (BHU)',
    service_name: 'Thesis Editing & Formatting',
    rating: 5,
    quote: 'AcademicPro India provided exceptional line-by-line editing on my 420-page PhD thesis. The feedback on our citation formatting and chapter transition was flawless. They saved me weeks of stress prior to my final defense.',
    date: 'October 2026',
    is_verified: true,
    avatar_initials: 'RT'
  },
  {
    id: 't-2',
    author_name: 'Mohit Kumar Singhal',
    role_title: 'PhD Scholar in Management Studies',
    university: 'Dr. B.R. Ambedkar University, Agra',
    service_name: 'Synopsis Review & Refinement',
    rating: 5,
    quote: 'My synopsis had been sent back twice by our RDC committee with doubts on sampling framework. AcademicPro India’s methodologist clarified our structural equation model and sampling calculation in two days. It got approved unanimously.',
    date: 'September 2026',
    is_verified: true,
    avatar_initials: 'MS'
  },
  {
    id: 't-3',
    author_name: 'Kavita Bansal',
    role_title: 'M.Tech Researcher',
    university: 'GLA University, Mathura',
    service_name: 'Research Paper Support',
    rating: 5,
    quote: 'Being based in Mathura, finding a truly professional, ethics-compliant academic research partner locally was a blessing. They helped me structure my experimental image processing paper conforming to IEEE guidelines.',
    date: 'November 2026',
    is_verified: true,
    avatar_initials: 'KB'
  },
  {
    id: 't-4',
    author_name: 'Devendra Pratap Singh',
    role_title: 'Independent Political Science Scholar',
    university: 'Jawaharlal Nehru University (JNU) Alumnus',
    service_name: 'Literature Search & Research Support',
    rating: 5,
    quote: 'Their systematic literature mapping saved me months of aimless browsing. They produced a thematic matrix with over 60 verified peer-reviewed articles and an exported Zotero library that formed the bedrock of my monograph.',
    date: 'August 2026',
    is_verified: true,
    avatar_initials: 'DS'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'services',
    question: 'Do you guarantee that my paper will be published in a specific journal?',
    answer: 'No. In strict accordance with our Academic Integrity Policy, AcademicPro India never guarantees publication or acceptance. Legitimate peer-reviewed journals maintain independent editorial boards and blind peer reviewers. We provide ethical research guidance, methodological validation, language editing, and formatting compliance to maximize your paper’s scholarly rigor.',
    is_featured: true
  },
  {
    id: 'faq-2',
    category: 'services',
    question: 'Do you write theses or dissertations from scratch?',
    answer: 'No. We strictly uphold academic ethics. We do not write papers or theses on behalf of students or researchers. Our mission is to provide professional guidance, developmental editing, statistical consultation, literature discovery, and formatting support to help you author your own research with excellence.',
    is_featured: true
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'How is service pricing calculated?',
    answer: 'Because research projects vary substantially in discipline, word count, mathematical complexity, and empirical scope, we use a transparent quotation-based model. For thesis editing, pricing is transparently based on word count (typically ₹1.20 - ₹1.80/word). For topic guidance, synopsis review, or publication assistance, we provide fixed milestone-based quotations after reviewing your specific requirements.',
    is_featured: true
  },
  {
    id: 'faq-4',
    category: 'confidentiality',
    question: 'How do you safeguard the confidentiality of my unpublished research data?',
    answer: 'We treat intellectual property with utmost seriousness. All uploaded documents, draft manuscripts, and raw data are stored in private, encrypted vaults with strict access controls. Only your assigned academic consultant and senior editor have access. We sign mutual Non-Disclosure Agreements (NDAs) upon request before document exchange.',
    is_featured: true
  },
  {
    id: 'faq-5',
    category: 'timelines',
    question: 'What is the typical turnaround time for a thesis or synopsis review?',
    answer: 'Synopsis reviews typically take 4 to 6 business days. Research paper structuring takes 5 to 8 business days. For full doctoral theses (60,000 to 100,000 words), standard delivery is 10 to 18 business days. Rush service is available on request depending on consultant availability.',
    is_featured: true
  },
  {
    id: 'faq-6',
    category: 'payments_revisions',
    question: 'What is your revision and payment milestone policy?',
    answer: 'Projects above ₹5,000 are split into clear milestones (typically 50% advance and 50% upon milestone deliverables). Every project includes up to two rounds of free follow-up clarification and editorial revision within 14 days of deliverable receipt.',
    is_featured: false
  },
  {
    id: 'faq-7',
    category: 'services',
    question: 'Can I visit your office in Mathura, Uttar Pradesh for an in-person consultation?',
    answer: 'Yes! We welcome scholars, researchers, and faculty members to our Mathura research office. In-person consultations can be booked directly through our consultation scheduler or via WhatsApp hotline (+91 9760498896).',
    is_featured: true
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'how-to-formulate-bulletproof-phd-research-questions',
    title: 'How to Formulate Bulletproof PhD Research Questions & Hypotheses',
    excerpt: 'A step-by-step methodological guide for doctoral scholars to craft clear, researchable, and theoretically grounded research questions that pass DRC scrutiny.',
    content: `Formulating effective research questions is the foundational pillar of any doctoral dissertation. Weak or overly broad questions invite immediate skepticism during initial Departmental Research Committee (DRC) defenses.

### 1. The FINER Framework
Before committing to a research question, evaluate it against the FINER criteria:
- **Feasible**: Do you have access to the required sample size, technical instruments, software, and financial resources within the 3-5 year doctoral timeframe?
- **Interesting**: Does the question ignite scholarly curiosity among researchers in your domain?
- **Novel**: Does answering it genuinely advance existing literature, or is it merely re-testing established truths?
- **Ethical**: Can the investigation be carried out with complete institutional ethical compliance and participant consent?
- **Relevant**: Will the findings impact institutional policy, theoretical paradigms, or societal welfare?

### 2. Moving from Broad Topic to Specific Questions
Begin with a broad thematic area, zoom into a documented research gap, and craft two levels of questions:
1. **The Overarching Central Question**: Defining the core inquiry of the doctoral work.
2. **Sub-Questions (3 to 4 max)**: Directly mapping to each empirical chapter in your dissertation.

At AcademicPro India, our research consultants assist scholars in refining conceptual frameworks into precise, defensible research designs.`,
    read_time: '6 min read',
    author: 'Dr. Ananya Mishra, Research Methodologist',
    category: 'Research Methodology',
    published_date: 'November 12, 2026',
    tags: ['PhD Guidance', 'Research Questions', 'Doctoral Synopsis']
  },
  {
    id: 'blog-2',
    slug: 'identifying-ugc-care-scopus-indexed-journals-avoid-predatory',
    title: 'How to Identify Genuine Scopus & UGC-CARE Journals (And Avoid Predatory Scams)',
    excerpt: 'Crucial verification steps to protect your doctoral publication credentials from cloned websites, hijackers, and unindexed fake journals.',
    content: `The pressure to publish mandatory papers for PhD award and faculty promotion has unfortunately fueled a multi-crore industry of predatory and cloned journals in India.

### The Warning Signs of Predatory Journals
- Promises of "Guaranteed Publication within 48 to 72 Hours"
- Unsolicited emails praising your previous work and demanding submission
- Generic email addresses (e.g. editor.journal@gmail.com rather than institutional domains)
- Misleading impact metrics (e.g., "Universal Impact Factor", "Global Scientific Index" instead of genuine Clarivate Journal Citation Reports or Elsevier CiteScore)

### The 4-Step Verification Protocol
1. **Verify Directly on Scopus.com**: Never trust the journal website badge. Visit [scopus.com/sources](https://www.scopus.com/sources) and search by ISSN or exact title. Ensure the status reads *Active*.
2. **Consult UGC-CARE Portal**: Check whether the journal is listed in UGC-CARE List Group I (Indian journals evaluated by UGC-CARE protocols) or Group II (Web of Science / Scopus indexed).
3. **Inspect the Editorial Board**: Search for named editorial board members on their respective university faculty pages. Reputable journals have active academics listed with institutional emails.
4. **Compare ISSN & URL**: Ensure the website matches the official registered domain on ISSN.org, as cloned journals often copy legitimate journal names but use '.org', '.co.in', or hyphenated variants.`,
    read_time: '8 min read',
    author: 'Dr. R. K. Verma, Senior Academic Advisor',
    category: 'Publication Ethics',
    published_date: 'October 28, 2026',
    tags: ['Scopus', 'UGC-CARE', 'Publication Ethics', 'Predatory Journals']
  },
  {
    id: 'blog-3',
    slug: 'structuring-a-literature-review-matrix-chapter-2',
    title: 'Structuring a Flawless Chapter 2: The Thematic Literature Review Matrix',
    excerpt: 'Stop writing chronological book reports. Discover how to synthesize previous scholarship thematically with a structured research matrix.',
    content: `One of the most frequent criticisms external thesis examiners write is: *"Chapter 2 reads like an annotated list of past papers rather than a critical synthesis."*

### Why Chronological Summaries Fail
Listing *“Author A (2018) found X. Author B (2020) found Y. Author C (2022) found Z.”* demonstrates that you have read papers, but it fails to demonstrate scholarly synthesis. Doctoral scholarship requires you to identify points of convergence, divergence, and unexamined blind spots.

### Building a Thematic Synthesis Matrix
Divide your literature chapter into 3-4 thematic sub-domains:
1. **Theoretical Foundations**: The established theories underpinning your variables.
2. **Methodological Approaches**: How past researchers measured your construct (qualitative vs. quantitative).
3. **Empirical Findings & Gaps**: What is conclusively proven, what remains disputed, and what has never been examined in your geographical or contextual setting.

Use a structured matrix comparing author, methodology, key findings, limitations, and direct relevance to your research question. AcademicPro India helps scholars build structured literature matrices with complete Zotero/Mendeley integration.`,
    read_time: '7 min read',
    author: 'Prof. S. N. Dwivedi, Senior Academic Editor',
    category: 'Thesis Writing',
    published_date: 'October 15, 2026',
    tags: ['Literature Review', 'Thesis Writing', 'PhD Defense']
  }
];

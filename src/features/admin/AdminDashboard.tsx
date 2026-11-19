import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  FolderKanban, 
  FileCheck, 
  DollarSign, 
  Plus, 
  CheckCircle2, 
  Search, 
  TrendingUp,
  HelpCircle
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { CacheStore, subscribeToCache } from '../../lib/cacheStore';
import { LeadStatus, ProjectStatus } from '../../types';

export const AdminDashboard: React.FC = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    return subscribeToCache(() => setTick(t => t + 1));
  }, []);

  const inquiries = CacheStore.getInquiries();
  const projects = CacheStore.getProjects();
  const services = CacheStore.getServices();
  const payments = CacheStore.getPayments();
  const faqs = CacheStore.getFAQs();

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'projects' | 'services' | 'finance' | 'cms'>('overview');

  // Leads filter & conversion modal
  const [leadFilter, setLeadFilter] = useState<string>('all');
  const [leadSearch, setLeadSearch] = useState('');
  const [selectedLeadForConvert, setSelectedLeadForConvert] = useState<string | null>(null);
  const [convertEstAmount, setConvertEstAmount] = useState<number>(8500);

  // Project status update modal
  const [selectedProjForUpdate, setSelectedProjForUpdate] = useState<string | null>(null);
  const [newProjStatus, setNewProjStatus] = useState<ProjectStatus>('in_progress');
  const [newStageLabel, setNewStageLabel] = useState('');

  // FAQ Modal
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');
  const [newFaqModalOpen, setNewFaqModalOpen] = useState(false);

  // Analytics Metrics
  const totalRevenue = payments.filter(p => p.status === 'verified').reduce((acc, curr) => acc + curr.amount, 0);
  const activeProjectsCount = projects.filter(p => p.status !== 'completed' && p.status !== 'closed').length;
  const newLeadsCount = inquiries.filter(i => i.status === 'new').length;
  const conversionRate = inquiries.length > 0 
    ? Math.round((inquiries.filter(i => i.status === 'converted').length / inquiries.length) * 100) 
    : 35;

  const filteredInquiries = inquiries.filter(inq => {
    const matchesFilter = leadFilter === 'all' || inq.status === leadFilter;
    const matchesSearch = inq.full_name.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          inq.inquiry_number.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          inq.university.toLowerCase().includes(leadSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleConvertLead = () => {
    if (!selectedLeadForConvert) return;
    CacheStore.convertInquiryToProject(selectedLeadForConvert, convertEstAmount);
    setSelectedLeadForConvert(null);
    setActiveTab('projects');
  };

  const handleUpdateProjectStatus = () => {
    if (!selectedProjForUpdate) return;
    CacheStore.updateProjectStatus(selectedProjForUpdate, newProjStatus, newStageLabel);
    setSelectedProjForUpdate(null);
  };

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaqQuestion.trim() || !newFaqAnswer.trim()) return;
    CacheStore.addFAQ({
      question: newFaqQuestion.trim(),
      answer: newFaqAnswer.trim(),
      category: 'services',
      is_featured: true
    });
    setNewFaqQuestion('');
    setNewFaqAnswer('');
    setNewFaqModalOpen(false);
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen py-8 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#071E46] text-white p-6 sm:p-8 rounded-3xl border border-[#102F60] shadow-premium flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm">Executive Administration Panel</Badge>
              <span className="text-xs text-amber-300">Director Mode (AcademicPro India)</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mt-1">
              Business Operations & Governance
            </h1>
            <p className="text-xs text-slate-300">
              Lead pipelines, consultant allocations, milestone QA, payments, and website CMS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              icon={<Plus className="w-3.5 h-3.5" />}
              onClick={() => setNewFaqModalOpen(true)}
              className="text-xs font-bold"
            >
              Add FAQ / Policy Item
            </Button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 text-xs font-semibold">
          {[
            { id: 'overview', label: 'Overview & KPIs', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'leads', label: `Inquiries & Leads (${newLeadsCount} New)`, icon: <Users className="w-4 h-4" /> },
            { id: 'projects', label: `Projects (${activeProjectsCount} Active)`, icon: <FolderKanban className="w-4 h-4" /> },
            { id: 'services', label: 'Service Catalogue & Rates', icon: <FileCheck className="w-4 h-4" /> },
            { id: 'finance', label: 'Financials & Invoices', icon: <DollarSign className="w-4 h-4" /> },
            { id: 'cms', label: 'Website CMS & FAQs', icon: <HelpCircle className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#071E46] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Overview & Analytics */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card padding="md" className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Total Inquiries</span>
                  <Users className="w-4 h-4 text-[#D6A52B]" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#071E46] mt-2">{inquiries.length}</div>
                <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{newLeadsCount} awaiting review</span>
                </div>
              </Card>

              <Card padding="md" className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Active Research Projects</span>
                  <FolderKanban className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#071E46] mt-2">{activeProjectsCount}</div>
                <div className="text-[11px] text-slate-500 mt-1">Under consultant review</div>
              </Card>

              <Card padding="md" className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Total Revenue (Verified)</span>
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-serif font-bold text-emerald-700 mt-2">₹{totalRevenue.toLocaleString()}</div>
                <div className="text-[11px] text-slate-500 mt-1">100% server verified</div>
              </Card>

              <Card padding="md" className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Lead Conversion Rate</span>
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#071E46] mt-2">{conversionRate}%</div>
                <div className="text-[11px] text-emerald-600 mt-1">Above academic benchmark</div>
              </Card>
            </div>

            {/* Quick Action Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Inbound Leads */}
              <Card padding="md" className="bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-[#071E46]">
                    Recent Inbound Leads
                  </h3>
                  <button onClick={() => setActiveTab('leads')} className="text-xs font-semibold text-[#D6A52B] hover:underline">
                    View All →
                  </button>
                </div>

                <div className="space-y-2">
                  {inquiries.slice(0, 4).map(inq => (
                    <div key={inq.id} className="p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-[#071E46]">{inq.full_name} ({inq.academic_level})</div>
                        <div className="text-slate-500 text-[11px]">{inq.university} • {inq.service_title}</div>
                      </div>
                      <Badge variant={inq.status === 'new' ? 'amber' : 'green'}>{inq.status}</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Active Projects Status */}
              <Card padding="md" className="bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-[#071E46]">
                    Active Project Progress
                  </h3>
                  <button onClick={() => setActiveTab('projects')} className="text-xs font-semibold text-[#D6A52B] hover:underline">
                    Manage →
                  </button>
                </div>

                <div className="space-y-2">
                  {projects.map(p => (
                    <div key={p.id} className="p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-[#071E46]">{p.project_code}: {p.client_name}</div>
                        <div className="text-slate-500 text-[11px]">{p.current_stage_label}</div>
                      </div>
                      <span className="font-mono font-semibold text-emerald-600">₹{p.paid_amount} / ₹{p.total_amount}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Tab 2: Leads Pipeline Management */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={e => setLeadSearch(e.target.value)}
                    placeholder="Search scholar name, university, or ID..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                  />
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs">
                {['all', 'new', 'contacted', 'qualified', 'converted'].map(st => (
                  <button
                    key={st}
                    onClick={() => setLeadFilter(st)}
                    className={`px-3 py-1.5 rounded-lg capitalize font-medium ${
                      leadFilter === st ? 'bg-[#071E46] text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8FAFC] border-b border-slate-200 text-slate-600 font-semibold">
                    <tr>
                      <th className="py-3 px-4">Inquiry ID & Scholar</th>
                      <th className="py-3 px-4">University & Field</th>
                      <th className="py-3 px-4">Requested Service</th>
                      <th className="py-3 px-4">Deadline</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredInquiries.map(inq => (
                      <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-mono text-[11px] font-bold text-[#071E46]">{inq.inquiry_number}</div>
                          <div className="font-semibold text-slate-900">{inq.full_name}</div>
                          <div className="text-slate-500 text-[10px]">{inq.phone} • {inq.email}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium text-slate-800">{inq.university}</div>
                          <div className="text-slate-500 text-[11px]">{inq.research_field}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-700">{inq.service_title}</td>
                        <td className="py-3 px-4 text-slate-500">{inq.expected_deadline}</td>
                        <td className="py-3 px-4">
                          <select
                            value={inq.status}
                            onChange={e => CacheStore.updateInquiryStatus(inq.id, e.target.value as LeadStatus)}
                            className="text-xs p-1 rounded-lg border border-slate-300 bg-white"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="consultation_scheduled">Consultation Scheduled</option>
                            <option value="quotation_sent">Quotation Sent</option>
                            <option value="converted">Converted</option>
                            <option value="lost">Lost</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          {inq.status !== 'converted' && (
                            <Button
                              variant="gold"
                              size="sm"
                              onClick={() => {
                                setSelectedLeadForConvert(inq.id);
                                setConvertEstAmount(8500);
                              }}
                              className="text-[11px] font-bold"
                            >
                              Convert to Project
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Projects Management */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#071E46]">Master Project Registry</h3>
            <div className="grid grid-cols-1 gap-4">
              {projects.map(proj => (
                <Card key={proj.id} padding="md" className="bg-white space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#071E46]">{proj.project_code}</span>
                        <Badge variant="blue">{proj.status.toUpperCase()}</Badge>
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#071E46] mt-0.5">{proj.title}</h4>
                      <p className="text-xs text-slate-500">Client: {proj.client_name} ({proj.client_phone})</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedProjForUpdate(proj.id);
                          setNewProjStatus(proj.status);
                          setNewStageLabel(proj.current_stage_label);
                        }}
                        className="text-xs"
                      >
                        Update Stage Status
                      </Button>
                    </div>
                  </div>

                  {/* Milestones QA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                    {proj.milestones.map(m => (
                      <button
                        key={m.id}
                        onClick={() => CacheStore.toggleMilestone(proj.id, m.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-colors flex items-start gap-2 ${
                          m.status === 'completed' ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 ${m.status === 'completed' ? 'text-emerald-600' : 'text-slate-300'}`} />
                        <div>
                          <div className="font-semibold text-slate-900">{m.title}</div>
                          <div className="text-[10px] text-slate-500">Due: {m.due_date}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Services Management */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#071E46]">Service Catalogue & Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map(s => (
                <Card key={s.id} padding="md" className="bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#071E46]">{s.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${s.is_active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>
                      {s.is_active ? 'Active' : 'Disabled'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{s.short_description}</p>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                    <span className="font-semibold text-[#071E46]">Starting: {s.starting_price || 'Quote based'}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => CacheStore.toggleServiceActive(s.id)}
                      className="text-xs"
                    >
                      Toggle Status
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Financial Management */}
        {activeTab === 'finance' && (
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#071E46]">Financial Records & Invoices</h3>
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F8FAFC] border-b border-slate-200 text-slate-600 font-semibold">
                  <tr>
                    <th className="py-3 px-4">Invoice #</th>
                    <th className="py-3 px-4">Project</th>
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Method & Ref</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {payments.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-[#071E46]">{p.invoice_number}</td>
                      <td className="py-3 px-4 font-mono">{p.project_code}</td>
                      <td className="py-3 px-4">{p.client_name}</td>
                      <td className="py-3 px-4 font-bold text-emerald-700">₹{p.amount.toLocaleString()}</td>
                      <td className="py-3 px-4 text-slate-500 uppercase">{p.payment_method} ({p.transaction_ref})</td>
                      <td className="py-3 px-4">
                        <Badge variant="green">{p.status.toUpperCase()}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 6: CMS Management */}
        {activeTab === 'cms' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#071E46]">Website FAQs & Knowledgebase</h3>
              <Button variant="gold" size="sm" onClick={() => setNewFaqModalOpen(true)} className="text-xs font-bold">
                Add FAQ
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map(f => (
                <Card key={f.id} padding="md" className="bg-white space-y-2">
                  <div className="font-semibold text-xs text-[#071E46]">{f.question}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.answer}</p>
                  <div className="pt-2 text-right">
                    <button
                      onClick={() => CacheStore.deleteFAQ(f.id)}
                      className="text-[11px] text-rose-600 hover:underline"
                    >
                      Delete FAQ
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Convert Lead to Project Modal */}
      <Modal
        isOpen={Boolean(selectedLeadForConvert)}
        onClose={() => setSelectedLeadForConvert(null)}
        title="Convert Lead into Formal Project"
        subtitle="This generates project code, initial milestones, and quotation record."
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-semibold text-[#071E46] mb-1">
              Agreed Project Value (₹) *
            </label>
            <input
              type="number"
              value={convertEstAmount}
              onChange={e => setConvertEstAmount(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <Button variant="gold" fullWidth onClick={handleConvertLead} className="text-xs font-bold">
            Confirm & Activate Project
          </Button>
        </div>
      </Modal>

      {/* Update Project Status Modal */}
      <Modal
        isOpen={Boolean(selectedProjForUpdate)}
        onClose={() => setSelectedProjForUpdate(null)}
        title="Update Project Lifecycle Stage"
        subtitle="Advance client through the 11-stage project workflow."
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-semibold text-[#071E46] mb-1">Select Status *</label>
            <select
              value={newProjStatus}
              onChange={e => setNewProjStatus(e.target.value as ProjectStatus)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            >
              <option value="inquiry_received">1. Inquiry Received</option>
              <option value="requirements_under_review">2. Requirements Under Review</option>
              <option value="consultation_scheduled">3. Consultation Scheduled</option>
              <option value="quotation_sent">4. Quotation Sent</option>
              <option value="awaiting_payment">5. Awaiting Payment</option>
              <option value="project_confirmed">6. Project Confirmed</option>
              <option value="in_progress">7. In Progress</option>
              <option value="under_review">8. Under Review</option>
              <option value="revision_requested">9. Revision Requested</option>
              <option value="completed">10. Completed</option>
              <option value="closed">11. Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#071E46] mb-1">
              Custom Stage Description (Visible to Client)
            </label>
            <input
              type="text"
              value={newStageLabel}
              onChange={e => setNewStageLabel(e.target.value)}
              placeholder="e.g. Pass 2 Structural Chapter Review in Progress"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <Button variant="gold" fullWidth onClick={handleUpdateProjectStatus} className="text-xs font-bold">
            Save Status Update
          </Button>
        </div>
      </Modal>

      {/* Add FAQ Modal */}
      <Modal
        isOpen={newFaqModalOpen}
        onClose={() => setNewFaqModalOpen(false)}
        title="Create New FAQ Item"
        subtitle="Manage public website questions without modifying source code."
      >
        <form onSubmit={handleAddFaq} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-[#071E46] mb-1">Question *</label>
            <input
              type="text"
              required
              value={newFaqQuestion}
              onChange={e => setNewFaqQuestion(e.target.value)}
              placeholder="e.g. What is the turnaround time for SPSS data analysis?"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#071E46] mb-1">Answer *</label>
            <textarea
              required
              rows={4}
              value={newFaqAnswer}
              onChange={e => setNewFaqAnswer(e.target.value)}
              placeholder="Provide a detailed, ethical response..."
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <Button type="submit" variant="gold" fullWidth className="text-xs font-bold">
            Publish FAQ Item
          </Button>
        </form>
      </Modal>
    </div>
  );
};

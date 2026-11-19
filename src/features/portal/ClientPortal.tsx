import { useState, useEffect } from 'react';
import { 
  FolderKanban, 
  FileText, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  UploadCloud, 
  Download, 
  CheckCircle2, 
  Clock, 
  Send, 
  Building
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { CacheStore, subscribeToCache } from '../../lib/cacheStore';
import { ProjectStatus, UserProfile } from '../../types';
import confetti from 'canvas-confetti';

export interface ClientPortalProps {
  currentUser: UserProfile | null;
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  onOpenBooking: () => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({
  currentUser,
  onOpenBooking,
}) => {
  const [, setTick] = useState(0);

  useEffect(() => {
    return subscribeToCache(() => setTick(t => t + 1));
  }, []);

  const projects = CacheStore.getProjects();
  const quotations = CacheStore.getQuotations();
  const consultations = CacheStore.getConsultations();

  // Active tab inside portal
  const [activeTab, setActiveTab] = useState<'projects' | 'documents' | 'quotations' | 'messages' | 'consultations'>('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || '');

  // Modal states
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocCategory, setNewDocCategory] = useState<'synopsis' | 'manuscript' | 'dataset' | 'reference'>('manuscript');
  const [selectedFileName, setSelectedFileName] = useState('');
  
  // Messaging state
  const [messageText, setMessageText] = useState('');

  const currentProject = projects.find(p => p.id === selectedProjectId) || projects[0];
  const projectDocs = CacheStore.getDocuments(currentProject?.id);
  const projectMessages = currentProject ? CacheStore.getMessages(currentProject.id) : [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !currentProject) return;

    CacheStore.addMessage({
      project_id: currentProject.id,
      sender_id: currentUser?.id || 'usr-client-01',
      sender_name: currentUser?.full_name || 'Vikas Kushwaha',
      sender_role: 'client',
      message: messageText.trim()
    });

    setMessageText('');
  };

  const handleUploadDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocTitle.trim() || !currentProject) return;

    CacheStore.addDocument({
      project_id: currentProject.id,
      uploader_id: currentUser?.id || 'usr-client-01',
      uploader_name: currentUser?.full_name || 'Vikas Kushwaha',
      title: newDocTitle.trim(),
      category: newDocCategory,
      file_name: selectedFileName || `${newDocTitle.trim().replace(/\s+/g, '_')}.docx`,
      file_size_formatted: '2.4 MB',
      file_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      file_url: '#',
      version: 1,
      is_deliverable: false
    });

    setUploadModalOpen(false);
    setNewDocTitle('');
    setSelectedFileName('');
  };

  const handleSimulatePayment = (amount: number, quotationId?: string) => {
    if (!currentProject) return;

    CacheStore.recordPayment({
      quotation_id: quotationId,
      project_id: currentProject.id,
      project_code: currentProject.project_code,
      client_id: currentUser?.id || 'usr-client-01',
      client_name: currentUser?.full_name || 'Vikas Kushwaha',
      amount: amount,
      payment_method: 'upi',
      transaction_ref: `UPI/${Date.now().toString().slice(-8)}/academicpro`,
      status: 'verified',
    });

    if (quotationId) {
      CacheStore.updateQuotationStatus(quotationId, 'accepted');
    }

    try {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
    } catch {
      // ignore
    }

    setPaymentModalOpen(false);
  };

  // Status mapping
  const statusLabels: Record<ProjectStatus, { label: string; variant: 'gold' | 'navy' | 'green' | 'amber' | 'red' | 'blue' }> = {
    inquiry_received: { label: 'Inquiry Received', variant: 'neutral' as any },
    requirements_under_review: { label: 'Requirements Under Review', variant: 'amber' },
    consultation_scheduled: { label: 'Consultation Scheduled', variant: 'blue' },
    quotation_sent: { label: 'Quotation Sent', variant: 'amber' },
    awaiting_payment: { label: 'Awaiting Payment', variant: 'amber' },
    project_confirmed: { label: 'Project Confirmed', variant: 'blue' },
    in_progress: { label: 'In Progress', variant: 'blue' },
    under_review: { label: 'Under Review', variant: 'amber' },
    revision_requested: { label: 'Revision Requested', variant: 'red' },
    completed: { label: 'Completed', variant: 'green' },
    closed: { label: 'Closed', variant: 'neutral' as any },
  };

  return (
    <div className="bg-[#F7F5ED] min-h-screen py-8 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Scholar Welcome Header */}
        <div className="bg-[#0B2D3A] text-white p-6 sm:p-8 rounded-3xl border border-[#134455] shadow-premium flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm">Client Research Workspace</Badge>
              <span className="text-xs text-slate-300">ID: {currentUser?.id || 'usr-client-01'}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Welcome back, {currentUser?.full_name || 'Vikas Kushwaha'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-[#0082A6]" />
              <span>{currentUser?.university || 'Aligarh Muslim University (AMU)'}</span>
              <span>•</span>
              <span>{currentUser?.academic_level || 'PhD Research Scholar'}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
              onClick={onOpenBooking}
              className="text-xs"
            >
              Book Consultation
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<UploadCloud className="w-3.5 h-3.5" />}
              onClick={() => setUploadModalOpen(true)}
              className="text-xs"
            >
              Upload Manuscript
            </Button>
          </div>
        </div>

        {/* Quick KPI Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card padding="sm" className="bg-white">
            <div className="text-xs text-slate-500 font-medium">Active Projects</div>
            <div className="text-2xl font-serif font-bold text-[#0B2D3A] mt-1">{projects.length}</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">1 currently in review</div>
          </Card>
          <Card padding="sm" className="bg-white">
            <div className="text-xs text-slate-500 font-medium">Documents Stored</div>
            <div className="text-2xl font-serif font-bold text-[#0B2D3A] mt-1">{projectDocs.length}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Encrypted private storage</div>
          </Card>
          <Card padding="sm" className="bg-white">
            <div className="text-xs text-slate-500 font-medium">Quotations</div>
            <div className="text-2xl font-serif font-bold text-[#0B2D3A] mt-1">{quotations.length}</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">Approved & activated</div>
          </Card>
          <Card padding="sm" className="bg-white">
            <div className="text-xs text-slate-500 font-medium">Consultations</div>
            <div className="text-2xl font-serif font-bold text-[#0B2D3A] mt-1">{consultations.length}</div>
            <div className="text-[11px] text-blue-600 mt-0.5">Next on Nov 21</div>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 text-xs font-semibold">
          {[
            { id: 'projects', label: 'My Projects & Milestones', icon: <FolderKanban className="w-4 h-4" /> },
            { id: 'documents', label: 'Document Vault & Deliverables', icon: <FileText className="w-4 h-4" /> },
            { id: 'quotations', label: 'Quotations & Invoices', icon: <CreditCard className="w-4 h-4" /> },
            { id: 'messages', label: 'Project Communication', icon: <MessageSquare className="w-4 h-4" /> },
            { id: 'consultations', label: 'Consultations', icon: <Calendar className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#0B2D3A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Projects & Milestones */}
        {activeTab === 'projects' && currentProject && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Project Overview & Lifecycle Status */}
            <div className="lg:col-span-2 space-y-6">
              <Card padding="md" className="bg-white space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#0B2D3A]">{currentProject.project_code}</span>
                      <Badge variant={statusLabels[currentProject.status]?.variant || 'blue'}>
                        {statusLabels[currentProject.status]?.label || currentProject.status}
                      </Badge>
                      {projects.length > 1 && (
                        <select
                          value={selectedProjectId}
                          onChange={e => setSelectedProjectId(e.target.value)}
                          className="text-[11px] p-1 rounded-lg border border-slate-300 bg-slate-50 font-medium text-slate-700"
                        >
                          {projects.map(p => (
                            <option key={p.id} value={p.id}>{p.project_code} - {p.service_title}</option>
                          ))}
                        </select>
                      )}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B2D3A] mt-1">
                      {currentProject.title}
                    </h3>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-500">Target Completion</div>
                    <div className="font-semibold text-xs text-slate-800">{currentProject.target_completion_date}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Assigned Consultant */}
                <div className="p-3 rounded-2xl bg-[#F7F5ED] border border-[#D6E6EB] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Assigned Academic Lead:</span>
                    <span className="font-bold text-[#0B2D3A]">{currentProject.assigned_consultant_name}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab('messages')}
                    className="text-xs"
                  >
                    Direct Message
                  </Button>
                </div>

                {/* Milestone Progress List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm font-bold text-[#0B2D3A]">
                      Project Deliverable Milestones
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      {currentProject.milestones.filter(m => m.status === 'completed').length} of {currentProject.milestones.length} Completed
                    </span>
                  </div>

                  <div className="space-y-2">
                    {currentProject.milestones.map((m, idx) => (
                      <div
                        key={m.id}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${
                          m.status === 'completed'
                            ? 'bg-emerald-50/50 border-emerald-200'
                            : m.status === 'in_progress'
                            ? 'bg-blue-50/40 border-blue-200'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {m.status === 'completed' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : m.status === 'in_progress' ? (
                            <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                              {idx + 1}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-xs text-slate-900">{m.title}</span>
                            <span className="text-[10px] text-slate-500 shrink-0">Due: {m.due_date}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5">{m.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Payment & Quotation Action Card */}
            <div className="space-y-6">
              <Card padding="md" className="bg-white space-y-4">
                <h4 className="font-serif text-base font-bold text-[#0B2D3A] border-b border-slate-100 pb-2">
                  Financial & Payment Status
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Agreed Project Value:</span>
                    <span className="font-bold text-slate-800">₹{currentProject.total_amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Paid Amount:</span>
                    <span className="font-bold text-emerald-600">₹{currentProject.paid_amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Balance Remaining:</span>
                    <span className="font-bold text-[#0B2D3A]">
                      ₹{(currentProject.total_amount - currentProject.paid_amount).toLocaleString()}
                    </span>
                  </div>
                </div>

                {currentProject.total_amount > currentProject.paid_amount ? (
                  <Button
                    variant="gold"
                    fullWidth
                    onClick={() => setPaymentModalOpen(true)}
                    className="text-xs font-bold"
                  >
                    Pay Milestone Balance
                  </Button>
                ) : (
                  <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Project is 100% paid and fully active.</span>
                  </div>
                )}
              </Card>

              {/* Quick Actions Card */}
              <Card padding="md" className="bg-white space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#0B2D3A]">
                  Need Assistance or Clarification?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have doubts about your chapter edits, supervisor suggestions, or sampling framework?
                </p>
                <div className="space-y-2 pt-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={onOpenBooking}
                    className="text-xs"
                  >
                    Schedule Clarification Call
                  </Button>
                  <a
                    href="https://wa.me/919760498896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 px-3 rounded-xl bg-[#25D366]/10 text-emerald-800 hover:bg-[#25D366]/20 font-semibold text-xs transition-colors"
                  >
                    WhatsApp Academic Coordinator
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Tab 2: Document Vault */}
        {activeTab === 'documents' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0B2D3A]">Secure Document Vault</h3>
                <p className="text-xs text-slate-500">Uploaded manuscripts, institutional guidelines, and final deliverables.</p>
              </div>
              <Button
                variant="gold"
                size="sm"
                icon={<UploadCloud className="w-4 h-4" />}
                onClick={() => setUploadModalOpen(true)}
                className="text-xs"
              >
                Upload New Document
              </Button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F7F5ED] border-b border-slate-200 text-slate-600 font-semibold">
                    <tr>
                      <th className="py-3 px-4">Document Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Version</th>
                      <th className="py-3 px-4">Size</th>
                      <th className="py-3 px-4">Uploaded</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {projectDocs.map(doc => (
                      <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#0B2D3A] flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#0082A6]" />
                          <span>{doc.title}</span>
                          {doc.is_deliverable && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                              Final Deliverable
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 capitalize text-slate-600">{doc.category}</td>
                        <td className="py-3 px-4 font-mono">v{doc.version}</td>
                        <td className="py-3 px-4 text-slate-500">{doc.file_size_formatted}</td>
                        <td className="py-3 px-4 text-slate-500">{new Date(doc.uploaded_at).toLocaleDateString()}</td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => alert(`Downloading verified file: ${doc.file_name}`)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2D3A] hover:text-[#0082A6] transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Quotations & Invoices */}
        {activeTab === 'quotations' && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#0B2D3A]">Quotations & Invoices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotations.map(q => (
                <Card key={q.id} padding="md" className="bg-white space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <div className="font-mono text-xs font-bold text-[#0B2D3A]">{q.quote_number}</div>
                      <h4 className="font-serif font-bold text-base text-[#0B2D3A]">{q.service_title}</h4>
                    </div>
                    <Badge variant={q.status === 'accepted' ? 'green' : 'amber'}>
                      {q.status.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {q.items.map(item => (
                      <div key={item.id} className="flex justify-between text-slate-700 py-1 border-b border-slate-50">
                        <span>{item.description}</span>
                        <span className="font-semibold">₹{item.total.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-2xl bg-[#F7F5ED] border border-[#D6E6EB] space-y-1 text-xs">
                    <div className="flex justify-between font-bold text-sm text-[#0B2D3A]">
                      <span>Total Agreed Amount:</span>
                      <span>₹{q.net_amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-500 text-[11px]">
                      <span>Advance Required:</span>
                      <span>₹{q.advance_required.toLocaleString()}</span>
                    </div>
                  </div>

                  {q.status !== 'accepted' && (
                    <Button
                      variant="gold"
                      fullWidth
                      onClick={() => handleSimulatePayment(q.advance_required, q.id)}
                      className="text-xs font-bold"
                    >
                      Accept Quote & Pay Advance
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Messages */}
        {activeTab === 'messages' && currentProject && (
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle flex flex-col h-[520px]">
            <div className="p-4 border-b border-slate-200 bg-[#F7F5ED] flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0B2D3A]">
                  Project Discussion: {currentProject.project_code}
                </h4>
                <p className="text-[11px] text-slate-500">
                  Direct thread with {currentProject.assigned_consultant_name}
                </p>
              </div>
              <Badge variant="green" size="sm">Active Consultation Thread</Badge>
            </div>

            {/* Message History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {projectMessages.map(msg => {
                const isMe = msg.sender_role === 'client';
                return (
                  <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                    <div className="text-[10px] text-slate-400 mb-0.5">
                      {msg.sender_name} • {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div
                      className={`max-w-md p-3 rounded-2xl text-xs leading-relaxed ${
                        isMe
                          ? 'bg-[#0B2D3A] text-white rounded-br-xs'
                          : 'bg-[#F7F5ED] border border-[#D6E6EB] text-slate-800 rounded-bl-xs'
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 flex gap-2 bg-[#F7F5ED]">
              <input
                type="text"
                value={messageText}
                onChange={e => setMessageText(e.target.value)}
                placeholder="Type your message or query to your research consultant..."
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2D3A] bg-white"
              />
              <Button type="submit" variant="gold" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                Send
              </Button>
            </form>
          </div>
        )}

        {/* Tab 5: Consultations */}
        {activeTab === 'consultations' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#0B2D3A]">Upcoming Consultations</h3>
              <Button variant="gold" size="sm" onClick={onOpenBooking} className="text-xs">
                Schedule New Session
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consultations.map(c => (
                <Card key={c.id} padding="md" className="bg-white space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-sm text-[#0B2D3A]">{c.consultation_type_label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{c.scheduled_date} at {c.scheduled_time}</div>
                    </div>
                    <Badge variant="blue">{c.status}</Badge>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700 truncate">
                    {c.meeting_link}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Upload Document Modal */}
      <Modal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        title="Upload Research Document"
        subtitle="Secure encrypted upload for synopsis, chapter drafts, datasets, or reference guidelines."
      >
        <form onSubmit={handleUploadDocument} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">Document Title *</label>
            <input
              type="text"
              required
              value={newDocTitle}
              onChange={e => setNewDocTitle(e.target.value)}
              placeholder="e.g. Chapter 3 Methodology Revised Draft"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B2D3A] mb-1">Document Category *</label>
            <select
              value={newDocCategory}
              onChange={e => setNewDocCategory(e.target.value as any)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            >
              <option value="synopsis">Synopsis Draft</option>
              <option value="manuscript">Thesis / Paper Manuscript</option>
              <option value="dataset">Raw Dataset / SPSS File</option>
              <option value="reference">University Guidelines / Reference</option>
            </select>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F5ED] border border-dashed border-slate-300 text-center">
            <input
              type="file"
              onChange={e => setSelectedFileName(e.target.files?.[0]?.name || '')}
              className="text-xs"
            />
          </div>

          <Button type="submit" variant="gold" fullWidth className="text-xs font-bold">
            Confirm & Save to Vault
          </Button>
        </form>
      </Modal>

      {/* Payment Modal */}
      <Modal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        title="Simulated Secure Payment"
        subtitle="AcademicPro India UPI & NetBanking Gateway Simulator"
      >
        <div className="space-y-4 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex justify-between text-slate-600">
              <span>Project Code:</span>
              <span className="font-mono font-bold text-slate-900">{currentProject?.project_code}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Payable Amount:</span>
              <span className="font-bold text-emerald-700">₹{(currentProject?.total_amount || 0) - (currentProject?.paid_amount || 0)}</span>
            </div>
          </div>

          <p className="text-slate-500 text-[11px]">
            In production, this module seamlessly communicates with Razorpay / Cashfree webhook signatures for 100% server-verified settlement.
          </p>

          <Button
            variant="gold"
            fullWidth
            onClick={() => handleSimulatePayment((currentProject?.total_amount || 0) - (currentProject?.paid_amount || 0))}
            className="text-xs font-bold"
          >
            Authorize Payment (Simulated)
          </Button>
        </div>
      </Modal>
    </div>
  );
};

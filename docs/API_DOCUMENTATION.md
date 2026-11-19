# AcademicPro India — API & Edge Function Specifications

## 1. REST Endpoints & Data Access

### Inquiries & Leads
- `POST /api/inquiries`: Submit public lead inquiry.
  - Body: `{ full_name, email, phone, academic_level, university, research_field, service_id, project_description, expected_deadline, budget_range }`
  - Response: `{ success: true, inquiry_number: "INQ-2026-XXXX", message: "Logged" }`

### Quotations & Payments
- `POST /api/quotations/accept`: Client accepts quotation and triggers advance payment gateway.
- `POST /api/payments/verify`: Server-side verification of Razorpay signature.
  - Verification: `crypto.createHmac('sha256', secret).update(order_id + "|" + payment_id).digest('hex') === signature`

### Consultations
- `POST /api/consultations/book`: Book 1-on-1 session.
  - Returns meeting link (Google Meet) or Mathura office appointment record.

### Documents
- `GET /api/documents/:id/download`: Generates signed expiring URL for authorized participant only.

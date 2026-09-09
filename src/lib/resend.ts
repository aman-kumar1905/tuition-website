import { Resend } from 'resend';
import { EnquiryFormData } from './schema';
import { siteConfig } from '@/data/site-config';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'admissions@tuitioncentre.internal';
const fromEmail = process.env.FROM_EMAIL || 'enquiries@resend.dev';

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  isMock?: boolean;
  error?: string;
}

export async function sendEnquiryEmail(data: EnquiryFormData): Promise<SendEmailResult> {
  const subject = `New Tuition Enquiry: ${data.studentName} (${data.grade})`;

  const textContent = `
NEW TUITION ADMISSION ENQUIRY
=============================
Student Name:    ${data.studentName}
Parent Name:     ${data.parentName || 'Not specified'}
Contact Phone:   ${data.phone}
Email:           ${data.email}
Grade / Class:   ${data.grade}
Subjects:        ${data.subjects.join(', ')}
Preferred Batch: ${data.preferredBatch}
Message / Notes: ${data.message || 'No additional notes provided.'}

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Institute: ${siteConfig.name}
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF9F6; color: #1B2A4A; padding: 24px; }
    .card { background-color: #FFFFFF; border: 1px solid #E5E0D8; border-radius: 8px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background-color: #1B2A4A; color: #FAF9F6; padding: 20px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; }
    .content { padding: 24px; }
    .row { display: flex; padding: 8px 0; border-bottom: 1px solid #F2EFE9; }
    .label { width: 140px; font-weight: 600; color: #4A5568; }
    .value { flex: 1; color: #1B2A4A; }
    .badge { display: inline-block; background-color: #FDF3EB; color: #E8873A; font-weight: 600; padding: 2px 8px; border-radius: 4px; font-size: 13px; }
    .footer { padding: 16px 24px; background-color: #F2EFE9; font-size: 12px; color: #718096; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Tuition Admission Enquiry</h1>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #FAF9F6; opacity: 0.85;">${siteConfig.name} Admissions Portal</p>
    </div>
    <div class="content">
      <div class="row"><div class="label">Student Name:</div><div class="value"><strong>${data.studentName}</strong></div></div>
      <div class="row"><div class="label">Parent Name:</div><div class="value">${data.parentName || '—'}</div></div>
      <div class="row"><div class="label">Phone:</div><div class="value"><a href="tel:${data.phone}" style="color: #E8873A; text-decoration: none; font-weight: 600;">${data.phone}</a></div></div>
      <div class="row"><div class="label">Email:</div><div class="value"><a href="mailto:${data.email}">${data.email}</a></div></div>
      <div class="row"><div class="label">Grade / Class:</div><div class="value"><span class="badge">${data.grade}</span></div></div>
      <div class="row"><div class="label">Subjects:</div><div class="value">${data.subjects.join(', ')}</div></div>
      <div class="row"><div class="label">Preferred Batch:</div><div class="value" style="text-transform: capitalize;">${data.preferredBatch}</div></div>
      <div class="row" style="border-bottom: none;"><div class="label">Notes:</div><div class="value">${data.message || 'None provided'}</div></div>
    </div>
    <div class="footer">
      Sent from ${siteConfig.name} web enquiry form. Received on ${new Date().toLocaleString()}
    </div>
  </div>
</body>
</html>
`;

  if (!resend) {
    console.info('[Resend Mock Mode] No RESEND_API_KEY detected. Logging enquiry payload:');
    console.info(textContent);
    return {
      success: true,
      isMock: true,
      messageId: `mock-${Date.now()}`,
    };
  }

  try {
    const { data: resData, error } = await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      replyTo: data.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      messageId: resData?.id,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown email dispatch error';
    console.error('[Resend Exception]', errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

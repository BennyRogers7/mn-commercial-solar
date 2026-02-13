import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadData {
  contactName: string;
  buildingAddress: string;
  workEmail: string;
  sqft: number;
  financingPreference: 'cash' | 'loan' | 'ppa';
  systemKW: number;
  grossCost: number;
  netCost: number;
  annualProduction: number;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

function getFinancingLabel(type: string): string {
  switch (type) {
    case 'cash':
      return 'Cash Purchase';
    case 'loan':
      return 'Loan (10yr @ 7.5%)';
    case 'ppa':
      return 'PPA ($0.085/kWh)';
    default:
      return type;
  }
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.contactName || !data.buildingAddress || !data.workEmail) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!notificationEmail) {
      console.error('NOTIFICATION_EMAIL not configured');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
    .section { margin-bottom: 24px; }
    .section-title { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 600; margin-bottom: 8px; letter-spacing: 0.5px; }
    .info-grid { display: grid; gap: 12px; }
    .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
    .info-label { color: #6b7280; }
    .info-value { font-weight: 600; color: #111827; }
    .highlight { background: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
    .footer { background: #1f2937; color: #9ca3af; padding: 20px 30px; border-radius: 0 0 12px 12px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Solar Lead</h1>
      <p style="margin: 8px 0 0; opacity: 0.9;">MN Commercial Solar Estimator</p>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="info-grid">
          <div class="info-row">
            <span class="info-label">Name</span>
            <span class="info-value">${data.contactName}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email</span>
            <span class="info-value">${data.workEmail}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Building Address</span>
            <span class="info-value">${data.buildingAddress}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Building Details</div>
        <div class="info-grid">
          <div class="info-row">
            <span class="info-label">Roof Area</span>
            <span class="info-value">${formatNumber(data.sqft)} sq ft</span>
          </div>
          <div class="info-row">
            <span class="info-label">System Size</span>
            <span class="info-value">${formatNumber(data.systemKW)} kW</span>
          </div>
          <div class="info-row">
            <span class="info-label">Annual Production</span>
            <span class="info-value">${formatNumber(data.annualProduction)} kWh</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">System Estimate</div>
        <div class="info-grid">
          <div class="info-row">
            <span class="info-label">Gross Cost</span>
            <span class="info-value">${formatCurrency(data.grossCost)}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Net Cost (after 30% ITC)</span>
            <span class="info-value">${formatCurrency(data.netCost)}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Financing Preference</div>
        <div style="margin-top: 8px;">
          <span class="highlight">${getFinancingLabel(data.financingPreference)}</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0;">This lead was submitted via the MN Commercial Solar estimator.</p>
      <p style="margin: 8px 0 0;">Respond within 24 hours to maximize conversion.</p>
    </div>
  </div>
</body>
</html>
    `;

    const { error } = await resend.emails.send({
      from: 'MN Commercial Solar <onboarding@resend.dev>',
      to: [notificationEmail],
      subject: `New Lead: ${data.contactName} - ${formatNumber(data.sqft)} sq ft`,
      html: emailHtml,
      replyTo: data.workEmail,
    });

    if (error) {
      console.error('Failed to send email:', error);
      return Response.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

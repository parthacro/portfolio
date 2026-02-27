import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      numberOfDevelopers,
      techStack,
      projectDescription,
      budget,
      timeline,
      additionalRequirements,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !numberOfDevelopers || !techStack || techStack.length === 0 || !projectDescription || !budget || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format tech stack for display
    const techStackList = Array.isArray(techStack) ? techStack.join(', ') : techStack;

    // Build tech badges HTML
    const techBadgesHtml = Array.isArray(techStack)
      ? techStack.map(tech => `<span style="display:inline-block;background-color:#5EBEEB;color:#ffffff;padding:5px 14px;border-radius:20px;font-size:12px;font-weight:600;margin:3px 4px 3px 0;">${tech}</span>`).join('')
      : `<span style="display:inline-block;background-color:#5EBEEB;color:#ffffff;padding:5px 14px;border-radius:20px;font-size:12px;font-weight:600;">${techStack}</span>`;

    // Email content
    const mailOptions = {
      from: `"Hexaloop Hiring" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Hiring Request — ${serviceType} — ${name}`,
      text: `NEW HIRING REQUEST\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\n\nService: ${serviceType}\nTeam Size: ${numberOfDevelopers}\nTech: ${techStackList}\nBudget: ${budget}\nTimeline: ${timeline}\n\nDescription:\n${projectDescription}${additionalRequirements ? `\n\nAdditional:\n${additionalRequirements}` : ''}`,
      html: `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Hiring Request</title>
  <!--[if mso]><style>table,td{font-family:Arial,sans-serif;}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#5EBEEB 0%,#4AADE0 100%);padding:32px 24px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Hexa<span style="color:#e0f4fc;">loop</span></div>
                    <div style="width:40px;height:3px;background-color:rgba(255,255,255,0.5);margin:12px auto 14px;border-radius:2px;"></div>
                    <div style="font-size:18px;font-weight:600;color:#ffffff;">🚀 New Hiring Request</div>
                    <div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:6px;">Someone wants to hire your team!</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:28px 24px 12px;">

              <!-- Service Highlight -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#5EBEEB 0%,#4AADE0 100%);border-radius:12px;margin-bottom:20px;">
                <tr>
                  <td style="padding:18px 20px;text-align:center;">
                    <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">Service Requested</div>
                    <div style="font-size:20px;font-weight:700;color:#ffffff;">${serviceType}</div>
                  </td>
                </tr>
              </table>

              <!-- Contact Info Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDF7FC;border-radius:12px;margin-bottom:20px;">
                <tr>
                  <td style="padding:20px;">
                    <div style="font-size:11px;font-weight:700;color:#5EBEEB;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:14px;">👤 Client Details</div>
                    <!-- Name -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                      <tr>
                        <td style="padding:10px 14px;background-color:#ffffff;border-radius:8px;">
                          <div style="font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;">Name</div>
                          <div style="font-size:15px;color:#1e293b;font-weight:600;">${name}</div>
                        </td>
                      </tr>
                    </table>
                    <!-- Email -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                      <tr>
                        <td style="padding:10px 14px;background-color:#ffffff;border-radius:8px;">
                          <div style="font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;">Email</div>
                          <div style="font-size:15px;"><a href="mailto:${email}" style="color:#5EBEEB;text-decoration:none;font-weight:600;">${email}</a></div>
                        </td>
                      </tr>
                    </table>
                    <!-- Phone -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                      <tr>
                        <td style="padding:10px 14px;background-color:#ffffff;border-radius:8px;">
                          <div style="font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;">Phone</div>
                          <div style="font-size:15px;color:#1e293b;font-weight:600;"><a href="tel:${phone}" style="color:#1e293b;text-decoration:none;">${phone}</a></div>
                        </td>
                      </tr>
                    </table>
                    ${company ? `
                    <!-- Company -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 14px;background-color:#ffffff;border-radius:8px;">
                          <div style="font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:3px;">Company</div>
                          <div style="font-size:15px;color:#1e293b;font-weight:600;">${company}</div>
                        </td>
                      </tr>
                    </table>
                    ` : ''}
                  </td>
                </tr>
              </table>

              <!-- Project Specs Grid -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding-right:6px;width:50%;" valign="top">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDF7FC;border-radius:10px;margin-bottom:12px;">
                      <tr><td style="padding:14px 16px;">
                        <div style="font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Team Size</div>
                        <div style="font-size:16px;font-weight:700;color:#1e293b;">${numberOfDevelopers}</div>
                      </td></tr>
                    </table>
                  </td>
                  <td style="padding-left:6px;width:50%;" valign="top">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDF7FC;border-radius:10px;margin-bottom:12px;">
                      <tr><td style="padding:14px 16px;">
                        <div style="font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Budget</div>
                        <div style="font-size:16px;font-weight:700;color:#1e293b;">${budget}</div>
                      </td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDF7FC;border-radius:10px;">
                      <tr><td style="padding:14px 16px;">
                        <div style="font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;">Timeline</div>
                        <div style="font-size:16px;font-weight:700;color:#1e293b;">${timeline}</div>
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Technologies -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:20px;">
                <tr>
                  <td style="padding:20px;">
                    <div style="font-size:11px;font-weight:700;color:#5EBEEB;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:14px;">⚡ Technologies</div>
                    <div style="line-height:2;">${techBadgesHtml}</div>
                  </td>
                </tr>
              </table>

              <!-- Project Description -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:20px;">
                <tr>
                  <td style="padding:20px;">
                    <div style="font-size:11px;font-weight:700;color:#5EBEEB;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:14px;">📋 Project Description</div>
                    <div style="font-size:14px;line-height:1.7;color:#334155;word-break:break-word;">${projectDescription.replace(/\n/g, '<br>')}</div>
                  </td>
                </tr>
              </table>

              ${additionalRequirements ? `
              <!-- Additional Notes -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:20px;">
                <tr>
                  <td style="padding:20px;">
                    <div style="font-size:11px;font-weight:700;color:#5EBEEB;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:14px;">📝 Additional Notes</div>
                    <div style="font-size:14px;line-height:1.7;color:#334155;word-break:break-word;">${additionalRequirements.replace(/\n/g, '<br>')}</div>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Quick Reply Banner -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDF7FC;border-radius:10px;border-left:4px solid #5EBEEB;">
                <tr>
                  <td style="padding:14px 16px;">
                    <div style="font-size:13px;color:#1e293b;"><strong>💡 Quick Reply:</strong> Hit reply to respond directly to <strong>${name}</strong></div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 24px 28px;text-align:center;border-top:1px solid #f1f5f9;">
              <div style="font-size:11px;color:#94a3b8;line-height:1.6;">Sent from <strong style="color:#5EBEEB;">Hexaloop</strong> hiring form</div>
              <div style="font-size:11px;color:#cbd5e1;margin-top:4px;">career24x7growth@gmail.com</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Hiring request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending hiring request:', error);
    return NextResponse.json(
      { error: 'Failed to send hiring request. Please try again later.' },
      { status: 500 }
    );
  }
}

import nodemailer from "nodemailer";

const escape = (str) =>
  String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return res.status(400).json({ error: "Données invalides" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email invalide" });
  }

  const safeName    = escape(name).slice(0, 100);
  const safeEmail   = escape(email).slice(0, 200);
  const safeSubject = escape(subject).slice(0, 200);
  const safeMessage = escape(message).slice(0, 5000);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "kahil.mokhtari@gmail.com",
      replyTo: safeEmail,
      subject: safeSubject ? `[Portfolio] ${safeSubject}` : `[Portfolio] Nouveau message de ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0;">
          <div style="background: #6366f1; padding: 28px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 700;">
              Nouveau message depuis ton portfolio
            </h1>
          </div>
          <div style="padding: 32px; background: #fff; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #374151; width: 120px;">Nom</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #374151;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">
                  <a href="mailto:${safeEmail}" style="color: #6366f1;">${safeEmail}</a>
                </td>
              </tr>
              ${safeSubject ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #374151;">Sujet</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">${safeSubject}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px;">
              <p style="font-weight: 600; color: #374151; margin-bottom: 10px;">Message :</p>
              <div style="background: #f9fafb; border-left: 3px solid #6366f1; padding: 16px 20px; border-radius: 4px; color: #374151; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</div>
            </div>
            <div style="margin-top: 28px;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background: #6366f1; color: #fff; padding: 10px 24px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Répondre à ${safeName}
              </a>
            </div>
          </div>
          <div style="padding: 16px 32px; text-align: center; color: #9ca3af; font-size: 12px;">
            kahil.mokhtari@gmail.com · kahil.dev
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
  }
}

import nodemailer from "nodemailer";

/**
 * Creates a reusable Nodemailer SMTP transporter.
 *
 * Works out of the box with **Brevo SMTP** (smtp-relay.brevo.com:587)
 * or any standard SMTP provider — just set the env vars.
 *
 * ┌──────────────────────────────────────────────────────┐
 * │  SMTP_HOST = smtp-relay.brevo.com                    │
 * │  SMTP_PORT = 587                                     │
 * │  SMTP_USER = tu-login-brevo                          │
 * │  SMTP_PASS = tu-master-password-brevo                │
 * │  SMTP_FROM_NAME = César Amuro                        │
 * │  SMTP_FROM_EMAIL = cesaramuroc@gmail.com             │
 * └──────────────────────────────────────────────────────┘
 */
export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Faltan variables SMTP_HOST, SMTP_USER o SMTP_PASS en las variables de entorno.",
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  });
}

/** Sender address built from env vars */
export function senderAddress() {
  const name = process.env.SMTP_FROM_NAME || "César Amuro";
  const email = process.env.SMTP_FROM_EMAIL || "cesaramuroc@gmail.com";
  return `"${name}" <${email}>`;
}

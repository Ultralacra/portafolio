import { NextRequest, NextResponse } from "next/server";
import {
  notificationTemplate,
  autoReplyTemplate,
} from "@/lib/email/templates";

const BREVO_API = "https://api.brevo.com/v3/smtp/email";
const OWNER_EMAIL = "cesaramuroc@gmail.com";
const SENDER = { name: "César Amuro", email: "cesaramuroc@gmail.com" };

async function sendBrevoEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch(BREVO_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: `HTTP ${res.status}` }));
    throw new Error(err?.message || err?.code || JSON.stringify(err));
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // ── Validation ─────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 },
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY no configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 },
      );
    }

    // ── 1. Notification email → owner ──────────────────────
    await sendBrevoEmail(apiKey, {
      sender: SENDER,
      to: [{ email: OWNER_EMAIL, name: "César Amuro" }],
      replyTo: { email, name },
      subject: `📬 Nuevo mensaje de ${name} — Portafolio`,
      htmlContent: notificationTemplate({ name, email, message }),
    });

    // ── 2. Auto-reply email → visitor ──────────────────────
    await sendBrevoEmail(apiKey, {
      sender: SENDER,
      to: [{ email, name }],
      subject: "¡Tu mensaje fue recibido! — César Amuro",
      htmlContent: autoReplyTemplate({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Error en /api/contact:", msg);
    return NextResponse.json(
      { error: `Error interno: ${msg}` },
      { status: 500 },
    );
  }
}

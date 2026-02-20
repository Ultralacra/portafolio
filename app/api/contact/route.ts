import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY no configurada");
      return NextResponse.json(
        { error: "Error de configuracion del servidor." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Portafolio Web", email: "cesaramuroc@gmail.com" },
        to: [{ email: "cesaramuroc@gmail.com", name: "Cesar Amuro" }],
        replyTo: { email, name },
        subject: `Nuevo mensaje de ${name} — Portafolio`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#0d9488;">Nuevo mensaje desde tu portafolio</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
            <p style="white-space:pre-wrap;">${message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      let errorDetail = "";
      try {
        const errorData = await response.json();
        console.error("Error Brevo:", JSON.stringify(errorData));
        errorDetail = errorData?.message || errorData?.code || JSON.stringify(errorData);
      } catch {
        errorDetail = `HTTP ${response.status} ${response.statusText}`;
        console.error("Error Brevo (no JSON):", errorDetail);
      }
      return NextResponse.json(
        { error: `Error al enviar: ${errorDetail}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Error en /api/contact:", msg);
    return NextResponse.json(
      { error: `Error interno: ${msg}` },
      { status: 500 }
    );
  }
}

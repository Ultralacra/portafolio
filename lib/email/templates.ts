// ─────────────────────────────────────────────────────────────
// HTML email templates for the contact form
// ─────────────────────────────────────────────────────────────

/**
 * Notification email – sent to cesaramuroc@gmail.com when
 * someone fills out the contact form.
 */
export function notificationTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const date = new Date().toLocaleDateString("es-CL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return /* html */ `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#141414;border-radius:16px;border:1px solid #262626;overflow:hidden;">

          <!-- Header band -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d9488 0%,#0f766e 100%);padding:32px 32px 28px;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
                📬 Nuevo mensaje desde tu portafolio
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">
                ${date}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Sender info -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:16px;background-color:#1a1a1a;border-radius:12px;border:1px solid #262626;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:12px;">
                          <span style="display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#0d9488;">Nombre</span>
                          <p style="margin:4px 0 0;font-size:15px;color:#e5e5e5;font-weight:500;">${escapeHtml(name)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="border-top:1px solid #262626;padding-top:12px;">
                          <span style="display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#0d9488;">Email</span>
                          <p style="margin:4px 0 0;font-size:15px;color:#e5e5e5;">
                            <a href="mailto:${escapeHtml(email)}" style="color:#0d9488;text-decoration:none;">${escapeHtml(email)}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <span style="display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#0d9488;margin-bottom:8px;">Mensaje</span>
              <div style="margin-top:8px;padding:20px;background-color:#1a1a1a;border-radius:12px;border:1px solid #262626;border-left:3px solid #0d9488;">
                <p style="margin:0;font-size:14px;line-height:1.7;color:#d4d4d4;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </div>

              <!-- Reply CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=Re: Mensaje desde mi portafolio"
                       style="display:inline-block;padding:12px 32px;background:linear-gradient(135deg,#0d9488 0%,#0f766e 100%);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:9999px;">
                      Responder a ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #262626;">
              <p style="margin:0;font-size:12px;color:#525252;text-align:center;">
                Este correo fue generado automáticamente por tu formulario de contacto.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
  <!-- /Outer wrapper -->

</body>
</html>`;
}

/**
 * Auto-reply email – sent to the visitor acknowledging their
 * message was received.
 */
export function autoReplyTemplate({ name }: { name: string }) {
  return /* html */ `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>¡Mensaje recibido!</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#141414;border-radius:16px;border:1px solid #262626;overflow:hidden;">

          <!-- Header band -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d9488 0%,#0f766e 100%);padding:32px 32px 28px;text-align:center;">
              <div style="font-size:48px;line-height:1;">✉️</div>
              <h1 style="margin:16px 0 0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
                ¡Mensaje recibido!
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#d4d4d4;">
                Hola <strong style="color:#e5e5e5;">${escapeHtml(name)}</strong>,
              </p>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#d4d4d4;">
                Gracias por tomarte el tiempo de escribirme. Tu mensaje ya llegó a mi bandeja de entrada y lo revisaré a la brevedad.
              </p>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#d4d4d4;">
                Normalmente respondo en un plazo de <strong style="color:#e5e5e5;">24 a 48 horas</strong>. Si tu solicitud es urgente, no dudes en contactarme directamente por WhatsApp.
              </p>

              <!-- Divider -->
              <div style="margin:28px 0;border-top:1px solid #262626;"></div>

              <!-- What's next -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;background-color:#1a1a1a;border-radius:12px;border:1px solid #262626;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#0d9488;">
                      ¿Qué sigue?
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;font-size:14px;color:#d4d4d4;">
                          <span style="color:#0d9488;margin-right:8px;">✓</span> Tu mensaje fue recibido correctamente
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:14px;color:#a3a3a3;">
                          <span style="color:#525252;margin-right:8px;">○</span> Revisaré tu mensaje en detalle
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:14px;color:#a3a3a3;">
                          <span style="color:#525252;margin-right:8px;">○</span> Te enviaré una respuesta personalizada
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Social links -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://github.com/Ultralacra"
                       style="display:inline-block;padding:10px 24px;margin:0 6px;background-color:#1a1a1a;color:#d4d4d4;font-size:13px;font-weight:500;text-decoration:none;border-radius:8px;border:1px solid #262626;">
                      GitHub
                    </a>
                    <a href="https://wa.me/56912345678?text=Hola%20César"
                       style="display:inline-block;padding:10px 24px;margin:0 6px;background-color:#1a1a1a;color:#d4d4d4;font-size:13px;font-weight:500;text-decoration:none;border-radius:8px;border:1px solid #262626;">
                      WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding:0 32px 24px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;">
                ¡Hablamos pronto! 👋
              </p>
              <p style="margin:8px 0 0;font-size:15px;font-weight:600;color:#e5e5e5;">
                César Amuro
              </p>
              <p style="margin:2px 0 0;font-size:13px;color:#737373;">
                Desarrollador Full Stack · Santiago, Chile
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #262626;">
              <p style="margin:0;font-size:12px;color:#525252;text-align:center;">
                Este es un correo automático generado al recibir tu mensaje a través de mi portafolio web. No es necesario responder.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

// ─── Helpers ──────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

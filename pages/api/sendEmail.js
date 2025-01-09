export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    try {
      const sendEmailToAdmin = async () => {
        // Configuración del correo al administrador
        const adminEmailData = {
          sender: { name: "Formulario de contacto", email: process.env.SENDINBLUE_ADMIN_EMAIL },
          to: [{ email: process.env.SENDINBLUE_ADMIN_EMAIL }],
          subject: `Nuevo mensaje de contacto de ${name}`,
          htmlContent: `
            <h1>Nuevo mensaje recibido</h1>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
          `,
        };

        // Enviar correo al administrador
        const adminResponse = await fetch("https://api.sendinblue.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
          body: JSON.stringify(adminEmailData),
        });

        if (!adminResponse.ok) {
          const errorData = await adminResponse.json();
          throw new Error(
            `Error al enviar correo al administrador: ${errorData.message || adminResponse.status}`
          );
        }
      };

      const sendEmailToClient = async () => {
        // Configuración del correo al cliente
        const clientEmailData = {
          sender: { name: "Equipo de soporte", email: process.env.SENDINBLUE_ADMIN_EMAIL },
          to: [{ email }],
          subject: "Hemos recibido tu mensaje",
          htmlContent: `
            <h1>Hola, ${name}</h1>
            <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
            <p><strong>Tu mensaje:</strong></p>
            <blockquote>${message}</blockquote>
            <p>Saludos,<br>El equipo de soporte</p>
          `,
        };

        // Enviar correo al cliente
        const clientResponse = await fetch("https://api.sendinblue.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY,
          },
          body: JSON.stringify(clientEmailData),
        });

        if (!clientResponse.ok) {
          const errorData = await clientResponse.json();
          throw new Error(
            `Error al enviar correo al cliente: ${errorData.message || clientResponse.status}`
          );
        }
      };

      // Ejecutar ambos correos de forma paralela
      await Promise.all([sendEmailToAdmin(), sendEmailToClient()]);

      return res.status(200).json({ message: "Correos enviados correctamente" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al enviar los correos" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Método ${req.method} no permitido`);
  }
}

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_ALLOWED_ORIGINS || "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400", 
};

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new NextResponse("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const { email, phone, message } = await request.json();

    if (!email || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Email y mensaje son requeridos" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
  from: `"Imperial Vans" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
  subject: "🟡 Nuevo mensaje de contacto - Imperial Vans",
  text: `Email: ${email}\nTeléfono: ${phone || "No proporcionado"}\nMensaje: ${message}`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <style>
        body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: #000000; color: #ffffff; }
        .header { background: #FFD700; padding: 20px; text-align: center; }
        .header img { max-width: 150px; height: auto; }
        .content { padding: 30px; }
        .section { margin-bottom: 25px; }
        .label { color: #FFD700; font-weight: bold; display: block; margin-bottom: 5px; }
        .message { background: #1a1a1a; padding: 15px; border-left: 4px solid #FFD700; margin-top: 10px; }
        .footer { background: #FFD700; padding: 15px; text-align: center; font-size: 12px; color: #000000; }
        .divider { border-top: 2px solid #FFD700; margin: 20px 0; }
        @media only screen and (max-width: 600px) {
          .content { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Encabezado con logo -->
        <div class="header" style="background: #FFD700;">
          <h1 style="color: #000000; margin: 0; font-size: 24px;">IMPERIAL VANS</h1>
          <p style="color: #000000; margin: 5px 0 0; font-size: 16px;">Conversiones de Lujo</p>
        </div>
        
        <!-- Contenido principal -->
        <div class="content">
          <h2 style="color: #fff; margin-top: 0;">Nuevo mensaje de contacto</h2>
          
          <div class="section">
            <span class="label">📧 Email:</span>
            <span style="color: #ffffff;">${email}</span>
          </div>
          
          ${phone ? `
          <div class="section">
            <span class="label">📱 Teléfono:</span>
            <span style="color: #ffffff;">${phone}</span>
          </div>
          ` : ''}
          
          <div class="section">
            <span class="label">✉️ Mensaje:</span>
            <div class="message" style="white-space: pre-line; color: #e0e0e0;">
              ${message}
            </div>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #cccccc; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de Imperial Vans.
            Por favor no responda directamente a este correo.
          </p>
        </div>
        
        <!-- Pie de página -->
        <div class="footer">
          <p style="margin: 0;">© ${new Date().getFullYear()} Imperial Vans. Todos los derechos reservados.</p>
          <p style="margin: 5px 0 0;">
            <a href="https://imperialvans.com" style="color: #000000; text-decoration: underline;">Visite nuestro sitio web</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
};

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ success: true, message: "Mensaje enviado con éxito" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);

    let errorMessage = "Error al procesar la solicitud";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }
}

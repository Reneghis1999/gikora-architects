import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Gikora Contact <onboarding@resend.dev>",
      to: ["gikoragroup@gmail.com"],
      subject: subject || "Nouveau message site web",
      replyTo: email,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>Nouveau message</h2>
          <p><b>Nom:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Sujet:</b> ${subject || "—"}</p>
          <hr />
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
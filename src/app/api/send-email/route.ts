// src/app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'ravi.multani38@gmail.com',
      subject: `Message from ${name} via Portfolio`,
      html: `<p>New message from ${email}:</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
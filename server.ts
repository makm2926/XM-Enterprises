import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, company, email, country, product, message } = req.body;

      // 1. Forward to Google Apps Script
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWjJzQaYUeHnrwsQjc958NkHn5lNAfkqScR3mafPgcVmCS7izn86rdqRfpOd9Ft6pn/exec";
      
      const formData = new URLSearchParams();
      formData.append("name", name || "");
      formData.append("company", company || "");
      formData.append("email", email || "");
      formData.append("country", country || "");
      formData.append("product", product || "");
      formData.append("message", message || "");

      // We don't await this strictly if we want to fail gracefully, but let's try to send it
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      }).catch(err => console.error("Google Script Error:", err));

      // 2. Send Emails if SMTP password is provided
      if (process.env.SMTP_PASSWORD) {
        const transporter = nodemailer.createTransport({
          host: "smtp.hostinger.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: "info@xm.com.pk",
            pass: process.env.SMTP_PASSWORD,
          },
        });

        // Email to Admin (Notification)
        const adminMailOptions = {
          from: '"XM Enterprises Website" <info@xm.com.pk>',
          to: "info@xm.com.pk",
          subject: `New Inquiry from ${name} (${company})`,
          html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0f172a; padding: 24px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Website Inquiry</h1>
  </div>
  <div style="padding: 32px; background-color: #ffffff;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${name}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${company}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${email}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Country</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${country}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Product</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${product}</td></tr>
    </table>
    <h3 style="color: #0f172a; font-size: 16px; margin-top: 24px;">Message:</h3>
    <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; color: #475569; font-size: 14px; white-space: pre-wrap;">${message}</div>
  </div>
</div>
          `,
        };

        // Email to Customer (Confirmation)
        const customerMailOptions = {
          from: '"XM Enterprises" <info@xm.com.pk>',
          to: email,
          subject: "Thank you for your inquiry - XM Enterprises",
          html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #1e40af; padding: 24px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">XM Enterprises</h1>
  </div>
  <div style="padding: 32px; background-color: #ffffff;">
    <h2 style="color: #0f172a; font-size: 20px; margin-top: 0;">Thank you for your inquiry, ${name}!</h2>
    <p style="color: #475569; font-size: 16px; line-height: 1.6;">We have received your request regarding <strong>${product}</strong>. Our team of expert Pakistan exporters is reviewing your requirements and will get back to you shortly.</p>
    <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin: 24px 0;">
      <h3 style="color: #0f172a; font-size: 16px; margin-top: 0;">Your Message:</h3>
      <p style="color: #475569; font-size: 14px; margin-bottom: 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
    </div>
    <p style="color: #475569; font-size: 16px; line-height: 1.6;">Best regards,<br><strong>The XM Enterprises Team</strong><br>Premier Export Company in Pakistan</p>
  </div>
  <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">info@xm.com.pk | +92 311 2222796 | Multan, Pakistan</p>
    <p style="color: #64748b; font-size: 12px; margin: 4px 0 0 0;">&copy; ${new Date().getFullYear()} XM Enterprises. All rights reserved.</p>
  </div>
</div>
          `,
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);
      } else {
        console.warn("SMTP_PASSWORD is not set. Emails were not sent.");
      }

      res.status(200).json({ success: true, message: "Inquiry submitted successfully." });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

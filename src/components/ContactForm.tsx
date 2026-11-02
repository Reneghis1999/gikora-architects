"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/lib/site";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "", // champ piège anti-spam (invisible)
};

const fieldClass =
  "w-full rounded-2xl border-0 bg-canvas px-4 py-3.5 text-[15px] text-ink outline-none ring-1 ring-inset ring-transparent transition placeholder:text-taupe/60 focus:bg-white focus:ring-brand/40";

const labelClass = "mb-2 block text-[13px] text-taupe";

export default function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const id = (name: string) => `${idPrefix}-${name}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact" }),
      });

      const data: { error?: string } = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Impossible d'envoyer le message. Veuillez réessayer.");
        return;
      }

      setSuccess(true);
      setForm(emptyForm);
    } catch {
      setError(
        `Connexion impossible. Vérifiez votre réseau ou écrivez-nous à ${siteConfig.email}.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative grid gap-4">
      {/* HONEYPOT — invisible pour les humains */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Ne pas remplir ce champ</label>
        <input
          id={id("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={labelClass}>
            Nom complet *
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={id("email")} className={labelClass}>
            Adresse email *
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={id("subject")} className={labelClass}>
          Sujet
        </label>
        <input
          id={id("subject")}
          name="subject"
          type="text"
          maxLength={150}
          value={form.subject}
          onChange={handleChange}
          placeholder="Construction, rénovation, design d’intérieur…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={id("message")} className={labelClass}>
          Votre message *
        </label>
        <textarea
          id={id("message")}
          name="message"
          required
          maxLength={5000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Parlez-nous de votre projet : type, ville, surface, budget, délais…"
          className={`${fieldClass} resize-none leading-7`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-2 inline-flex h-14 cursor-pointer items-center justify-between gap-3 rounded-full bg-deep pl-6 pr-2 text-[15px] text-white transition-colors duration-300 hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{loading ? "Envoi en cours…" : "Envoyer le message"}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand text-ink transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={17} strokeWidth={1.6} />
        </span>
      </button>

      {success && (
        <p
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-2xl bg-sand-soft px-4 py-3.5 text-[15px] text-ink"
        >
          <CheckCircle2 size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-brand" />
          Votre message a bien été envoyé. Nous reviendrons vers vous prochainement.
        </p>
      )}

      {error && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3.5 text-[15px] text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}

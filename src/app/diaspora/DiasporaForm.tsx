"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { whatsappUrl } from "@/lib/site";

const projectTypes = [
  "Construire une maison",
  "Suivi d'un chantier en cours",
  "Gestion d'un bien existant",
  "Achat / vérification d'un terrain",
  "Autre",
];

const inputClass = `
  w-full
  border-b
  border-neutral-300
  bg-transparent
  py-4
  font-light
  text-neutral-900
  outline-none
  transition-colors
  duration-300
  placeholder:text-neutral-400
  focus:border-neutral-900
`;

const emptyForm = {
  name: "",
  country: "",
  phone: "",
  email: "",
  type: projectTypes[0],
  message: "",
  website: "", // champ piège anti-spam (invisible)
};

type Status = "idle" | "sending" | "sent" | "error";

export default function DiasporaForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const update = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const text = [
      "Bonjour GIKORA, je vous contacte depuis l'espace Diaspora.",
      "",
      `Nom : ${form.name}`,
      `Pays de résidence : ${form.country}`,
      `Téléphone / WhatsApp : ${form.phone}`,
      ...(form.email ? [`Email : ${form.email}`] : []),
      `Projet : ${form.type}`,
      "",
      form.message,
    ].join("\n");

    // WhatsApp est ouvert immédiatement (dans le clic) pour ne pas
    // être bloqué par le navigateur…
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");

    // …et la demande est aussi envoyée par email au cabinet,
    // afin qu'aucun contact ne soit perdu.
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          source: "diaspora",
          name: form.name,
          country: form.country,
          phone: form.phone,
          email: form.email,
          projectType: form.type,
          message: form.message,
          website: form.website,
        }),
      });

      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-2">
      {/* HONEYPOT — invisible pour les humains */}

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="diaspora-website">Ne pas remplir ce champ</label>
        <input
          id="diaspora-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update}
        />
      </div>

      <label htmlFor="diaspora-name" className="sr-only">
        Nom complet
      </label>
      <input
        id="diaspora-name"
        name="name"
        required
        minLength={2}
        maxLength={100}
        autoComplete="name"
        value={form.name}
        onChange={update}
        placeholder="Nom complet"
        className={inputClass}
      />

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
        <label htmlFor="diaspora-country" className="sr-only">
          Pays de résidence
        </label>
        <input
          id="diaspora-country"
          name="country"
          required
          maxLength={80}
          autoComplete="country-name"
          value={form.country}
          onChange={update}
          placeholder="Pays de résidence"
          className={inputClass}
        />

        <label htmlFor="diaspora-phone" className="sr-only">
          Téléphone / WhatsApp
        </label>
        <input
          id="diaspora-phone"
          name="phone"
          type="tel"
          required
          maxLength={30}
          autoComplete="tel"
          value={form.phone}
          onChange={update}
          placeholder="Téléphone / WhatsApp"
          className={inputClass}
        />
      </div>

      <label htmlFor="diaspora-email" className="sr-only">
        Adresse email (facultatif)
      </label>
      <input
        id="diaspora-email"
        name="email"
        type="email"
        maxLength={254}
        autoComplete="email"
        value={form.email}
        onChange={update}
        placeholder="Adresse email (facultatif)"
        className={inputClass}
      />

      <label htmlFor="diaspora-type" className="sr-only">
        Type de projet
      </label>
      <select
        id="diaspora-type"
        name="type"
        value={form.type}
        onChange={update}
        className={`${inputClass} cursor-pointer`}
      >
        {projectTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="diaspora-message" className="sr-only">
        Description du projet
      </label>
      <textarea
        id="diaspora-message"
        name="message"
        rows={4}
        maxLength={5000}
        value={form.message}
        onChange={update}
        placeholder="Décrivez votre projet (ville, terrain, budget, délais…)"
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-neutral-900 px-7 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#5A3E2B] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm font-light">
        {status === "sent" && (
          <span className="text-green-700">
            Merci ! Votre demande nous a bien été transmise. Finalisez
            l&apos;envoi dans WhatsApp pour échanger directement avec nous.
          </span>
        )}
        {status === "error" && (
          <span className="text-neutral-600">
            Votre message WhatsApp est prêt : finalisez l&apos;envoi dans
            WhatsApp pour nous joindre.
          </span>
        )}
      </p>
    </form>
  );
}

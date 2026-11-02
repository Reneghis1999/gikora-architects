"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const WHATSAPP_NUMBER = "22893631578";

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

export default function DiasporaForm() {
  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    type: projectTypes[0],
    message: "",
  });

  const update = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = [
      "Bonjour GIKORA, je vous contacte depuis l'espace Diaspora.",
      "",
      `Nom : ${form.name}`,
      `Pays de résidence : ${form.country}`,
      `Téléphone / WhatsApp : ${form.phone}`,
      `Projet : ${form.type}`,
      "",
      form.message,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        name="name"
        required
        value={form.name}
        onChange={update}
        placeholder="Nom complet"
        className={inputClass}
      />

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
        <input
          name="country"
          required
          value={form.country}
          onChange={update}
          placeholder="Pays de résidence"
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={update}
          placeholder="Téléphone / WhatsApp"
          className={inputClass}
        />
      </div>

      <select
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

      <textarea
        name="message"
        rows={4}
        value={form.message}
        onChange={update}
        placeholder="Décrivez votre projet (ville, terrain, budget, délais…)"
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        className="mt-8 flex h-12 items-center justify-center rounded-full bg-neutral-900 px-7 text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#5A3E2B]"
      >
        Envoyer sur WhatsApp
      </button>
    </form>
  );
}
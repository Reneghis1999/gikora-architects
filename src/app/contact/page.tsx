"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erreur envoi");
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Impossible d'envoyer le message. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f7] text-neutral-900">
      {/* =========================================================
          BACK
      ========================================================= */}

      <div className="fixed left-5 top-5 z-50 sm:left-8 sm:top-7">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600 transition-colors hover:text-black"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={1.3}
          />
          Retour
        </Link>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="px-6 pb-20 pt-32 sm:px-10 md:pb-28 md:pt-40 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 lg:grid-cols-[180px_1fr]"
          >
            {/* INDEX */}

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 pt-5">
                <span className="h-px w-8 bg-neutral-300" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  05
                </span>
              </div>
            </div>

            {/* TITLE */}

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-neutral-400 lg:hidden">
                05 — Contact
              </p>

              <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7rem]">
                Parlons de
                <br />
                <span className="text-[#5A3E2B]">votre projet.</span>
              </h1>

              <div className="mt-10 flex max-w-2xl items-start gap-5">
                <span className="mt-2 h-px w-10 shrink-0 bg-neutral-300" />

                <p className="max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
                  Une idée, un projet de construction ou simplement une
                  première réflexion ? Échangeons ensemble et donnons forme à
                  votre vision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}

      <section className="border-t border-neutral-200 px-6 py-20 sm:px-10 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          {/* =====================================================
              LEFT — INFORMATIONS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-12">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Échangeons
              </p>

              <h2 className="max-w-md text-3xl font-light leading-tight md:text-4xl">
                Chaque projet commence par une conversation.
              </h2>
            </div>

            <div className="border-t border-neutral-300">
              {/* EMAIL */}

              <a
                href="mailto:gikoragroup@gmail.com"
                className="group flex items-center justify-between border-b border-neutral-200 py-7"
              >
                <div className="flex items-start gap-5">
                  <Mail
                    className="mt-1 h-4 w-4 text-neutral-400"
                    strokeWidth={1.3}
                  />

                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                      Email
                    </p>

                    <p className="text-sm text-neutral-800 md:text-base">
                      gikoragroup@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  className="h-4 w-4 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  strokeWidth={1.3}
                />
              </a>

              {/* TELEPHONE */}

              <div className="flex items-center justify-between border-b border-neutral-200 py-7">
                <div className="flex items-start gap-5">
                  <Phone
                    className="mt-1 h-4 w-4 text-neutral-400"
                    strokeWidth={1.3}
                  />

                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                      Téléphone
                    </p>

                    <p className="text-sm text-neutral-800 md:text-base">
                      (+228) 93 63 15 78
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/22899003911"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter Gikora sur WhatsApp"
                  className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-black"
                >
                  <MessageCircle
                    className="h-4 w-4"
                    strokeWidth={1.3}
                  />
                  WhatsApp
                </a>
              </div>

              {/* ADRESSE */}

              <div className="flex items-start gap-5 border-b border-neutral-200 py-7">
                <MapPin
                  className="mt-1 h-4 w-4 text-neutral-400"
                  strokeWidth={1.3}
                />

                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                    Adresse
                  </p>

                  <p className="text-sm leading-6 text-neutral-800 md:text-base">
                    Atigangomé Sanol
                    <br />
                    Lomé, Togo
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}

            <div className="mt-14">
              <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                Suivez notre travail
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/gikora_aarchitects?igsh=MWdmeWpxa3h6aGpxNg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-neutral-300 px-5 py-3 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  <FaInstagram size={15} />

                  <span className="text-[9px] uppercase tracking-[0.2em]">
                    Instagram
                  </span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@gikora_group1?_r=1&_t=ZS-97fw5MdyTV2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-neutral-300 px-5 py-3 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  <FaTiktok size={14} />

                  <span className="text-[9px] uppercase tracking-[0.2em]">
                    TikTok
                  </span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — FORM
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Formulaire
              </p>

              <h2 className="text-2xl font-light md:text-3xl">
                Décrivez-nous votre projet.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-9">
              {/* NAME */}

              <div className="group border-b border-neutral-300 transition-colors focus-within:border-black">
                <label
                  htmlFor="name"
                  className="block pb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400"
                >
                  Nom complet
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full bg-transparent pb-4 text-sm outline-none placeholder:text-neutral-300"
                />
              </div>

              {/* EMAIL */}

              <div className="group border-b border-neutral-300 transition-colors focus-within:border-black">
                <label
                  htmlFor="email"
                  className="block pb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400"
                >
                  Adresse email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full bg-transparent pb-4 text-sm outline-none placeholder:text-neutral-300"
                />
              </div>

              {/* SUBJECT */}

              <div className="group border-b border-neutral-300 transition-colors focus-within:border-black">
                <label
                  htmlFor="subject"
                  className="block pb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400"
                >
                  Sujet
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Construction, rénovation, design..."
                  className="w-full bg-transparent pb-4 text-sm outline-none placeholder:text-neutral-300"
                />
              </div>

              {/* MESSAGE */}

              <div className="group border-b border-neutral-300 transition-colors focus-within:border-black">
                <label
                  htmlFor="message"
                  className="block pb-2 text-[9px] uppercase tracking-[0.25em] text-neutral-400"
                >
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Parlez-nous de votre projet..."
                  className="w-full resize-none bg-transparent pb-4 text-sm leading-7 outline-none placeholder:text-neutral-300"
                />
              </div>

              {/* SUBMIT */}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer group flex w-full items-center justify-between border border-black px-6 py-5 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </span>

                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={1.3}
                  />
                </button>
              </div>

              {/* SUCCESS */}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-neutral-200 bg-white px-5 py-4"
                >
                  <p className="text-sm text-green-700">
                    Votre message a bien été envoyé. Nous reviendrons vers
                    vous prochainement.
                  </p>
                </motion.div>
              )}

              {/* ERROR */}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-red-200 bg-red-50 px-5 py-4"
                >
                  <p className="text-sm text-red-600">{error}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}

      <section className="border-t border-neutral-200 px-6 py-20 sm:px-10 md:py-28 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  06
                </span>

                <span className="h-px w-10 bg-neutral-300" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Localisation
                </span>
              </div>

              <h2 className="text-4xl font-light leading-tight md:text-5xl">
                Venez nous
                <br />
                <span className="text-[#5A3E2B]">rencontrer.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-neutral-500 lg:justify-self-end">
              Notre cabinet est situé à Atigangomé Sanol, à Lomé. Nous vous
              accueillons sur rendez-vous pour échanger autour de votre projet,
              comprendre vos besoins et imaginer ensemble les premières
              lignes de sa conception.
            </p>
          </div>

          {/* MAP */}

          <div className="relative overflow-hidden border border-neutral-200 bg-neutral-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.405004675778!2d1.1401157749902824!3d6.2101935937776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMzYuNyJOIDHCsDA4JzMzLjciRQ!5e0!3m2!1sfr!2stg!4v1761693680740!5m2!1sfr!2stg"
              className="h-[380px] w-full md:h-[520px]"
              loading="lazy"
              title="Localisation de Gikora Architects à Lomé"
            />

            {/* MAP LABEL */}

            <div className="absolute bottom-5 left-5 bg-white/95 px-5 py-4 backdrop-blur-sm md:bottom-7 md:left-7">
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Gikora Architects
              </p>

              <p className="mt-1 text-sm text-neutral-800">
                Atigangomé Sanol · Lomé
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}

      <section className="border-t border-neutral-200 px-6 py-24 sm:px-10 md:py-32 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
            <div className="hidden lg:block">
              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                GIKORA
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Imaginons ensemble
                <br />
                <span className="text-[#5A3E2B]">des espaces qui ont du sens.</span>
              </h2>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-neutral-300" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                  Architecture · Design · Construction
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
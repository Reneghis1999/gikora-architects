"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-[#faf9f7] px-6 lg:px-20 py-28">

      {/* BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#5A3E2B] hover:text-black transition group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Retour
        </Link>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black">
          Contact
        </h1>
        <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
           Vous avez un projet ? Une idée ? Parlons-en et construisons ensemble quelque chose d’exceptionnel.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT - INFOS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >

          {/* EMAIL */}
          <div className="border-b pb-6">
            <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
              <Mail className="w-4 h-4" /> Email
            </h2>
            <p className="mt-2 text-lg text-black">
              gikoragroup@gmail.com
            </p>
          </div>

          {/* PHONE */}
          <div className="border-b pb-6">
            <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
              <Phone className="w-4 h-4" /> Téléphone
            </h2>

            <div className="mt-2 flex items-center gap-3">
              <p className="text-lg text-black">
                (+228) 93 63 15 78
              </p>

              <a
                href="https://wa.me/22899003911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="border-b pb-6">
            <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
              <MapPin className="w-4 h-4" /> Adresse
            </h2>
            <p className="mt-2 text-lg text-black leading-relaxed">
              Atigangomé Sanol<br />
              Lomé – Togo<br />
              République du Togo
            </p>
          </div>

        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nom complet"
            className="w-full border-b bg-transparent py-3 outline-none focus:border-black"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border-b bg-transparent py-3 outline-none focus:border-black"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Sujet"
            className="w-full border-b bg-transparent py-3 outline-none focus:border-black"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="w-full border-b bg-transparent py-3 outline-none focus:border-black"
          />

          <button
            type="button"
            className="mt-6 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition"
          >
            Envoyer le message
          </button>

        </motion.div>

      </div>

      {/* MAP */}
      <div className="mt-24 max-w-6xl mx-auto">
        <div className="h-[420px] w-full overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.405004675778!2d1.1401157749902824!3d6.2101935937776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMzYuNyJOIDHCsDA4JzMzLjciRQ!5e0!3m2!1sfr!2stg!4v1761693680740!5m2!1sfr!2stg"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

    </section>
  );
}
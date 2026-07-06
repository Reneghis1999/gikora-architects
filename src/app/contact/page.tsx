"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
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
      const res = await fetch("/api/contactt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur envoi");

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Impossible d'envoyer le message");
    } finally {
      setLoading(false);
    }
  };
    return (
    <section className="min-h-screen bg-[#faf9f7] px-5 sm:px-8 lg:px-20 py-20 md:py-28">

      {/* BACK BUTTON */}
      <div className="fixed top-5 left-5 sm:top-6 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A3E2B]"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" />
          Retour
        </Link>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14 md:mb-24"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-light">
          Contact
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20">

        {/* LEFT */}
        <div className="space-y-8 text-center lg:text-left">

          <div className="border-b pb-6">
            <h2 className="flex items-center justify-center lg:justify-start gap-2 text-xs uppercase text-neutral-500">
              <Mail className="w-4 h-4" />
              Email
            </h2>
            <p className="mt-2 text-black">gikoragroup@gmail.com</p>
          </div>

          <div className="border-b pb-6">
            <h2 className="flex items-center justify-center lg:justify-start gap-2 text-xs uppercase text-neutral-500">
              <Phone className="w-4 h-4" />
              Téléphone
            </h2>
            <div className="mt-2 flex justify-center lg:justify-start items-center gap-3">
              <p className="text-black">(+228) 93 63 15 78</p>
              <a href="https://wa.me/22899003911">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </a>
            </div>
          </div>

          <div className="border-b pb-6">
            <h2 className="flex items-center justify-center lg:justify-start gap-2 text-xs uppercase text-neutral-500">
              <MapPin className="w-4 h-4" />
              Adresse
            </h2>
            <p className="mt-2 text-black">
              Lomé – Togo
            </p>
          </div>
                    {/* SOCIALS */}
          <div className="pt-2 text-center lg:text-left">
            <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Réseaux sociaux
            </h2>

            <div className="flex flex-col items-center lg:items-start gap-6">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/gikora_aarchitects?igsh=MWdmeWpxa3h6aGpxNg=="
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="h-11 w-11 flex items-center justify-center border rounded-full group-hover:bg-black group-hover:text-white transition">
                  <FaInstagram />
                </div>

                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">
                    Instagram
                  </p>
                  <p className="text-black">@gikora_aarchitects</p>
                </div>
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@gikora_group1?_r=1&_t=ZS-97fw5MdyTV2"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="h-11 w-11 flex items-center justify-center border rounded-full group-hover:bg-black group-hover:text-white transition">
                  <FaTiktok />
                </div>

                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">
                    TikTok
                  </p>
                  <p className="text-black">@gikora_group1</p>
                </div>
              </a>

            </div>
          </div>

        </div>
                {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-7 text-center lg:text-left"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nom complet"
            className="w-full border-b py-4 bg-transparent outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border-b py-4 bg-transparent outline-none"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Sujet"
            className="w-full border-b py-4 bg-transparent outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="w-full border-b py-4 bg-transparent outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-black py-4 uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
          >
            {loading ? "Envoi..." : "Envoyer le message"}
          </button>

          {success && (
            <p className="text-green-600 mt-4">
              Message envoyé avec succès ✔️
            </p>
          )}

          {error && (
            <p className="text-red-500 mt-4">
              {error}
            </p>
          )}

        </motion.form>
              </div>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-24 max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Nous trouver
          </p>

          <h2 className="mt-3 text-3xl font-light">
            Venez nous rencontrer
          </h2>
          <p>Notre cabinet est situé à Atigangomé Sanol, à Lomé. Nous vous accueillons sur rendez-vous pour échanger autour de votre projet.</p>
        </div>

        <div className="overflow-hidden border rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.405004675778!2d1.1401157749902824!3d6.2101935937776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMzYuNyJOIDHCsDA4JzMzLjciRQ!5e0!3m2!1sfr!2stg!4v1761693680740!5m2!1sfr!2stg"
            className="w-full h-[350px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </motion.div>

    </section>
  );
}
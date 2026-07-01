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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-[#faf9f7] px-5 sm:px-8 lg:px-20 py-20 md:py-28">

      {/* BACK BUTTON */}
      <div className="fixed top-5 left-5 sm:top-6 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A3E2B] transition hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Retour
        </Link>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-14 md:mb-24 text-center"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tight text-black">
          Contact
        </h1>

        <p className="mx-auto mt-5 md:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-neutral-600">
          Vous avez un projet ? Une idée ? Parlons-en et construisons ensemble
          quelque chose d’exceptionnel.
        </p>
      </motion.div>
            {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-center lg:text-left"
        >

          {/* EMAIL */}
          <div className="border-b pb-6">
            <h2 className="flex justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500">
              <Mail className="w-4 h-4" />
              Email
            </h2>

            <p className="mt-2 text-base sm:text-lg text-black">
              gikoragroup@gmail.com
            </p>
          </div>

          {/* PHONE */}
          <div className="border-b pb-6">
            <h2 className="flex justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500">
              <Phone className="w-4 h-4" />
              Téléphone
            </h2>

            <div className="mt-2 flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start">
              <p className="text-base sm:text-lg text-black">
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
            <h2 className="flex justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500">
              <MapPin className="w-4 h-4" />
              Adresse
            </h2>

            <p className="mt-2 text-base sm:text-lg leading-relaxed text-black">
              Atigangomé Sanol<br />
              Lomé – Togo<br />
              République du Togo
            </p>
          </div>

          {/* SOCIALS */}
          {/* SOCIALS */}
<div className="text-center md:text-left">
  <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">
    Réseaux sociaux
  </h2>

  <div className="flex flex-col items-center md:items-start gap-5">

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/gikora_aarchitects?igsh=MWdmeWpxa3h6aGpxNg=="
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover:bg-black group-hover:text-white">
        <FaInstagram size={20} />
      </div>

      <div className="text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          
        </p>
        <p className="text-black group-hover:underline">
          @gikora_aarchitects
        </p>
      </div>
    </a>

    {/* TIKTOK */}
    <a
      href="https://www.tiktok.com/@gikora_group1?_r=1&_t=ZS-97fw5MdyTV2"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover:bg-black group-hover:text-white">
        <FaTiktok size={18} />
      </div>

      <div className="text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          
        </p>
        <p className="text-black group-hover:underline">
          @gikora_group1
        </p>
      </div>
    </a>

  </div>
</div>

        </motion.div>
                {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col justify-center text-center lg:text-left"
        >

          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-light text-black">
              Envoyez-nous un message
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Remplissez le formulaire et nous vous répondrons rapidement.
            </p>
          </div>

          <form className="space-y-7">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nom complet"
              className="w-full border-b border-neutral-300 bg-transparent py-4 text-center lg:text-left outline-none transition focus:border-black"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-neutral-300 bg-transparent py-4 text-center lg:text-left outline-none transition focus:border-black"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Sujet"
              className="w-full border-b border-neutral-300 bg-transparent py-4 text-center lg:text-left outline-none transition focus:border-black"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Décrivez votre projet..."
              className="w-full resize-none border-b border-neutral-300 bg-transparent py-4 text-center lg:text-left outline-none transition focus:border-black"
            />

            <button
              type="submit"
              className="w-full lg:w-auto border border-black px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
            >
              Envoyer le message
            </button>

          </form>
        </motion.div>

      </div>

     {/* MAP SECTION */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-28 max-w-6xl mx-auto px-4 md:px-0"
>
  {/* HEADER MAP */}
  <div className="mb-10 text-center">
    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500">
      Nous trouver
    </p>

    <h2 className="mt-3 text-2xl md:text-4xl font-light tracking-tight text-black">
      Venez nous rencontrer
    </h2>

    <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-neutral-600">
      Notre cabinet est situé à Atigangomé Sanol, à Lomé. Nous vous accueillons
      sur rendez-vous pour échanger autour de votre projet.
    </p>
  </div>

  {/* MAP CONTAINER */}
  <div className="overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.405004675778!2d1.1401157749902824!3d6.2101935937776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023f5b5c5c5c5c5%3A0x0!2zNsKwMTInMzYuNyJOIDHCsDA4JzMzLjciRQ!5e0!3m2!1sfr!2stg!4v1761693680740!5m2!1sfr!2stg"
      className="h-[300px] md:h-[450px] w-full"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  {/* BUTTON */}
  <div className="mt-8 flex justify-center">
    <a
      href="https://www.google.com/maps/place/6%C2%B012'36.7%22N+1%C2%B008'33.7%22E"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 md:px-8 py-3 border border-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black hover:text-white"
    >
      Ouvrir dans Google Maps
    </a>
  </div>
</motion.div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F1EC] text-black pt-24 pb-10 border-t border-neutral-200">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <Image
              src="/images/gikoralogo.png"
              alt="Gikora Architects"
              width={160}
              height={60}
              className="mb-6"
            />

            <p className="text-sm leading-6 text-neutral-700 max-w-sm">
              Gikora Architects est un studio d’architecture contemporain
              basé au Togo, spécialisé dans la conception d’espaces
              modernes, fonctionnels et intemporels.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#5A3E2B] mb-6">
              Navigation
            </p>

            <ul className="space-y-4 text-sm text-neutral-700">
              <li>
                <Link className="hover:text-[#5A3E2B] transition" href="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#5A3E2B] transition" href="/projects">
                  Projets
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#5A3E2B] transition" href="#about">
                  À propos
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#5A3E2B] transition" href="/equipe">
                  Équipe
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#5A3E2B] mb-6">
              Contact
            </p>

            <ul className="space-y-4 text-sm text-neutral-700">
              <li>Lomé, Togo</li>
              <li>+228 90 00 00 00</li>
              <li>contact@gikora-architects.com</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-black hover:text-[#5A3E2B] transition"
              >
                Nous contacter
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-300 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Gikora Architects. Tous droits réservés.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            Architecture • Design • 3D • Urbanisme
          </p>

        </div>

      </div>
    </footer>
  );
}
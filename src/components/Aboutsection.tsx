import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 w-full bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT - IMAGES */}
          <div className="relative hidden lg:block w-full h-[500px] sm:h-[600px]">
            {/* IMAGE LARGE */}
            <div className="absolute left-0 top-0 w-[80%] h-[80%] overflow-hidden">
              <Image
                src="/images/about1.png"
                alt="Architecture render"
                fill
                className="object-cover"
              />
            </div>

            {/* IMAGE SMALL OVERLAY */}
            <div className="absolute right-0 bottom-0 w-[65%] h-[65%] overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/about2.png"
                alt="3D architectural visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div>
            {/* SMALL LABEL */}
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#5A3E2B]">
              Découvrez
            </p>

            {/* TITLE */}
            <h2 className="mt-3 text-3xl font-light leading-tight text-[#5A3E2B] sm:text-4xl md:text-5xl">
              Gikora Architects
              <br />
              Qui sommes-nous ?
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-base leading-7 text-neutral-600">
              Créée au TOGO à Lomé, Gikora Architects est une agence fondée
              par l’initiative de Arthur Kofi AWAGA, architecte agréé à
              l’Ordre National des Architectes du TOGO (ONAT)
              N° 1982/71/92.
              <br />
              <br />
              Une pluralité de personnalités et de parcours fédérée autour
              d’une vision : une architecture contemporaine et futuriste
              intégrée à son environnement, guidée par la créativité et
              l’exigence.
            </p>

            {/* MISSIONS */}
            <div className="mt-10">
              <h3 className="text-lg font-medium text-[#5A3E2B]">
                Nos missions
              </h3>

              <ul className="mt-4 space-y-3 text-neutral-600">
                <li>• Études architecturales</li>
                <li>• Design d’intérieur</li>
                <li>• Modélisation 3D</li>
                <li>• Aménagement urbain</li>
                <li>• Expertise immobilière</li>
                <li>• Assistance à la maîtrise d’ouvrage</li>
                <li>• Construction et suivi des travaux</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
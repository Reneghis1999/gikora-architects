import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* =========================================================
   PRIMITIVES DE LA CHARTE GIKORA
   Cartes très arrondies, pastilles et boutons "pilule"
   (inspiration Reinvent Labs) + étiquettes sobres et
   typographie Questrial (inspiration Veone).
========================================================== */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-3 sm:px-5", className)}>
      {children}
    </div>
  );
}

type BadgeTone = "sand" | "white" | "dark" | "outline-light";

const badgeTones: Record<BadgeTone, string> = {
  sand: "bg-sand text-ink",
  white: "bg-white text-ink ring-1 ring-black/5",
  dark: "bg-deep text-white",
  "outline-light": "bg-white/10 text-white ring-1 ring-white/15",
};

export function Badge({
  children,
  tone = "sand",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] leading-none",
        badgeTones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

type ButtonVariant = "primary" | "secondary" | "light" | "outline" | "outline-light";

const buttonVariants: Record<ButtonVariant, { base: string; circle: string }> = {
  primary: {
    base: "bg-deep text-white hover:bg-brand",
    circle: "bg-sand text-ink",
  },
  secondary: {
    base: "bg-sand text-ink hover:bg-[#dccbb3]",
    circle: "bg-white text-ink",
  },
  light: {
    base: "bg-white text-ink hover:bg-sand-soft",
    circle: "bg-deep text-white",
  },
  outline: {
    base: "text-ink ring-1 ring-inset ring-ink/15 hover:bg-white",
    circle: "bg-ink text-white",
  },
  "outline-light": {
    base: "text-white ring-1 ring-inset ring-white/25 hover:bg-white/10",
    circle: "bg-white text-ink",
  },
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  external = false,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const styles = buttonVariants[variant];

  const classes = cn(
    "group inline-flex h-14 items-center gap-3 rounded-full text-[15px] transition-colors duration-300",
    arrow ? "pl-6 pr-2" : "px-6",
    styles.base,
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45",
            styles.circle
          )}
        >
          <ArrowUpRight size={17} strokeWidth={1.6} />
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

export function SectionHeading({
  badge,
  title,
  intro,
  action,
  tone = "dark",
  className,
}: {
  badge?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="max-w-3xl">
        {badge && (
          <Badge tone={light ? "outline-light" : "sand"} className="mb-6">
            {badge}
          </Badge>
        )}
        <h2
          className={cn(
            "text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
              light ? "text-white/65" : "text-taupe"
            )}
          >
            {intro}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function LogoLockup({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src={light ? "/images/logo/gikora-mark-blanc.png" : "/images/logo/gikora-mark.png"}
        alt=""
        width={64}
        height={63}
        className="h-8 w-8"
      />
      <span className="leading-none">
        <span
          className={cn(
            "block text-[15px] tracking-[0.2em]",
            light ? "text-white" : "text-ink"
          )}
        >
          GIKORA
        </span>
        <span
          className={cn(
            "mt-1 block text-[9px] tracking-[0.42em]",
            light ? "text-white/55" : "text-taupe"
          )}
        >
          ARCHITECTS
        </span>
      </span>
    </span>
  );
}

/** En-tête de page intérieure : grande carte blanche arrondie. */
export function PageHero({
  badge,
  title,
  intro,
  children,
  aside,
}: {
  badge: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="pt-3 sm:pt-5">
      <Container>
        {/* Le menu (fixe) vient se poser en haut de ce bloc */}
        <div
          className={cn(
            "grid gap-3",
            aside ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
          )}
        >
          <div className="rounded-[2rem] bg-white px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-40 lg:px-14 lg:pb-20 lg:pt-44">
            <Badge>{badge}</Badge>
            <h1 className="mt-7 max-w-4xl text-[2.8rem] leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[5rem]">
              {title}
            </h1>
            {intro && (
              <p className="mt-7 max-w-2xl text-base leading-7 text-taupe sm:text-lg sm:leading-8">
                {intro}
              </p>
            )}
            {children}
          </div>
          {aside}
        </div>
      </Container>
    </section>
  );
}

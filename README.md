# 🏛️ GIKORA ARCHITECTS

**Studio d’architecture contemporain basé à Lomé**, spécialisé dans la conception architecturale, le design d’intérieur et la visualisation 3D.

<img width="1917" height="907" alt="Page d'accueil Gikora Architects" src="https://github.com/user-attachments/assets/686edc5f-e604-41eb-8641-e58ac16966b9" />

<img width="1917" height="907" alt="Page projets Gikora Architects" src="https://github.com/user-attachments/assets/c34c4f4e-63c4-42e0-a779-d987cf9d15d7" />

---

## Stack technique

- **Next.js 16 (App Router, Turbopack)** · **React 19** · **TypeScript**
- **Tailwind CSS 4** · **shadcn/ui** · **Lucide Icons** · **Framer Motion**
- **Resend** pour l’envoi des emails des formulaires
- **next/image** (AVIF/WebP) et **next/font** (Questrial auto-hébergée)

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis remplir les variables
npm run dev                  # http://localhost:3000
```

Autres commandes : `npm run build`, `npm start`, `npm run lint`.

## Pages

| Route        | Contenu                                          |
| ------------ | ------------------------------------------------ |
| `/`          | Accueil (hero, chiffres, à propos, projets, services, FAQ…) |
| `/projects`  | Portfolio complet avec galerie                   |
| `/team`      | Équipe                                           |
| `/diaspora`  | Espace Diaspora + formulaire (email + WhatsApp)  |
| `/contact`   | Coordonnées, formulaire de contact, carte        |

Redirections : `/equipe` → `/team`, `/projets` → `/projects`, `/about` → `/#about`.

---

## 📧 Emails des formulaires (Resend)

Les deux formulaires (Contact et Diaspora) envoient un email au cabinet via la route `POST /api/contact`. Le formulaire Diaspora ouvre aussi WhatsApp avec le message déjà rédigé.

### Variables d’environnement

| Variable                 | Obligatoire | Rôle |
| ------------------------ | ----------- | ---- |
| `RESEND_API_KEY`         | ✅          | Clé API Resend (permission *Sending access*) |
| `CONTACT_EMAIL`          | recommandé  | Adresse(s) qui **reçoivent** les messages, séparées par des virgules (défaut : `gikoragroup@gmail.com`) |
| `EMAIL_FROM`             | recommandé  | Expéditeur sur un **domaine vérifié**, ex. `Gikora Architects <contact@gikoraarchitects.com>` |
| `CONTACT_AUTOREPLY`      | non         | `true` pour envoyer un accusé de réception au visiteur (domaine vérifié requis) |
| `NEXT_PUBLIC_SITE_URL`   | recommandé  | URL publique du site, ex. `https://www.gikoraarchitects.com` (SEO) |
| `GOOGLE_SITE_VERIFICATION` | non       | Code de vérification Google Search Console |

### Mise en place pas à pas

1. Créer un compte sur [resend.com](https://resend.com).
2. **Domains → Add Domain** : ajouter le domaine du site, puis copier les enregistrements DNS (SPF, DKIM, MX de retour) chez le registrar. Attendre le statut **Verified**.
3. **API Keys → Create API Key** avec la permission *Sending access*.
4. Dans **Vercel → Project → Settings → Environment Variables**, ajouter `RESEND_API_KEY`, `EMAIL_FROM`, `CONTACT_EMAIL` (et `NEXT_PUBLIC_SITE_URL`), puis **redéployer**.
5. Tester le formulaire `/contact` : l’email arrive dans la boîte `CONTACT_EMAIL`, et le bouton « Répondre » répond directement au client (`reply-to`).

> ⚠️ **Sans domaine vérifié**, Resend utilise l’expéditeur de test `onboarding@resend.dev`, qui ne peut envoyer **qu’à l’adresse email du propriétaire du compte Resend**. Si le compte Resend n’a pas été créé avec l’adresse qui doit recevoir les messages, aucun email n’arrivera tant que le domaine n’est pas vérifié.

En cas d’échec d’envoi, le visiteur voit un message l’invitant à écrire directement par email ou WhatsApp, et l’erreur détaillée apparaît dans les logs Vercel (`[contact] …`).

### Protections du formulaire

- Validation et nettoyage côté serveur (longueurs maximales, format email/téléphone)
- Champ piège invisible (honeypot) contre les robots
- Limitation à 8 envois / 10 min par adresse IP
- Refus des requêtes provenant d’un autre site (contrôle de l’en-tête `Origin`), JSON uniquement, 20 Ko maximum
- Échappement HTML de toutes les données dans les emails

---

## 🔒 Sécurité

- Next.js maintenu à jour (`npm audit --omit=dev` : 0 vulnérabilité)
- En-têtes HTTP : Content-Security-Policy, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP
- En-tête `X-Powered-By` désactivé
- Secrets uniquement dans les variables d’environnement (`.env*` ignorés par Git, sauf `.env.example`)

## 🔎 SEO

- Contenu entièrement rendu côté serveur (le loader est une simple surcouche)
- Titres et descriptions uniques par page, URL canoniques, Open Graph / Twitter (`public/og-image.jpg`)
- `sitemap.xml`, `robots.txt` (pages de prévisualisation Vercel non indexées), `manifest.webmanifest`
- Données structurées schema.org : `ProfessionalService` / `LocalBusiness` (adresse, téléphone, coordonnées GPS, réseaux), `WebSite`, `FAQPage`, `BreadcrumbList`
- Favicon et icônes aux couleurs de Gikora, page 404 personnalisée
- Images optimisées (WebP, 2560 px max, noms de fichiers lisibles)

### Après la mise en ligne

1. Définir `NEXT_PUBLIC_SITE_URL` avec le domaine définitif.
2. Ajouter le site dans [Google Search Console](https://search.google.com/search-console) et y soumettre `https://<domaine>/sitemap.xml`.
3. Créer / mettre à jour la fiche **Google Business Profile** du cabinet (même nom, adresse et téléphone que sur le site).
4. Tester les données structurées avec le [Rich Results Test](https://search.google.com/test/rich-results).

---

## Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Envoi des emails (Resend)
│   ├── contact/ diaspora/ projects/ team/
│   ├── layout.tsx              # Métadonnées globales + JSON-LD
│   ├── sitemap.ts robots.ts manifest.ts not-found.tsx
│   └── favicon.ico icon.png apple-icon.png
├── components/                 # Sections de la page d'accueil, Navbar, Footer…
└── lib/
    ├── site.ts                 # Coordonnées, réseaux, URL du site (source unique)
    ├── seo.ts                  # Métadonnées par page
    ├── email-templates.ts      # Emails HTML + texte
    └── rate-limit.ts
public/
├── images/{accueil,projets,services,logo}/
├── team/  icons/  og-image.jpg
```

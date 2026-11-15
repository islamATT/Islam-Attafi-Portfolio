import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import { ContactForm } from "@/components/ContactForm";
import { VideoLightbox } from "@/components/VideoLightbox";
import { CONTACT_EMAIL, PROJECT_VIDEOS, SOCIAL_LINKS } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageProvider";

import heroImage from "@/assets/photos/hero-silhouettes.jpg";
import aboutPortrait from "@/assets/photos/about-portrait.jpg";
import workShadowForm from "@/assets/work-shadow-form.jpg";
import workNoir from "@/assets/work-noir.jpg";
import workTourer from "@/assets/work-tourer.jpg";
import reel01 from "@/assets/reel-01.jpg";
import reel02 from "@/assets/reel-02.jpg";
import reel03 from "@/assets/reel-03.jpg";
import reel04 from "@/assets/reel-04.jpg";

const SITE_URL = "https://islam-attafi-portfolio.lovable.app";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f7da6a29-1211-4d08-ac79-e49794e3ebbc";
const TITLE = "Islam Attafi | Photographer & Content Creator";
const DESCRIPTION =
  "Islam Attafi is a photographer, videographer, and social media content creator specializing in cinematic visuals, and editorial photography.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Islam Attafi",
          url: SITE_URL,
          image: OG_IMAGE,
          jobTitle: "Photographer & Videographer",
          description: DESCRIPTION,
          email: `mailto:${CONTACT_EMAIL}`,
          sameAs: SOCIAL_LINKS.map((s) => s.href),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Selected Works — Islam Attafi",
          url: `${SITE_URL}#work`,
          description:
            "Selected photography and film projects by Islam Attafi, including Shadow & Form, The Noir Series, and The Grand Tourer.",
          hasPart: [
            { "@type": "CreativeWork", name: "Shadow & Form" },
            { "@type": "CreativeWork", name: "The Noir Series" },
            { "@type": "CreativeWork", name: "The Grand Tourer" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const reels = [
  { src: reel01, num: "01" },
  { src: reel02, num: "02" },
  { src: reel03, num: "03" },
  { src: reel04, num: "04" },
];

const films = {
  shadowForm: { id: PROJECT_VIDEOS.shadowForm, title: "Shadow & Form" },
  noir: { id: PROJECT_VIDEOS.noir, title: "The Noir Series" },
  tourer: { id: PROJECT_VIDEOS.tourer, title: "The Grand Tourer" },
} as const;

function Index() {
  const [activeFilm, setActiveFilm] = useState<keyof typeof films | null>(null);
  const { t, lang, toggleLang } = useLanguage();
  const arrow = lang === "ar" ? "\u2190" : "\u2192";
  const playLabel = (title: string) => `${t.work.play} ${title} ${t.work.film}`.trim();

  return (
    <div className="min-h-screen bg-onyx text-foreground font-sans selection:bg-gold/30">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 mix-blend-difference md:px-8">
        <span
          dir="ltr"
          className="whitespace-nowrap font-serif text-xl italic tracking-tight md:text-2xl"
          style={{ fontFamily: '"Playfair Display", serif', fontStyle: "italic" }}
        >
          Islam Attafi.
        </span>
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] sm:gap-5 md:gap-12 md:tracking-[0.3em]">
          <a href="#about" className="hidden transition-colors hover:text-gold sm:inline">
            {t.nav.about}
          </a>
          <a href="#work" className="hidden transition-colors hover:text-gold sm:inline">
            {t.nav.work}
          </a>
          <a href="#social" className="hidden transition-colors hover:text-gold sm:inline">
            {t.nav.services}
          </a>
          <a href="#contact" className="hidden transition-colors hover:text-gold sm:inline">
            {t.nav.contact}
          </a>
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.toggleLabel}
            lang={lang === "en" ? "ar" : "en"}
            className="border border-foreground/30 px-3 py-1 text-[11px] tracking-normal transition-colors hover:border-gold hover:text-gold"
          >
            {t.nav.toggle}
          </button>
        </div>
      </nav>

      <header className="relative flex h-screen items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={t.hero.imageAlt}
            width={1920}
            height={1139}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/45 to-onyx/90" />
        </div>

        <div className="relative z-10 text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-gold">{t.hero.location}</p>
          <h1 className="mb-6 font-serif text-6xl leading-[0.95] sm:text-7xl md:text-9xl">
            {t.hero.titleLine1} <br /> <span className="italic">{t.hero.titleLine2}</span>
          </h1>
          <p className="mx-auto max-w-lg text-sm uppercase leading-relaxed tracking-widest text-foreground/60">
            {t.hero.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="border border-gold bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-onyx transition-colors hover:bg-transparent hover:text-gold"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="border border-foreground/30 px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold to-transparent" />
        </div>
      </header>

      <section id="about" className="mx-auto max-w-7xl px-8 pt-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={aboutPortrait}
              alt={t.about.imageAlt}
              loading="lazy"
              width={1400}
              height={932}
              className="aspect-[4/5] w-full object-cover outline-1 -outline-offset-1 outline-foreground/5"
            />
          </div>
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-gold">
              {t.about.eyebrow}
            </p>
            <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
              {t.about.heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-foreground/70">{t.about.body}</p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8">
              {t.about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span dir="ltr" className="block font-serif text-4xl text-gold md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[10px] uppercase tracking-widest text-foreground/50">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <main id="work" className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl">{t.work.heading}</h2>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <span className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1 text-[10px] uppercase tracking-tighter">
              {t.work.filterAll}
            </span>
            <span className="px-4 py-1 text-[10px] uppercase tracking-tighter text-foreground/40">
              {t.work.filterFilms}
            </span>
            <span className="px-4 py-1 text-[10px] uppercase tracking-tighter text-foreground/40">
              {t.work.filterEditorial}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-32 md:gap-x-8">
          <button
            type="button"
            onClick={() => setActiveFilm("shadowForm")}
            aria-label={playLabel("Shadow & Form")}
            className="group col-span-12 block text-start"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={workShadowForm}
                alt={t.work.shadowForm.alt}
                loading="lazy"
                width={1600}
                height={686}
                className="aspect-[21/9] w-full object-cover outline-1 -outline-offset-1 outline-foreground/5 transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-onyx/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-20 w-20 items-center justify-center border border-gold/60 backdrop-blur-sm">
                  <Play className="h-5 w-5 text-gold" />
                </span>
              </span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-1 font-serif text-2xl">Shadow &amp; Form</h3>
                <p className="text-[10px] uppercase tracking-widest text-foreground/40">
                  {t.work.shadowForm.meta}
                </p>
              </div>
              <div className="font-serif text-sm italic text-gold">
                {t.work.viewFilm} {arrow}
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilm("noir")}
            aria-label={playLabel("The Noir Series")}
            className="group col-span-12 block text-start md:col-span-5"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={workNoir}
                alt={t.work.noir.alt}
                loading="lazy"
                width={1000}
                height={1250}
                className="aspect-[4/5] w-full object-cover outline-1 -outline-offset-1 outline-foreground/5 transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-onyx/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-16 w-16 items-center justify-center border border-gold/60 backdrop-blur-sm">
                  <Play className="h-4 w-4 text-gold" />
                </span>
              </span>
            </div>
            <h3 className="mb-1 font-serif text-xl">The Noir Series</h3>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40">
              {t.work.noir.meta}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilm("tourer")}
            aria-label={playLabel("The Grand Tourer")}
            className="group col-span-12 mt-0 block text-start md:col-span-6 md:col-start-7 md:mt-24"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={workTourer}
                alt={t.work.tourer.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover outline-1 -outline-offset-1 outline-foreground/5 transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-onyx/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-16 w-16 items-center justify-center border border-gold/60 backdrop-blur-sm">
                  <Play className="h-4 w-4 text-gold" />
                </span>
              </span>
            </div>
            <h3 className="mb-1 font-serif text-xl">The Grand Tourer</h3>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40">
              {t.work.tourer.meta}
            </p>
          </button>
        </div>
      </main>

      <section id="social" className="bg-foreground px-8 py-32 text-onyx">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-baseline justify-between gap-8 md:flex-row">
            <h2 className="font-serif text-5xl md:text-6xl">
              {t.social.titleLine1} <br /> <span className="italic">{t.social.titleLine2}</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-onyx/60">{t.social.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {reels.map((reel) => (
              <img
                key={reel.num}
                src={reel.src}
                alt={`${t.social.reelAlt} — ${t.social.reel} ${reel.num}`}
                loading="lazy"
                width={720}
                height={1280}
                className="aspect-[9/16] w-full object-cover outline-1 -outline-offset-1 outline-onyx/10"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-foreground/5 px-8 py-32">
        <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-2">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-gold">
              {t.contact.available}
            </p>
            <h2 className="mb-8 font-serif text-5xl leading-[1.05] md:text-6xl">
              {t.contact.titleLine1} <br /> <span className="italic">{t.contact.titleLine2}</span>
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              dir="ltr"
              className="font-serif text-xl text-foreground/70 transition-colors hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-12 flex gap-8 text-[10px] uppercase tracking-widest text-foreground/60">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-foreground/5 px-8 py-10">
        <div className="mx-auto max-w-7xl text-[10px] uppercase tracking-tighter text-foreground/20">
          {t.footer.rights}
        </div>
      </footer>

      <VideoLightbox
        open={activeFilm !== null}
        onOpenChange={(open) => !open && setActiveFilm(null)}
        vimeoId={activeFilm ? films[activeFilm].id : ""}
        title={activeFilm ? films[activeFilm].title : ""}
      />
      <Toaster />
    </div>
  );
}

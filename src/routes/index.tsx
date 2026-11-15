import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Megaphone,
  Palette,
  Play,
  Smartphone,
  Users,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import { ContactForm } from "@/components/ContactForm";
import { VideoLightbox } from "@/components/VideoLightbox";
import { CONTACT_EMAIL, REELS, SOCIAL_LINKS, type ReelCategory } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageProvider";

import heroImage from "@/assets/photos/hero-silhouettes.jpg";
import aboutPortrait from "@/assets/photos/about-portrait.jpg";
import photoYoungBoy from "@/assets/photos/young-boy.jpg";
import photoJump from "@/assets/photos/jump-silhouettes.jpg";
import photoAli from "@/assets/photos/ali-chochena.jpg";
import photoSunset from "@/assets/photos/sunset.jpg";
import photoCandle from "@/assets/photos/candle.jpg";
import photoLifestyle from "@/assets/photos/lifestyle.jpg";
import photoKlay from "@/assets/photos/klay.jpg";
import reelLuxury from "@/assets/reels/reel-luxury.jpg";
import reelBusinessLunch from "@/assets/reels/reel-business-lunch.jpg";
import reelFakhara from "@/assets/reels/reel-fakhara.jpg";
import reelCappuccino from "@/assets/reels/reel-cappuccino.jpg";
import reelDamac from "@/assets/reels/reel-damac.jpg";
import reelZed from "@/assets/reels/reel-zed-capital.jpg";
import reelPrestora from "@/assets/reels/reel-prestora.jpg";
import reelSobha from "@/assets/reels/reel-sobha.jpg";
import reelGclass from "@/assets/reels/reel-gclass.jpg";

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
            "Social media reels for hospitality, real estate and automotive brands, plus photography by Islam Attafi.",
          hasPart: [
            { "@type": "CreativeWork", name: "Social Media Reels" },
            { "@type": "CreativeWork", name: "Photography" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const serviceIcons = [Users, Smartphone, Camera, Clapperboard, Megaphone, Palette];

const reelPosters: Record<(typeof REELS)[number]["id"], string> = {
  luxury: reelLuxury,
  businessLunch: reelBusinessLunch,
  fakhara: reelFakhara,
  cappuccino: reelCappuccino,
  damac: reelDamac,
  zedCapital: reelZed,
  prestora: reelPrestora,
  sobha: reelSobha,
  gclass: reelGclass,
};

const photos = [
  { key: "jumpSilhouettes", src: photoJump, w: 1400, h: 933, span: "md:col-span-2" },
  { key: "sunset", src: photoSunset, w: 1400, h: 933, span: "" },
  { key: "youngBoy", src: photoYoungBoy, w: 1127, h: 1400, span: "md:row-span-2" },
  { key: "aliChochena", src: photoAli, w: 933, h: 1400, span: "md:row-span-2" },
  { key: "candle", src: photoCandle, w: 1400, h: 933, span: "md:col-span-2" },
  { key: "lifestyle", src: photoLifestyle, w: 1400, h: 933, span: "" },
  { key: "klay", src: photoKlay, w: 1400, h: 933, span: "col-span-2" },
] as const;

const YOUPIC_URL = "https://youpic.com/islamattafi";

function Index() {
  const [activeReel, setActiveReel] = useState<(typeof REELS)[number] | null>(null);
  const [filter, setFilter] = useState<ReelCategory | "all">("all");
  const { t, lang, toggleLang } = useLanguage();

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
          <a href="#services" className="hidden transition-colors hover:text-gold sm:inline">
            {t.nav.services}
          </a>
          <a href="#work" className="hidden transition-colors hover:text-gold sm:inline">
            {t.nav.work}
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

      <section id="services" className="mx-auto max-w-7xl px-8 pt-32">
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-gold">
          {t.services.eyebrow}
        </p>
        <h2 className="mb-16 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          {t.services.heading}
        </h2>
        <div className="grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = serviceIcons[index] ?? Users;
            return (
              <div
                key={item.title}
                className="group bg-onyx p-8 transition-colors duration-500 hover:bg-foreground/[0.03] md:p-10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} aria-hidden="true" />
                  <span dir="ltr" className="font-serif text-sm text-foreground/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/55">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <main id="work" className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-gold">
              {t.work.eyebrow}
            </p>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">{t.work.heading}</h2>
            <p className="text-sm leading-relaxed text-foreground/55">{t.work.intro}</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.work.eyebrow}>
            {(["all", "hospitality", "realEstate", "automotive"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-widest transition-colors ${
                  filter === key
                    ? "border-gold bg-gold text-onyx"
                    : "border-foreground/15 text-foreground/60 hover:border-gold hover:text-gold"
                }`}
              >
                {key === "all" ? t.work.filterAll : t.work.categories[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {REELS.filter((reel) => filter === "all" || reel.category === filter).map((reel) => {
            const title = t.work.reels[reel.id];
            return (
              <button
                key={reel.id}
                type="button"
                onClick={() => setActiveReel(reel)}
                aria-label={`${t.work.play}: ${title}`}
                className="group relative block overflow-hidden bg-black text-start"
              >
                <img
                  src={reelPosters[reel.id]}
                  alt=""
                  loading="lazy"
                  width={540}
                  height={960}
                  className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/10 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 bg-onyx/40 backdrop-blur-sm">
                    <Play className="h-4 w-4 translate-x-[1px] fill-gold text-gold" />
                  </span>
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-1 block text-[10px] uppercase tracking-widest text-gold">
                    {t.work.categories[reel.category]}
                  </span>
                  <span className="block font-serif text-lg leading-tight">{title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </main>

      <section id="photography" className="bg-foreground px-8 py-32 text-onyx">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-onyx/50">
                {t.photos.eyebrow}
              </p>
              <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
                {t.photos.heading}
              </h2>
              <p className="text-sm leading-relaxed text-onyx/60">{t.photos.intro}</p>
            </div>
            <a
              href={YOUPIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 border-b border-onyx/30 pb-1 text-[10px] uppercase tracking-[0.3em] transition-colors hover:border-onyx"
            >
              {t.photos.more}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </a>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
            {photos.map((photo) => (
              <figure key={photo.key} className={`group relative overflow-hidden ${photo.span}`}>
                <img
                  src={photo.src}
                  alt={t.photos.items[photo.key]}
                  loading="lazy"
                  width={photo.w}
                  height={photo.h}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
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
        open={activeReel !== null}
        onOpenChange={(open) => !open && setActiveReel(null)}
        driveId={activeReel?.driveId ?? ""}
        title={activeReel ? t.work.reels[activeReel.id] : ""}
      />
      <Toaster />
    </div>
  );
}

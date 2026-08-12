import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import { ContactForm } from "@/components/ContactForm";
import { VideoLightbox } from "@/components/VideoLightbox";
import { CONTACT_EMAIL, PROJECT_VIDEOS, SOCIAL_LINKS } from "@/lib/site";

import heroDesert from "@/assets/hero-desert.jpg";
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
  { src: reel01, label: "Reel 01" },
  { src: reel02, label: "Reel 02" },
  { src: reel03, label: "Reel 03" },
  { src: reel04, label: "Reel 04" },
];

const films = {
  shadowForm: { id: PROJECT_VIDEOS.shadowForm, title: "Shadow & Form" },
  noir: { id: PROJECT_VIDEOS.noir, title: "The Noir Series" },
  tourer: { id: PROJECT_VIDEOS.tourer, title: "The Grand Tourer" },
} as const;

function Index() {
  const [activeFilm, setActiveFilm] = useState<keyof typeof films | null>(null);

  return (
    <div className="min-h-screen bg-onyx text-foreground font-sans selection:bg-gold/30">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 mix-blend-difference">
        <span className="font-serif text-2xl italic tracking-tight">Islam Attafi.</span>
        <div className="flex gap-12 text-[10px] font-medium uppercase tracking-[0.3em]">
          <a href="#work" className="transition-colors hover:text-gold">
            Work
          </a>
          <a href="#social" className="transition-colors hover:text-gold">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-gold">
            Contact
          </a>
        </div>
      </nav>

      <header className="relative flex h-screen items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img
            src={heroDesert}
            alt="Cinematic desert landscape at dusk"
            width={1920}
            height={1088}
            className="h-full w-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="mb-6 font-serif text-7xl leading-[0.9] md:text-9xl">
            Visual <br /> <span className="italic">Storytelling</span>
          </h1>
          <p className="mx-auto max-w-md text-sm uppercase tracking-widest text-foreground/60">
            High-end videography and visual direction for luxury brands and independent
            creators.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold to-transparent" />
        </div>
      </header>

      <main id="work" className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-24 flex items-end justify-between">
          <h2 className="font-serif text-4xl">Selected Works</h2>
          <div className="flex gap-4">
            <span className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1 text-[10px] uppercase tracking-tighter">
              All Projects
            </span>
            <span className="px-4 py-1 text-[10px] uppercase tracking-tighter text-foreground/40">
              Films
            </span>
            <span className="px-4 py-1 text-[10px] uppercase tracking-tighter text-foreground/40">
              Editorial
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-32">
          <button
            type="button"
            onClick={() => setActiveFilm("shadowForm")}
            aria-label="Play Shadow & Form film"
            className="group col-span-12 block text-left"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={workShadowForm}
                alt="Minimalist concrete architecture against a black sky"
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
                  Architectural Cinematography / 2024
                </p>
              </div>
              <div className="font-serif text-sm italic text-gold">View Film &rarr;</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilm("noir")}
            aria-label="Play The Noir Series film"
            className="group col-span-12 block text-left md:col-span-5"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={workNoir}
                alt="High contrast black and white fashion portrait"
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
              Photography / Branding
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilm("tourer")}
            aria-label="Play The Grand Tourer film"
            className="group col-span-12 mt-0 block text-left md:col-span-6 md:col-start-7 md:mt-24"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={workTourer}
                alt="Luxury car driving through a misty mountain pass"
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
              Social Media Campaign / Videography
            </p>
          </button>
        </div>

      </main>

      <section id="social" className="bg-foreground px-8 py-32 text-onyx">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-baseline justify-between gap-8 md:flex-row">
            <h2 className="font-serif text-5xl md:text-6xl">
              Social <br /> <span className="italic">Curation</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-onyx/60">
              Tailored content for high-performance social media channels, focusing on
              aesthetic consistency and engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {reels.map((reel) => (
              <img
                key={reel.label}
                src={reel.src}
                alt={`Social media reel frame — ${reel.label}`}
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
              Available for projects
            </p>
            <h2 className="mb-8 font-serif text-5xl leading-[1.05] md:text-6xl">
              Start a <br /> <span className="italic">Conversation</span>
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
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
          &copy; 2026 Islam Attafi Visuals. All Rights Reserved.
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

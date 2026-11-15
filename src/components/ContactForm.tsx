import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

import { CONTACT_EMAIL } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary } from "@/i18n/translations";

function buildSchema(f: Dictionary["form"]) {
  return z.object({
    name: z.string().trim().min(2, f.errName).max(100),
    email: z.string().trim().email(f.errEmail).max(255),
    project: z.string().trim().max(120).optional(),
    message: z.string().trim().min(10, f.errMessage).max(1500),
  });
}

type Errors = Partial<Record<"name" | "email" | "project" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const { t, lang } = useLanguage();
  const f = t.form;
  const arrow = lang === "ar" ? "\u2190" : "\u2192";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = buildSchema(f).safeParse({
      name: form.get("name"),
      email: form.get("email"),
      project: form.get("project"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const { name, email, project, message } = parsed.data;
    const subject = `${f.subjectPrefix} — ${project || f.subjectProject} — ${name}`;
    const body = [
      `${f.bodyName}: ${name}`,
      `${f.bodyEmail}: ${email}`,
      `${f.bodyProject}: ${project || "—"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success(f.toast);
  }

  const fieldClass =
    "w-full border-b border-foreground/15 bg-transparent py-3 text-sm text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none transition-colors";
  const labelClass = "text-[10px] uppercase tracking-[0.3em] text-foreground/40";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            {f.name}
          </label>
          <input
            id="name"
            name="name"
            maxLength={100}
            placeholder={f.namePlaceholder}
            className={fieldClass}
          />
          {errors.name && <p className="text-[11px] text-destructive">{errors.name}</p>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className={labelClass}>
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            placeholder={f.emailPlaceholder}
            dir="ltr"
            className={fieldClass}
          />
          {errors.email && <p className="text-[11px] text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="project" className={labelClass}>
          {f.project}
        </label>
        <div className="relative">
          <select
            id="project"
            name="project"
            defaultValue=""
            required
            className={`${fieldClass} cursor-pointer appearance-none invalid:text-foreground/25 [&>option]:bg-onyx [&>option]:text-foreground`}
          >
            <option value="" disabled>
              {f.projectPlaceholder}
            </option>
            {t.services.items.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
            <option value={f.projectOther}>{f.projectOther}</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute end-0 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className={labelClass}>
          {f.brief}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1500}
          placeholder={f.briefPlaceholder}
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className="text-[11px] text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="group flex w-fit items-center gap-4 border border-gold/40 px-10 py-4 text-[10px] uppercase tracking-[0.4em] text-gold transition-colors hover:bg-gold hover:text-onyx"
      >
        {f.submit}
        <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
          {arrow}
        </span>
      </button>
    </form>
  );
}

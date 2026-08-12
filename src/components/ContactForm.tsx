import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

import { CONTACT_EMAIL } from "@/lib/site";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  project: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell me a little more").max(1500),
});

type Errors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = inquirySchema.safeParse({
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
    const subject = `New inquiry — ${project || "Project"} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${project || "—"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your mail app to send the inquiry.");
  }

  const fieldClass =
    "w-full border-b border-foreground/15 bg-transparent py-3 text-sm text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none transition-colors";
  const labelClass = "text-[10px] uppercase tracking-[0.3em] text-foreground/40";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" maxLength={100} placeholder="Your name" className={fieldClass} />
          {errors.name && <p className="text-[11px] text-destructive">{errors.name}</p>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            placeholder="you@studio.com"
            className={fieldClass}
          />
          {errors.email && <p className="text-[11px] text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="project" className={labelClass}>
          Project type
        </label>
        <input
          id="project"
          name="project"
          maxLength={120}
          placeholder="Film / Editorial / Social campaign"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className={labelClass}>
          Brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1500}
          placeholder="Timeline, scope and references."
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className="text-[11px] text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="group flex w-fit items-center gap-4 border border-gold/40 px-10 py-4 text-[10px] uppercase tracking-[0.4em] text-gold transition-colors hover:bg-gold hover:text-onyx"
      >
        Send inquiry
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>
    </form>
  );
}

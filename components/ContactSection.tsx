"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import IconLink from "@/components/ui/IconLink";
import { emailComposeUrl, social } from "@/lib/data";
import { cn } from "@/lib/cn";

/**
 * Email, LinkedIn, and GitHub only. No phone number by design — a number
 * published on a public page collects spam and robocalls, and recruiters who
 * need one can ask over email.
 */
export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" heading="Let’s talk" width="prose">
      <div className="relative">

        <p className="max-w-[34rem] text-lg text-ink-muted">
          Open to new-grad roles and research opportunities, please feel free to reach out!
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href={emailComposeUrl}>
            <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            Email Me
          </Button>

          <ul className="flex items-center gap-5">
            <li>
              <IconLink href={social.linkedin} label="LinkedIn" icon={Linkedin} showLabel />
            </li>
            <li>
              <IconLink href={social.github} label="GitHub" icon={Github} showLabel />
            </li>
          </ul>
        </div>

        <div className="relative mt-8 inline-block">
          <button
            type="button"
            onClick={copyEmail}
            className="font-mono text-sm tracking-label text-ink-muted transition-colors hover:text-ink"
          >
            {social.email}
          </button>

          <span
            role="status"
            className={cn(
              "pointer-events-none absolute left-0 top-full mt-1.5 whitespace-nowrap rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[12px] uppercase tracking-label text-ink shadow-soft transition-opacity duration-150",
              copied ? "opacity-100" : "opacity-0",
            )}
          >
            Email Copied!
          </span>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;

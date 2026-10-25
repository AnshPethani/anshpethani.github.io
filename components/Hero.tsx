import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import IconLink from "@/components/ui/IconLink";
import { emailComposeUrl, portraitUrl, social } from "@/lib/data";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pb-section pt-10 sm:pt-14">
      <Container>
        {/*
         * Explicit grid placement rather than order utilities, so the DOM order
         * (portrait, then text) is also the mobile reading order.
         */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <Image
            src={portraitUrl}
            alt={`Portrait of ${site.name}`}
            width={720}
            height={960}
            priority
            sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, 13rem"
            className="h-auto w-44 object-contain sm:w-52 lg:col-start-2 lg:row-start-1 lg:w-72 xl:w-80"
          />

          <div className="max-w-prose lg:col-start-1 lg:row-start-1">
            <h1 id="hero-heading" className="text-3xl font-semibold sm:text-4xl">
              {site.name}
            </h1>

            <p className="mt-6 max-w-[38rem] text-lg text-ink-muted">
              I&apos;m a Master&apos;s student in Computer Science at NC State and a Research Associate
              at the iEXCEL Lab, working where machine learning research turns into software people
              can actually use.
            </p>
            <p className="mt-3 max-w-[38rem] text-lg text-ink-muted">
              I train graph neural networks to vet crowdsourced scientific data, benchmark embedding
              models across thousands of publications, and build LLM tools and full-stack apps
              from the database to the interface.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="secondary">
                Get In Touch
              </Button>
            </div>

            <ul className="mt-8 flex items-center gap-5">
              <li>
                <IconLink href={social.github} label="GitHub" icon={Github} />
              </li>
              <li>
                <IconLink href={social.linkedin} label="LinkedIn" icon={Linkedin} />
              </li>
              <li>
                <IconLink href={emailComposeUrl} label="Email" icon={Mail} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

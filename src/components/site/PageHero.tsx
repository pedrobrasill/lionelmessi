import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  image?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border/50">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="noise-veil absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[0.95] uppercase sm:text-7xl">{title}</h1>
          <div className="rule-gold mt-6" />
          {description ? (
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}

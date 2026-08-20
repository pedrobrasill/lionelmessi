import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";
import { categoriasGols, golsIconicos } from "@/data/messi";

export const Route = createFileRoute("/gols")({
  head: () => ({
    meta: [
      { title: "Gols icônicos de Messi — Os lances que viraram história" },
      {
        name: "description",
        content:
          "Coleção comentada dos gols mais marcantes de Lionel Messi: gols solo, gols em finais e lances decisivos contra grandes rivais.",
      },
      { property: "og:title", content: "Gols icônicos de Lionel Messi" },
      { property: "og:description", content: "Os lances que definiram a carreira, comentados um a um." },
    ],
  }),
  component: GolsPage,
});

function GolsPage() {
  const [cat, setCat] = useState("Todos");
  const lista = useMemo(
    () => golsIconicos.filter((g) => cat === "Todos" || g.categorias.includes(cat)),
    [cat],
  );

  return (
    <>
      <PageHero
        eyebrow="Antologia"
        title="Gols que viraram história"
        description="Uma seleção comentada dos lances mais memoráveis, do primeiro gol contra o Albacete às faltas em Miami."
        image={img.goal}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {categoriasGols.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs tracking-[0.14em] uppercase transition-colors",
                cat === c
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border/60 text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {lista.map((g, i) => (
            <Reveal key={g.titulo} delay={i * 60} className="glass-card rounded-xl p-7">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl text-gilded">{g.ano}</span>
                <span className="eyebrow">{g.competicao}</span>
              </div>
              <p className="mt-4 font-display text-xl uppercase">{g.titulo}</p>
              <p className="mt-1 text-xs tracking-[0.16em] text-primary uppercase">vs {g.adversario}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.descricao}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.categorias.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border/60 px-2.5 py-1 text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

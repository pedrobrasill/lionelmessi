import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { galeriaImagens, img } from "@/lib/images";
import { categoriasGaleria, galeria } from "@/data/messi";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria visual — A carreira de Messi em imagens" },
      {
        name: "description",
        content:
          "Galeria ilustrada da trajetória de Lionel Messi: infância em Rosário, Camp Nou, Paris, Miami, Ballon d'Or e a Copa do Mundo.",
      },
      { property: "og:title", content: "Galeria visual de Lionel Messi" },
      { property: "og:description", content: "A carreira do craque contada em imagens." },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const [cat, setCat] = useState("Todas");
  const [aberto, setAberto] = useState<number | null>(null);
  const lista = useMemo(
    () => galeria.filter((g) => cat === "Todas" || g.categoria === cat),
    [cat],
  );
  const ativo = aberto === null ? null : lista[aberto];

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="A carreira em imagens"
        description="Composições visuais criadas para este projeto, organizadas por fase da carreira."
        image={img.argentina}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {categoriasGaleria.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setAberto(null);
              }}
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((g, i) => (
            <Reveal key={g.titulo} delay={i * 50}>
              <button
                onClick={() => setAberto(i)}
                className="group relative block w-full overflow-hidden rounded-xl border border-border/50 text-left"
              >
                <img
                  src={galeriaImagens[g.categoria] ?? img.hero}
                  alt={`${g.titulo} — ${g.legenda}`}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="eyebrow">{g.categoria}</p>
                  <p className="mt-1 font-display text-lg uppercase">{g.titulo}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {ativo ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ativo.titulo}
          onClick={() => setAberto(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-[color:var(--ink)]/95 p-5 backdrop-blur-sm"
        >
          <button
            aria-label="Fechar"
            className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full border border-border/60"
          >
            <X className="h-4 w-4" />
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galeriaImagens[ativo.categoria] ?? img.hero}
              alt={`${ativo.titulo} — ${ativo.legenda}`}
              className="max-h-[70vh] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-xl uppercase">{ativo.titulo}</p>
              <p className="mt-1 text-sm text-muted-foreground">{ativo.legenda}</p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}

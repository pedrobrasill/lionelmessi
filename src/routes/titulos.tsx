import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";
import { clubes, titulos } from "@/data/messi";

export const Route = createFileRoute("/titulos")({
  head: () => ({
    meta: [
      { title: "Títulos de Lionel Messi — 46 conquistas" },
      {
        name: "description",
        content:
          "Todos os títulos de Lionel Messi: La Liga, Champions League, Copa do Mundo, Copa América, Ligue 1, Leagues Cup e muito mais.",
      },
      { property: "og:title", content: "Todos os títulos de Lionel Messi" },
      { property: "og:description", content: "A galeria completa de conquistas por clube e seleção." },
    ],
  }),
  component: TitulosPage,
});

const filtros = ["Todos", ...clubes.map((c) => c.nome)];

function TitulosPage() {
  const [filtro, setFiltro] = useState("Todos");
  const lista = useMemo(() => {
    const slug = clubes.find((c) => c.nome === filtro)?.slug;
    return titulos.filter((t) => !slug || t.clube === slug);
  }, [filtro]);

  const total = lista.reduce((a, t) => a + t.anos.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Vitrine"
        title="A sala de troféus"
        description="Mais de quarenta títulos coletivos entre Barcelona, PSG, Inter Miami e Seleção Argentina."
        image={img.ballon}
      />

      <Section>
        <div className="flex flex-wrap items-center gap-2">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs tracking-[0.14em] uppercase transition-colors",
                filtro === f
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border/60 text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto font-display text-3xl text-gilded">
            <CountUp value={total} />
            <span className="ml-2 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
              troféus
            </span>
          </span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((t, i) => (
            <Reveal key={`${t.clube}-${t.competicao}`} delay={i * 50} className="glass-card rounded-xl p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-lg uppercase">{t.competicao}</p>
                <Trophy className="h-5 w-5 shrink-0 text-primary" />
              </div>
              <p className="mt-1 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                {clubes.find((c) => c.slug === t.clube)?.nome}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.anos.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-primary/30 px-2.5 py-1 text-[0.68rem] text-primary"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {t.anos.length}× campeão
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

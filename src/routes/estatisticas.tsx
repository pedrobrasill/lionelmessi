import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";
import { clubes, estatisticas, recordes, temporadas } from "@/data/messi";

export const Route = createFileRoute("/estatisticas")({
  head: () => ({
    meta: [
      { title: "Estatísticas de Messi — Gols, assistências e recordes" },
      {
        name: "description",
        content:
          "Dashboard com as estatísticas de Lionel Messi: gols por temporada, assistências, hat-tricks, recordes e números por clube.",
      },
      { property: "og:title", content: "Estatísticas de Lionel Messi" },
      { property: "og:description", content: "Gols, assistências e recordes temporada a temporada." },
    ],
  }),
  component: EstatisticasPage,
});

const filtros = ["Todos", ...clubes.map((c) => c.nome)];

function EstatisticasPage() {
  const [filtro, setFiltro] = useState("Todos");

  const dados = useMemo(() => {
    const slug = clubes.find((c) => c.nome === filtro)?.slug;
    return temporadas.filter((t) => !slug || t.clube === slug);
  }, [filtro]);

  const maxGols = Math.max(...dados.map((d) => d.gols), 1);
  const totalGols = dados.reduce((a, d) => a + d.gols, 0);
  const totalAssist = dados.reduce((a, d) => a + d.assist, 0);

  return (
    <>
      <PageHero
        eyebrow="Dados"
        title="Estatísticas da carreira"
        description="Números oficiais compilados por temporada, clube e competição — a dimensão estatística de duas décadas no topo."
        image={img.goal}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {estatisticas.slice(0, 5).map((e, i) => (
            <Reveal key={e.chave} delay={i * 60} className="glass-card rounded-xl p-6">
              <p className="font-display text-4xl text-gilded">
                <CountUp value={e.valor} suffix={e.sufixo} />
              </p>
              <p className="mt-2 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                {e.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ink)]">
        <SectionHeading eyebrow="Evolução" title="Gols e assistências por temporada" />

        <div className="mt-10 flex flex-wrap gap-2">
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
        </div>

        <div className="mt-8 flex gap-8 text-xs tracking-[0.16em] text-muted-foreground uppercase">
          <span>
            Gols: <span className="font-display text-lg text-primary">{totalGols}</span>
          </span>
          <span>
            Assistências: <span className="font-display text-lg text-primary">{totalAssist}</span>
          </span>
        </div>

        <div className="mt-10 flex h-64 items-end gap-2 overflow-x-auto rounded-xl border border-border/40 bg-white/[0.02] p-5">
          {dados.map((d, i) => (
            <div key={d.temporada} className="group flex min-w-10 flex-1 flex-col items-center gap-2">
              <span className="text-[0.6rem] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {d.gols}
              </span>
              <div className="flex w-full flex-1 items-end gap-1">
                <div
                  className="w-full rounded-t bg-[image:var(--gradient-gold)] transition-all duration-700"
                  style={{ height: `${(d.gols / maxGols) * 100}%`, transitionDelay: `${i * 40}ms` }}
                  title={`${d.temporada}: ${d.gols} gols`}
                />
                <div
                  className="w-full rounded-t bg-white/15 transition-all duration-700"
                  style={{ height: `${(d.assist / maxGols) * 100}%`, transitionDelay: `${i * 40}ms` }}
                  title={`${d.temporada}: ${d.assist} assistências`}
                />
              </div>
              <span className="rotate-45 text-[0.55rem] whitespace-nowrap text-muted-foreground">
                {d.temporada}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Por clube" title="Distribuição de gols" />
        <div className="mt-12 space-y-5">
          {clubes.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <div className="flex items-baseline justify-between text-xs tracking-[0.14em] uppercase">
                <span>{c.nome}</span>
                <span className="text-primary">{c.gols} gols</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(c.gols / 672) * 100}%`, background: c.cor }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ink)]">
        <SectionHeading eyebrow="Recordes" title="Marcas históricas" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recordes.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 60} className="glass-card rounded-xl p-6">
              <p className="font-display text-4xl text-gilded">{r.valor}</p>
              <p className="mt-3 font-display text-sm uppercase">{r.titulo}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { clubes, estatisticas } from "@/data/messi";

export const Route = createFileRoute("/carreira")({
  head: () => ({
    meta: [
      { title: "Carreira de Messi — Barcelona, PSG, Inter Miami e Argentina" },
      {
        name: "description",
        content:
          "Panorama da carreira de Lionel Messi por clube: jogos, gols, assistências, títulos e os momentos marcantes de cada passagem.",
      },
      { property: "og:title", content: "A carreira de Lionel Messi" },
      { property: "og:description", content: "Números e marcos por clube e pela Seleção Argentina." },
    ],
  }),
  component: CarreiraPage,
});

function CarreiraPage() {
  return (
    <>
      <PageHero
        eyebrow="Carreira"
        title="Quatro camisas, uma era"
        description="Do Camp Nou ao Chase Stadium, passando por Paris e pela Albiceleste: os números e os capítulos de cada passagem."
        image={img.hero}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {estatisticas.slice(0, 5).map((e, i) => (
            <Reveal key={e.chave} delay={i * 70} className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-4xl text-gilded">
                <CountUp value={e.valor} suffix={e.sufixo} />
              </p>
              <p className="mt-2 text-[0.64rem] tracking-[0.2em] text-muted-foreground uppercase">
                {e.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {clubes.map((c, idx) => (
        <Section key={c.slug} className={idx % 2 === 0 ? "bg-[color:var(--ink)]" : ""}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading eyebrow={c.periodo} title={c.nome} description={c.resumo} />
              <div className="mt-8 grid grid-cols-4 gap-3">
                {[
                  ["Jogos", c.jogos],
                  ["Gols", c.gols],
                  ["Assist.", c.assistencias],
                  ["Títulos", c.titulos],
                ].map(([label, v]) => (
                  <div key={String(label)} className="glass-card rounded-lg p-4">
                    <p className="font-display text-2xl text-primary">{v}</p>
                    <p className="mt-1 text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/clube/$slug"
                params={{ slug: c.slug }}
                className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-primary uppercase hover:underline"
              >
                Página do clube <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-3">
              {c.momentos.map((m, i) => (
                <Reveal as="li" key={m} delay={i * 60} className="glass-card rounded-lg p-5">
                  <span
                    className="mr-3 inline-block h-2 w-2 rounded-full align-middle"
                    style={{ background: c.cor }}
                    aria-hidden
                  />
                  <span className="text-sm text-muted-foreground">{m}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>
      ))}
    </>
  );
}

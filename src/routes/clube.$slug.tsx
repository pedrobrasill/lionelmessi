import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { clubeImagens, img } from "@/lib/images";
import { clubes, temporadas, titulos } from "@/data/messi";

export const Route = createFileRoute("/clube/$slug")({
  loader: ({ params }) => {
    const clube = clubes.find((c) => c.slug === params.slug);
    if (!clube) throw notFound();
    return { clube };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Clube não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const { clube } = loaderData;
    const desc = `${clube.nome} (${clube.periodo}): ${clube.jogos} jogos, ${clube.gols} gols, ${clube.assistencias} assistências e ${clube.titulos} títulos de Lionel Messi.`;
    return {
      meta: [
        { title: `Messi no ${clube.nome} — números e momentos` },
        { name: "description", content: desc },
        { property: "og:title", content: `Messi no ${clube.nome}` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ClubePage,
});

function ClubePage() {
  const { clube } = Route.useLoaderData();
  const seasons = temporadas.filter((t) => t.clube === clube.slug);
  const conquistas = titulos.filter((t) => t.clube === clube.slug);
  const max = Math.max(...seasons.map((s) => s.gols), 1);

  return (
    <>
      <PageHero
        eyebrow={clube.periodo}
        title={clube.nome}
        description={clube.resumo}
        image={clubeImagens[clube.slug] ?? img.hero}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["Jogos", clube.jogos],
            ["Gols", clube.gols],
            ["Assistências", clube.assistencias],
            ["Títulos", clube.titulos],
          ].map(([label, v], i) => (
            <Reveal key={String(label)} delay={i * 70} className="glass-card rounded-xl p-6 text-center">
              <p className="font-display text-4xl text-gilded">
                <CountUp value={Number(v)} />
              </p>
              <p className="mt-2 text-[0.64rem] tracking-[0.2em] text-muted-foreground uppercase">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {seasons.length > 0 && (
        <Section className="bg-[color:var(--ink)]">
          <SectionHeading eyebrow="Temporada a temporada" title="Produção ofensiva" />
          <div className="mt-12 space-y-3">
            {seasons.map((s, i) => (
              <Reveal key={s.temporada} delay={i * 40}>
                <div className="flex items-center gap-4">
                  <span className="w-20 shrink-0 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {s.temporada}
                  </span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-[image:var(--gradient-gold)]"
                      style={{ width: `${(s.gols / max) * 100}%` }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right text-xs text-muted-foreground">
                    <span className="font-display text-base text-primary">{s.gols}</span> G ·{" "}
                    {s.assist} A
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Momentos" title="Capítulos marcantes" />
            <ul className="mt-10 space-y-3">
              {clube.momentos.map((m, i) => (
                <Reveal as="li" key={m} delay={i * 60} className="glass-card rounded-lg p-5 text-sm text-muted-foreground">
                  {m}
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Conquistas" title="Títulos" />
            <ul className="mt-10 space-y-3">
              {conquistas.map((t, i) => (
                <Reveal as="li" key={t.competicao} delay={i * 60} className="glass-card rounded-lg p-5">
                  <p className="font-display text-base uppercase">{t.competicao}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.anos.join(" · ")}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--ink)]">
        <div className="flex flex-wrap gap-3">
          {clubes
            .filter((c) => c.slug !== clube.slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/clube/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border/70 px-5 py-2 text-xs tracking-[0.16em] uppercase transition-colors hover:border-primary/60 hover:text-primary"
              >
                {c.nome}
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}

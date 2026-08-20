import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import {
  ballonDOr,
  clubes,
  comparativo,
  copa2022,
  curiosidades,
  elClasico,
  golsIconicos,
  momentos,
  numerosHero,
  perfil,
  recordes,
} from "@/data/messi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enciclopédia Messi — A carreira completa de Lionel Messi" },
      {
        name: "description",
        content:
          "Enciclopédia digital de Lionel Messi: 921 gols, 46 títulos, 8 Ballon d'Or, a Copa do Mundo de 2022 e todos os momentos que definiram o maior jogador da história.",
      },
      { property: "og:title", content: "Enciclopédia Messi — A carreira completa" },
      {
        property: "og:description",
        content: "História, estatísticas, títulos, gols icônicos e legado de Lionel Messi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={img.hero}
          alt="Estádio iluminado à noite"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-night)] opacity-80" />
        <div className="noise-veil absolute inset-0" />

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-5 py-28 sm:px-8">
          <Reveal>
            <p className="eyebrow">Enciclopédia digital · 1987 — hoje</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-[3.2rem] leading-[0.86] uppercase sm:text-[8rem]">
              Lionel
              <span className="block text-gilded">Messi</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              {perfil.resumo}
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/historia"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold tracking-[0.14em] text-[color:var(--ink)] uppercase"
              >
                Explorar a história
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/estatisticas"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-colors hover:border-primary/60 hover:text-primary"
              >
                Ver estatísticas
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5">
            {numerosHero.map((n, i) => (
              <Reveal key={n.label} delay={400 + i * 90}>
                <p className="font-display text-4xl text-gilded sm:text-5xl">
                  <CountUp value={n.valor} suffix={n.sufixo} />
                </p>
                <p className="mt-2 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {n.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section id="clubes">
        <SectionHeading
          eyebrow="Trajetória"
          title={<>Os clubes de uma<br />carreira irrepetível</>}
          description="Quatro camisas, quatro contextos, o mesmo padrão de excelência ao longo de mais de duas décadas."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {clubes.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link
                to="/clube/$slug"
                params={{ slug: c.slug }}
                className="glass-card group relative block h-full overflow-hidden rounded-xl p-7"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: c.cor }}
                  aria-hidden
                />
                <p className="eyebrow">{c.periodo}</p>
                <h3 className="mt-3 text-2xl uppercase sm:text-3xl">{c.nome}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.resumo}</p>
                <dl className="mt-6 grid grid-cols-4 gap-3 border-t border-border/40 pt-5">
                  {[
                    ["Jogos", c.jogos],
                    ["Gols", c.gols],
                    ["Assist.", c.assistencias],
                    ["Títulos", c.titulos],
                  ].map(([label, v]) => (
                    <div key={String(label)}>
                      <dt className="text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                        {label}
                      </dt>
                      <dd className="font-display text-xl text-primary">{v}</dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-primary uppercase">
                  Ver clube
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-y border-border/50">
        <img src={img.worldcup} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionHeading eyebrow="Catar 2022" title={copa2022.frase} />
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {copa2022.estatisticas.map((e, i) => (
              <Reveal key={e.label} delay={i * 90} className="glass-card rounded-xl p-6 text-center">
                <p className="font-display text-5xl text-gilded">
                  <CountUp value={e.valor} />
                </p>
                <p className="mt-2 text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {e.label}
                </p>
              </Reveal>
            ))}
          </div>
          <ol className="mt-12 space-y-3">
            {copa2022.caminho.map((j, i) => (
              <Reveal as="li" key={j.adversario} delay={i * 60} className="glass-card rounded-lg p-5">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="eyebrow">{j.fase}</span>
                  <span className="font-display text-lg uppercase">{j.adversario}</span>
                  <span className="ml-auto font-display text-lg text-primary">{j.placar}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{j.nota}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Section id="ballon">
        <SectionHeading
          eyebrow="Ballon d'Or"
          title="Oito vezes o melhor do mundo"
          description="Nenhum jogador venceu o prêmio tantas vezes. Cada troféu conta a história de um ano irrepetível."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ballonDOr.map((b, i) => (
            <Reveal key={b.ano} delay={i * 70} className="glass-card rounded-xl p-6">
              <p className="font-display text-4xl text-gilded">{b.ano}</p>
              <p className="mt-3 font-display text-base uppercase">{b.titulo}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="momentos" className="bg-[color:var(--ink)]">
        <SectionHeading eyebrow="Momentos" title="Instantes que viraram história" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {momentos.map((m, i) => (
            <Reveal key={m.titulo} delay={i * 60} className="glass-card rounded-xl p-6">
              <p className="eyebrow">{m.ano}</p>
              <p className="mt-3 font-display text-lg uppercase">{m.titulo}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="recordes">
        <SectionHeading eyebrow="Recordes" title="Marcas difíceis de alcançar" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recordes.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 60} className="glass-card rounded-xl p-6">
              <p className="font-display text-5xl text-gilded">{r.valor}</p>
              <p className="mt-3 font-display text-sm uppercase">{r.titulo}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="clasico" className="bg-[color:var(--ink)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="El Clásico" title="O maior goleador do clássico" />
            <div className="mt-10 grid grid-cols-2 gap-4">
              {elClasico.numeros.map((n, i) => (
                <Reveal key={n.label} delay={i * 70} className="glass-card rounded-xl p-6">
                  <p className="font-display text-4xl text-gilded">
                    <CountUp value={n.valor} />
                  </p>
                  <p className="mt-2 text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {n.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {elClasico.momentos.map((m, i) => (
              <Reveal as="li" key={m.ano} delay={i * 70} className="glass-card rounded-lg p-5">
                <p className="eyebrow">{m.ano}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.texto}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="comparativo">
        <SectionHeading
          eyebrow="Comparativo"
          title="Messi × Cristiano Ronaldo"
          description="Duas décadas de rivalidade que elevaram o nível do futebol mundial."
        />
        <div className="mt-12 space-y-4">
          {comparativo.map((c, i) => {
            const total = c.messi + c.cr7;
            const pct = (c.messi / total) * 100;
            return (
              <Reveal key={c.metrica} delay={i * 70}>
                <div className="flex items-center justify-between text-xs tracking-[0.16em] uppercase">
                  <span className="text-primary">{c.messi}</span>
                  <span className="text-muted-foreground">{c.metrica}</span>
                  <span className="text-foreground/70">{c.cr7}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-[image:var(--gradient-gold)] transition-[width] duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section id="gols" className="bg-[color:var(--ink)]">
        <SectionHeading eyebrow="Gols icônicos" title="A seleção dos gols eternos" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {golsIconicos.slice(0, 6).map((g, i) => (
            <Reveal key={g.titulo} delay={i * 70} className="glass-card rounded-xl p-6">
              <p className="eyebrow">{g.ano} · {g.competicao}</p>
              <p className="mt-3 font-display text-lg uppercase">{g.titulo}</p>
              <p className="mt-1 text-xs tracking-[0.16em] text-primary uppercase">vs {g.adversario}</p>
              <p className="mt-3 text-sm text-muted-foreground">{g.descricao}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10">
          <Link
            to="/gols"
            className="inline-flex items-center gap-2 text-sm tracking-[0.18em] text-primary uppercase hover:underline"
          >
            Ver todos os gols <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Section id="curiosidades">
        <SectionHeading eyebrow="Curiosidades" title="Detalhes por trás do mito" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {curiosidades.map((c, i) => (
            <Reveal key={c.tema} delay={i * 60} className="glass-card rounded-xl p-6">
              <p className="eyebrow">{c.tema}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { linhaDoTempo } from "@/data/messi";

export const Route = createFileRoute("/linha-do-tempo")({
  head: () => ({
    meta: [
      { title: "Linha do tempo de Messi — 1987 até hoje" },
      {
        name: "description",
        content:
          "Cronologia interativa da vida de Lionel Messi: nascimento em Rosário, La Masia, os Ballon d'Or, a Copa do Mundo de 2022 e o Inter Miami.",
      },
      { property: "og:title", content: "Linha do tempo de Lionel Messi" },
      { property: "og:description", content: "Os marcos ano a ano de uma carreira histórica." },
    ],
  }),
  component: LinhaDoTempoPage,
});

function LinhaDoTempoPage() {
  return (
    <>
      <PageHero
        eyebrow="Cronologia"
        title="Linha do tempo"
        description="De 1987 aos dias atuais: os marcos que transformaram um menino de Rosário no maior jogador da história."
        image={img.worldcup}
      />

      <Section>
        <ol className="relative ml-4 border-l border-border/60 sm:ml-8">
          {linhaDoTempo.map((e, i) => (
            <Reveal as="li" key={`${e.ano}-${e.titulo}`} delay={i * 50} className="relative pb-12 pl-8 sm:pl-12">
              <span className="absolute top-2 -left-[7px] h-3.5 w-3.5 rounded-full bg-[image:var(--gradient-gold)] ring-4 ring-[color:var(--ink)]" />
              <p className="font-display text-4xl text-gilded sm:text-5xl">{e.ano}</p>
              <p className="mt-2 font-display text-lg uppercase">{e.titulo}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import { historia, perfil } from "@/data/messi";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "História de Lionel Messi — De Rosário ao Inter Miami" },
      {
        name: "description",
        content:
          "A biografia completa de Lionel Messi: infância em Rosário, La Masia, a era Barcelona, o PSG, a Argentina campeã do mundo e o Inter Miami.",
      },
      { property: "og:title", content: "História de Lionel Messi" },
      { property: "og:description", content: "A trajetória completa, de Rosário ao Inter Miami." },
    ],
  }),
  component: HistoriaPage,
});

function HistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Biografia"
        title="A história de Lionel Messi"
        description={perfil.resumo}
        image={img.youth}
      />

      <Section>
        <SectionHeading eyebrow="Perfil" title="Ficha do jogador" />
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Nome completo", perfil.nomeCompleto],
            ["Nascimento", perfil.nascimento],
            ["Local", perfil.local],
            ["Nacionalidade", perfil.nacionalidade],
            ["Posição", perfil.posicao],
            ["Altura", perfil.altura],
            ["Pé dominante", perfil.pe],
            ["Camisa", perfil.camisa],
            ["Apelidos", perfil.apelidos.join(" · ")],
          ].map(([label, valor], i) => (
            <Reveal key={label} delay={i * 50} className="glass-card rounded-xl p-6">
              <dt className="eyebrow">{label}</dt>
              <dd className="mt-2 text-sm text-foreground">{valor}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {historia.map((fase, idx) => (
        <Section
          key={fase.slug}
          id={fase.slug}
          className={idx % 2 === 1 ? "bg-[color:var(--ink)]" : ""}
        >
          <SectionHeading eyebrow={`Capítulo ${String(idx + 1).padStart(2, "0")}`} title={fase.fase} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {fase.itens.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 60} className="glass-card rounded-xl p-6">
                <p className="font-display text-lg uppercase">{item.titulo}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}

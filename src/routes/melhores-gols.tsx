import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";

type VideoGol = {
  id: string;
  titulo: string;
  ano: string;
  competicao: string;
  clube: string;
  descricao: string;
};

const videosGols: VideoGol[] = [
  { id: "j9ihJMqZGD0", titulo: "O primeiro gol pelo Barcelona", ano: "2005", competicao: "La Liga", clube: "Barcelona", descricao: "Toque por cobertura no lançamento de Ronaldinho, contra o Albacete: o começo de 672 gols pelo clube." },
  { id: "mMiL4_1Yewg", titulo: "O gol maradoniano contra o Getafe", ano: "2007", competicao: "Copa del Rey", clube: "Barcelona", descricao: "Corrida de mais de 60 metros driblando meio time — a réplica quase exata do gol de Maradona em 1986." },
  { id: "crOBBouZbmc", titulo: "O cabeceio na final de Roma", ano: "2009", competicao: "Champions League", clube: "Barcelona", descricao: "Contra o Manchester United, o menor em campo subiu mais alto que todos para selar o título europeu." },
  { id: "nHAjktNg6fo", titulo: "O drible em Boateng", ano: "2015", competicao: "Champions League", clube: "Barcelona", descricao: "Semifinal contra o Bayern: corte seco, zagueiro no chão e a cavadinha por cima de Neuer." },
  { id: "iABupDkHjOw", titulo: "Golaço na final da Copa del Rey", ano: "2015", competicao: "Copa del Rey", clube: "Barcelona", descricao: "Arrancada pela direita contra o Athletic, quatro marcadores superados e finalização no canto." },
  { id: "wQZQADpna9Q", titulo: "A camisa erguida no Bernabéu", ano: "2017", competicao: "La Liga", clube: "Barcelona", descricao: "Gol da vitória no último minuto do Clássico, seguido da celebração que virou símbolo de uma era." },
  { id: "JH-VxjFsvJI", titulo: "A falta contra os Estados Unidos", ano: "2016", competicao: "Copa América", clube: "Argentina", descricao: "Cobrança perfeita na semifinal, gol que o tornou maior artilheiro da história da seleção argentina." },
  { id: "9mlybuNYGtE", titulo: "A falta impossível contra o Liverpool", ano: "2019", competicao: "Champions League", clube: "Barcelona", descricao: "De longe, sem ângulo, no ângulo: o gol 600 pelo Barcelona em uma noite inesquecível no Camp Nou." },
  { id: "xhDzgSY9oCE", titulo: "O chute que salvou a Copa", ano: "2022", competicao: "Copa do Mundo", clube: "Argentina", descricao: "Contra o México, após a derrota na estreia, o gol de fora da área reacendeu a campanha argentina." },
  { id: "gbkgbbKZ1CA", titulo: "A aula na semifinal contra a Croácia", ano: "2022", competicao: "Copa do Mundo", clube: "Argentina", descricao: "Pênalti convertido e o passeio sobre Gvardiol que resultou na assistência para Álvarez." },
  { id: "TiGYXqMM7OQ", titulo: "O gol na final do Mundial", ano: "2022", competicao: "Copa do Mundo", clube: "Argentina", descricao: "Na prorrogação contra a França, o gol que colocou a Argentina à frente na final de Lusail." },
  { id: "K6fltq0dn_E", titulo: "A estreia de falta em Miami", ano: "2023", competicao: "Leagues Cup", clube: "Inter Miami", descricao: "Nos acréscimos, na primeira partida com a camisa rosa, uma falta no ângulo contra o Cruz Azul." },
];

const filtros = ["Todos", "Barcelona", "Argentina", "Inter Miami"];

export const Route = createFileRoute("/melhores-gols")({
  head: () => ({
    meta: [
      { title: "Vídeos dos gols mais marcantes de Messi" },
      {
        name: "description",
        content:
          "Assista aos gols mais marcantes de Lionel Messi integrados do YouTube: Getafe 2007, Bayern 2015, Bernabéu 2017, Liverpool 2019 e a final da Copa de 2022.",
      },
      { property: "og:title", content: "Os gols mais marcantes de Messi em vídeo" },
      {
        property: "og:description",
        content: "Doze lances históricos comentados, com os vídeos do YouTube integrados na página.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/melhores-gols" }],
  }),
  component: MelhoresGolsPage,
});

function MelhoresGolsPage() {
  const [filtro, setFiltro] = useState("Todos");
  const [ativo, setAtivo] = useState<string | null>(null);
  const lista = useMemo(
    () => videosGols.filter((v) => filtro === "Todos" || v.clube === filtro),
    [filtro],
  );

  return (
    <>
      <PageHero
        eyebrow="Vídeos"
        title="Os gols mais marcantes"
        description="Doze lances que definiram a carreira, com os vídeos reproduzidos aqui dentro direto do YouTube."
        image={img.goal}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {lista.map((v, i) => (
            <Reveal key={v.id} delay={i * 50} className="glass-card overflow-hidden rounded-xl">
              <div className="relative aspect-video bg-black/40">
                {ativo === v.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&autoplay=1`}
                    title={v.titulo}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setAtivo(v.id)}
                    className="group absolute inset-0 h-full w-full"
                    aria-label={`Reproduzir ${v.titulo}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={`Miniatura do lance: ${v.titulo}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/20" />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/60 bg-background/70 text-primary backdrop-blur">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <div className="p-6">
                <p className="eyebrow">
                  {v.competicao} · {v.ano} · {v.clube}
                </p>
                <h2 className="mt-2 font-display text-xl uppercase">{v.titulo}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.descricao}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex text-xs tracking-[0.14em] text-primary uppercase hover:underline"
                >
                  Vídeo indisponível aqui? Assista no YouTube
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Os vídeos são reproduzidos diretamente do YouTube por meio do player oficial; nenhum conteúdo é
          hospedado neste site. Alguns lances possuem restrição de direitos ou região e só podem ser
          assistidos no próprio YouTube.
        </p>
      </Section>
    </>
  );
}
import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";
import { categoriasVideos, videos } from "@/data/messi";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos — Momentos de Messi em conteúdo licenciado" },
      {
        name: "description",
        content:
          "Catálogo de vídeos sobre a carreira de Lionel Messi, preparado para embeds oficiais e conteúdo devidamente licenciado.",
      },
      { property: "og:title", content: "Vídeos de Lionel Messi" },
      { property: "og:description", content: "Catálogo organizado para embeds oficiais e licenciados." },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  const [cat, setCat] = useState("Todos");
  const lista = useMemo(
    () => videos.filter((v) => cat === "Todos" || v.categoria === cat),
    [cat],
  );

  return (
    <>
      <PageHero
        eyebrow="Vídeoteca"
        title="Momentos em movimento"
        description="Espaços preparados para embeds oficiais. Nenhum vídeo é hospedado aqui — apenas conteúdo licenciado deve ser inserido."
        image={img.hero}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {categoriasVideos.map((c) => (
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((v, i) => (
            <Reveal key={v.titulo} delay={i * 50} className="glass-card overflow-hidden rounded-xl">
              {v.embedUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={v.embedUrl}
                    title={v.titulo}
                    loading="lazy"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              ) : (
                <div className="grid aspect-video place-items-center border-b border-border/50 bg-white/[0.03]">
                  <div className="text-center">
                    <PlayCircle className="mx-auto h-9 w-9 text-primary/70" />
                    <p className="mt-3 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                      Aguardando embed oficial
                    </p>
                  </div>
                </div>
              )}
              <div className="p-6">
                <p className="eyebrow">
                  {v.competicao} · {v.ano}
                </p>
                <p className="mt-2 font-display text-lg uppercase">{v.titulo}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

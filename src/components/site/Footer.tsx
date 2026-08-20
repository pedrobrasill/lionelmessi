import { Link } from "@tanstack/react-router";

const cols = [
  { titulo: "Carreira", links: [
    { label: "História", to: "/historia" },
    { label: "Carreira", to: "/carreira" },
    { label: "Linha do Tempo", to: "/linha-do-tempo" },
  ] },
  { titulo: "Números", links: [
    { label: "Estatísticas", to: "/estatisticas" },
    { label: "Títulos", to: "/titulos" },
    { label: "Gols", to: "/gols" },
  ] },
  { titulo: "Mídia", links: [
    { label: "Galeria", to: "/galeria" },
    { label: "Vídeos", to: "/videos" },
    { label: "Barcelona", to: "/clube/barcelona" },
  ] },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[color:var(--ink)] px-5 py-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="font-display text-3xl tracking-[0.12em] uppercase text-gilded">Lionel Messi</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            “Uma carreira que mudou a história do futebol.”
          </p>
          <div className="rule-gold mt-6" />
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.titulo}>
              <p className="eyebrow">{c.titulo}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to as never}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-6xl border-t border-border/40 pt-6 text-xs leading-relaxed text-muted-foreground">
        <p>
          Projeto informativo e <strong className="text-foreground/80">fan-made</strong>. Não possui
          afiliação oficial com Lionel Messi, FC Barcelona, Paris Saint-Germain, Inter Miami CF, AFA,
          FIFA, UEFA ou qualquer entidade detentora de direitos.
        </p>
        <p className="mt-2">
          Imagens ilustrativas geradas para este projeto. Vídeos devem ser adicionados apenas por meio
          de embeds oficiais ou conteúdo licenciado — consulte o registro de licenças em{" "}
          <code className="text-foreground/70">src/data/messi.ts</code>.
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Enciclopédia Messi.</p>
      </div>
    </footer>
  );
}
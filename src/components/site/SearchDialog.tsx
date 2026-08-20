import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  clubes,
  golsIconicos,
  linhaDoTempo,
  momentos,
  recordes,
  temporadas,
  titulos,
  videos,
} from "@/data/messi";

type Hit = { tipo: string; titulo: string; sub: string; to: string };

function buildIndex(): Hit[] {
  const hits: Hit[] = [];
  clubes.forEach((c) =>
    hits.push({ tipo: "Clube", titulo: c.nome, sub: `${c.periodo} · ${c.gols} gols`, to: `/clube/${c.slug}` }),
  );
  titulos.forEach((t) =>
    hits.push({ tipo: "Título", titulo: t.competicao, sub: t.anos.join(", "), to: "/titulos" }),
  );
  golsIconicos.forEach((g) =>
    hits.push({ tipo: "Gol", titulo: g.titulo, sub: `${g.adversario} · ${g.competicao} · ${g.ano}`, to: "/gols" }),
  );
  linhaDoTempo.forEach((l) =>
    hits.push({ tipo: "Linha do tempo", titulo: `${l.ano} — ${l.titulo}`, sub: l.texto, to: "/linha-do-tempo" }),
  );
  recordes.forEach((r) => hits.push({ tipo: "Recorde", titulo: r.titulo, sub: r.valor, to: "/estatisticas" }));
  temporadas.forEach((t) =>
    hits.push({ tipo: "Temporada", titulo: t.temporada, sub: `${t.gols} gols · ${t.assist} assistências`, to: "/estatisticas" }),
  );
  momentos.forEach((m) => hits.push({ tipo: "Momento", titulo: m.titulo, sub: `${m.ano} · ${m.texto}`, to: "/#momentos" }));
  videos.forEach((v) => hits.push({ tipo: "Vídeo", titulo: v.titulo, sub: `${v.competicao} · ${v.ano}`, to: "/videos" }));
  return hits;
}

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function SearchDialog({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const term = normalize(q.trim());
    if (!term) return [];
    return index
      .filter((h) => normalize(h.titulo + " " + h.sub + " " + h.tipo).includes(term))
      .slice(0, 20);
  }, [q, index]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          aria-label="Pesquisar no site"
          className="flex items-center gap-2 rounded-full border border-border/70 bg-white/5 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          <Search className="h-4 w-4" />
          {!compact && <span className="hidden lg:inline">Pesquisar…</span>}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-xl border-border/60 bg-popover/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-lg uppercase">Pesquisa global</DialogTitle>
        </DialogHeader>
        <Input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Gols, títulos, temporadas, clubes, recordes…"
          className="bg-white/5"
        />
        <div className="max-h-80 space-y-1 overflow-y-auto pr-1">
          {q && results.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">Nenhum resultado encontrado.</p>
          )}
          {results.map((r, i) => (
            <Link
              key={`${r.titulo}-${i}`}
              to={r.to as never}
              onClick={() => setOpen(false)}
              className="block rounded-md border border-transparent px-3 py-2 transition-colors hover:border-primary/30 hover:bg-white/5"
            >
              <p className="text-[0.65rem] tracking-[0.2em] text-primary uppercase">{r.tipo}</p>
              <p className="text-sm font-semibold">{r.titulo}</p>
              <p className="line-clamp-1 text-xs text-muted-foreground">{r.sub}</p>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
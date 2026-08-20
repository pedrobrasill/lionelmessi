import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "História", to: "/historia" },
  { label: "Carreira", to: "/carreira" },
  { label: "Estatísticas", to: "/estatisticas" },
  { label: "Títulos", to: "/titulos" },
  { label: "Gols", to: "/gols" },
  { label: "Vídeos dos Gols", to: "/melhores-gols" },
  { label: "Barcelona", to: "/clube/barcelona" },
  { label: "Argentina", to: "/clube/argentina" },
  { label: "PSG", to: "/clube/psg" },
  { label: "Inter Miami", to: "/clube/inter-miami" },
  { label: "Linha do Tempo", to: "/linha-do-tempo" },
  { label: "Galeria", to: "/galeria" },
  { label: "Vídeos", to: "/videos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-[image:var(--gradient-gold)] font-display text-lg text-[color:var(--ink)]">
            10
          </span>
          <span className="truncate font-display text-sm tracking-[0.28em] uppercase">Messi</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-5 xl:flex">
          {navLinks.slice(0, 8).map((l) => (
            <li key={l.to}>
              <Link
                to={l.to as never}
                className="relative text-[0.78rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[image:var(--gradient-gold)] after:transition-all hover:after:w-full data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-3">
          <SearchDialog />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-white/5 transition-colors hover:border-primary/50"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-6 gap-y-1 px-5 py-6 sm:grid-cols-3 sm:px-8">
          {navLinks.map((l) => (
            <li key={`m-${l.to}`}>
              <Link
                to={l.to as never}
                onClick={() => setOpen(false)}
                className="block border-b border-border/30 py-3 font-display text-sm tracking-[0.14em] uppercase transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
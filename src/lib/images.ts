import hero from "@/assets/hero-stadium.jpg";
import silhueta from "@/assets/player-silhouette.png";
import ballon from "@/assets/ballon.jpg";
import worldcup from "@/assets/worldcup.jpg";
import youth from "@/assets/youth.jpg";
import argentina from "@/assets/argentina.jpg";
import goal from "@/assets/goal.jpg";

export const img = { hero, silhueta, ballon, worldcup, youth, argentina, goal };

export const galeriaImagens: Record<string, string> = {
  "Infância": youth,
  Barcelona: goal,
  Argentina: argentina,
  PSG: hero,
  "Inter Miami": hero,
  "Copa do Mundo": worldcup,
  "Ballon d'Or": ballon,
  "Momentos históricos": argentina,
};

export const clubeImagens: Record<string, string> = {
  barcelona: goal,
  psg: hero,
  "inter-miami": hero,
  argentina: argentina,
};

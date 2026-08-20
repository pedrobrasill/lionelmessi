/**
 * FONTE ÚNICA DE DADOS — Enciclopédia Lionel Messi
 * -------------------------------------------------
 * Todos os números, títulos, temporadas e textos ficam aqui.
 * Para atualizar o site, basta editar este arquivo — nenhum componente
 * precisa ser alterado.
 *
 * Números aproximados de carreira, compilados de registros públicos.
 * Última revisão dos dados: 2024.
 */

export type ClubeSlug = "barcelona" | "psg" | "inter-miami" | "argentina";

export const perfil = {
  nomeCompleto: "Lionel Andrés Messi Cuccittini",
  apelidos: ["La Pulga", "Leo", "GOAT", "El Diez"],
  nascimento: "24 de junho de 1987",
  local: "Rosário, Santa Fé — Argentina",
  nacionalidade: "Argentina / Espanha",
  posicao: "Ponta direita · Meia-atacante · Falso 9",
  altura: "1,70 m",
  pe: "Esquerdo",
  camisa: "10",
  clubes: ["Newell's Old Boys (base)", "FC Barcelona", "Paris Saint-Germain", "Inter Miami CF"],
  selecao: "Argentina — desde 2005",
  resumo:
    "Nascido em Rosário e diagnosticado ainda criança com deficiência do hormônio de crescimento, Lionel Messi cruzou o Atlântico aos 13 anos para tratar-se e treinar em La Masia. Ali começou a maior carreira individual que o futebol já registrou: mais de duas décadas de gols, assistências e recordes pelo Barcelona, pelo PSG, pelo Inter Miami e pela Seleção Argentina — culminando na Copa do Mundo de 2022, no Catar.",
};

export const numerosHero = [
  { valor: 8, sufixo: "", label: "Ballon d'Or" },
  { valor: 1, sufixo: "", label: "Copa do Mundo" },
  { valor: 4, sufixo: "", label: "Champions League" },
  { valor: 10, sufixo: "", label: "La Liga" },
  { valor: 900, sufixo: "+", label: "Gols na carreira" },
];

export type Clube = {
  slug: ClubeSlug;
  nome: string;
  periodo: string;
  cor: string;
  jogos: number;
  gols: number;
  assistencias: number;
  titulos: number;
  resumo: string;
  momentos: string[];
};

export const clubes: Clube[] = [
  {
    slug: "barcelona",
    nome: "FC Barcelona",
    periodo: "2004 — 2021",
    cor: "var(--blaugrana)",
    jogos: 778,
    gols: 672,
    assistencias: 303,
    titulos: 35,
    resumo:
      "Dezessete temporadas como profissional, o maior artilheiro e o jogador com mais partidas da história do clube. Sob Pep Guardiola, integrou o time que redefiniu o futebol de posse.",
    momentos: [
      "Estreia profissional em 2004, aos 17 anos",
      "Primeiro gol oficial contra o Albacete, em 2005",
      "Sextete de 2009 ao lado de Xavi e Iniesta",
      "91 gols no ano civil de 2012",
      "Gol solo contra o Getafe (2007) e contra o Athletic (2015)",
    ],
  },
  {
    slug: "psg",
    nome: "Paris Saint-Germain",
    periodo: "2021 — 2023",
    cor: "var(--psg)",
    jogos: 75,
    gols: 32,
    assistencias: 35,
    titulos: 3,
    resumo:
      "Duas temporadas em Paris ao lado de Neymar e Mbappé. Líder de assistências da Ligue 1 em 2022/23 e bicampeão francês.",
    momentos: [
      "Primeiro gol pelo clube contra o Manchester City",
      "Ligue 1 em 2021/22 e 2022/23",
      "Supercopa da França de 2022",
      "Retorno como campeão do mundo ao Parc des Princes",
    ],
  },
  {
    slug: "inter-miami",
    nome: "Inter Miami CF",
    periodo: "2023 — atual",
    cor: "var(--miami)",
    jogos: 81,
    gols: 81,
    assistencias: 35,
    titulos: 2,
    resumo:
      "A chegada à MLS transformou a liga norte-americana: recordes de audiência, ingressos esgotados e os primeiros títulos da história do clube.",
    momentos: [
      "Gol de falta na estreia, na Leagues Cup 2023",
      "Leagues Cup 2023 — primeiro título do clube",
      "Supporters' Shield 2024",
      "MVP da MLS em 2024",
    ],
  },
  {
    slug: "argentina",
    nome: "Seleção Argentina",
    periodo: "2005 — atual",
    cor: "var(--albiceleste)",
    jogos: 191,
    gols: 115,
    assistencias: 60,
    titulos: 6,
    resumo:
      "Maior artilheiro e jogador com mais partidas pela Argentina. Ergueu a Copa América 2021 e 2024, a Finalíssima 2022 e a Copa do Mundo de 2022.",
    momentos: [
      "Ouro olímpico em Pequim 2008",
      "Copa América 2021 no Maracanã",
      "Copa do Mundo 2022 — dois gols na final",
      "Bicampeão da Copa América 2024",
    ],
  },
];

/** Evolução por temporada (gols e assistências em todas as competições). */
export const temporadas = [
  { temporada: "2008/09", clube: "barcelona", gols: 38, assist: 18 },
  { temporada: "2009/10", clube: "barcelona", gols: 47, assist: 11 },
  { temporada: "2010/11", clube: "barcelona", gols: 53, assist: 24 },
  { temporada: "2011/12", clube: "barcelona", gols: 73, assist: 29 },
  { temporada: "2012/13", clube: "barcelona", gols: 60, assist: 16 },
  { temporada: "2013/14", clube: "barcelona", gols: 41, assist: 15 },
  { temporada: "2014/15", clube: "barcelona", gols: 58, assist: 27 },
  { temporada: "2015/16", clube: "barcelona", gols: 41, assist: 23 },
  { temporada: "2016/17", clube: "barcelona", gols: 54, assist: 16 },
  { temporada: "2017/18", clube: "barcelona", gols: 45, assist: 18 },
  { temporada: "2018/19", clube: "barcelona", gols: 51, assist: 22 },
  { temporada: "2019/20", clube: "barcelona", gols: 31, assist: 27 },
  { temporada: "2020/21", clube: "barcelona", gols: 38, assist: 14 },
  { temporada: "2021/22", clube: "psg", gols: 11, assist: 15 },
  { temporada: "2022/23", clube: "psg", gols: 21, assist: 20 },
  { temporada: "2023", clube: "inter-miami", gols: 11, assist: 5 },
  { temporada: "2024", clube: "inter-miami", gols: 25, assist: 13 },
  { temporada: "2025", clube: "inter-miami", gols: 29, assist: 19 },
  { temporada: "2026", clube: "inter-miami", gols: 15, assist: 9 },
] as const;

export const estatisticas = [
  { chave: "jogos", label: "Jogos oficiais", valor: 1168, sufixo: "" },
  { chave: "gols", label: "Gols na carreira", valor: 921, sufixo: "" },
  { chave: "assistencias", label: "Assistências", valor: 420, sufixo: "" },
  { chave: "hattricks", label: "Hat-tricks", valor: 59, sufixo: "" },
  { chave: "titulos", label: "Títulos conquistados", valor: 46, sufixo: "" },
  { chave: "ballon", label: "Ballon d'Or", valor: 8, sufixo: "" },
  { chave: "gols-selecao", label: "Gols pela Argentina", valor: 115, sufixo: "" },
  { chave: "gols-barcelona", label: "Gols pelo Barcelona", valor: 672, sufixo: "" },
  { chave: "gols-psg", label: "Gols pelo PSG", valor: 32, sufixo: "" },
  { chave: "gols-miami", label: "Gols pelo Inter Miami", valor: 81, sufixo: "" },
];

export type Titulo = { competicao: string; anos: string[]; clube: ClubeSlug };

export const titulos: Titulo[] = [
  { clube: "barcelona", competicao: "La Liga", anos: ["2005", "2006", "2009", "2010", "2011", "2013", "2015", "2016", "2018", "2019"] },
  { clube: "barcelona", competicao: "Copa del Rey", anos: ["2009", "2012", "2015", "2016", "2017", "2018", "2021"] },
  { clube: "barcelona", competicao: "Supercopa da Espanha", anos: ["2005", "2006", "2009", "2010", "2011", "2013", "2016", "2018"] },
  { clube: "barcelona", competicao: "UEFA Champions League", anos: ["2006", "2009", "2011", "2015"] },
  { clube: "barcelona", competicao: "Supercopa da UEFA", anos: ["2009", "2011", "2015"] },
  { clube: "barcelona", competicao: "Mundial de Clubes", anos: ["2009", "2011", "2015"] },
  { clube: "psg", competicao: "Ligue 1", anos: ["2022", "2023"] },
  { clube: "psg", competicao: "Supercopa da França", anos: ["2022"] },
  { clube: "inter-miami", competicao: "Leagues Cup", anos: ["2023"] },
  { clube: "inter-miami", competicao: "Supporters' Shield", anos: ["2024"] },
  { clube: "argentina", competicao: "Copa do Mundo FIFA", anos: ["2022"] },
  { clube: "argentina", competicao: "Copa América", anos: ["2021", "2024"] },
  { clube: "argentina", competicao: "Finalíssima", anos: ["2022"] },
  { clube: "argentina", competicao: "Jogos Olímpicos", anos: ["2008"] },
  { clube: "argentina", competicao: "Mundial Sub-20", anos: ["2005"] },
];

export const ballonDOr = [
  { ano: "2009", titulo: "O ano do sextete", texto: "Primeira Bola de Ouro após uma temporada perfeita: seis títulos com o Barcelona e o gol de cabeça na final da Champions em Roma." },
  { ano: "2010", titulo: "A consagração", texto: "Primeiro prêmio na era FIFA Ballon d'Or, com 47 gols na temporada e domínio absoluto no ataque culé." },
  { ano: "2011", titulo: "Wembley", texto: "Atuação histórica na final da Champions contra o Manchester United coroou o terceiro prêmio consecutivo." },
  { ano: "2012", titulo: "91 gols", texto: "O recorde de gols em um ano civil, marca que segue insuperável no futebol profissional." },
  { ano: "2015", titulo: "O retorno ao topo", texto: "Tríplice coroa com Neymar e Suárez na MSN e o gol antológico contra o Athletic Bilbao." },
  { ano: "2019", titulo: "Sexto troféu", texto: "50 gols na temporada e mais uma Chuteira de Ouro europeia devolveram o prêmio às mãos do argentino." },
  { ano: "2021", titulo: "A Copa América", texto: "O primeiro grande título com a Argentina finalmente selou o reconhecimento internacional." },
  { ano: "2023", titulo: "Campeão do mundo", texto: "O oitavo prêmio, após a Copa do Mundo do Catar e a chegada ao Inter Miami." },
];

export const copa2022 = {
  frase: "O sonho que faltava.",
  estatisticas: [
    { label: "Jogos", valor: 7 },
    { label: "Gols", valor: 7 },
    { label: "Assistências", valor: 3 },
    { label: "Bola de Ouro", valor: 1 },
  ],
  caminho: [
    { fase: "Fase de grupos", adversario: "Arábia Saudita", placar: "1 x 2", nota: "Derrota na estreia; Messi abre o placar de pênalti." },
    { fase: "Fase de grupos", adversario: "México", placar: "2 x 0", nota: "Golaço de fora da área que recolocou a Argentina no torneio." },
    { fase: "Fase de grupos", adversario: "Polônia", placar: "2 x 0", nota: "Classificação em primeiro lugar do grupo." },
    { fase: "Oitavas", adversario: "Austrália", placar: "2 x 1", nota: "Gol de número 1000 na carreira em jogos oficiais." },
    { fase: "Quartas", adversario: "Países Baixos", placar: "2 x 2 (4x3 nos pênaltis)", nota: "Assistência, gol de pênalti e a noite do 'Andá pa'llá'." },
    { fase: "Semifinal", adversario: "Croácia", placar: "3 x 0", nota: "Pênalti convertido e a jogada individual para Julián Álvarez." },
    { fase: "Final", adversario: "França", placar: "3 x 3 (4x2 nos pênaltis)", nota: "Dois gols na maior final da história das Copas e a taça em Lusail." },
  ],
};

export type Gol = {
  titulo: string;
  adversario: string;
  competicao: string;
  ano: string;
  categorias: string[];
  descricao: string;
  /** Preencher com um embed oficial/licenciado quando disponível. */
  videoUrl?: string;
};

export const golsIconicos: Gol[] = [
  { titulo: "O primeiro gol oficial", adversario: "Albacete", competicao: "La Liga", ano: "2005", categorias: ["Barcelona"], descricao: "Passe de Ronaldinho por cobertura e o toque na saída do goleiro: o começo de tudo." },
  { titulo: "Slalom no Camp Nou", adversario: "Getafe", competicao: "Copa del Rey", ano: "2007", categorias: ["Barcelona", "Gols solo"], descricao: "Corrida de 60 metros driblando meio time, comparada ao gol de Maradona em 1986." },
  { titulo: "Cabeçada em Roma", adversario: "Manchester United", competicao: "Champions League", ano: "2009", categorias: ["Barcelona", "Gols em finais"], descricao: "Salto altíssimo para selar a final da Champions e o sextete histórico." },
  { titulo: "O drible sobre a defesa inglesa", adversario: "Real Madrid", competicao: "Champions League", ano: "2011", categorias: ["Barcelona", "Gols solo", "Grandes rivais"], descricao: "Jogada individual na semifinal do Bernabéu que decidiu o confronto." },
  { titulo: "Falta contra o Athletic", adversario: "Athletic Bilbao", competicao: "Copa del Rey", ano: "2015", categorias: ["Barcelona", "Gols solo", "Gols em finais"], descricao: "Arrancada da intermediária, três marcadores superados e finalização no canto." },
  { titulo: "A camisa erguida no Bernabéu", adversario: "Real Madrid", competicao: "La Liga", ano: "2017", categorias: ["Barcelona", "Grandes rivais"], descricao: "Gol nos acréscimos no Clásico e a celebração mais icônica da rivalidade." },
  { titulo: "Falta na semifinal", adversario: "Liverpool", competicao: "Champions League", ano: "2019", categorias: ["Barcelona"], descricao: "Cobrança de falta de mais de 30 metros no ângulo, gol de número 600 pelo clube." },
  { titulo: "Estreia com falta em Miami", adversario: "Cruz Azul", competicao: "Leagues Cup", ano: "2023", categorias: ["Inter Miami"], descricao: "Falta nos acréscimos logo no primeiro jogo pelo novo clube." },
  { titulo: "Gol de fora da área", adversario: "México", competicao: "Copa do Mundo", ano: "2022", categorias: ["Argentina"], descricao: "Chute rasteiro no canto que reacendeu a campanha argentina no Catar." },
  { titulo: "O gol 1000", adversario: "Austrália", competicao: "Copa do Mundo", ano: "2022", categorias: ["Argentina", "Gols solo"], descricao: "Finalização precisa nas oitavas, em sua milésima partida em jogos oficiais." },
  { titulo: "Primeiro gol na final", adversario: "França", competicao: "Copa do Mundo", ano: "2022", categorias: ["Argentina", "Gols em finais"], descricao: "Pênalti convertido para abrir o placar em Lusail." },
  { titulo: "Golaço pelo PSG", adversario: "Manchester City", competicao: "Champions League", ano: "2021", categorias: ["PSG"], descricao: "Tabela com Mbappé e chute no ângulo no primeiro gol com a camisa parisiense." },
];

export const categoriasGols = ["Todos", "Barcelona", "Argentina", "PSG", "Inter Miami", "Gols solo", "Gols em finais", "Grandes rivais"];

export const momentos = [
  { ano: "2005", titulo: "Primeiro gol pelo Barcelona", texto: "Aos 17 anos, o mais jovem goleador do clube na época." },
  { ano: "2007", titulo: "Gol contra o Getafe", texto: "A corrida que virou lenda no Camp Nou." },
  { ano: "2009", titulo: "Gol contra o Manchester United", texto: "A cabeçada em Roma e a primeira Champions como protagonista." },
  { ano: "2011", titulo: "Champions em Wembley", texto: "Atuação de gala contra o United e o terceiro título europeu." },
  { ano: "2012", titulo: "Recorde de gols", texto: "91 gols no ano civil, marca inédita no futebol." },
  { ano: "2021", titulo: "Copa América", texto: "O primeiro título com a seleção principal, no Maracanã." },
  { ano: "2022", titulo: "Finalíssima", texto: "Vitória sobre a Itália em Wembley com três assistências." },
  { ano: "2022", titulo: "Copa do Mundo", texto: "A conquista no Catar que completou a carreira." },
  { ano: "2023", titulo: "Chegada ao Inter Miami", texto: "O futebol norte-americano ganhou um novo patamar global." },
];

export const linhaDoTempo = [
  { ano: "1987", titulo: "Nascimento em Rosário", texto: "Terceiro filho de Jorge e Celia, cresce jogando no bairro de Las Heras." },
  { ano: "1997", titulo: "Categorias de base do Newell's", texto: "Integra 'La Máquina del 87', geração inesquecível do clube de Rosário." },
  { ano: "2000", titulo: "Teste no Barcelona", texto: "Contrato assinado em um guardanapo; o clube banca o tratamento hormonal." },
  { ano: "2004", titulo: "Estreia profissional", texto: "Entra em campo contra o Espanyol aos 17 anos, 3 meses e 22 dias." },
  { ano: "2005", titulo: "Primeiro gol oficial", texto: "Contra o Albacete, com assistência de Ronaldinho." },
  { ano: "2009", titulo: "Primeiro Ballon d'Or", texto: "Coroa o ano do sextete blaugrana." },
  { ano: "2012", titulo: "91 gols no ano", texto: "Recorde mundial em um ano civil." },
  { ano: "2015", titulo: "Quarta Champions League", texto: "Tríplice coroa com a MSN em Berlim." },
  { ano: "2019", titulo: "Sexto Ballon d'Or", texto: "Torna-se o maior vencedor da história do prêmio." },
  { ano: "2021", titulo: "Copa América", texto: "Primeiro grande título pela Argentina." },
  { ano: "2022", titulo: "Copa do Mundo", texto: "Campeão mundial no Catar, com dois gols na final." },
  { ano: "2023", titulo: "Oitavo Ballon d'Or", texto: "Recorde ampliado após a conquista mundial." },
  { ano: "2023", titulo: "Inter Miami", texto: "Nova etapa nos Estados Unidos e título logo na estreia." },
];

export const recordes = [
  { titulo: "Maior vencedor do Ballon d'Or", valor: "8", texto: "Nenhum jogador chegou perto: são oito prêmios entre 2009 e 2023." },
  { titulo: "Gols em um ano civil", valor: "91", texto: "Marca estabelecida em 2012, considerada uma das mais difíceis de igualar." },
  { titulo: "Artilheiro histórico do Barcelona", valor: "672", texto: "Gols em 778 partidas por todas as competições." },
  { titulo: "Artilheiro histórico de La Liga", valor: "474", texto: "Também recordista de assistências e hat-tricks na competição." },
  { titulo: "Artilheiro histórico da Argentina", valor: "115", texto: "Além de recordista de partidas pela seleção." },
  { titulo: "Gols em El Clásico", valor: "26", texto: "Maior goleador da história do confronto entre Barcelona e Real Madrid." },
  { titulo: "Assistências em La Liga", valor: "192", texto: "Recorde absoluto desde que a estatística passou a ser registrada." },
  { titulo: "Chuteiras de Ouro europeias", valor: "6", texto: "Recordista do prêmio de maior artilheiro das ligas europeias." },
];

export const elClasico = {
  numeros: [
    { label: "Jogos", valor: 45 },
    { label: "Gols", valor: 26 },
    { label: "Assistências", valor: 14 },
    { label: "Hat-tricks", valor: 3 },
  ],
  momentos: [
    { ano: "2007", texto: "Hat-trick aos 19 anos no Camp Nou, salvando o Barcelona nos acréscimos." },
    { ano: "2011", texto: "Gol solo na semifinal da Champions, no Santiago Bernabéu." },
    { ano: "2017", texto: "Gol nos acréscimos e a camisa erguida diante da torcida madrilenha." },
    { ano: "2018", texto: "Goleada por 5 x 1 no Camp Nou com atuação decisiva." },
  ],
};

export const comparativo = [
  { metrica: "Ballon d'Or", messi: 8, cr7: 5 },
  { metrica: "Gols oficiais", messi: 921, cr7: 935 },
  { metrica: "Assistências", messi: 420, cr7: 260 },
  { metrica: "Champions League", messi: 4, cr7: 5 },
  { metrica: "Títulos totais", messi: 46, cr7: 35 },
  { metrica: "Títulos por seleção (Seniores)", messi: 4, cr7: 2 },
];

export const curiosidades = [
  { tema: "Primeiros anos", texto: "Começou a jogar no Grandoli, clube de bairro treinado pelo avô materno, ainda com quatro anos." },
  { tema: "Apelidos", texto: "'La Pulga' surgiu na infância pela baixa estatura e pela velocidade em espaços curtos." },
  { tema: "Saúde", texto: "Aos 11 anos foi diagnosticado com deficiência de hormônio de crescimento; o tratamento custava cerca de 900 dólares por mês." },
  { tema: "O guardanapo", texto: "O acordo com o Barcelona foi rascunhado em um guardanapo de papel durante um almoço em Barcelona." },
  { tema: "Hábitos", texto: "Mantém uma rotina rígida de alimentação e sono, além do mate como companhia diária." },
  { tema: "Família", texto: "Casado com Antonela Roccuzzo, amiga de infância em Rosário, com quem tem três filhos." },
  { tema: "Estilo", texto: "Canhoto puro: mais de 80% dos seus gols saíram do pé esquerdo." },
  { tema: "Conquistas", texto: "É o único jogador a vencer o Mundial Sub-20, o ouro olímpico, a Copa América e a Copa do Mundo." },
];

export const galeria = [
  { categoria: "Infância", titulo: "Rosário, os primeiros campos", legenda: "Onde tudo começou, nos campos de terra do bairro." },
  { categoria: "Barcelona", titulo: "La Masia", legenda: "A formação que moldou o jogador." },
  { categoria: "Barcelona", titulo: "Noites de Camp Nou", legenda: "Dezessete temporadas de futebol irrepetível." },
  { categoria: "Argentina", titulo: "Albiceleste", legenda: "A camisa que sempre carregou o maior peso." },
  { categoria: "PSG", titulo: "Parc des Princes", legenda: "Dois anos em Paris ao lado de Neymar e Mbappé." },
  { categoria: "Inter Miami", titulo: "Rosa e preto", legenda: "O impacto na MLS e no futebol dos Estados Unidos." },
  { categoria: "Copa do Mundo", titulo: "Lusail, 18 de dezembro", legenda: "A taça finalmente erguida." },
  { categoria: "Ballon d'Or", titulo: "Oito vezes o melhor", legenda: "O prêmio individual mais cobiçado, repetido oito vezes." },
  { categoria: "Momentos históricos", titulo: "A camisa erguida", legenda: "O gesto que virou símbolo de uma era." },
];

export const categoriasGaleria = ["Todas", "Infância", "Barcelona", "Argentina", "PSG", "Inter Miami", "Copa do Mundo", "Ballon d'Or", "Momentos históricos"];

/**
 * Catálogo de vídeos — preparado para conteúdo autorizado.
 * `embedUrl` deve receber apenas embeds oficiais/licenciados.
 */
export type Video = {
  titulo: string;
  ano: string;
  competicao: string;
  categoria: string;
  descricao: string;
  embedUrl?: string;
};

export const videos: Video[] = [
  { titulo: "Os primeiros passos em La Masia", ano: "2003", competicao: "Categorias de base", categoria: "História", descricao: "Espaço reservado para material licenciado sobre a formação no Barcelona." },
  { titulo: "Estreia profissional", ano: "2004", competicao: "La Liga", categoria: "Barcelona", descricao: "Reserve aqui o embed oficial da estreia contra o Espanyol." },
  { titulo: "O gol contra o Getafe", ano: "2007", competicao: "Copa del Rey", categoria: "Barcelona", descricao: "Slot preparado para vídeo autorizado do gol solo." },
  { titulo: "Final da Champions em Roma", ano: "2009", competicao: "Champions League", categoria: "Barcelona", descricao: "Espaço para conteúdo oficial UEFA." },
  { titulo: "91 gols em um ano", ano: "2012", competicao: "Diversas", categoria: "Recordes", descricao: "Compilação a ser inserida com licença adequada." },
  { titulo: "Copa América 2021", ano: "2021", competicao: "Copa América", categoria: "Argentina", descricao: "Reserve o embed oficial CONMEBOL." },
  { titulo: "Final da Copa do Mundo", ano: "2022", competicao: "Copa do Mundo", categoria: "Argentina", descricao: "Slot para material licenciado FIFA." },
  { titulo: "Estreia pelo Inter Miami", ano: "2023", competicao: "Leagues Cup", categoria: "Inter Miami", descricao: "Espaço para embed oficial MLS." },
];

export const categoriasVideos = ["Todos", "História", "Barcelona", "Argentina", "PSG", "Inter Miami", "Recordes"];

export const historia = [
  {
    fase: "Infância",
    slug: "infancia",
    itens: [
      { titulo: "Nascimento", texto: "Lionel Andrés Messi nasceu em 24 de junho de 1987, em Rosário, na província de Santa Fé." },
      { titulo: "Primeiros passos no futebol", texto: "Começou no Grandoli, clube de bairro, sob orientação do avô materno, e logo chamou atenção pela facilidade com a bola." },
      { titulo: "Newell's Old Boys", texto: "Entre 1995 e 2000 integrou a base do Newell's, parte da geração conhecida como 'La Máquina del 87'." },
      { titulo: "Mudança para Barcelona", texto: "Diagnosticado com deficiência de hormônio de crescimento, mudou-se com a família para a Catalunha aos 13 anos." },
    ],
  },
  {
    fase: "Barcelona",
    slug: "barcelona",
    itens: [
      { titulo: "La Masia", texto: "Formou-se na academia do clube ao lado de Cesc Fàbregas e Gerard Piqué." },
      { titulo: "Estreia profissional", texto: "Em outubro de 2004, contra o Espanyol, tornou-se um dos mais jovens a atuar pelo clube." },
      { titulo: "Primeiros gols", texto: "O gol contra o Albacete, em maio de 2005, abriu uma sequência que chegaria a 672 pelo clube." },
      { titulo: "O trio com Xavi e Iniesta", texto: "A conexão entre os três definiu o futebol de posse mais influente do século." },
      { titulo: "Era Guardiola", texto: "Entre 2008 e 2012, com o falso 9, o Barcelona conquistou 14 títulos em quatro temporadas." },
      { titulo: "Champions League", texto: "Quatro títulos europeus — 2006, 2009, 2011 e 2015 — com atuações decisivas nas finais." },
      { titulo: "Recordes", texto: "Maior artilheiro do clube, de La Liga e de El Clásico, além do recorde de 91 gols em 2012." },
      { titulo: "Rivalidade com Cristiano Ronaldo", texto: "Por quase uma década, os dois dividiram todos os prêmios individuais e elevaram o nível do futebol europeu." },
    ],
  },
  {
    fase: "Argentina",
    slug: "argentina",
    itens: [
      { titulo: "Seleções de base", texto: "Campeão e melhor jogador do Mundial Sub-20 de 2005, nos Países Baixos." },
      { titulo: "Olimpíadas", texto: "Ouro em Pequim 2008, ao lado de Riquelme e Di María." },
      { titulo: "Copa América", texto: "Finais perdidas em 2007, 2015 e 2016 antecederam a conquista de 2021." },
      { titulo: "Frustrações nas finais", texto: "Após 2016, chegou a anunciar aposentadoria da seleção — decisão revertida semanas depois." },
      { titulo: "Copa do Mundo 2014", texto: "Vice-campeão no Maracanã e eleito o melhor jogador do torneio." },
      { titulo: "Copa América 2021", texto: "Título no Maracanã, com Messi como artilheiro e líder em assistências." },
      { titulo: "Finalíssima", texto: "Vitória por 3 x 0 sobre a Itália em Wembley, em 2022." },
      { titulo: "Copa do Mundo 2022", texto: "Sete gols, Bola de Ouro do torneio e o título que faltava." },
    ],
  },
  {
    fase: "PSG",
    slug: "psg",
    itens: [
      { titulo: "Saída do Barcelona", texto: "Em agosto de 2021, limitações financeiras impediram a renovação e encerraram 21 anos de clube." },
      { titulo: "Chegada ao PSG", texto: "Apresentado com a camisa 30, a mesma da estreia profissional." },
      { titulo: "Companheiros", texto: "Formou ataque com Neymar e Kylian Mbappé." },
      { titulo: "Títulos", texto: "Duas Ligue 1 e uma Supercopa da França." },
      { titulo: "Estatísticas", texto: "32 gols e 35 assistências em 75 jogos; líder de assistências da liga em 2022/23." },
    ],
  },
  {
    fase: "Inter Miami",
    slug: "inter-miami",
    itens: [
      { titulo: "Chegada aos Estados Unidos", texto: "Anunciado em julho de 2023, escolheu a MLS em vez de propostas milionárias." },
      { titulo: "Impacto mundial", texto: "Ingressos esgotados, recordes de audiência e crescimento explosivo da liga." },
      { titulo: "Leagues Cup", texto: "Título logo na estreia, o primeiro da história do clube, com Messi artilheiro." },
      { titulo: "MLS", texto: "Supporters' Shield em 2024 e o prêmio de MVP da temporada." },
      { titulo: "Recordes", texto: "Média superior a um gol por jogo em boa parte das temporadas na liga." },
      { titulo: "Futebol americano", texto: "Reposicionou a MLS no calendário global e ampliou o interesse pelo esporte no país." },
    ],
  },
];

/**
 * REGISTRO DE ASSETS — fonte e licença
 * Substitua por conteúdo próprio, licenciado ou de domínio público.
 */
export const registroAssets = [
  { arquivo: "hero-stadium.jpg", descricao: "Estádio noturno (ilustração)", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
  { arquivo: "player-silhouette.png", descricao: "Silhueta de jogador", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
  { arquivo: "ballon.jpg", descricao: "Troféu dourado (ilustração)", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
  { arquivo: "worldcup.jpg", descricao: "Troféu sob holofotes (ilustração)", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
  { arquivo: "youth.jpg", descricao: "Campo de base ao entardecer", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
  { arquivo: "argentina.jpg", descricao: "Torcida com cachecóis", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
  { arquivo: "goal.jpg", descricao: "Bola na rede", fonte: "Gerado por IA para este projeto", licenca: "Uso livre no projeto" },
];
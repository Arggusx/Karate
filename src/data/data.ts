export type PageId = "home" | "historia" | "fundamentos" | "beneficios" | "tecnicas" | "curiosidades";

export const NAV: { id: PageId; label: string; kanji: string }[] = [
  { id: "home", label: "Home", kanji: "家" },
  { id: "historia", label: "História", kanji: "歴史" },
  { id: "fundamentos", label: "Fundamentos", kanji: "基本" },
  { id: "beneficios", label: "Benefícios", kanji: "利益" },
  { id: "tecnicas", label: "Técnicas", kanji: "技術" },
  { id: "curiosidades", label: "Curiosidades", kanji: "雑学" },
];

export const TIMELINE = [
  {
    year: "Séc. XIV",
    title: "Origens em Okinawa",
    kanjiTranslate: "Okinawa",
    kanji: "沖縄",
    text: "Mistura de artes marciais chinesas (Quanfa) com técnicas locais de luta okinawanas dá origem ao 'Te'.",
    detail: "O Reino de Ryūkyū (atual Okinawa) mantinha intensas relações comerciais e diplomáticas com a China da dinastia Ming. Monges e mercadores chineses traziam o Quanfa (拳法 — 'lei do punho'), que se mesclava ao Tī okinawano em três centros principais: Shuri, Naha e Tomari. Em 1429 o rei Shō Hashi unifica Okinawa; em 1477 o rei Shō Shin proíbe armas entre nobres e camponeses. Sem espadas, o Tī floresce como arte secreta, transmitida apenas dentro de famílias.",
  },
  {
    year: "1609",
    title: "Invasão de Satsuma",
    kanjiTranslate: "Satsuma",
    kanji: "薩摩",
    text: "O clã japonês Satsuma invade Okinawa e impõe novo banimento de armas — o Te se torna ainda mais secreto.",
    detail: "O domínio Satsuma, do sul de Kyushu, conquista Ryūkyū e proíbe absolutamente o porte de qualquer arma, mesmo facas longas. A nobreza okinawana (os pechin) recorre clandestinamente ao Te como única defesa. Surgem também as armas Kobudō a partir de ferramentas de fazenda — nunchaku (mangual de arroz), sai, tonfa, kama. O karatê amadurece em silêncio por três séculos, oculto sob o turismo cultural.",
  },
  {
    year: "1868",
    title: "Nasce Gichin Funakoshi",
    kanjiTranslate: "Funakoshi",
    kanji: "船越",
    text: "Em Shuri, Okinawa, nasce o futuro fundador do Shotokan.",
    detail: "Funakoshi Gichin nasce frágil, prematuro, em uma família nobre empobrecida. Ainda criança torna-se discípulo de dois grandes mestres do Shuri-te: Anko Asato e Anko Itosu. Forma-se professor de escola primária — profissão que exerceria por décadas. Era também poeta e calígrafo, e assinava seus versos com o pseudônimo Shōtō (松濤 — 'ondas de pinheiros'), inspirado no som do vento ao caminhar pelos pinheirais do monte Torao.",
  },
  {
    year: "1901",
    title: "Karatê entra nas escolas",
    kanjiTranslate: "Escolas",
    kanji: "学校",
    text: "Anko Itosu introduz o karatê no currículo das escolas primárias de Okinawa.",
    detail: "Itosu, mestre de Funakoshi, convence o governo de que o karatê pode formar jovens fortes e disciplinados para o exército imperial. Simplifica katas perigosos, criando os cinco Pinan/Heian. Pela primeira vez o karatê sai da clandestinidade e é ensinado abertamente. Funakoshi, então professor, é peça-chave nessa transição, demonstrando técnicas em escolas de toda a ilha.",
  },
  {
    year: "1922",
    title: "Demonstração em Tóquio",
    kanjiTranslate: "Tóquio",
    kanji: "東京",
    text: "Funakoshi apresenta o karatê ao Japão continental a convite do Ministério da Educação.",
    detail: "Aos 53 anos, Funakoshi é escolhido para representar Okinawa na 1ª Exposição Nacional de Educação Física, em Tóquio. Sua demonstração impressiona Jigoro Kano (fundador do Judô), que o convida ao Kodokan. Funakoshi decide ficar — abandona o cargo de professor, deixa a família em Okinawa e vive em alojamentos de estudantes, dando aulas em troca de hospedagem. Começa a publicar livros para difundir a arte.",
  },
  {
    year: "1935",
    title: "Karatê muda de ideograma",
    kanjiTranslate: "Mão Vazia",
    kanji: "空手",
    text: "Funakoshi muda o ideograma de 唐手 ('mão chinesa') para 空手 ('mão vazia').",
    detail: "Em um Japão nacionalista às vésperas da guerra, manter o ideograma 'chinês' era politicamente perigoso. Mas a mudança ia além: 空 (kara, 'vazio') vem do conceito zen-budista de vazio — vazio de armas, vazio de ego, vazio de intenções agressivas. O karatê deixa de ser apenas uma técnica e se afirma como uma via espiritual: Karate-Dō (空手道).",
  },
  {
    year: "1936",
    title: "Fundação do Shotokan",
    kanjiTranslate: "Shotokan",
    kanji: "松濤館",
    text: "É inaugurado o dojo 'Shotokan' — 'Salão das Ondas de Pinheiros', em homenagem ao pseudônimo de Funakoshi.",
    detail: "Após anos ensinando em locais emprestados, alunos e admiradores constroem o primeiro dojo permanente de Funakoshi em Zōshigaya, Tóquio. Colocam acima da porta uma placa com a palavra Shōtō-kan. O nome do prédio acabou batizando o estilo — algo que Funakoshi nunca pretendeu, já que para ele só existia 'karatê', sem subdivisões. Seu filho Gigō transforma a técnica nesse período: bases mais longas, chutes altos, kumite dinâmico.",
  },
  {
    year: "1945",
    title: "Tragédia e renascimento",
    kanjiTranslate: "Renascimento",
    kanji: "再生",
    text: "O dojo Shotokan é destruído em bombardeio aliado. Gigō Funakoshi morre de tuberculose aos 39 anos.",
    detail: "Em maio de 1945, o bombardeio de Tóquio reduz o Shotokan a cinzas. Meses depois, Gigō Funakoshi — o filho que tinha modernizado a técnica — morre de tuberculose. O velho Funakoshi, com 77 anos, perde dojo, filho e país no mesmo ano. Ainda assim, recomeça: reúne os discípulos sobreviventes e segue ensinando até a morte em 1957, repetindo: 'O verdadeiro karatê está dentro de cada um, não nas paredes de um prédio'.",
  },
  {
    year: "1949",
    title: "JKA é criada",
    kanjiTranslate: "JKA",
    kanji: "協会",
    text: "Fundada a Japan Karate Association, que populariza o estilo no mundo.",
    detail: "Discípulos diretos de Funakoshi — entre eles Masatoshi Nakayama — fundam a Nihon Karate Kyōkai (JKA) para preservar e expandir o ensino. Nakayama sistematiza o currículo, cria as primeiras regras de competição (kumite shiai, 1957) e implementa o lendário 'curso de instrutores', programa de 3 anos que forma os mestres responsáveis por levar o Shotokan ao mundo: Kanazawa, Enoeda, Nishiyama, Kase, Asai, Mikami…",
  },
  {
    year: "1957",
    title: "Falece Gichin Funakoshi",
    kanjiTranslate: "Fim",
    kanji: "終焉",
    text: "Aos 88 anos, o pai do karatê moderno parte — mas seu legado já alcança os cinco continentes.",
    detail: "Funakoshi morre em 26 de abril de 1957, em Tóquio. Sua autobiografia 'Karate-Dō: Meu Modo de Vida' já é leitura obrigatória; os Niju Kun (20 preceitos) já foram esculpidos em pedra; seus discípulos já partiram para abrir dojos da Alemanha aos Estados Unidos, da África do Sul à América do Sul. Em seu túmulo, em Kamakura, lê-se: 空手に先手なし — 'No karatê, não existe primeiro ataque'.",
  },
  {
    year: "1960s-80s",
    title: "Expansão mundial",
    kanjiTranslate: "Popularização",
    kanji: "世界",
    text: "Mestres da JKA partem para ensinar nos cinco continentes — o karatê deixa de ser japonês para ser do mundo.",
    detail: "Hidetaka Nishiyama vai aos EUA (1961); Hirokazu Kanazawa abre a Inglaterra (1965) antes de fundar a SKIF; Keinosuke Enoeda fica no Reino Unido; Taiji Kase domina a Europa Ocidental a partir de Paris; Mikami chega à América Latina. Cada mestre forma milhares de alunos, e em poucas gerações o Shotokan se torna o estilo de karatê mais praticado do planeta — com presença em mais de 190 países.",
  },
  {
    year: "2020",
    title: "Olimpíadas de Tóquio",
    kanjiTranslate: "Olimpíadas",
    kanji: "五輪",
    text: "O karatê estreia como modalidade olímpica oficial, exatamente em Tóquio.",
    detail: "Após décadas de campanha, o karatê é incluído nos Jogos Olímpicos de Tóquio 2020 (adiados para 2021 pela pandemia). A modalidade é dividida em Kata (formas) e Kumite (combate). O símbolo é poderoso: o estilo nasceu na ilha mais distante do Japão, atravessou o mar para o continente, depois o mundo — e voltou em glória olímpica à terra que o batizou. A medalha de ouro em kata feminino vai para Sandra Sánchez (Espanha); no masculino, para Ryo Kiyuna (Okinawa).",
  },
];

export const DOJO_KUN = [
  { jp: "一、人格完成に努むること", romaji: "Hitotsu, jinkaku kansei ni tsutomuru koto", pt: "Buscar o aperfeiçoamento do caráter.", text: "O primeiro e mais importante. Antes da técnica, antes da vitória, vem a construção do ser humano. Cada treino é uma oportunidade de lapidar a si mesmo." },
  { jp: "一、誠の道を守ること", romaji: "Hitotsu, makoto no michi o mamoru koto", pt: "Ser fiel ao caminho da verdade.", text: "Sinceridade absoluta consigo mesmo e com os outros. Não fingir, não trapacear, não esconder. A verdade — mesmo quando dói — é o único alicerce sólido." },
  { jp: "一、努力の精神を養うこと", romaji: "Hitotsu, doryoku no seishin o yashinau koto", pt: "Cultivar o espírito de esforço.", text: "Talento sem esforço se desperdiça; esforço sem talento ainda assim chega ao topo. Doryoku é a virtude japonesa do trabalho persistente, dia após dia, sem alarde." },
  { jp: "一、礼儀を重んずること", romaji: "Hitotsu, reigi o omonzuru koto", pt: "Respeitar acima de tudo.", text: "Rei (礼) é o respeito que se manifesta em cada cumprimento, em cada gesto. Respeito ao sensei, ao colega, ao adversário, ao dojo, a si mesmo. Sem rei, não há karatê — há apenas violência." },
  { jp: "一、血気の勇を戒むること", romaji: "Hitotsu, kekki no yū o imashimuru koto", pt: "Refrear a coragem impetuosa.", text: "Kekki é o sangue quente, a coragem cega da juventude. O karateca deve ter coragem — mas controlada pela razão. Lutar por orgulho é fracasso; usar a força sem necessidade é traição ao caminho." },
];

export const MESTRES = [
  { nome: "Gichin Funakoshi", kanji: "船越 義珍", anos: "1868–1957", text: "Pai do karatê moderno. Levou a arte de Okinawa ao Japão, codificou os 20 preceitos (Niju Kun) e fundou o estilo Shotokan. Adotou o pseudônimo 'Shōtō' (松濤 — ondas de pinheiros) por amar caminhar entre os pinheirais ao escrever poesia." },
  { nome: "Gigō Funakoshi", kanji: "船越 義豪", anos: "1906–1945", text: "Filho de Gichin. Responsável por dar ao Shotokan suas bases longas e profundas, os chutes altos e a dinâmica atlética que o diferenciam do karatê okinawano original." },
  { nome: "Masatoshi Nakayama", kanji: "中山 正敏", anos: "1913–1987", text: "Discípulo direto de Funakoshi. Sistematizou o ensino, criou as competições modernas (kumite shiai) e expandiu o Shotokan pelo mundo via JKA. Autor da série 'Best Karate'." },
  { nome: "Hidetaka Nishiyama", kanji: "西山 英峻", anos: "1928–2008", text: "Introduziu o Shotokan nos Estados Unidos em 1961, fundando a AAKF/ITKF. Formou gerações de mestres ocidentais e padronizou regras internacionais." },
  { nome: "Hirokazu Kanazawa", kanji: "金澤 弘和", anos: "1931–2019", text: "Lendário competidor — campeão do 1º All Japan mesmo com a mão quebrada. Fundou a SKIF (Shotokan Karate-Do International Federation) e levou o estilo a mais de 100 países." },
  { nome: "Keinosuke Enoeda", kanji: "榎枝 慶之輔", anos: "1935–2003", text: "Conhecido como 'O Tigre' por sua ferocidade no tatame. Disseminou o Shotokan no Reino Unido e Europa, tornando-se ícone da JKA fora do Japão." },
  { nome: "Taiji Kase", kanji: "金澤 (加瀬)", anos: "1929–2004", text: "Pioneiro do Shotokan na Europa, baseado em Paris. Defendia um karatê marcial e introspectivo, fundando a WKSA." },
  { nome: "Tetsuhiko Asai", kanji: "浅井 哲彦", anos: "1935–2006", text: "Famoso por seu karatê fluido e técnicas raras com a mão aberta. Fundou a JKS (Japan Karate Shotorenmei) com ênfase em katas avançados." },
];

export const PRECEITOS_NIJU_KUN = [
  "1. O karatê começa e termina com o cumprimento (rei).",
  "2. No karatê não existe primeiro ataque.",
  "3. O karatê é um auxiliar da justiça.",
  "4. Conheça-se primeiro a si mesmo, depois ao adversário.",
  "5. Espírito antes de técnica.",
  "6. Mantenha a mente livre.",
  "7. Acidentes nascem da negligência.",
  "8. O karatê não se limita ao dojo.",
  "9. O karatê é busca de uma vida inteira.",
  "10. Aplique o karatê a tudo. Aí está sua beleza.",
];

export interface DecomposicaoTermo {
  termo: string;
  significado: string;
}

export interface KataItem {
  nome: string;
  kanji: string;
  nivel: string;
  mov: number;
  categoria: string;
  significado: string;
  decomposicao: DecomposicaoTermo[];
  text: string;
  videoUrl?: string;
  enbusenUrl?: string;
  imagemUrl?: string;
  enbusen?: string;
}

export const KATAS_SHOTOKAN: KataItem[] = [
  {
    nome: "Heian Shodan",
    kanji: "平安初段",
    nivel: "Kyu (8º Kyu)",
    mov: 21,
    categoria: "Kihon Kata (Básico)",
    significado: "Paz e tranquilidade — primeiro nível.",
    decomposicao: [
      { termo: "Heian", significado: "Paz e tranquilidade" },
      { termo: "Shodan", significado: "Primeiro nível" }
    ],
    text: "Primeiro kata da série Heian. Introduz a base Zenkutsu-dachi (base frontal longa), bloqueios Gedan-barai e Age-uke, e ataques Oi-zuki com foco na estabilidade e alinhamento do quadril.",
    videoUrl: "https://www.youtube.com/embed/q1Rg8rUpjjw?si=OmcOqZQcb9AOxxOO",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Heian Nidan",
    kanji: "平安二段",
    nivel: "Kyu (7º Kyu)",
    mov: 26,
    categoria: "Kihon Kata (Básico)",
    significado: "Paz e tranquilidade — segundo nível.",
    decomposicao: [
      { termo: "Heian", significado: "Paz e tranquilidade" },
      { termo: "Nidan", significado: "Segundo nível" }
    ],
    text: "Apresenta a base recuada Kokutsu-dachi, o bloqueio Shuto-uke (mão em espada) e chutes combinados Yoko-geri e Mae-geri com defesas duplas em ritmo variado.",
    videoUrl: "https://www.youtube.com/embed/rgs1ysn0R-0?si=7TkRmTo9oLO9nVZQ",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Heian Sandan",
    kanji: "平安三段",
    nivel: "Kyu (6º Kyu)",
    mov: 20,
    categoria: "Kihon Kata (Básico)",
    significado: "Paz e tranquilidade — terceiro nível.",
    decomposicao: [
      { termo: "Heian", significado: "Paz e tranquilidade" },
      { termo: "Sandan", significado: "Terceiro nível" }
    ],
    text: "Introduz a postura Kiba-dachi (base do cavaleiro), giros rápidos de 180°, defesas com o antebraço (Uchi-uke / Morote-uke), cotoveladas (Empi-uchi) e esquivas a curta distância.",
    videoUrl: "https://www.youtube.com/embed/1MrRmimBJoA?si=mmgN8na94_1ywXPG",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Heian Yondan",
    kanji: "平安四段",
    nivel: "Kyu (5º Kyu)",
    mov: 27,
    categoria: "Kihon Kata (Básico)",
    significado: "Paz e tranquilidade — quarto nível.",
    decomposicao: [
      { termo: "Heian", significado: "Paz e tranquilidade" },
      { termo: "Yondan", significado: "Quarto nível" }
    ],
    text: "Kata dinâmico com alternância de ritmo e expansão. Apresenta bloqueios duplos Morote-uke e Juji-uke, chutes altos frontais e laterais, e cotoveladas combinadas com joelhadas (Hiza-geri).",
    videoUrl: "https://www.youtube.com/embed/k72E1u962Qg?si=ofEwfitGWoxeOi0X",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Heian Godan",
    kanji: "平安五段",
    nivel: "Kyu (4º Kyu)",
    mov: 23,
    categoria: "Kihon Kata (Básico)",
    significado: "Paz e tranquilidade — quinto nível.",
    decomposicao: [
      { termo: "Heian", significado: "Paz e tranquilidade" },
      { termo: "Godan", significado: "Quinto nível" }
    ],
    text: "Síntese dos katas Heian. Trabalha defesas em níveis variados, contra-ataques simultâneos de soco e cotovelo, e o emblemático salto com giro (Tobi-komi) aterrissando em Kosa-dachi.",
    videoUrl: "https://www.youtube.com/embed/JA0Ym97vjLg?si=K7OP2XvEVRsUCJhF",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Tekki Shodan",
    kanji: "鉄騎初段",
    nivel: "Kyu / Dan (3º Kyu)",
    mov: 29,
    categoria: "Naihanchi (Base Lateral)",
    significado: "Cavaleiro de ferro — primeiro nível.",
    decomposicao: [
      { termo: "Tekki", significado: "Cavaleiro de ferro" },
      { termo: "Shodan", significado: "Primeiro nível" }
    ],
    text: "Executado inteiramente em Kiba-dachi ao longo de uma linha reta horizontal única. Desenvolve extrema solidez de base, força nos quadris e técnicas de combate corpo a corpo.",
    videoUrl: "https://youtu.be/1MrRmimBJoA?si=fzzXDrlIReDRZmdk",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Tekki Nidan",
    kanji: "鉄騎二段",
    nivel: "Dan (2º Dan)",
    mov: 24,
    categoria: "Naihanchi (Base Lateral)",
    significado: "Cavaleiro de ferro — segundo nível.",
    decomposicao: [
      { termo: "Tekki", significado: "Cavaleiro de ferro" },
      { termo: "Nidan", significado: "Segundo nível" }
    ],
    text: "Segunda forma da série Tekki. Enfatiza defesas de gancho (Kagi-zuki), agarramentos e golpes curtos laterais sem perder o alinhamento da base Kiba-dachi.",
    videoUrl: "",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Tekki Sandan",
    kanji: "鉄騎三段",
    nivel: "Dan (3º Dan)",
    mov: 36,
    categoria: "Naihanchi (Base Lateral)",
    significado: "Cavaleiro de ferro — terceiro nível.",
    decomposicao: [
      { termo: "Tekki", significado: "Cavaleiro de ferro" },
      { termo: "Sandan", significado: "Terceiro nível" }
    ],
    text: "A variação mais rápida e complexa de Tekki. Requer coordenação rítmica ágil de braços e rotação precisa do tronco mantendo a postura firme.",
    videoUrl: "https://youtu.be/1MrRmimBJoA?si=fzzXDrlIReDRZmdk",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Bassai-Dai",
    kanji: "披塞大",
    nivel: "Dan (1º Dan - Shodan)",
    mov: 42,
    categoria: "Sentei Kata (Obrigatório)",
    significado: "Penetrar ou romper uma fortaleza — versão maior.",
    decomposicao: [
      { termo: "Bassai", significado: "Romper a fortaleza" },
      { termo: "Dai", significado: "Versão maior" }
    ],
    text: "Kata enérgico e imponente que simboliza transformar desvantagem em vantagem com determinação inabalável. Alterna ataques pesados com bloqueios precisos.",
    videoUrl: "https://www.youtube.com/embed/Qpt3W7Y06Kg?si=5pYA7damMFzW00Dx",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Bassai-Sho",
    kanji: "披塞小",
    nivel: "Dan (3º Dan)",
    mov: 27,
    categoria: "Tokui Kata (Avançado)",
    significado: "Penetrar ou romper uma fortaleza — versão menor.",
    decomposicao: [
      { termo: "Bassai", significado: "Romper a fortaleza" },
      { termo: "Sho", significado: "Versão menor" }
    ],
    text: "Variação avançada com defesas sutis de mão aberta, desvios contra bastão (Bo) e contra-ataques precisos que exigem alta sensibilidade tátil.",
    videoUrl: "https://www.youtube.com/embed/zpnA13Vg1lY?si=0MItYepXnRt0Hhcv",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Kanku-Dai",
    kanji: "観空大",
    nivel: "Dan (1º / 2º Dan)",
    mov: 65,
    categoria: "Sentei Kata (Obrigatório)",
    significado: "Observar o céu / Contemplar o vazio — versão maior.",
    decomposicao: [
      { termo: "Kanku", significado: "Observar o céu e o vazio" },
      { termo: "Dai", significado: "Versão maior" }
    ],
    text: "O kata mais longo e clássico do Shotokan, predileto de Funakoshi. Inicia com a elevação das mãos formando um triângulo contra o céu e engloba a base de quase todos os Heian.",
    videoUrl: "https://www.youtube.com/embed/5Hgi2vi9EbA?si=YIvoV3z4nckosn0b",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Kanku-Sho",
    kanji: "観空小",
    nivel: "Dan (4º Dan)",
    mov: 47,
    categoria: "Tokui Kata (Avançado)",
    significado: "Observar o céu / Contemplar o vazio — versão menor.",
    decomposicao: [
      { termo: "Kanku", significado: "Observar o céu e o vazio" },
      { termo: "Sho", significado: "Versão menor" }
    ],
    text: "Versão compacta e rápida de Kanku, famosa por seus saltos acrobáticos explosivos e combinações de contra-ataque de alta velocidade.",
    videoUrl: "https://www.youtube.com/embed/veaayoYQ9D4?si=5h9leVsAiKcpWiRG",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Empi",
    kanji: "燕飛",
    nivel: "Dan (1º / 2º Dan)",
    mov: 37,
    categoria: "Sentei Kata (Obrigatório)",
    significado: "Voo da andorinha.",
    decomposicao: [
      { termo: "En", significado: "Andorinha" },
      { termo: "Pi", significado: "Voo ágil" }
    ],
    text: "Inspirado na agilidade rápida e mudanças repentinas de trajetória de uma andorinha em voo. Apresenta variações de altura corporal, puxões e um salto rápido.",
    videoUrl: "https://www.youtube.com/embed/IInNlHZQUrE?si=iDRDyhPcI4kp9i6a",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Jion",
    kanji: "慈恩",
    nivel: "Dan (1º Dan - Shodan)",
    mov: 47,
    categoria: "Sentei Kata (Obrigatório)",
    significado: "Amor e benevolência — nome de um templo budista clássico.",
    decomposicao: [
      { termo: "Ji", significado: "Amor e compaixão" },
      { termo: "On", significado: "Benevolência e gratidão" }
    ],
    text: "Kata nobre e harmonioso de origem Tomari-te. Inicia com a saudação tradicional budista (mão aberta sobre o punho) e apresenta movimentos diretos e pesados.",
    videoUrl: "https://www.youtube.com/embed/KErsdtTwqM8?si=VBIq8lrh3RXTfhnV",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Jitte",
    kanji: "十手",
    nivel: "Dan (2º / 3º Dan)",
    mov: 24,
    categoria: "Tokui Kata (Defesa de Bastão)",
    significado: "Dez mãos — eficácia equivalente a dez oponentes.",
    decomposicao: [
      { termo: "Jit (Jū)", significado: "Dez" },
      { termo: "Te", significado: "Mãos" }
    ],
    text: "Kata focado em desarmes e defesas robustas contra ataques de bastão longo (Bo-dori), com bloqueios em gancho e posturas firmes.",
    videoUrl: "https://www.youtube.com/embed/IWZOQd6dvww?si=PqjnNvsoSNQHEz7B",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Jiin",
    kanji: "慈陰",
    nivel: "Dan (3º Dan)",
    mov: 35,
    categoria: "Tokui Kata (Avançado)",
    significado: "Sombra de benevolência / Amor do templo.",
    decomposicao: [
      { termo: "Ji", significado: "Amor e misericórdia" },
      { termo: "In", significado: "Sombra ou retiro espiritual" }
    ],
    text: "Completa a trilogia Jion-Jitte-Jiin. Destaca transições calmas e estáveis em Kiba-dachi e Zenkutsu-dachi com controle respiratório profundo.",
    videoUrl: "https://www.youtube.com/embed/b8RcGoE7XiI?si=LVmJageVxi3zvOQU",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Hangetsu",
    kanji: "半月",
    nivel: "Dan (2º Dan)",
    mov: 41,
    categoria: "Tokui Kata (Naha-te / Respiração)",
    significado: "Meia-lua.",
    decomposicao: [
      { termo: "Han", significado: "Metade / Meia" },
      { termo: "Getsu", significado: "Lua" }
    ],
    text: "Herança da vertente Shorei/Naha-te. Destaca a base Hangetsu-dachi com passos circulares e contração isométrica profunda acompanhada de respiração sonora (Ibuki).",
    videoUrl: "https://www.youtube.com/embed/vOP8dAalfms?si=WuNthW_MhH8RgCcb",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Gankaku",
    kanji: "岩鶴",
    nivel: "Dan (2º / 3º Dan)",
    mov: 42,
    categoria: "Tokui Kata (Equilíbrio)",
    significado: "Garça sobre a rocha.",
    decomposicao: [
      { termo: "Gan", significado: "Rocha ou penhasco" },
      { termo: "Kaku", significado: "Garça" }
    ],
    text: "Caracterizado pela postura Tsuruashi-dachi (equilíbrio unilateral imitando a garça no rochedo) seguido de chute Yoko-geri e contragolpe fulminante de Uraken.",
    videoUrl: "https://www.youtube.com/embed/OJi3lwnx0jI?si=3b76maTgCr1h0PYK",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Sochin",
    kanji: "壯鎭",
    nivel: "Dan (2º / 3º Dan)",
    mov: 41,
    categoria: "Tokui Kata (Força e Enraizamento)",
    significado: "Grande tranquilidade / Força e calma inabalável.",
    decomposicao: [
      { termo: "So", significado: "Grande / Vigoroso" },
      { termo: "Chin", significado: "Tranquilidade e calma" }
    ],
    text: "Executado predominantemente na base Sochin-dachi (Fudo-dachi), transmitindo o enraizamento de uma rocha imóvel com explosões musculares e defesas circulares.",
    videoUrl: "https://www.youtube.com/embed/KqmlVtZZuxY?si=4L84TF6YlHULQ5YJ",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Nijushiho",
    kanji: "二十四歩",
    nivel: "Dan (3º / 4º Dan)",
    mov: 34,
    categoria: "Tokui Kata (Fluidez / Ondas)",
    significado: "Vinte e quatro passos.",
    decomposicao: [
      { termo: "Nijūshi", significado: "Vinte e quatro" },
      { termo: "Ho", significado: "Passos" }
    ],
    text: "Possui dinâmica fluida que evoca o movimento contínuo das ondas do mar, com bloqueios circulares suaves e penetrantes ataques com a palma da mão.",
    videoUrl: "https://www.youtube.com/embed/ZE8EqPvwruE?si=n2_cq_NPjV-1Mpcx",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Chinte",
    kanji: "珍手",
    nivel: "Dan (3º / 4º Dan)",
    mov: 32,
    categoria: "Tokui Kata (Mãos Raras)",
    significado: "Mãos raras / Mãos incomuns.",
    decomposicao: [
      { termo: "Chin", significado: "Raro ou incomum" },
      { termo: "Te", significado: "Mãos" }
    ],
    text: "Contém técnicas circulares com as pontas dos dedos dirigidas a pontos vitais (Nihon-nukite) e termina com os três saltos rítmicos para retorno ao ponto inicial do Enbusen.",
    videoUrl: "https://www.youtube.com/embed/RgwDv8MChWg?si=FmLnBgqLsKij7Elj",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Unsu",
    kanji: "雲手",
    nivel: "Avançado (4º Dan / Mestre)",
    mov: 48,
    categoria: "Tokui Kata (Competição / Mestre)",
    significado: "Mãos nas nuvens.",
    decomposicao: [
      { termo: "Un", significado: "Nuvem" },
      { termo: "Su", significado: "Mãos" }
    ],
    text: "Considerado um dos katas mais complexos e atléticos do Karatê. Inclui defesa do solo com chute Mikazuki-geri e o espetacular salto giratório de 360° no ar.",
    videoUrl: "https://www.youtube.com/embed/MjVKvHf_Ny0?si=TzIKaHXgjdOwLovK",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Meikyo",
    kanji: "明鏡",
    nivel: "Dan (3º / 4º Dan)",
    mov: 33,
    categoria: "Tokui Kata (Espelho Limpo)",
    significado: "Espelho limpo / Espelho polido.",
    decomposicao: [
      { termo: "Mei", significado: "Límpido e claro" },
      { termo: "Kyo", significado: "Espelho" }
    ],
    text: "Expressa a serenidade mental de um espelho sem reflexos distorcidos. Contém bloqueios triangulares (Sankaku-uke) e saltos com troca rápida de base.",
    videoUrl: "https://www.youtube.com/embed/HbX9X3JEI1E?si=IUnTW8UKP1s3hn53",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Wankan",
    kanji: "王冠",
    nivel: "Dan (4º Dan / Mestre)",
    mov: 24,
    categoria: "Tokui Kata (Coroa do Rei)",
    significado: "Coroa do rei.",
    decomposicao: [
      { termo: "Wan", significado: "Rei" },
      { termo: "Kan", significado: "Coroa" }
    ],
    text: "O kata mais curto do Shotokan com um único Kiai no final. Apresenta agarramentos e desequilíbrios executados com nobreza e elegância rítmica.",
    videoUrl: "https://www.youtube.com/embed/DzFP2UilMtI?si=td3g8MVHyovJN9bL",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Gojushiho-Dai",
    kanji: "五十四歩大",
    nivel: "Dan (4º / 5º Dan)",
    mov: 67,
    categoria: "Tokui Kata (54 Passos Maior)",
    significado: "Cinquenta e quatro passos — versão maior.",
    decomposicao: [
      { termo: "Gojūshi-ho", significado: "54 passos" },
      { termo: "Dai", significado: "Versão maior" }
    ],
    text: "Kata extenso com raízes antigas no estilo da Fênix, utilizando bicos de mão (Washide) e golpes de lança (Nukite) em ritmo constante e cadenciado.",
    videoUrl: "https://www.youtube.com/embed/qVGcqVEBRRs?si=cc2n0Mi_p6nBgBLD",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Gojushiho-Sho",
    kanji: "五十四歩小",
    nivel: "Dan (4º / 5º Dan)",
    mov: 65,
    categoria: "Tokui Kata (54 Passos Menor)",
    significado: "Cinquenta e quatro passos — versão menor.",
    decomposicao: [
      { termo: "Gojūshi-ho", significado: "54 passos" },
      { termo: "Sho", significado: "Versão menor" }
    ],
    text: "Variação refinada e de alta precisão técnica com ataques de mão aberta a curta distância, muito consagrada em finais de campeonatos mundiais.",
    videoUrl: "https://www.youtube.com/embed/c2qiJNrCYGw?si=nC4ozrMCFna66xkK",
    enbusenUrl: "",
    imagemUrl: ""
  },
  {
    nome: "Taikyoku Shodan",
    kanji: "太極初段",
    nivel: "Iniciante (Básico)",
    mov: 20,
    categoria: "Kihon Kata (Iniciante)",
    significado: "Grande causa primordial — primeiro nível.",
    decomposicao: [
      { termo: "Taikyoku", significado: "Grande causa primordial / Início" },
      { termo: "Shodan", significado: "Primeiro nível" }
    ],
    text: "Forma introdutória simplificada criada por Funakoshi para o aprendizado fundamental do traçado do Enbusen em 'I', Zenkutsu-dachi e bloqueio Gedan-barai.",
    videoUrl: "https://www.youtube.com/embed/jH6bv4GDpp0?si=UCRzd_uzwV0D4Kv-",
    enbusenUrl: "",
    imagemUrl: ""
  }
];

export const GRADUACOES = [
  { faixa: "Branca", jp: "白帯", txt: "Iniciante. A mente vazia, pronta para receber." },
  { faixa: "Amarela", jp: "黄帯", txt: "Primeiros movimentos firmes — o sol que nasce." },
  { faixa: "Vermelha", jp: "赤帯", txt: "Energia e ímpeto da juventude técnica." },
  { faixa: "Laranja", jp: "橙帯", txt: "Transição. O calor do fogo interno." },
  { faixa: "Verde", jp: "緑帯", txt: "Crescimento — como o broto que vira árvore." },
  { faixa: "Roxa", jp: "紫帯", txt: "Profundidade. Estudo de katas intermediários." },
  { faixa: "Marrom", jp: "茶帯", txt: "Maturidade técnica. Pronto para o Shodan." },
  { faixa: "Preta", jp: "黒帯", txt: "Não é o fim — é o verdadeiro começo. Shodan = 1º dan." },
];

export interface PilarItem {
  kanji: string;
  nome: string;
  pt: string;
  tagline: string;
  oque_e: string;
  para_que_serve: string;
}

export interface EtiquetaItem {
  kanji: string;
  nome: string;
  romaji?: string;
  traducao: string;
  oque_e: string;
  para_que_serve: string;
  detalhes?: { titulo: string; desc: string }[];
}

export interface PrincipioTecnicoItem {
  k: string;
  n: string;
  traducao: string;
  oque_e: string;
  para_que_serve: string;
}

export const PILARES: PilarItem[] = [
  {
    kanji: "基本",
    nome: "Kihon",
    pt: "Técnicas Básicas e Fundamentos",
    tagline: "A matriz biomecânica e o alicerce de toda técnica.",
    oque_e: "O treinamento metódico e exaustivo das técnicas fundamentais isoladas — bases (dachi), socos (tsuki), defesas (uke) e chutes (keri) — executados repetidamente em linhas retas e rotações.",
    para_que_serve: "Construir a memória neuromuscular, corrigir a postura e o alinhamento esquelético, gerar potência instantânea e garantir que a reação em combate ocorra sem hesitação mental."
  },
  {
    kanji: "型",
    nome: "Kata",
    pt: "Formas e Combate Coreografado",
    tagline: "A enciclopédia viva e histórica do estilo Shotokan.",
    oque_e: "Sequências estruturadas de movimentos defensivos e ofensivos contra múltiplos adversários imaginários, traçados em um diagrama geométrico espacial (Enbusen).",
    para_que_serve: "Preservar o repertório marcial tradicional, treinar transições rítmicas de equilíbrio, controle respiratório e desvendar aplicações práticas de autodefesa real (Bunkai)."
  },
  {
    kanji: "組手",
    nome: "Kumite",
    pt: "Combate Prático com Parceiro",
    tagline: "O laboratório de teste sob pressão e confronto real.",
    oque_e: "A aplicação direta e controlada dos fundamentos contra um adversário real, evoluindo do combate combinado (Gohon/Sanbon/Ippon Kumite) ao combate livre (Jiyu Kumite).",
    para_que_serve: "Calibrar a percepção de distância crítica (Maai), tempo de reação (Timing), leitura das intenções do adversário, autocontrole sob estresse e respeito à integridade física do colega."
  }
];

export const ETIQUETA_DOJO: EtiquetaItem[] = [
  {
    kanji: "礼",
    nome: "Rei",
    romaji: "Rei-shiki",
    traducao: "O Cumprimento e Respeito Mútuo",
    oque_e: "O ato solene e formal de curvar o tronco em reverência, realizado ao entrar e sair do dojo, antes e depois de cada kata, exercício ou combate.",
    para_que_serve: "Desarmar o ego, demonstrar humildade e gratidão ao mestre (Sensei) e firmar um compromisso tácito de segurança, lealdade e confiança com o parceiro de treino.",
    detalhes: [
      { titulo: "Ritsurei (立礼)", desc: "Cumprimento em pé, inclinando a coluna a cerca de 15 a 30 graus mantendo a postura ereta e o olhar respeitoso." },
      { titulo: "Zarei (座礼)", desc: "Cumprimento tradicional ajoelhado em Seiza, apoiando as mãos no solo em formato triangular antes de inclinar a cabeça." }
    ]
  },
  {
    kanji: "押忍",
    nome: "Oss",
    romaji: "Osu (Oshi Shinobu)",
    traducao: "Perseverança, Resiliência e Paciência",
    oque_e: "Abreviação da expressão 'Oshi Shinobu' (empurrar e suportar). É a saudação universal no cotidiano do dojo, servindo como 'olá', 'obrigado', 'compreendi' e 'vou me esforçar'.",
    para_que_serve: "Expressar espírito inabalável (Fudoshin), prontidão imediata perante instruções difíceis e determinação para superar a dor, o cansaço e os limites mentais e físicos com calma."
  },
  {
    kanji: "道場訓",
    nome: "Dōjō Kun",
    romaji: "Dōjō Precepts",
    traducao: "Os 5 Preceitos Éticos do Dojo",
    oque_e: "O código de conduta e filosofia moral composto por cinco regras, recitado em voz alta no final de cada treino por todos os alunos e professores em Seiza.",
    para_que_serve: "Assegurar que o conhecimento marcial de combate seja sempre guiado pelo aperfeiçoamento do caráter, verdade, esforço, respeito e controle do ímpeto agressivo."
  }
];

export const PRINCIPIOS_TECNICOS: PrincipioTecnicoItem[] = [
  {
    k: "決め",
    n: "Kime",
    traducao: "Foco e Contração Instantânea",
    oque_e: "A contração muscular total e explosiva concentrada no milissegundo exato do impacto, seguida imediatamente por relaxamento muscular.",
    para_que_serve: "Transferir a máxima energia cinética ao alvo sem empurrar, gerando impacto penetrante enquanto economiza energia e prepara o corpo para o próximo movimento."
  },
  {
    k: "気合",
    n: "Kiai",
    traducao: "União da Energia e Grito Espiritual",
    oque_e: "A expiração explosiva e emissão vocal originada na região do baixo ventre (Tanden / Hara) no clímax da técnica.",
    para_que_serve: "Sincronizar a respiração diafragmática, enrijecer a parede abdominal contra eventuais contra-ataques e desestabilizar psicologicamente o oponente."
  },
  {
    k: "残心",
    n: "Zanshin",
    traducao: "Mente Alerta e Presença Contínua",
    oque_e: "O estado de consciência vigilante e serenidade atenta que permanece ativo mesmo após o término de um golpe ou sequência de kata.",
    para_que_serve: "Evitar o relaxamento prematuro ou triunfalismo no tatame, mantendo o praticante 100% pronto para reagir a qualquer nova ameaça ou contra-ataque súbito."
  },
  {
    k: "間合",
    n: "Maai",
    traducao: "Distância e Espaço Estratégico",
    oque_e: "A mensuração espacial e temporal dinâmica entre você e o adversário, calculada em função do alcance dos membros e da velocidade de deslocamento.",
    para_que_serve: "Permitir atacar com precisão cirúrgica no momento em que o oponente não consegue reagir e esquivar-se com o mínimo de deslocamento necessário."
  },
  {
    k: "拍子",
    n: "Hyoshi",
    traducao: "Ritmo, Cadência e Tempo",
    oque_e: "O compasso temporal e a cadência respiratória que ditam a troca de iniciativas durante uma luta.",
    para_que_serve: "Quebrar o padrão de tempo esperado pelo adversário para antecipar golpes (Sen no Sen) e atacar nos momentos de transição e vulnerabilidade."
  },
  {
    k: "腰",
    n: "Koshi",
    traducao: "Uso do Quadril e Centro de Gravidade",
    oque_e: "A rotação, basculamento e travamento da cintura pélvica integrando a base dos pés com os membros superiores.",
    para_que_serve: "Atuar como o motor gerador de força do corpo; no Karatê tradicional, a força de um golpe não vem do braço isolado, mas sim do giro explosivo do quadril."
  },
  {
    k: "引手",
    n: "Hikite",
    traducao: "Puxada da Mão Oposta",
    oque_e: "O recolhimento enérgico do braço oposto em direção à cintura no momento exato em que o outro braço desfere o soco ou bloqueio.",
    para_que_serve: "Criar uma reação oposta em rotação (ação e reação), duplicando a velocidade e a penetração do golpe atacante enquanto protege o flanco."
  },
  {
    k: "初心",
    n: "Shoshin",
    traducao: "Mente de Principiante",
    oque_e: "A mentalidade de humildade e receptividade perpétua, independentemente do tempo de treino ou graduação de faixa.",
    para_que_serve: "Eliminar a arrogância e a ilusão de autossuficiência, permitindo que faixas-pretas e mestres continuem refinando os fundamentos básicos a cada treino."
  },
  {
    k: "無心",
    n: "Mushin",
    traducao: "Mente Livre / Estado de Fluxo",
    oque_e: "O estado de mente límpida e espontânea, sem interferência de pensamentos de medo, hesitação, vaidade ou cálculo consciente excessivo.",
    para_que_serve: "Permitir respostas motoras automáticas e reflexivas na velocidade da luz durante o combate, agindo de forma intuitiva como a água que se molda ao recipiente."
  }
];

export const DICIONARIO = [
  { jp: "道場", romaji: "Dōjō", pt: "Local de prática — literalmente 'lugar do caminho'." },
  { jp: "先生", romaji: "Sensei", pt: "Mestre, aquele que nasceu antes." },
  { jp: "道着", romaji: "Gi (Dōgi)", pt: "Uniforme branco usado no treino." },
  { jp: "帯", romaji: "Obi", pt: "Faixa que indica a graduação." },
  { jp: "礼", romaji: "Rei", pt: "Cumprimento — manifestação de respeito." },
  { jp: "押忍", romaji: "Oss / Osu", pt: "Saudação de respeito, paciência e perseverança." },
];

export const BENEFICIOS = [
  { kanji: "律", titulo: "Disciplina", text: "Rotina de treino constante forja a autodisciplina aplicável à vida toda." },
  { kanji: "信", titulo: "Autoconfiança", text: "Superar limites no tatame fortalece a coragem fora dele." },
  { kanji: "体", titulo: "Condicionamento", text: "Cardio, força e potência integrados em cada sessão." },
  { kanji: "柔", titulo: "Flexibilidade", text: "Chutes altos e bases profundas ampliam mobilidade articular." },
  { kanji: "集", titulo: "Foco", text: "Cada técnica exige presença total — kime — no instante." },
  { kanji: "敬", titulo: "Respeito", text: "Etiqueta do dojo cultiva respeito por mestre, colega e adversário." },
];

export const DEPOIMENTOS = [
  { nome: "Ana, 34", antes: "Sedentária, ansiosa.", depois: "Faixa azul, 3x/semana. Dorme melhor, foca mais." },
  { nome: "Hiroshi, 58", antes: "Estresse no trabalho.", depois: "Encontrou o silêncio no kata. Voltou a sorrir." },
  { nome: "Lucas, 9", antes: "Tímido na escola.", depois: "Mais confiante e respeitoso com colegas." },
];

export const CATEGORIAS_TECNICAS = [
  { id: "Socos", label: "Socos e Golpes (Tsuki / Uchi)", kanji: "突 · 打" },
  { id: "Chutes", label: "Chutes (Keri)", kanji: "蹴" },
  { id: "Defesas", label: "Defesas (Uke)", kanji: "受" },
  { id: "Bases", label: "Bases e Posturas (Dachi)", kanji: "立" },
  { id: "Katas", label: "Katas (型)", kanji: "型" },
];

export interface TecnicaItem {
  tipo: string;
  cat: string;
  nome: string;
  kanji: string;
  pt: string;
  desc: string;
  url_video?: string;
  url_imagem?: string;
}

export const TECNICAS: TecnicaItem[] = [
  // Tsuki (Socos)
  { tipo: "Tsuki", cat: "Socos", nome: "Choku-Zuki", kanji: "直突き", pt: "Soco direto (parado)", desc: "Soco reto executado a partir de Heiko ou Kiba-dachi, sem deslocamento. Fundamento absoluto." },
  { tipo: "Tsuki", cat: "Socos", nome: "Oi-Zuki", kanji: "追い突き", pt: "Soco com avanço", desc: "Soco com a mão do mesmo lado da perna que avança (mesmo lado). Técnica símbolo do Shotokan." },
  { tipo: "Tsuki", cat: "Socos", nome: "Gyaku-Zuki", kanji: "逆突き", pt: "Soco inverso", desc: "Soco com a mão oposta à perna da frente. Gera potência pela rotação total do quadril." },
  { tipo: "Tsuki", cat: "Socos", nome: "Kizami-Zuki", kanji: "刻み突き", pt: "Soco curto / jab", desc: "Soco rápido da mão da frente, usado para medir distância e tomar a iniciativa (sen)." },
  { tipo: "Tsuki", cat: "Socos", nome: "Kage-Zuki", kanji: "鉤突き", pt: "Soco em gancho", desc: "Soco curvo, semelhante a um cross horizontal, eficaz em curta distância." },
  { tipo: "Tsuki", cat: "Socos", nome: "Ura-Zuki", kanji: "裏突き", pt: "Soco invertido (palma p/ cima)", desc: "Soco com o punho virado para cima, em distância muito curta. Comum em katas." },
  { tipo: "Tsuki", cat: "Socos", nome: "Tate-Zuki", kanji: "立て突き", pt: "Soco vertical", desc: "Soco com o punho na vertical (polegar para cima). Permite mais alcance em alturas médias." },
  { tipo: "Tsuki", cat: "Socos", nome: "Age-Zuki", kanji: "上げ突き", pt: "Soco ascendente / uppercut", desc: "Soco que sobe em arco, mirando o queixo do adversário." },
  { tipo: "Tsuki", cat: "Socos", nome: "Yama-Zuki", kanji: "山突き", pt: "Soco de montanha", desc: "Soco duplo simultâneo em níveis diferentes (alto + médio). Aparece em Bassai-sho." },
  { tipo: "Tsuki", cat: "Socos", nome: "Awase-Zuki", kanji: "合せ突き", pt: "Soco em forma de U", desc: "Soco duplo onde ambos os punhos atingem alvos verticalmente alinhados." },
  { tipo: "Tsuki", cat: "Socos", nome: "Morote-Zuki", kanji: "諸手突き", pt: "Soco de duas mãos", desc: "Dois socos simultâneos, ambos no mesmo alvo. Maximiza força concentrada." },
  { tipo: "Tsuki", cat: "Socos", nome: "Nukite", kanji: "貫手", pt: "Ataque com a ponta dos dedos", desc: "Estocada com a mão em lança. Mira pontos vitais (olhos, garganta, plexo)." },

  // Uchi (Golpes com braço/mão)
  { tipo: "Uchi", cat: "Socos", nome: "Uraken-Uchi", kanji: "裏拳打ち", pt: "Golpe com o dorso do punho", desc: "Chicote rápido com as costas do punho. Comum contra a têmpora." },
  { tipo: "Uchi", cat: "Socos", nome: "Tettsui-Uchi", kanji: "鉄鎚打ち", pt: "Martelo de ferro", desc: "Golpe descendente com a base do punho fechado, como um martelo." },
  { tipo: "Uchi", cat: "Socos", nome: "Shuto-Uchi", kanji: "手刀打ち", pt: "Golpe com cutelo de mão", desc: "Golpe com a borda externa da mão aberta. Famoso pelo 'karate chop'." },
  { tipo: "Uchi", cat: "Socos", nome: "Haito-Uchi", kanji: "背刀打ち", pt: "Cutelo invertido", desc: "Golpe com a borda interna da mão aberta (lado do polegar)." },
  { tipo: "Uchi", cat: "Socos", nome: "Empi-Uchi", kanji: "猿臂打ち", pt: "Cotovelada", desc: "Família de golpes com o cotovelo: mae, yoko, ushiro, mawashi, otoshi, tate." },
  { tipo: "Uchi", cat: "Socos", nome: "Hiza-Geri", kanji: "膝蹴り", pt: "Joelhada", desc: "Golpe ascendente com o joelho, devastador em distância curta." },

  // Keri (Chutes)
  { tipo: "Keri", cat: "Chutes", nome: "Mae-Geri Keage", kanji: "前蹴り蹴上", pt: "Chute frontal de chicote", desc: "Chute frontal ascendente e rápido, usando o koshi (base dos dedos)." },
  { tipo: "Keri", cat: "Chutes", nome: "Mae-Geri Kekomi", kanji: "前蹴り蹴込", pt: "Chute frontal penetrante", desc: "Chute frontal em linha reta, com impulso de quadril, para empurrar o oponente." },
  { tipo: "Keri", cat: "Chutes", nome: "Mawashi-Geri", kanji: "回し蹴り", pt: "Chute circular", desc: "Chute em arco horizontal — peito do pé (haisoku) ou koshi conforme o nível." },
  { tipo: "Keri", cat: "Chutes", nome: "Yoko-Geri Keage", kanji: "横蹴り蹴上", pt: "Chute lateral de chicote", desc: "Chute lateral rápido e ascendente, com a borda do pé (sokuto)." },
  { tipo: "Keri", cat: "Chutes", nome: "Yoko-Geri Kekomi", kanji: "横蹴り蹴込", pt: "Chute lateral penetrante", desc: "Chute lateral em linha reta com a borda do pé. Forte para atravessar a guarda." },
  { tipo: "Keri", cat: "Chutes", nome: "Ushiro-Geri", kanji: "後ろ蹴り", pt: "Chute para trás", desc: "Chute reto para trás com o calcanhar (kakato). Usado após giro." },
  { tipo: "Keri", cat: "Chutes", nome: "Ura-Mawashi-Geri", kanji: "裏回し蹴り", pt: "Chute circular invertido", desc: "Chute em arco no sentido contrário ao mawashi, atingindo com o calcanhar (gancho)." },
  { tipo: "Keri", cat: "Chutes", nome: "Mikazuki-Geri", kanji: "三日月蹴り", pt: "Chute em meia-lua", desc: "Chute em arco vertical para dentro com a planta do pé. Também usado para bloquear." },
  { tipo: "Keri", cat: "Chutes", nome: "Gyaku-Mawashi-Geri", kanji: "逆回し蹴り", pt: "Mawashi invertido", desc: "Chute mawashi feito com a perna recuada após rotação. Surpreende o adversário." },
  { tipo: "Keri", cat: "Chutes", nome: "Kin-Geri", kanji: "金的蹴り", pt: "Chute baixo (virilha)", desc: "Chute curto e ascendente com o peito do pé — apenas em defesa pessoal, ilegal em competição." },
  { tipo: "Keri", cat: "Chutes", nome: "Fumikomi", kanji: "踏み込み", pt: "Pisada", desc: "Pisada descendente com o calcanhar, mirando joelho ou pé do oponente." },
  { tipo: "Keri", cat: "Chutes", nome: "Tobi-Geri", kanji: "飛び蹴り", pt: "Chute saltado", desc: "Categoria de chutes executados em voo (mae-tobi, yoko-tobi, nidan-geri etc.)." },
  { tipo: "Keri", cat: "Chutes", nome: "Nidan-Geri", kanji: "二段蹴り", pt: "Chute duplo no ar", desc: "Salta-se e executa dois chutes em sequência antes de aterrissar." },
  { tipo: "Keri", cat: "Chutes", nome: "Ashi-Barai", kanji: "足払い", pt: "Varredura de pé", desc: "Rasteira lateral para desequilibrar o oponente." },

  // Uke (Defesas)
  { tipo: "Uke", cat: "Defesas", nome: "Age-Uke", kanji: "上げ受け", pt: "Defesa alta", desc: "Bloqueio ascendente com o antebraço, contra ataques à cabeça (jodan)." },
  { tipo: "Uke", cat: "Defesas", nome: "Soto-Uke", kanji: "外受け", pt: "Defesa de fora p/ dentro", desc: "Antebraço varre de fora para dentro contra socos médios (chudan)." },
  { tipo: "Uke", cat: "Defesas", nome: "Uchi-Uke", kanji: "内受け", pt: "Defesa de dentro p/ fora", desc: "Antebraço varre de dentro para fora. Cria abertura para contra-ataque com gyaku." },
  { tipo: "Uke", cat: "Defesas", nome: "Gedan-Barai", kanji: "下段払い", pt: "Varredura baixa", desc: "Defesa descendente que afasta chutes e socos baixos." },
  { tipo: "Uke", cat: "Defesas", nome: "Shuto-Uke", kanji: "手刀受け", pt: "Defesa com cutelo de mão", desc: "Bloqueio com a borda da mão aberta, executado em Kokutsu-dachi." },
  { tipo: "Uke", cat: "Defesas", nome: "Morote-Uke", kanji: "諸手受け", pt: "Defesa reforçada (2 mãos)", desc: "Uchi-uke reforçado pelo punho oposto apoiando o antebraço." },
  { tipo: "Uke", cat: "Defesas", nome: "Juji-Uke", kanji: "十字受け", pt: "Defesa em X (cruz)", desc: "Ambos os antebraços cruzados em X — alta (jodan) ou baixa (gedan)." },
  { tipo: "Uke", cat: "Defesas", nome: "Kakiwake-Uke", kanji: "掻き分け受け", pt: "Defesa que abre", desc: "Defesa para escapar de uma pegada dupla, abrindo os braços para fora." },
  { tipo: "Uke", cat: "Defesas", nome: "Sukui-Uke", kanji: "掬い受け", pt: "Defesa em concha", desc: "Defesa com a mão em concha que 'pega' o chute do oponente por baixo." },
  { tipo: "Uke", cat: "Defesas", nome: "Osae-Uke", kanji: "押さえ受け", pt: "Defesa pressionando", desc: "Defesa que pressiona o ataque para baixo, controlando a linha central." },
  { tipo: "Uke", cat: "Defesas", nome: "Nagashi-Uke", kanji: "流し受け", pt: "Defesa de desvio", desc: "Defesa que redireciona suavemente o ataque, como água que escorre." },
  { tipo: "Uke", cat: "Defesas", nome: "Haishu-Uke", kanji: "背手受け", pt: "Defesa com dorso da mão", desc: "Defesa rápida usando o dorso da mão aberta." },

  // Dachi (Bases / posturas)
  { tipo: "Dachi", cat: "Bases", nome: "Heisoku-Dachi", kanji: "閉足立ち", pt: "Base de pés juntos", desc: "Pés totalmente unidos. Posição inicial cerimonial." },
  { tipo: "Dachi", cat: "Bases", nome: "Musubi-Dachi", kanji: "結び立ち", pt: "Base do rei", desc: "Calcanhares juntos, pés abertos em V. Usada no rei (cumprimento)." },
  { tipo: "Dachi", cat: "Bases", nome: "Heiko-Dachi", kanji: "平行立ち", pt: "Base paralela", desc: "Pés paralelos na largura dos ombros. Pronto para iniciar." },
  { tipo: "Dachi", cat: "Bases", nome: "Hachiji-Dachi", kanji: "八字立ち", pt: "Base do '8'", desc: "Pés afastados com as pontas viradas para fora, formando o kanji 八." },
  { tipo: "Dachi", cat: "Bases", nome: "Zenkutsu-Dachi", kanji: "前屈立ち", pt: "Base frontal longa", desc: "Postura ofensiva clássica: 60% do peso à frente, perna de trás esticada. Símbolo do Shotokan." },
  { tipo: "Dachi", cat: "Bases", nome: "Kokutsu-Dachi", kanji: "後屈立ち", pt: "Base recuada", desc: "70% do peso atrás, joelho da frente flexionado. Defensiva por natureza." },
  { tipo: "Dachi", cat: "Bases", nome: "Kiba-Dachi", kanji: "騎馬立ち", pt: "Base do cavaleiro", desc: "Base lateral profunda, peso 50/50, joelhos sobre os dedos. Forja pernas de aço." },
  { tipo: "Dachi", cat: "Bases", nome: "Shiko-Dachi", kanji: "四股立ち", pt: "Base do sumô", desc: "Como Kiba-dachi, mas com as pontas dos pés viradas 45° para fora." },
  { tipo: "Dachi", cat: "Bases", nome: "Sanchin-Dachi", kanji: "三戦立ち", pt: "Base das três batalhas", desc: "Pés virados para dentro, joelhos pressionados. Postura interna do Goju e raros katas Shotokan (Hangetsu)." },
  { tipo: "Dachi", cat: "Bases", nome: "Neko-Ashi-Dachi", kanji: "猫足立ち", pt: "Base do gato", desc: "Peso quase todo na perna de trás, perna da frente apenas tocando o solo com a planta." },
  { tipo: "Dachi", cat: "Bases", nome: "Tsuru-Ashi-Dachi", kanji: "鶴足立ち", pt: "Base da garça", desc: "Equilíbrio sobre uma perna, a outra dobrada contra o joelho de apoio." },
  { tipo: "Dachi", cat: "Bases", nome: "Fudo-Dachi", kanji: "不動立ち", pt: "Base imóvel / sochin", desc: "Postura híbrida entre zenkutsu e kiba — equilíbrio absoluto, símbolo da imobilidade." },
];

export const CURIOSIDADES = [
  { titulo: "Por que o uniforme é branco?", text: "O branco representa pureza, simplicidade e a mente do iniciante (shoshin). Todos começam iguais, qualquer que seja seu passado." },
  { titulo: "Significado das cores das faixas", text: "A faixa começa branca e escurece com o suor e o tempo, até virar preta — daí surgiu a tradição. Hoje as cores intermediárias (amarela, verde, roxa, marrom) indicam o progresso técnico." },
  { titulo: "O que significa 'Oss'?", text: "Contração de 'Oshi Shinobu' (押し忍ぶ): empurrar e suportar. Resume o espírito de perseverança diante do esforço." },
  { titulo: "O kata mais longo: Unsu", text: "雲手 — 'Mãos na Nuvem'. 48 movimentos incluindo um salto giratório de 360°. Considerado um dos katas mais avançados." },
  { titulo: "Shotokan x outros estilos", text: "Shotokan privilegia bases longas e técnicas lineares poderosas. Goju-ryu usa bases mais curtas e respiração sonora. Wado-ryu integra esquivas do jiu-jitsu." },
  { titulo: "25 de outubro: Karate no Hi", text: "空手の日 — Dia do Karatê, oficializado em Okinawa em 2005, marcando a data em que o nome '空手' foi adotado em 1936." },
  { titulo: "Por que 'mãos vazias'?", text: "空手 (kara-te) significa 'mão vazia'. Funakoshi mudou o ideograma original (唐手 — 'mão chinesa') para enfatizar o aspecto filosófico: vazio de armas, vazio de ego." },
  { titulo: "O Tigre de Shotokan", text: "O símbolo do tigre dentro de um círculo foi desenhado por Hoan Kosugi. O tigre representa força e calma, qualidades buscadas pelo praticante." },
  { titulo: "Niju Kun — os 20 preceitos", text: "Funakoshi deixou 20 princípios filosóficos. O primeiro: 'Karate começa e termina com o cumprimento (rei)'." },
  { titulo: "Kime — o instante decisivo", text: "決め — a contração total e instantânea de músculos no impacto da técnica. Sem kime, o golpe não tem vida." },
  { titulo: "A faixa preta não é o final", text: "Shodan (初段) significa literalmente 'primeiro degrau'. A faixa preta marca o início do aprendizado real — quando o praticante finalmente conhece o suficiente para começar a compreender." },
  { titulo: "O dojo mais antigo do mundo", text: "O Shotokan original (1936) em Zōshigaya, Tóquio, foi destruído em 1945. Hoje, o dojo da JKA Honbu em Ebisu (Tóquio) é considerado o quartel-general do estilo." },
  { titulo: "Kobudō — armas de fazenda", text: "Quando armas foram proibidas em Okinawa, camponeses adaptaram ferramentas agrícolas: nunchaku (mangual de arroz), tonfa (manivela de moinho), sai (tridente de pesca), bō (bastão) e kama (foice)." },
  { titulo: "O Ikken Hissatsu", text: "一拳必殺 — 'Um golpe, uma morte'. Conceito filosófico que não incentiva violência, mas sim a busca pela técnica perfeita: cada golpe deve ser dado como se fosse o único." },
  { titulo: "Zanshin — a mente que permanece", text: "残心 — Após executar uma técnica, o praticante deve manter a atenção plena, pronto para reagir. Zanshin é a diferença entre um golpe de karateca e um golpe de amador." },
  { titulo: "O Karate nas Olimpíadas", text: "O karatê estreou nos Jogos de Tóquio 2020 (2021), mas foi removido de Paris 2024. A modalidade busca voltar em Los Angeles 2028, mostrando que a luta pelo reconhecimento olímpico continua." },
];

export const PRECEITOS_FUNAKOSHI = [
  "空手に先手なし — No karatê, não existe atitude ofensiva.",
  "礼に始まり礼に終わる — Karate começa e termina com o cumprimento.",
  "心を磨け — Pule o ego, lapide o coração.",
];

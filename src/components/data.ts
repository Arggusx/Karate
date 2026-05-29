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
  { nome: "Gichin Funakoshi", kanji: "船越 義珍", anos: "1868–1957", icon: "Crown", text: "Pai do karatê moderno. Levou a arte de Okinawa ao Japão, codificou os 20 preceitos (Niju Kun) e fundou o estilo Shotokan. Adotou o pseudônimo 'Shōtō' (松濤 — ondas de pinheiros) por amar caminhar entre os pinheirais ao escrever poesia." },
  { nome: "Gigō Funakoshi", kanji: "船越 義豪", anos: "1906–1945", icon: "Flame", text: "Filho de Gichin. Responsável por dar ao Shotokan suas bases longas e profundas, os chutes altos e a dinâmica atlética que o diferenciam do karatê okinawano original." },
  { nome: "Masatoshi Nakayama", kanji: "中山 正敏", anos: "1913–1987", icon: "BookOpen", text: "Discípulo direto de Funakoshi. Sistematizou o ensino, criou as competições modernas (kumite shiai) e expandiu o Shotokan pelo mundo via JKA. Autor da série 'Best Karate'." },
  { nome: "Hidetaka Nishiyama", kanji: "西山 英峻", anos: "1928–2008", icon: "Globe", text: "Introduziu o Shotokan nos Estados Unidos em 1961, fundando a AAKF/ITKF. Formou gerações de mestres ocidentais e padronizou regras internacionais." },
  { nome: "Hirokazu Kanazawa", kanji: "金澤 弘和", anos: "1931–2019", icon: "Award", text: "Lendário competidor — campeão do 1º All Japan mesmo com a mão quebrada. Fundou a SKIF (Shotokan Karate-Do International Federation) e levou o estilo a mais de 100 países." },
  { nome: "Keinosuke Enoeda", kanji: "榎枝 慶之輔", anos: "1935–2003", icon: "Shield", text: "Conhecido como 'O Tigre' por sua ferocidade no tatame. Disseminou o Shotokan no Reino Unido e Europa, tornando-se ícone da JKA fora do Japão." },
  { nome: "Taiji Kase", kanji: "加瀬 泰治", anos: "1929–2004", icon: "Heart", text: "Pioneiro do Shotokan na Europa, baseado em Paris. Defendia um karatê marcial e introspectivo, fundando a WKSA." },
  { nome: "Tetsuhiko Asai", kanji: "浅井 哲彦", anos: "1935–2006", icon: "Wind", text: "Famoso por seu karatê fluido e técnicas raras com a mão aberta. Fundou a JKS (Japan Karate Shotorenmei) com ênfase em katas avançados." },
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

/* ───────── KATAS WITH EMBUSEN DATA ───────── */

export interface KataHotspot {
  x: number;  // % from left
  y: number;  // % from top
  label: string;
  tipo: "ataque" | "defesa" | "base" | "movimento";
  desc: string;
}

export interface KataData {
  nome: string;
  kanji: string;
  nivel: string;
  mov: number;
  text: string;
  duracao?: string;
  embusenPdf?: string;
  hotspots?: KataHotspot[];
}

export const KATAS_SHOTOKAN: KataData[] = [
  {
    nome: "Heian Shodan", kanji: "平安初段", nivel: "Kyu", mov: 21,
    text: "Primeiro kata. 'Paz mental, primeiro nível'. Introduz Zenkutsu-dachi e bloqueios fundamentais.",
    duracao: "~40 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-1.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Gedan Barai", tipo: "defesa", desc: "Defesa baixa em Zenkutsu-dachi — preparação inicial." },
      { x: 20, y: 30, label: "Age Uke", tipo: "defesa", desc: "Defesa alta ascendente contra ataques Jodan." },
      { x: 80, y: 30, label: "Oi-Zuki Chudan", tipo: "ataque", desc: "Soco avançando nível médio." },
      { x: 50, y: 50, label: "Shuto Uke", tipo: "defesa", desc: "Defesa com mão em espada em Kokutsu-dachi." },
      { x: 30, y: 70, label: "Zenkutsu-dachi", tipo: "base", desc: "Base frontal longa — fundamento do Shotokan." },
      { x: 70, y: 85, label: "Tetsui Uchi", tipo: "ataque", desc: "Golpe com punho martelo descendente." },
    ],
  },
  {
    nome: "Heian Nidan", kanji: "平安二段", nivel: "Kyu", mov: 26,
    text: "Apresenta defesas duplas e chutes laterais. Ritmo mais variado.",
    duracao: "~40 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-2.pdf",
    hotspots: [
      { x: 50, y: 15, label: "Haiwan Uke", tipo: "defesa", desc: "Defesa com a parte de trás do antebraço." },
      { x: 25, y: 40, label: "Yoko Geri Keage", tipo: "ataque", desc: "Chute lateral ascendente — introdução de chutes neste kata." },
      { x: 75, y: 40, label: "Uraken Uchi", tipo: "ataque", desc: "Golpe com dorso do punho, rápido e preciso." },
      { x: 50, y: 70, label: "Shuto Uke", tipo: "defesa", desc: "Sequência de defesas com mão em espada." },
      { x: 50, y: 90, label: "Nukite", tipo: "ataque", desc: "Ataque com ponta dos dedos ao plexo solar." },
    ],
  },
  {
    nome: "Heian Sandan", kanji: "平安三段", nivel: "Kyu", mov: 20,
    text: "Trabalha cotovelos e técnicas de contato curto.",
    duracao: "~40 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-3.pdf",
    hotspots: [
      { x: 50, y: 15, label: "Uchi Ude Uke", tipo: "defesa", desc: "Defesa com parte interna do antebraço." },
      { x: 30, y: 40, label: "Empi Uchi", tipo: "ataque", desc: "Golpe com cotovelo — técnica de curta distância." },
      { x: 70, y: 40, label: "Uraken Uchi", tipo: "ataque", desc: "Golpe lateral com dorso do punho." },
      { x: 50, y: 70, label: "Kiba-dachi", tipo: "base", desc: "Base do cavaleiro — lateral e estável." },
      { x: 50, y: 90, label: "Fumikomi", tipo: "movimento", desc: "Pisada de estocada para baixo." },
    ],
  },
  {
    nome: "Heian Yondan", kanji: "平安四段", nivel: "Kyu", mov: 27,
    text: "Combina chutes altos e bloqueios duplos em ritmo dinâmico.",
    duracao: "~50 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-4.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Morote Uke", tipo: "defesa", desc: "Defesa reforçada com dois braços." },
      { x: 30, y: 35, label: "Yoko Geri Keage", tipo: "ataque", desc: "Chute lateral ascendente com quadril." },
      { x: 70, y: 35, label: "Mae Empi Uchi", tipo: "ataque", desc: "Cotovelada frontal." },
      { x: 50, y: 60, label: "Kakiwake Uke", tipo: "defesa", desc: "Defesa que abre caminho com ambas as mãos." },
      { x: 50, y: 80, label: "Mae Geri", tipo: "ataque", desc: "Chute frontal — um dos movimentos icônicos deste kata." },
      { x: 50, y: 95, label: "Juji Uke", tipo: "defesa", desc: "Defesa em cruz (X) — bloqueio poderoso." },
    ],
  },
  {
    nome: "Heian Godan", kanji: "平安五段", nivel: "Kyu", mov: 23,
    text: "Inclui o famoso salto (tobi-komi) — preparação para katas avançados.",
    duracao: "~50 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-5.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Uchi Ude Uke", tipo: "defesa", desc: "Defesa com antebraço interno." },
      { x: 30, y: 35, label: "Juji Uke", tipo: "defesa", desc: "Defesa em cruz alta." },
      { x: 70, y: 35, label: "Gedan Barai", tipo: "defesa", desc: "Defesa baixa varrendo." },
      { x: 50, y: 55, label: "Mikazuki Geri", tipo: "ataque", desc: "Chute crescente com sola do pé." },
      { x: 50, y: 75, label: "Tobi (salto)", tipo: "movimento", desc: "Salto sobre o braço — momento culminante do kata." },
      { x: 50, y: 90, label: "Manji Uke", tipo: "defesa", desc: "Defesa simultânea alta e baixa." },
    ],
  },
  {
    nome: "Tekki Shodan", kanji: "鉄騎初段", nivel: "Kyu/Dan", mov: 29,
    text: "'Cavaleiro de ferro'. Executado totalmente em Kiba-dachi, treina a base lateral.",
    duracao: "~50 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-6.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Kiba-dachi", tipo: "base", desc: "Todo o kata é executado nesta base lateral — forja pernas e estabilidade." },
      { x: 25, y: 35, label: "Kagi Zuki", tipo: "ataque", desc: "Soco gancho lateral em Kiba-dachi." },
      { x: 75, y: 35, label: "Nami Gaeshi", tipo: "defesa", desc: "'Onda que retorna' — defesa com a perna contra chutes baixos." },
      { x: 50, y: 60, label: "Morote Uke", tipo: "defesa", desc: "Defesa reforçada com dois braços." },
      { x: 50, y: 85, label: "Gedan Barai", tipo: "defesa", desc: "Defesa baixa lateral." },
    ],
  },
  {
    nome: "Bassai-Dai", kanji: "披塞大", nivel: "Dan", mov: 42,
    text: "'Tomar a fortaleza'. Energético, simboliza o avanço determinado.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-7.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Uchi Ude Uke", tipo: "defesa", desc: "Forte defesa de abertura com avanço determinado." },
      { x: 30, y: 30, label: "Soto Ude Uke", tipo: "defesa", desc: "Defesa com parte externa do antebraço." },
      { x: 70, y: 30, label: "Gyaku Zuki", tipo: "ataque", desc: "Soco inverso com rotação total de quadril." },
      { x: 50, y: 55, label: "Shuto Uke", tipo: "defesa", desc: "Sequência de defesas em mão espada." },
      { x: 50, y: 80, label: "Gedan Barai", tipo: "defesa", desc: "Defesa baixa com mudança de base." },
    ],
  },
  {
    nome: "Kanku-Dai", kanji: "観空大", nivel: "Dan", mov: 65,
    text: "'Olhar o céu'. O kata preferido de Funakoshi. Considerado uma síntese do Shotokan.",
    duracao: "~90 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-8.pdf",
    hotspots: [
      { x: 50, y: 5, label: "Mãos ao Céu", tipo: "movimento", desc: "Abertura icônica — olhar através das mãos unidas para o céu." },
      { x: 25, y: 25, label: "Mae Geri", tipo: "ataque", desc: "Chute frontal com kime." },
      { x: 75, y: 25, label: "Age Uke", tipo: "defesa", desc: "Defesa alta ascendente." },
      { x: 50, y: 50, label: "Shuto Uke", tipo: "defesa", desc: "Defesas com mão em espada — seção elegante." },
      { x: 30, y: 75, label: "Tobi Geri", tipo: "ataque", desc: "Chute saltado — momento espetacular." },
      { x: 70, y: 90, label: "Gedan Juji Uke", tipo: "defesa", desc: "Defesa em cruz baixa no final." },
    ],
  },
  {
    nome: "Empi", kanji: "燕飛", nivel: "Dan", mov: 37,
    text: "'Voo da andorinha'. Movimentos rápidos com altura variável.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-9.pdf",
    hotspots: [
      { x: 50, y: 15, label: "Gedan Barai", tipo: "defesa", desc: "Defesa baixa de abertura." },
      { x: 30, y: 40, label: "Age Zuki", tipo: "ataque", desc: "Soco ascendente — uppercut." },
      { x: 70, y: 40, label: "Shuto Uke", tipo: "defesa", desc: "Defesa com mão em espada." },
      { x: 50, y: 65, label: "Empi Uchi", tipo: "ataque", desc: "Cotovelada — técnica que dá nome ao kata." },
      { x: 50, y: 85, label: "Tobi (salto)", tipo: "movimento", desc: "Salto giratório de 180° — simula o voo da andorinha." },
    ],
  },
  {
    nome: "Jion", kanji: "慈恩", nivel: "Dan", mov: 47,
    text: "Nome de um templo budista. Kata de poder, simbólico no exame de Shodan.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-10.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Kaki Uke", tipo: "defesa", desc: "Defesa inicial em posição de oração." },
      { x: 30, y: 35, label: "Oi Zuki", tipo: "ataque", desc: "Soco avançando — série de três." },
      { x: 70, y: 35, label: "Manji Uke", tipo: "defesa", desc: "Defesa simultânea alta e baixa." },
      { x: 50, y: 60, label: "Kagi Zuki", tipo: "ataque", desc: "Soco gancho lateral." },
      { x: 50, y: 85, label: "Gyaku Zuki", tipo: "ataque", desc: "Soco contrário com kime total." },
    ],
  },
  {
    nome: "Hangetsu", kanji: "半月", nivel: "Dan", mov: 41,
    text: "'Meia-lua'. Único kata com respiração sonora — herança do Goju.",
    duracao: "~70 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-11.pdf",
    hotspots: [
      { x: 50, y: 15, label: "Sanchin-dachi", tipo: "base", desc: "Base das três batalhas — pés virados para dentro." },
      { x: 30, y: 40, label: "Chudan Uchi Ude Uke", tipo: "defesa", desc: "Defesa média com respiração sonora." },
      { x: 70, y: 40, label: "Chudan Gyaku Zuki", tipo: "ataque", desc: "Soco inverso com contração abdominal." },
      { x: 50, y: 70, label: "Ura Zuki", tipo: "ataque", desc: "Soco invertido (palma para cima)." },
      { x: 50, y: 90, label: "Mikazuki Geri", tipo: "ataque", desc: "Chute crescente na seção final do kata." },
    ],
  },
  {
    nome: "Gankaku", kanji: "岩鶴", nivel: "Dan", mov: 42,
    text: "'Garça na rocha'. Equilíbrio em uma só perna por longos instantes.",
    duracao: "~70 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-12.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Tsuru-Ashi-dachi", tipo: "base", desc: "Base da garça — equilíbrio sobre uma perna." },
      { x: 30, y: 35, label: "Yoko Geri Keage", tipo: "ataque", desc: "Chute lateral ascendente em equilíbrio." },
      { x: 70, y: 35, label: "Uraken Uchi", tipo: "ataque", desc: "Golpe com dorso do punho." },
      { x: 50, y: 60, label: "Shuto Uke", tipo: "defesa", desc: "Defesa com mão em espada." },
      { x: 50, y: 85, label: "Mae Geri", tipo: "ataque", desc: "Chute frontal saltando." },
    ],
  },
  {
    nome: "Unsu", kanji: "雲手", nivel: "Avançado", mov: 48,
    text: "'Mãos na nuvem'. Inclui salto giratório de 360°. Um dos katas mais difíceis do estilo.",
    duracao: "~90 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-13.pdf",
    hotspots: [
      { x: 50, y: 10, label: "Ippon Nukite", tipo: "ataque", desc: "Ataque com um dedo — altamente avançado." },
      { x: 25, y: 30, label: "Mawashi Geri", tipo: "ataque", desc: "Chute circular — raro nos katas tradicionais." },
      { x: 75, y: 30, label: "Uraken Uchi", tipo: "ataque", desc: "Golpe rápido com dorso do punho." },
      { x: 50, y: 55, label: "Tobi (salto 360°)", tipo: "movimento", desc: "Salto giratório completo de 360° — momento mais espetacular." },
      { x: 30, y: 80, label: "Shuto Uke", tipo: "defesa", desc: "Defesa com mão em espada." },
      { x: 70, y: 90, label: "Age Uke", tipo: "defesa", desc: "Defesa alta na finalização." },
    ],
  },
  {
    nome: "Jitte", kanji: "十手", nivel: "Dan", mov: 24,
    text: "'Dez mãos' — defesa contra bastão. Kata robusto e direto.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-14.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Bo Uke", tipo: "defesa", desc: "Defesa contra bastão — motivo central do kata." },
      { x: 40, y: 50, label: "Tate Shuto Uke", tipo: "defesa", desc: "Defesa vertical com mão em espada." },
      { x: 60, y: 80, label: "Morote Uke", tipo: "defesa", desc: "Defesa reforçada com os dois braços." },
    ],
  },
  {
    nome: "Tekki Nidan", kanji: "鉄騎二段", nivel: "Dan", mov: 24,
    text: "Segundo kata da série Tekki. Aprofunda técnicas laterais em Kiba-dachi.",
    duracao: "~50 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-15.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Kiba-dachi", tipo: "base", desc: "Base lateral do cavaleiro — constante." },
      { x: 30, y: 50, label: "Morote Uke", tipo: "defesa", desc: "Defesa reforçada lateral." },
      { x: 70, y: 80, label: "Kagi Zuki", tipo: "ataque", desc: "Soco gancho lateral." },
    ],
  },
  {
    nome: "Tekki Sandan", kanji: "鉄騎三段", nivel: "Dan", mov: 26,
    text: "Terceiro kata Tekki. O mais complexo da série, com técnicas de mão aberta.",
    duracao: "~50 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-16.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Kiba-dachi", tipo: "base", desc: "Base do cavaleiro mantida ao longo de todo o kata." },
      { x: 30, y: 50, label: "Fumikomi", tipo: "movimento", desc: "Pisada de estocada." },
      { x: 70, y: 80, label: "Nami Gaeshi", tipo: "defesa", desc: "Onda que retorna — defesa com a perna." },
    ],
  },
  {
    nome: "Bassai-Sho", kanji: "披塞小", nivel: "Dan", mov: 27,
    text: "Versão menor do Bassai. Foco em controle e técnicas de mão aberta.",
    duracao: "~50 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-17.pdf",
    hotspots: [
      { x: 50, y: 25, label: "Shuto Uke", tipo: "defesa", desc: "Defesas com mão em espada predominam." },
      { x: 50, y: 60, label: "Chudan Uchi Uke", tipo: "defesa", desc: "Defesa média de dentro para fora." },
      { x: 50, y: 85, label: "Mikazuki Geri", tipo: "ataque", desc: "Chute crescente." },
    ],
  },
  {
    nome: "Ji'in", kanji: "慈陰", nivel: "Dan", mov: 35,
    text: "'Sombra do templo'. Kata clássico com técnicas equilibradas.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-18.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Posição de oração", tipo: "movimento", desc: "Abertura em posição de mãos juntas — herança budista." },
      { x: 50, y: 50, label: "Kosa Dachi", tipo: "base", desc: "Base cruzada — transição rápida." },
      { x: 50, y: 80, label: "Gyaku Zuki", tipo: "ataque", desc: "Soco inverso poderoso." },
    ],
  },
  {
    nome: "Sochin", kanji: "壮鎮", nivel: "Dan", mov: 41,
    text: "'Grande calma'. Executado em Fudo-dachi — energia enraizada.",
    duracao: "~70 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-19.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Fudo-dachi", tipo: "base", desc: "Base imóvel — símbolo de enraizamento total." },
      { x: 30, y: 50, label: "Morote Uchi Uke", tipo: "defesa", desc: "Defesa reforçada de dentro para fora." },
      { x: 70, y: 80, label: "Yoko Geri Kekomi", tipo: "ataque", desc: "Chute lateral penetrante." },
    ],
  },
  {
    nome: "Chinte", kanji: "珍手", nivel: "Dan", mov: 32,
    text: "'Mãos raras'. Contém técnicas incomuns com dedos e palma.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-20.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Nihon Nukite", tipo: "ataque", desc: "Ataque com dois dedos — técnica rara." },
      { x: 50, y: 55, label: "Teisho Uchi", tipo: "ataque", desc: "Golpe com base da palma." },
      { x: 50, y: 80, label: "Tate Shuto Uke", tipo: "defesa", desc: "Defesa vertical com mão em espada." },
    ],
  },
  {
    nome: "Kanku-Sho", kanji: "観空小", nivel: "Dan", mov: 48,
    text: "Versão menor do Kanku-Dai. Mais ágil, com salto giratório.",
    duracao: "~70 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-21.pdf",
    hotspots: [
      { x: 50, y: 15, label: "Mãos ao Céu", tipo: "movimento", desc: "Abertura similar ao Kanku-Dai." },
      { x: 50, y: 45, label: "Ushiro Geri", tipo: "ataque", desc: "Chute para trás com calcanhar." },
      { x: 50, y: 80, label: "Tobi (salto)", tipo: "movimento", desc: "Salto giratório impressionante." },
    ],
  },
  {
    nome: "Nijushiho", kanji: "二十四歩", nivel: "Dan", mov: 34,
    text: "'Vinte e quatro passos'. Kata fluido com movimentos ondulantes.",
    duracao: "~70 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-22.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Teisho Uke", tipo: "defesa", desc: "Defesa com base da palma." },
      { x: 50, y: 50, label: "Kakuto Uke", tipo: "defesa", desc: "Defesa com dorso do pulso dobrado." },
      { x: 50, y: 80, label: "Awase Zuki", tipo: "ataque", desc: "Soco duplo em forma de U." },
    ],
  },
  {
    nome: "Meikyo", kanji: "明鏡", nivel: "Dan", mov: 33,
    text: "'Espelho polido'. Reflexo perfeito — kata simétrico e preciso.",
    duracao: "~60 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-23.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Sankaku Tobi", tipo: "movimento", desc: "Salto triangular — único entre os katas." },
      { x: 50, y: 55, label: "Soto Uke", tipo: "defesa", desc: "Defesa de fora para dentro." },
      { x: 50, y: 80, label: "Gyaku Zuki", tipo: "ataque", desc: "Soco contrário com força." },
    ],
  },
  {
    nome: "Wankan", kanji: "王冠", nivel: "Dan", mov: 24,
    text: "'Coroa do rei'. O kata mais curto do Shotokan.",
    duracao: "~30 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-24.pdf",
    hotspots: [
      { x: 50, y: 30, label: "Uchi Ude Uke", tipo: "defesa", desc: "Defesa de dentro para fora." },
      { x: 50, y: 70, label: "Oi Zuki", tipo: "ataque", desc: "Soco avançando direto." },
    ],
  },
  {
    nome: "Gojushiho-Dai", kanji: "五十四歩大", nivel: "Avançado", mov: 67,
    text: "'Cinquenta e quatro passos (maior)'. Movimentos sutis com dedos.",
    duracao: "~90 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-25.pdf",
    hotspots: [
      { x: 50, y: 15, label: "Washide", tipo: "ataque", desc: "Mão em bico de águia — técnica rara." },
      { x: 50, y: 45, label: "Ippon Nukite", tipo: "ataque", desc: "Ataque com um dedo." },
      { x: 50, y: 75, label: "Teisho Uchi", tipo: "ataque", desc: "Golpe com base da palma." },
    ],
  },
  {
    nome: "Gojushiho-Sho", kanji: "五十四歩小", nivel: "Avançado", mov: 65,
    text: "'Cinquenta e quatro passos (menor)'. Versão ágil, exige precisão extrema.",
    duracao: "~85 segundos",
    embusenPdf: "/enbusen/APOSTILA DE KARATE SHOTOKAN-40-65-26.pdf",
    hotspots: [
      { x: 50, y: 20, label: "Keito Uke", tipo: "defesa", desc: "Defesa com mão em crista de galo." },
      { x: 50, y: 50, label: "Nihon Nukite", tipo: "ataque", desc: "Ataque com dois dedos." },
      { x: 50, y: 80, label: "Age Empi", tipo: "ataque", desc: "Cotovelada ascendente." },
    ],
  },
];

/* ───────── GRADUAÇÕES COM REQUISITOS ───────── */

export const GRADUACOES = [
  {
    faixa: "Branca", jp: "白帯", cor: "#F5F1E8",
    txt: "Iniciante. A mente vazia, pronta para receber.",
    tempo: "3 meses", aulas: 30,
    katas: ["Heian Shodan"],
  },
  {
    faixa: "Amarela", jp: "黄帯", cor: "#E8C547",
    txt: "Primeiros movimentos firmes — o sol que nasce.",
    tempo: "4 meses", aulas: 40,
    katas: ["Heian Nidan"],
  },
  {
    faixa: "Vermelha", jp: "赤帯", cor: "#C41E3A",
    txt: "Energia e ímpeto da juventude técnica.",
    tempo: "5 meses", aulas: 50,
    katas: ["Heian Sandan"],
  },
  {
    faixa: "Laranja", jp: "橙帯", cor: "#E07B00",
    txt: "Transição. O calor do fogo interno.",
    tempo: "6 meses", aulas: 60,
    katas: ["Heian Yondan"],
  },
  {
    faixa: "Verde", jp: "緑帯", cor: "#2D7A3F",
    txt: "Crescimento — como o broto que vira árvore.",
    tempo: "9 meses", aulas: 90,
    katas: ["Heian Godan"],
  },
  {
    faixa: "Roxa", jp: "紫帯", cor: "#5E2B82",
    txt: "Profundidade. Estudo de katas intermediários.",
    tempo: "12 meses", aulas: 120,
    katas: ["Tekki Shodan"],
  },
  {
    faixa: "Marrom", jp: "茶帯", cor: "#6B3F1D",
    txt: "Maturidade técnica. Pronto para o Shodan.",
    tempo: "1 a 2 anos", aulas: null,
    katas: ["Bassai-Dai", "Jion", "Kanku-Dai"],
  },
  {
    faixa: "Preta", jp: "黒帯", cor: "#0D0D0D",
    txt: "Não é o fim — é o verdadeiro começo. Shodan = 1º dan.",
    tempo: "Varia de acordo com o Dan",
    aulas: null,
    katas: [
      "Empi", "Jitte", "Hangetsu", "Tekki Nidan", "Tekki Sandan",
      "Bassai-Sho", "Ji'in", "Gankaku", "Sochin", "Chinte", "Kanku-Sho",
      "Nijushiho", "Meikyo", "Unsu", "Wankan", "Gojushiho-Dai", "Gojushiho-Sho",
    ],
  },
];

export const PILARES = [
  { kanji: "基本", nome: "Kihon", pt: "Técnicas Básicas", text: "A repetição constante dos fundamentos — posições, socos, defesas e chutes — molda o corpo e a mente. Sem kihon não há karatê." },
  { kanji: "型", nome: "Kata", pt: "Formas", text: "Sequências codificadas de movimentos que preservam o conhecimento ancestral. Shotokan possui 26 katas oficiais, do simples Heian Shodan ao complexo Unsu." },
  { kanji: "組手", nome: "Kumite", pt: "Combate", text: "A aplicação prática dos fundamentos contra um adversário. Vai do kumite ensinado passo-a-passo (ippon) ao livre (jiyu)." },
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

/* ───────── TÉCNICAS EXPANDIDAS ───────── */

export const TECNICAS = [
  // ===== PONTOS DE IMPACTO — Mãos =====
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Seiken", kanji: "正拳", pt: "Punho frontal (2 primeiros nós)", desc: "Superfície de impacto principal: os nós do indicador e médio do punho fechado. É a forma mais básica e usada de contato no karatê Shotokan, presente em todos os socos diretos." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Seiryuto", kanji: "正力刀", pt: "Base da mão em espada", desc: "Parte inferior da borda da mão (próximo ao pulso), usada para golpes descendentes contra a clavícula ou têmpora. Combina a força do shuto com maior massa óssea." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Kumade", kanji: "熊手", pt: "Mão em garra de urso", desc: "Dedos flexionados na segunda articulação formam uma garra. Usado para agarrar ou atingir pontos vitais como olhos e garganta." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Ippon Ken", kanji: "一本拳", pt: "Punho de um dedo saliente", desc: "Punho fechado com a articulação do indicador projetada. Permite impacto concentrado em pontos vulneráveis como entre costelas, têmpora ou philtrum." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Shuto", kanji: "手刀", pt: "Mão em espada (borda externa)", desc: "Borda externa da mão com os dedos estendidos. A superfície vai do dedo mínimo até o pulso. Usado para ataques cortantes ao pescoço, costelas ou braços." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Haito", kanji: "背刀", pt: "Espada invertida (borda interna)", desc: "Borda interna da mão aberta, lado do polegar. Golpe que atinge lateralmente o pescoço ou a têmpora." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Wan", kanji: "腕", pt: "Antebraço", desc: "Superfície do antebraço, tanto a face interna (uchi) quanto externa (soto). Fundamental para defesas (uke). O osso do rádio e da ulna servem como escudo." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Nukite", kanji: "貫手", pt: "Mão em ponta de lança (4 dedos)", desc: "Quatro dedos estendidos e unidos para estocadas em áreas macias — garganta, plexo solar, axilas. Exige fortalecimento dos dedos." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Nihon Nukite", kanji: "二本貫手", pt: "Dois dedos em lança", desc: "Indicador e médio estendidos para ataque aos olhos ou garganta. Técnica avançada e precisa." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Ippon Nukite", kanji: "一本貫手", pt: "Um dedo em lança", desc: "Apenas o indicador estendido para ataque a pontos vitais pequenos. Técnica rara que requer grande condicionamento do dedo." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Haishu", kanji: "背手", pt: "Dorso da mão aberta", desc: "Golpe ou defesa com o dorso da mão aberta. Usado em ataques rápidos ao rosto e em defesas de desvio." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Keito", kanji: "鶏頭", pt: "Crista de galo (pulso dobrado)", desc: "Pulso curvado para trás com a mão em forma de cabeça de galo. Usado para defesas circulares e ataques ao rosto." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Teisho", kanji: "底掌", pt: "Base da palma da mão", desc: "Parte inferior carnuda da palma. Golpe poderoso, usado em ataques ascendentes ao queixo ou empurrões defensivos. Protege os dedos." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Hira Ken", kanji: "平拳", pt: "Punho plano (2ª articulação)", desc: "Dedos dobrados na segunda articulação, formando um punho plano. Usado para ataques ao philtrum, garganta e costelas." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Tettsui", kanji: "鉄鎚", pt: "Punho martelo (base do punho)", desc: "Parte inferior do punho fechado, usada como um martelo. Golpes descendentes ou laterais contra têmpora, clavícula ou costelas." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Washide", kanji: "鷲手", pt: "Mão em bico de águia", desc: "Todas as pontas dos dedos reunidas em um ponto. Usado para beliscar e atacar áreas sensíveis como garganta ou axilas." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Kakuto", kanji: "鶴頭", pt: "Pulso em cabeça de grou", desc: "Pulso dobrado para baixo formando uma 'cabeça de grou'. Usado para ataques descendentes ao rosto e defesas circulares." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Enpi", kanji: "猿臂", pt: "Cotovelo", desc: "O cotovelo é a arma mais devastadora em curta distância. Usado em cotoveladas frontais, laterais, para trás e ascendentes." },

  // ===== PONTOS DE IMPACTO — Pés =====
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Haisoku", kanji: "背足", pt: "Peito do pé", desc: "Superfície superior do pé, usada em Mawashi-Geri. O pé deve ficar estendido com os dedos puxados para trás para evitar lesões." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Kakato", kanji: "踵", pt: "Calcanhar", desc: "Osso mais denso do pé. Usado em Ushiro-Geri, Otoshi Kakato (chute descendente) e pisões (Fumikomi). Impacto devastador." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Koshi", kanji: "虎趾", pt: "Base dos dedos do pé", desc: "Parte carnuda logo abaixo dos dedos. Superfície principal de contato no Mae-Geri. Os dedos são puxados para trás para expor a área." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Sokuto", kanji: "足刀", pt: "Lâmina do pé (borda externa)", desc: "Borda externa do pé, do calcanhar ao dedo mínimo. Principal superfície de contato no Yoko-Geri Kekomi." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Teisoku", kanji: "底足", pt: "Planta do pé", desc: "Toda a sola do pé. Usada para empurrões (oshi), pisões e em Mikazuki-Geri. Área ampla que distribui força." },
  { tipo: "Impacto", cat: "Pontos de Impacto", nome: "Hiza", kanji: "膝", pt: "Joelho", desc: "Arma natural para curtíssima distância. Usado em joelhadas frontais (Hiza-Geri) e laterais. Extremamente eficaz em situações reais." },

  // ===== SOCOS (Tsuki) =====
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

  // ===== GOLPES COM BRAÇO/MÃO (Uchi) =====
  { tipo: "Uchi", cat: "Ataques", nome: "Uraken-Uchi", kanji: "裏拳打ち", pt: "Golpe com o dorso do punho", desc: "Chicote rápido com as costas do punho. Comum contra a têmpora." },
  { tipo: "Uchi", cat: "Ataques", nome: "Tettsui-Uchi", kanji: "鉄鎚打ち", pt: "Punho martelo", desc: "Golpe descendente com a base do punho fechado, como um martelo." },
  { tipo: "Uchi", cat: "Ataques", nome: "Shuto-Uchi", kanji: "手刀打ち", pt: "Golpe com mão em espada", desc: "Golpe com a borda externa da mão aberta. Famoso pelo 'karate chop'." },
  { tipo: "Uchi", cat: "Ataques", nome: "Haito-Uchi", kanji: "背刀打ち", pt: "Cutelo invertido", desc: "Golpe com a borda interna da mão aberta (lado do polegar)." },
  { tipo: "Uchi", cat: "Ataques", nome: "Teisho-Uchi", kanji: "底掌打ち", pt: "Golpe com base da palma", desc: "Golpe com a parte inferior carnuda da palma da mão. Eficaz contra o queixo." },
  { tipo: "Uchi", cat: "Ataques", nome: "Empi-Uchi", kanji: "猿臂打ち", pt: "Cotovelada (Hiji Ate)", desc: "Família de golpes com o cotovelo: mae (frontal), yoko (lateral), ushiro (traseiro), mawashi (circular), otoshi (descendente), tate (vertical)." },
  { tipo: "Uchi", cat: "Ataques", nome: "Nukite", kanji: "貫手", pt: "Mão em ponta de lança", desc: "Estocada com a mão em lança. Mira pontos vitais (olhos, garganta, plexo)." },

  // ===== CHUTES (Keri) =====
  { tipo: "Keri", cat: "Chutes", nome: "Mae-Geri", kanji: "前蹴り", pt: "Chute frontal", desc: "Chute frontal usando koshi (base dos dedos). Pode ser Keage (chicote ascendente) ou Kekomi (penetrante)." },
  { tipo: "Keri", cat: "Chutes", nome: "Mawashi-Geri", kanji: "回し蹴り", pt: "Chute circular", desc: "Chute em arco horizontal — peito do pé (haisoku) ou koshi conforme o nível." },
  { tipo: "Keri", cat: "Chutes", nome: "Yoko-Geri Kekomi", kanji: "横蹴り蹴込", pt: "Chute lateral penetrante", desc: "Chute lateral em linha reta com a borda do pé (sokuto). Forte para atravessar a guarda." },
  { tipo: "Keri", cat: "Chutes", nome: "Yoko-Geri Keage", kanji: "横蹴り蹴上", pt: "Chute lateral ascendente", desc: "Chute lateral rápido e ascendente, com a borda do pé (sokuto)." },
  { tipo: "Keri", cat: "Chutes", nome: "Ushiro-Geri", kanji: "後ろ蹴り", pt: "Chute para trás", desc: "Chute reto para trás com o calcanhar (kakato). Usado após giro." },
  { tipo: "Keri", cat: "Chutes", nome: "Ura-Mawashi-Geri", kanji: "裏回し蹴り", pt: "Chute circular invertido", desc: "Chute em arco no sentido contrário ao mawashi, atingindo com o calcanhar (gancho)." },
  { tipo: "Keri", cat: "Chutes", nome: "Mikazuki-Geri", kanji: "三日月蹴り", pt: "Chute crescente", desc: "Chute em arco vertical para dentro com a planta do pé. Também usado para bloquear." },
  { tipo: "Keri", cat: "Chutes", nome: "Tobi-Geri", kanji: "飛び蹴り", pt: "Chute saltando", desc: "Categoria de chutes executados em voo (mae-tobi, yoko-tobi, nidan-geri etc.)." },
  { tipo: "Keri", cat: "Chutes", nome: "Nidan-Geri", kanji: "二段蹴り", pt: "Chute duplo no ar", desc: "Salta-se e executa dois chutes em sequência antes de aterrissar." },
  { tipo: "Keri", cat: "Chutes", nome: "Fumi-Komi-Geri", kanji: "踏み込み蹴り", pt: "Pisão / estocada para baixo", desc: "Chute descendente em estocada com o calcanhar, mirando joelho ou pé do oponente." },
  { tipo: "Keri", cat: "Chutes", nome: "Hiza-Geri", kanji: "膝蹴り", pt: "Joelhada", desc: "Golpe ascendente com o joelho, devastador em distância curta." },
  { tipo: "Keri", cat: "Chutes", nome: "Kin-Geri", kanji: "金的蹴り", pt: "Chute baixo (virilha)", desc: "Chute curto e ascendente com o peito do pé — apenas em defesa pessoal, ilegal em competição." },
  { tipo: "Keri", cat: "Chutes", nome: "Ashi-Barai", kanji: "足払い", pt: "Rasteira / varredura", desc: "Rasteira lateral para desequilibrar o oponente." },

  // ===== TÉCNICAS DE PERNA (Ashi Waza) =====
  { tipo: "Ashi", cat: "Pernas", nome: "Nami-Gaeshi", kanji: "波返し", pt: "Onda que retorna", desc: "'Onda que retorna' — defesa ou ataque com a perna que levanta e retorna. Usado para defender chutes baixos em Kiba-dachi." },
  { tipo: "Ashi", cat: "Pernas", nome: "Suri-Ashi", kanji: "摺り足", pt: "Deslocamento curto", desc: "Deslocamento curto e suave, deslizando os pés sem levantá-los do chão. Mantém estabilidade e prontidão constante." },
  { tipo: "Ashi", cat: "Pernas", nome: "Yori-Ashi", kanji: "寄り足", pt: "Deslocamento longo", desc: "Deslocamento longo e rápido para cobrir distância. O pé de trás empurra e o corpo desliza mantendo a postura." },

  // ===== DEFESAS (Uke) =====
  { tipo: "Uke", cat: "Defesas", nome: "Age-Uke", kanji: "上げ受け", pt: "Defesa alta (ascendente)", desc: "Bloqueio ascendente com o antebraço, contra ataques à cabeça (jodan). O braço sobe de baixo para cima, desviando o golpe." },
  { tipo: "Uke", cat: "Defesas", nome: "Gedan-Barai", kanji: "下段払い", pt: "Defesa baixa (varrendo)", desc: "Defesa descendente que afasta chutes e socos baixos. O antebraço varre de cima para baixo, afastando o ataque da linha central." },
  { tipo: "Uke", cat: "Defesas", nome: "Soto-Ude-Uke", kanji: "外腕受け", pt: "Defesa com parte externa do antebraço", desc: "Antebraço varre de fora para dentro contra socos médios (chudan). Usa a parte externa (soto) do antebraço como escudo." },
  { tipo: "Uke", cat: "Defesas", nome: "Uchi-Ude-Uke", kanji: "内腕受け", pt: "Defesa com parte interna do antebraço", desc: "Antebraço varre de dentro para fora. Cria abertura para contra-ataque com gyaku-zuki. Usa a face interna (uchi) do antebraço." },
  { tipo: "Uke", cat: "Defesas", nome: "Shuto-Uke", kanji: "手刀受け", pt: "Defesa com mão em espada", desc: "Bloqueio com a borda da mão aberta, executado tipicamente em Kokutsu-dachi. Uma das defesas mais elegantes do Shotokan." },
  { tipo: "Uke", cat: "Defesas", nome: "Kakuto-Uke", kanji: "鶴頭受け", pt: "Defesa com dorso do pulso dobrado", desc: "Defesa usando o dorso do pulso curvado (cabeça de grou). Movimento circular que desvia o ataque para o lado." },
  { tipo: "Uke", cat: "Defesas", nome: "Keito-Uke", kanji: "鶏頭受け", pt: "Defesa com mão em crista de galo", desc: "Pulso curvado para trás com a mão formando 'crista de galo'. Defesa circular rara, vista em katas avançados." },
  { tipo: "Uke", cat: "Defesas", nome: "Seiryuto-Uke", kanji: "正力刀受け", pt: "Defesa com base da mão em espada", desc: "Defesa usando a parte inferior da borda da mão. Combina força de impacto com cobertura ampla." },
  { tipo: "Uke", cat: "Defesas", nome: "Tate-Shuto-Uke", kanji: "縦手刀受け", pt: "Defesa vertical com mão em espada", desc: "Shuto executado na vertical em vez de horizontal. Protege a linha central do corpo." },
  { tipo: "Uke", cat: "Defesas", nome: "Teisho-Uke", kanji: "底掌受け", pt: "Defesa com base da palma", desc: "Defesa usando a parte inferior e carnuda da palma da mão. Empurrão defensivo poderoso que protege os dedos." },
  { tipo: "Uke", cat: "Defesas", nome: "Morote-Uke", kanji: "諸手受け", pt: "Defesa com dois braços", desc: "Uchi-uke reforçado pelo punho oposto apoiando o antebraço. Dobra a resistência contra ataques fortes." },
  { tipo: "Uke", cat: "Defesas", nome: "Haishu-Uke", kanji: "背手受け", pt: "Defesa com dorso da mão", desc: "Defesa rápida usando o dorso da mão aberta. Movimento leve e preciso." },
  { tipo: "Uke", cat: "Defesas", nome: "Haito-Uke", kanji: "背刀受け", pt: "Defesa com dorso da mão em espada", desc: "Defesa usando a borda interna da mão (lado do polegar). Desvio lateral rápido." },
  { tipo: "Uke", cat: "Defesas", nome: "Osae-Uke", kanji: "押さえ受け", pt: "Defesa pressionando", desc: "Defesa que pressiona o ataque para baixo, controlando a linha central. Eficaz contra socos diretos." },
  { tipo: "Uke", cat: "Defesas", nome: "Sukui-Uke", kanji: "掬い受け", pt: "Defesa em concha", desc: "Defesa com a mão em concha que 'pega' o chute do oponente por baixo, desequilibrando-o." },
  { tipo: "Uke", cat: "Defesas", nome: "Juji-Uke", kanji: "十字受け", pt: "Defesa em cruz (X)", desc: "Ambos os antebraços cruzados em X — alta (jodan) ou baixa (gedan). Defesa poderosa contra ataques fortes." },
  { tipo: "Uke", cat: "Defesas", nome: "Kakiwake-Uke", kanji: "掻き分け受け", pt: "Defesa abrindo caminho com as mãos", desc: "Defesa para escapar de uma pegada dupla ou abrir a guarda do oponente, abrindo os braços para fora." },
  { tipo: "Uke", cat: "Defesas", nome: "Nagashi-Uke", kanji: "流し受け", pt: "Defesa de desvio (fluindo)", desc: "Defesa que redireciona suavemente o ataque, como água que escorre. Não bloqueia — desvia." },

  // ===== BASES (Dachi) =====
  { tipo: "Dachi", cat: "Bases", nome: "Heisoku-Dachi", kanji: "閉足立ち", pt: "Base de pés juntos", desc: "Pés totalmente unidos. Posição inicial cerimonial." },
  { tipo: "Dachi", cat: "Bases", nome: "Musubi-Dachi", kanji: "結び立ち", pt: "Base do rei (cumprimento)", desc: "Calcanhares juntos, pés abertos em V. Usada no rei (cumprimento)." },
  { tipo: "Dachi", cat: "Bases", nome: "Heiko-Dachi", kanji: "平行立ち", pt: "Base paralela", desc: "Pés paralelos na largura dos ombros. Posição de prontidão natural." },
  { tipo: "Dachi", cat: "Bases", nome: "Hachiji-Dachi", kanji: "八字立ち", pt: "Base do '8' (pés abertos)", desc: "Pés afastados com as pontas viradas para fora, formando o kanji 八. Posição de espera natural." },
  { tipo: "Dachi", cat: "Bases", nome: "Uchi-Hachiji-Dachi", kanji: "内八字立ち", pt: "Base do '8' invertido (pés para dentro)", desc: "Como Hachiji-dachi, mas com as pontas dos pés viradas para dentro. Protege a linha central." },
  { tipo: "Dachi", cat: "Bases", nome: "Teiji-Dachi", kanji: "丁字立ち", pt: "Base em T", desc: "Os pés formam a letra T — um pé aponta para frente, o outro para o lado. Base de transição e esquiva." },
  { tipo: "Dachi", cat: "Bases", nome: "Renoji-Dachi", kanji: "レの字立ち", pt: "Base em L", desc: "Os pés formam a letra L. Posição natural de espera com leve ângulo defensivo." },
  { tipo: "Dachi", cat: "Bases", nome: "Zenkutsu-Dachi", kanji: "前屈立ち", pt: "Base frontal longa", desc: "Postura ofensiva clássica: 60% do peso à frente, perna de trás esticada. Símbolo do Shotokan." },
  { tipo: "Dachi", cat: "Bases", nome: "Kokutsu-Dachi", kanji: "後屈立ち", pt: "Base recuada", desc: "70% do peso atrás, joelho da frente flexionado. Defensiva por natureza, permite recuo rápido." },
  { tipo: "Dachi", cat: "Bases", nome: "Kiba-Dachi", kanji: "騎馬立ち", pt: "Base do cavaleiro", desc: "Base lateral profunda, peso 50/50, joelhos sobre os dedos. Forja pernas de aço." },
  { tipo: "Dachi", cat: "Bases", nome: "Sanchin-Dachi", kanji: "三戦立ち", pt: "Base das três batalhas", desc: "Pés virados para dentro, joelhos pressionados. Postura interna do Goju e raros katas Shotokan (Hangetsu)." },
  { tipo: "Dachi", cat: "Bases", nome: "Hangetsu-Dachi", kanji: "半月立ち", pt: "Base da meia-lua", desc: "Variação de Sanchin com passos em arco de meia-lua. Usada no kata Hangetsu, combina força e respiração." },
  { tipo: "Dachi", cat: "Bases", nome: "Shiko-Dachi", kanji: "四股立ち", pt: "Base do sumô", desc: "Como Kiba-dachi, mas com as pontas dos pés viradas 45° para fora. Mais estável lateralmente." },
  { tipo: "Dachi", cat: "Bases", nome: "Fudo-Dachi", kanji: "不動立ち", pt: "Base imóvel (Sochin-dachi)", desc: "Postura híbrida entre zenkutsu e kiba — equilíbrio absoluto, símbolo da imobilidade." },
  { tipo: "Dachi", cat: "Bases", nome: "Neko-Ashi-Dachi", kanji: "猫足立ち", pt: "Base do gato", desc: "Peso quase todo na perna de trás, perna da frente apenas tocando o solo com a planta. Permite chutes rápidos." },
  { tipo: "Dachi", cat: "Bases", nome: "Tsuru-Ashi-Dachi", kanji: "鶴足立ち", pt: "Base da garça", desc: "Equilíbrio sobre uma perna, a outra dobrada contra o joelho de apoio." },
  { tipo: "Dachi", cat: "Bases", nome: "Kosa-Dachi", kanji: "交差立ち", pt: "Base cruzada", desc: "Pernas cruzadas, com o peso sobre a perna da frente. Base de transição rápida entre posições." },
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
];

export const PRECEITOS_FUNAKOSHI = [
  "空手に先手なし — No karatê, não existe atitude ofensiva.",
  "礼に始まり礼に終わる — Karate começa e termina com o cumprimento.",
  "心を磨け — Pule o ego, lapide o coração.",
];

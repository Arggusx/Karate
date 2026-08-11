-- ============================================================
-- KARATÊ SHOTOKAN — SCRIPTS SQL PARA NEON DB
-- Executar no SQL Editor do Neon (console.neon.tech)
-- ============================================================

-- ============================================================
-- PARTE 1: CRIAÇÃO DAS TABELAS
-- ============================================================

-- Tabela de Técnicas
CREATE TABLE IF NOT EXISTS tecnicas (
  id              SERIAL PRIMARY KEY,
  slug            TEXT UNIQUE NOT NULL,
  nome_japones    TEXT NOT NULL,
  nome_traduzido  TEXT,
  categoria       TEXT NOT NULL CHECK (categoria IN ('soco', 'chute', 'defesa', 'base', 'kata')),
  tipo            TEXT,
  kanji           TEXT,
  descricao       TEXT,
  url_video       TEXT,
  url_imagem      TEXT,
  enbusen_imagem  TEXT,
  nivel           TEXT,
  movimentos      INT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tecnicas_categoria ON tecnicas(categoria);
CREATE INDEX IF NOT EXISTS idx_tecnicas_slug ON tecnicas(slug);

-- Tabela de Mestres
CREATE TABLE IF NOT EXISTS mestres (
  id                    SERIAL PRIMARY KEY,
  nome                  TEXT NOT NULL,
  titulo_ou_papel       TEXT,
  mestre_antecessor_id  INT REFERENCES mestres(id) ON DELETE SET NULL,
  linhagem_direta       TEXT,
  organizacao_criada    TEXT,
  foco_principal        TEXT,
  complementos_hover    TEXT,
  kanji                 TEXT,
  anos                  TEXT,
  created_at            TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mestres_antecessor ON mestres(mestre_antecessor_id);

-- ============================================================
-- PARTE 2: INSERT — TÉCNICAS (Socos / Tsuki + Uchi)
-- ============================================================

INSERT INTO tecnicas (slug, nome_japones, nome_traduzido, categoria, tipo, kanji, descricao) VALUES
('choku-zuki',   'Choku-Zuki',   'Soco direto (parado)',             'soco', 'Tsuki', '直突き',     'Soco reto executado a partir de Heiko ou Kiba-dachi, sem deslocamento. Fundamento absoluto.'),
('oi-zuki',      'Oi-Zuki',      'Soco com avanço',                  'soco', 'Tsuki', '追い突き',   'Soco com a mão do mesmo lado da perna que avança (mesmo lado). Técnica símbolo do Shotokan.'),
('gyaku-zuki',   'Gyaku-Zuki',   'Soco inverso',                     'soco', 'Tsuki', '逆突き',     'Soco com a mão oposta à perna da frente. Gera potência pela rotação total do quadril.'),
('kizami-zuki',  'Kizami-Zuki',  'Soco curto / jab',                 'soco', 'Tsuki', '刻み突き',   'Soco rápido da mão da frente, usado para medir distância e tomar a iniciativa (sen).'),
('kage-zuki',    'Kage-Zuki',    'Soco em gancho',                   'soco', 'Tsuki', '鉤突き',     'Soco curvo, semelhante a um cross horizontal, eficaz em curta distância.'),
('ura-zuki',     'Ura-Zuki',     'Soco invertido (palma p/ cima)',   'soco', 'Tsuki', '裏突き',     'Soco com o punho virado para cima, em distância muito curta. Comum em katas.'),
('tate-zuki',    'Tate-Zuki',    'Soco vertical',                    'soco', 'Tsuki', '立て突き',   'Soco com o punho na vertical (polegar para cima). Permite mais alcance em alturas médias.'),
('age-zuki',     'Age-Zuki',     'Soco ascendente / uppercut',       'soco', 'Tsuki', '上げ突き',   'Soco que sobe em arco, mirando o queixo do adversário.'),
('yama-zuki',    'Yama-Zuki',    'Soco de montanha',                 'soco', 'Tsuki', '山突き',     'Soco duplo simultâneo em níveis diferentes (alto + médio). Aparece em Bassai-sho.'),
('awase-zuki',   'Awase-Zuki',   'Soco em forma de U',               'soco', 'Tsuki', '合せ突き',   'Soco duplo onde ambos os punhos atingem alvos verticalmente alinhados.'),
('morote-zuki',  'Morote-Zuki',  'Soco de duas mãos',                'soco', 'Tsuki', '諸手突き',   'Dois socos simultâneos, ambos no mesmo alvo. Maximiza força concentrada.'),
('nukite',       'Nukite',       'Ataque com a ponta dos dedos',     'soco', 'Tsuki', '貫手',       'Estocada com a mão em lança. Mira pontos vitais (olhos, garganta, plexo).'),
('uraken-uchi',  'Uraken-Uchi',  'Golpe com o dorso do punho',       'soco', 'Uchi',  '裏拳打ち',   'Chicote rápido com as costas do punho. Comum contra a têmpora.'),
('tettsui-uchi', 'Tettsui-Uchi', 'Martelo de ferro',                 'soco', 'Uchi',  '鉄鎚打ち',   'Golpe descendente com a base do punho fechado, como um martelo.'),
('shuto-uchi',   'Shuto-Uchi',   'Golpe com cutelo de mão',          'soco', 'Uchi',  '手刀打ち',   'Golpe com a borda externa da mão aberta. Famoso pelo ''karate chop''.'),
('haito-uchi',   'Haito-Uchi',   'Cutelo invertido',                 'soco', 'Uchi',  '背刀打ち',   'Golpe com a borda interna da mão aberta (lado do polegar).'),
('empi-uchi',    'Empi-Uchi',    'Cotovelada',                       'soco', 'Uchi',  '猿臂打ち',   'Família de golpes com o cotovelo: mae, yoko, ushiro, mawashi, otoshi, tate.'),
('hiza-geri-uchi', 'Hiza-Geri',  'Joelhada',                         'soco', 'Uchi',  '膝蹴り',     'Golpe ascendente com o joelho, devastador em distância curta.');

-- ============================================================
-- PARTE 3: INSERT — TÉCNICAS (Chutes / Keri)
-- ============================================================

INSERT INTO tecnicas (slug, nome_japones, nome_traduzido, categoria, tipo, kanji, descricao) VALUES
('mae-geri-keage',      'Mae-Geri Keage',      'Chute frontal de chicote',      'chute', 'Keri', '前蹴り蹴上', 'Chute frontal ascendente e rápido, usando o koshi (base dos dedos).'),
('mae-geri-kekomi',     'Mae-Geri Kekomi',     'Chute frontal penetrante',      'chute', 'Keri', '前蹴り蹴込', 'Chute frontal em linha reta, com impulso de quadril, para empurrar o oponente.'),
('mawashi-geri',        'Mawashi-Geri',        'Chute circular',                'chute', 'Keri', '回し蹴り',   'Chute em arco horizontal — peito do pé (haisoku) ou koshi conforme o nível.'),
('yoko-geri-keage',     'Yoko-Geri Keage',     'Chute lateral de chicote',      'chute', 'Keri', '横蹴り蹴上', 'Chute lateral rápido e ascendente, com a borda do pé (sokuto).'),
('yoko-geri-kekomi',    'Yoko-Geri Kekomi',    'Chute lateral penetrante',      'chute', 'Keri', '横蹴り蹴込', 'Chute lateral em linha reta com a borda do pé. Forte para atravessar a guarda.'),
('ushiro-geri',         'Ushiro-Geri',         'Chute para trás',               'chute', 'Keri', '後ろ蹴り',   'Chute reto para trás com o calcanhar (kakato). Usado após giro.'),
('ura-mawashi-geri',    'Ura-Mawashi-Geri',    'Chute circular invertido',      'chute', 'Keri', '裏回し蹴り', 'Chute em arco no sentido contrário ao mawashi, atingindo com o calcanhar (gancho).'),
('mikazuki-geri',       'Mikazuki-Geri',       'Chute em meia-lua',             'chute', 'Keri', '三日月蹴り', 'Chute em arco vertical para dentro com a planta do pé. Também usado para bloquear.'),
('gyaku-mawashi-geri',  'Gyaku-Mawashi-Geri',  'Mawashi invertido',             'chute', 'Keri', '逆回し蹴り', 'Chute mawashi feito com a perna recuada após rotação. Surpreende o adversário.'),
('kin-geri',            'Kin-Geri',            'Chute baixo (virilha)',          'chute', 'Keri', '金的蹴り',   'Chute curto e ascendente com o peito do pé — apenas em defesa pessoal, ilegal em competição.'),
('fumikomi',            'Fumikomi',            'Pisada',                         'chute', 'Keri', '踏み込み',   'Pisada descendente com o calcanhar, mirando joelho ou pé do oponente.'),
('tobi-geri',           'Tobi-Geri',           'Chute saltado',                  'chute', 'Keri', '飛び蹴り',   'Categoria de chutes executados em voo (mae-tobi, yoko-tobi, nidan-geri etc.).'),
('nidan-geri',          'Nidan-Geri',          'Chute duplo no ar',              'chute', 'Keri', '二段蹴り',   'Salta-se e executa dois chutes em sequência antes de aterrissar.'),
('ashi-barai',          'Ashi-Barai',          'Varredura de pé',                'chute', 'Keri', '足払い',     'Rasteira lateral para desequilibrar o oponente.');

-- ============================================================
-- PARTE 4: INSERT — TÉCNICAS (Defesas / Uke)
-- ============================================================

INSERT INTO tecnicas (slug, nome_japones, nome_traduzido, categoria, tipo, kanji, descricao) VALUES
('age-uke',       'Age-Uke',       'Defesa alta',                      'defesa', 'Uke', '上げ受け',     'Bloqueio ascendente com o antebraço, contra ataques à cabeça (jodan).'),
('soto-uke',      'Soto-Uke',      'Defesa de fora p/ dentro',         'defesa', 'Uke', '外受け',       'Antebraço varre de fora para dentro contra socos médios (chudan).'),
('uchi-uke',      'Uchi-Uke',      'Defesa de dentro p/ fora',         'defesa', 'Uke', '内受け',       'Antebraço varre de dentro para fora. Cria abertura para contra-ataque com gyaku.'),
('gedan-barai',   'Gedan-Barai',   'Varredura baixa',                  'defesa', 'Uke', '下段払い',     'Defesa descendente que afasta chutes e socos baixos.'),
('shuto-uke',     'Shuto-Uke',     'Defesa com cutelo de mão',         'defesa', 'Uke', '手刀受け',     'Bloqueio com a borda da mão aberta, executado em Kokutsu-dachi.'),
('morote-uke',    'Morote-Uke',    'Defesa reforçada (2 mãos)',        'defesa', 'Uke', '諸手受け',     'Uchi-uke reforçado pelo punho oposto apoiando o antebraço.'),
('juji-uke',      'Juji-Uke',      'Defesa em X (cruz)',               'defesa', 'Uke', '十字受け',     'Ambos os antebraços cruzados em X — alta (jodan) ou baixa (gedan).'),
('kakiwake-uke',  'Kakiwake-Uke',  'Defesa que abre',                  'defesa', 'Uke', '掻き分け受け', 'Defesa para escapar de uma pegada dupla, abrindo os braços para fora.'),
('sukui-uke',     'Sukui-Uke',     'Defesa em concha',                 'defesa', 'Uke', '掬い受け',     'Defesa com a mão em concha que pega o chute do oponente por baixo.'),
('osae-uke',      'Osae-Uke',      'Defesa pressionando',              'defesa', 'Uke', '押さえ受け',   'Defesa que pressiona o ataque para baixo, controlando a linha central.'),
('nagashi-uke',   'Nagashi-Uke',   'Defesa de desvio',                 'defesa', 'Uke', '流し受け',     'Defesa que redireciona suavemente o ataque, como água que escorre.'),
('haishu-uke',    'Haishu-Uke',    'Defesa com dorso da mão',          'defesa', 'Uke', '背手受け',     'Defesa rápida usando o dorso da mão aberta.');

-- ============================================================
-- PARTE 5: INSERT — TÉCNICAS (Bases / Dachi)
-- ============================================================

INSERT INTO tecnicas (slug, nome_japones, nome_traduzido, categoria, tipo, kanji, descricao) VALUES
('heisoku-dachi',    'Heisoku-Dachi',    'Base de pés juntos',         'base', 'Dachi', '閉足立ち',   'Pés totalmente unidos. Posição inicial cerimonial.'),
('musubi-dachi',     'Musubi-Dachi',     'Base do rei',                'base', 'Dachi', '結び立ち',   'Calcanhares juntos, pés abertos em V. Usada no rei (cumprimento).'),
('heiko-dachi',      'Heiko-Dachi',      'Base paralela',              'base', 'Dachi', '平行立ち',   'Pés paralelos na largura dos ombros. Pronto para iniciar.'),
('hachiji-dachi',    'Hachiji-Dachi',    'Base do 8',                  'base', 'Dachi', '八字立ち',   'Pés afastados com as pontas viradas para fora, formando o kanji 八.'),
('zenkutsu-dachi',   'Zenkutsu-Dachi',   'Base frontal longa',         'base', 'Dachi', '前屈立ち',   'Postura ofensiva clássica: 60% do peso à frente, perna de trás esticada. Símbolo do Shotokan.'),
('kokutsu-dachi',    'Kokutsu-Dachi',    'Base recuada',               'base', 'Dachi', '後屈立ち',   '70% do peso atrás, joelho da frente flexionado. Defensiva por natureza.'),
('kiba-dachi',       'Kiba-Dachi',       'Base do cavaleiro',          'base', 'Dachi', '騎馬立ち',   'Base lateral profunda, peso 50/50, joelhos sobre os dedos. Forja pernas de aço.'),
('shiko-dachi',      'Shiko-Dachi',      'Base do sumô',               'base', 'Dachi', '四股立ち',   'Como Kiba-dachi, mas com as pontas dos pés viradas 45 graus para fora.'),
('sanchin-dachi',    'Sanchin-Dachi',    'Base das três batalhas',     'base', 'Dachi', '三戦立ち',   'Pés virados para dentro, joelhos pressionados. Postura interna do Goju e raros katas Shotokan (Hangetsu).'),
('neko-ashi-dachi',  'Neko-Ashi-Dachi',  'Base do gato',               'base', 'Dachi', '猫足立ち',   'Peso quase todo na perna de trás, perna da frente apenas tocando o solo com a planta.'),
('tsuru-ashi-dachi', 'Tsuru-Ashi-Dachi', 'Base da garça',              'base', 'Dachi', '鶴足立ち',   'Equilíbrio sobre uma perna, a outra dobrada contra o joelho de apoio.'),
('fudo-dachi',       'Fudo-Dachi',       'Base imóvel / sochin',       'base', 'Dachi', '不動立ち',   'Postura híbrida entre zenkutsu e kiba — equilíbrio absoluto, símbolo da imobilidade.');

-- ============================================================
-- PARTE 6: INSERT — TÉCNICAS (Katas)
-- ============================================================

INSERT INTO tecnicas (slug, nome_japones, nome_traduzido, categoria, tipo, kanji, descricao, nivel, movimentos, enbusen_imagem) VALUES
('heian-shodan',  'Heian Shodan',  'Paz mental, 1o nivel',         'kata', 'Kata', '平安初段', 'Primeiro kata. Paz mental, primeiro nivel. Introduz Zenkutsu-dachi e bloqueios fundamentais.',        'Kyu',      21, '/images/enbusen/heian-shodan.webp'),
('heian-nidan',   'Heian Nidan',   'Paz mental, 2o nivel',         'kata', 'Kata', '平安二段', 'Apresenta defesas duplas e chutes laterais. Ritmo mais variado.',                                          'Kyu',      26, '/images/enbusen/heian-nidan.webp'),
('heian-sandan',  'Heian Sandan',  'Paz mental, 3o nivel',         'kata', 'Kata', '平安三段', 'Trabalha cotovelos e tecnicas de contato curto.',                                                          'Kyu',      20, '/images/enbusen/heian-sandan.webp'),
('heian-yondan',  'Heian Yondan',  'Paz mental, 4o nivel',         'kata', 'Kata', '平安四段', 'Combina chutes altos e bloqueios duplos em ritmo dinamico.',                                                'Kyu',      27, '/images/enbusen/heian-yondan.webp'),
('heian-godan',   'Heian Godan',   'Paz mental, 5o nivel',         'kata', 'Kata', '平安五段', 'Inclui o famoso salto (tobi-komi) — preparacao para katas avancados.',                                      'Kyu',      23, '/images/enbusen/heian-godan.webp'),
('tekki-shodan',  'Tekki Shodan',  'Cavaleiro de ferro, 1o nivel', 'kata', 'Kata', '鉄騎初段', 'Cavaleiro de ferro. Executado totalmente em Kiba-dachi, treina a base lateral.',                            'Kyu/Dan',  29, '/images/enbusen/tekki-shodan.webp'),
('bassai-dai',    'Bassai-Dai',    'Tomar a fortaleza (grande)',    'kata', 'Kata', '披塞大',   'Tomar a fortaleza. Energetico, simboliza o avanco determinado.',                                            'Dan',      42, '/images/enbusen/bassai-dai.webp'),
('kanku-dai',     'Kanku-Dai',     'Olhar o ceu (grande)',          'kata', 'Kata', '観空大',   'Olhar o ceu. O kata preferido de Funakoshi. Considerado uma sintese do Shotokan.',                         'Dan',      65, '/images/enbusen/kanku-dai.webp'),
('empi',          'Empi',          'Voo da andorinha',              'kata', 'Kata', '燕飛',     'Voo da andorinha. Movimentos rapidos com altura variavel.',                                                 'Dan',      37, '/images/enbusen/empi.webp'),
('jion',          'Jion',          'Templo budista',                'kata', 'Kata', '慈恩',     'Nome de um templo budista. Kata de poder, simbolico no exame de Shodan.',                                  'Dan',      47, '/images/enbusen/jion.webp'),
('hangetsu',      'Hangetsu',      'Meia-lua',                      'kata', 'Kata', '半月',     'Meia-lua. Unico kata com respiracao sonora — heranca do Goju.',                                            'Dan',      41, '/images/enbusen/hangetsu.webp'),
('gankaku',       'Gankaku',       'Garca na rocha',                'kata', 'Kata', '岩鶴',     'Garca na rocha. Equilibrio em uma so perna por longos instantes.',                                          'Dan',      42, '/images/enbusen/gankaku.webp'),
('unsu',          'Unsu',          'Maos na nuvem',                 'kata', 'Kata', '雲手',     'Maos na nuvem. Inclui salto giratorio de 360 graus. Um dos katas mais dificeis do estilo.',                'Avancado', 48, '/images/enbusen/unsu.webp');

-- ============================================================
-- PARTE 7: INSERT — MESTRES (Hierarquia completa)
-- ============================================================

-- Nivel 0: Raiz
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(1, 'Sokon Matsumura', 'Pai do Shuri-te', NULL, NULL, NULL, 'Fundacao do Shuri-te', 'Grande mestre de Okinawa (sec. XIX). Guarda-costas real. Unificou tecnicas chinesas e okinawanas no Shuri-te. Professor de Asato e Itosu.', NULL, '1809-1901');

-- Nivel 1: Professores de Funakoshi
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(2, 'Anko Asato',  'Mestre de Funakoshi (Shuri-te)', 1, 'Matsumura', NULL, 'Tecnica avancada e combate real', 'Especialista em combate real. Ensinava tecnicas letais de Shuri-te. Um dos dois mestres diretos de Funakoshi.', NULL, '1827-1906'),
(3, 'Anko Itosu', 'Mestre de Funakoshi (Shuri-te)', 1, 'Matsumura', NULL, 'Sistematizacao e educacao', 'Criou os 5 katas Pinan/Heian para introduzir o karate nas escolas de Okinawa (1901). Simplificou tecnicas perigosas para o ensino publico.', NULL, '1831-1915');

-- Nivel 2: Fundador
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(4, 'Gichin Funakoshi', 'Criador do Karate Shotokan', 2, 'Matsumura / Asato / Itosu', 'Shotokan', 'Codificacao do Shotokan, Niju Kun, Karate-Do', 'Pai do karate moderno. Levou a arte de Okinawa ao Japao (1922). Pseudonimo Shoto. Codificou os 20 preceitos.', '船越 義珍', '1868-1957');

-- Nivel 3: Discipulos diretos
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(5,  'Yoshitaka Funakoshi', 'Inovacao Tecnica',         4, 'Funakoshi', NULL,    'Bases longas, chutes altos, kumite dinamico', 'Filho de Gichin. Responsavel pelas bases profundas, chutes altos e dinamica atletica que diferenciam o Shotokan.', '船越 義豪', '1906-1945'),
(6,  'Isao Obata',          '1o Presidente da JKA',     4, 'Funakoshi', 'JKA',   'Organizacao institucional do Shotokan', 'Primeiro presidente da Japan Karate Association. Organizou a estrutura administrativa.', NULL, '1904-1976'),
(7,  'Masatoshi Nakayama',  'Mestre-Chefe da JKA',      4, 'Funakoshi', 'JKA',   'Sistematizacao do ensino, competicoes, expansao mundial', 'Sistematizou o curriculo, criou kumite shiai (1957), implementou o Programa Kenshusei. Autor da serie Best Karate.', '中山 正敏', '1913-1987'),
(8,  'Hidetaka Nishiyama',  'Co-fundador JKA / ITKF',   4, 'Funakoshi / JKA', 'ITKF', 'Karate Tradicional como Budo', 'Introduziu o Shotokan nos EUA (1961). Fundou a AAKF/ITKF. Padronizou regras internacionais.', '西山 英峻', '1928-2008');

-- Nivel 4a: Aluno de Obata
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(9,  'Tsutomu Ohshima', 'Fundador do SKA', 6, 'Obata / Funakoshi', 'SKA', 'Preservacao fiel do Karate pre-JKA', 'Aluno direto de Funakoshi e Obata. Fundou o SKA em 1955. Preserva o karate original.', NULL, '1930-');

-- Nivel 4b: Alunos de Nishiyama
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(10, 'Avi Rokah',       'Aluno senior de Nishiyama', 8, 'Nishiyama', 'ITKF', 'Biomecanica e karate tradicional', 'Continuador da linha de Nishiyama nos EUA.', NULL, NULL),
(11, 'Vladimir Jorga',  'Aluno de Nishiyama',        8, 'Nishiyama', NULL,   'Karate tradicional na Europa Oriental', 'Difusor do karate tradicional ITKF na Europa Oriental.', NULL, NULL),
(12, 'Justo Gomez',     'Aluno de Nishiyama',        8, 'Nishiyama', NULL,   'Karate tradicional na America Latina', 'Supervisionou a formacao de mestres na JKA.', NULL, NULL);

-- Nivel 4c: Mestres Kenshusei JKA
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(13, 'Hirokazu Kanazawa', 'Fundador da SKIF',         7, 'Nakayama / Nishiyama', 'SKIF', 'Fluidez, Tai Chi, Kata e saude', 'Campeao do 1o All Japan com a mao quebrada. Fundou a SKIF. Levou o estilo a mais de 100 paises.', '金澤 弘和', '1931-2019'),
(14, 'Keinosuke Enoeda',  'O Tigre (KUGB/JKA)',       7, 'Nakayama / JKA',      'KUGB', 'Disseminacao na Europa, kumite feroz', 'O Tigre. Disseminou o Shotokan no Reino Unido e Europa.', '榎枝 慶之輔', '1935-2003'),
(15, 'Teruyuki Okazaki',  'Fundador da ISKF',         7, 'Nakayama / JKA',      'ISKF', 'Padronizacao tecnica e expansao pan-americana', 'Fundou a ISKF. Padronizou tecnicas nas Americas.', NULL, '1931-2020'),
(16, 'Tetsuhiko Asai',    'Fundador da JKS',          7, 'Nakayama / JKA',      'JKS',  'Movimentos circulares e Katas flexiveis', 'Karate fluido e tecnicas raras com a mao aberta. Fundou a JKS.', '浅井 哲彦', '1935-2006'),
(17, 'Mikio Yahara',      'Fundador da KWF',          7, 'Nakayama / JKA',      'KWF',  'One Hit Kill / Biomecanica extrema', 'Um dos karatecas mais perigosos da historia. Ikken hissatsu.', NULL, '1947-');

-- Nivel 4d: Taiji Kase
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(18, 'Taiji Kase', 'Kase Ha / WKSA', 7, 'Yoshitaka / Nakayama', 'WKSA', 'Aplicacao pratica, forca e combate real', 'Pioneiro na Europa, baseado em Paris. Karate marcial e introspectivo.', NULL, '1929-2004');

-- Alunos de Kase
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(19, 'Hiroshi Shirai',         'FIKTA/ITKF Italia',     18, 'Kase / Nakayama', 'FIKTA', 'Difusao na Italia e Europa', 'Difusor do Shotokan na Italia. Membro senior da JKA e ITKF.', NULL, '1937-'),
(20, 'Dirk Heene',             'Aluno de Kase',         18, 'Kase',            NULL,    'Kase Ha na Belgica/Europa', 'Continuador da linhagem Kase Ha na Belgica.', NULL, NULL),
(21, 'Jean-Pierre Lavorato',   'Aluno de Kase',         18, 'Kase',            NULL,    'Kase Ha na Franca', 'Principal continuador de Kase na Franca.', NULL, NULL);

-- Nivel 5: Pioneiros no Brasil
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(22, 'Juichi Sagara',       'Pioneiro JKA na Am. do Sul',  15, 'Nakayama / JKA',  'ASK',        'Introducao do Shotokan no Brasil', 'Um dos primeiros mestres japoneses a trazer o Shotokan da JKA ao Brasil.', NULL, NULL),
(23, 'Yasutaka Tanaka',     'JKA Brasil',                  15, 'Nakayama / JKA',  'JKA Brasil', 'Consolidacao do Shotokan no Brasil', 'Consolidou a presenca da JKA no Brasil. Formou dezenas de instrutores.', NULL, NULL),
(24, 'Luiz Tasuke Watanabe','Pioneiro no Brasil',           15, 'Nakayama / JKA',  NULL,          'Difusao no Brasil', 'Mestre pioneiro na difusao do Shotokan no Brasil.', NULL, NULL);

-- Nivel 6: Edson Nakama
INSERT INTO mestres (id, nome, titulo_ou_papel, mestre_antecessor_id, linhagem_direta, organizacao_criada, foco_principal, complementos_hover, kanji, anos) VALUES
(25, 'Edson Nakama', '7o/8o Dan - FPK / CBK / Dojo Nakama', 22, 'Sagara / Tanaka / CBK', 'Dojo Nakama / FPK', 'Tradicao Budo + Formacao de atletas de elite', 'Sensei de altissimo nivel (7o/8o Dan). Formado na linhagem Sagara/Tanaka. FPK e CBK. Combina tradicao Budo com formacao de atletas de competicao.', NULL, NULL);

-- Corrigir sequencia
SELECT setval('mestres_id_seq', (SELECT MAX(id) FROM mestres));

import re
import json

VIDEO_URLS = {
    "heian-shodan": "https://www.youtube.com/embed/q1Rg8rUpjjw?si=OmcOqZQcb9AOxxOO",
    "heian-nidan": "https://www.youtube.com/embed/rgs1ysn0R-0?si=7TkRmTo9oLO9nVZQ",
    "heian-sandan": "https://www.youtube.com/embed/1MrRmimBJoA?si=mmgN8na94_1ywXPG",
    "heian-yondan": "https://www.youtube.com/embed/k72E1u962Qg?si=ofEwfitGWoxeOi0X",
    "heian-godan": "https://www.youtube.com/embed/JA0Ym97vjLg?si=K7OP2XvEVRsUCJhF",
    "tekki-shodan": "https://www.youtube.com/embed/1MrRmimBJoA?si=fzzXDrlIReDRZmdk",
    "tekki-nidan": "",
    "tekki-sandan": "https://www.youtube.com/embed/1MrRmimBJoA?si=fzzXDrlIReDRZmdk",
    "bassai-dai": "https://www.youtube.com/embed/Qpt3W7Y06Kg?si=5pYA7damMFzW00Dx",
    "kanku-dai": "https://www.youtube.com/embed/5Hgi2vi9EbA?si=YIvoV3z4nckosn0b",
    "jion": "https://www.youtube.com/embed/KErsdtTwqM8?si=VBIq8lrh3RXTfhnV",
    "empi": "https://www.youtube.com/embed/IInNlHZQUrE?si=iDRDyhPcI4kp9i6a",
    "hangetsu": "https://www.youtube.com/embed/vOP8dAalfms?si=WuNthW_MhH8RgCcb",
    "gankaku": "https://www.youtube.com/embed/OJi3lwnx0jI?si=3b76maTgCr1h0PYK",
    "jitte": "https://www.youtube.com/embed/IWZOQd6dvww?si=PqjnNvsoSNQHEz7B",
    "bassai-sho": "https://www.youtube.com/embed/zpnA13Vg1lY?si=0MItYepXnRt0Hhcv",
    "kanku-sho": "https://www.youtube.com/embed/veaayoYQ9D4?si=5h9leVsAiKcpWiRG",
    "chinte": "https://www.youtube.com/embed/RgwDv8MChWg?si=FmLnBgqLsKij7Elj",
    "unsu": "https://www.youtube.com/embed/MjVKvHf_Ny0?si=TzIKaHXgjdOwLovK",
    "sochin": "https://www.youtube.com/embed/KqmlVtZZuxY?si=4L84TF6YlHULQ5YJ",
    "nijushiho": "https://www.youtube.com/embed/ZE8EqPvwruE?si=n2_cq_NPjV-1Mpcx",
    "gojushiho-dai": "https://www.youtube.com/embed/qVGcqVEBRRs?si=cc2n0Mi_p6nBgBLD",
    "gojushiho-sho": "https://www.youtube.com/embed/c2qiJNrCYGw?si=nC4ozrMCFna66xkK",
    "meikyo": "https://www.youtube.com/embed/HbX9X3JEI1E?si=IUnTW8UKP1s3hn53",
    "jiin": "https://www.youtube.com/embed/b8RcGoE7XiI?si=LVmJageVxi3zvOQU",
    "wankan": "https://www.youtube.com/embed/DzFP2UilMtI?si=td3g8MVHyovJN9bL"
}

with open('dataKatas.txt', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.split(r'={5,}', text)
parsed_data = {}
for i in range(1, len(sections), 2):
    header = sections[i].strip()
    body = sections[i+1].strip() if i+1 < len(sections) else ''
    
    bunkai_match = re.search(r'BUNKAI:\s*\n(.*?)(?=\n\nMOVIMENTOS:|\nMOVIMENTOS:|$)', body, re.DOTALL)
    bunkai_text = bunkai_match.group(1).strip() if bunkai_match else ''
    bunkai_items = [b.lstrip('- ').strip() for b in bunkai_text.split('\n') if b.strip().startswith('-')]
    
    movs_match = re.search(r'MOVIMENTOS:\s*\n(.*)', body, re.DOTALL)
    movs_text = movs_match.group(1).strip() if movs_match else ''
    movs_items = [m.strip() for m in movs_text.split('\n') if m.strip()]
    
    # Store by index (0-25)
    idx = (i - 1) // 2
    parsed_data[idx] = {
        'bunkai': bunkai_items,
        'movimentos': movs_items
    }

# Read current katasData.ts
with open('src/Data/katasData.ts', 'r', encoding='utf-8') as f:
    current_ts = f.read()

# We will generate a complete TypeScript file with updated interface and KATAS_26 array.
# Let's import existing metadata from current KATAS_26
import sys

# Pattern match existing katas objects in current_ts
katas_raw = [
    {
        "id": "heian-shodan", "nome": "Heian Shodan", "categoria": "Heian",
        "faixaRecomendada": "6º Kyu (Amarela)", "quantidadeMovimentos": 21,
        "posicoesKiai": "Movimentos 9 e 17", "significadoNome": "Paz e Tranquilidade 1",
        "tecnicasDestaque": "Gedan Barai, Oi Zuki, Age Uke, Shuto Uke", "nivelDificuldade": "Iniciante"
    },
    {
        "id": "heian-nidan", "nome": "Heian Nidan", "categoria": "Heian",
        "faixaRecomendada": "5º Kyu (Roxa)", "quantidadeMovimentos": 26,
        "posicoesKiai": "Movimentos 11 e 26", "significadoNome": "Paz e Tranquilidade 2",
        "tecnicasDestaque": "Haiwan Uke, Yoko Geri, Uraken Uchi, Nukite, Gyaku Zuki", "nivelDificuldade": "Iniciante"
    },
    {
        "id": "heian-sandan", "nome": "Heian Sandan", "categoria": "Heian",
        "faixaRecomendada": "4º Kyu (Vermelha)", "quantidadeMovimentos": 20,
        "posicoesKiai": "Movimentos 10 e 20", "significadoNome": "Paz e Tranquilidade 3",
        "tecnicasDestaque": "Uchi Uke, Fumikomi, Kiba-dachi, Empi Uchi", "nivelDificuldade": "Iniciante"
    },
    {
        "id": "heian-yondan", "nome": "Heian Yondan", "categoria": "Heian",
        "faixaRecomendada": "3º Kyu (Laranja)", "quantidadeMovimentos": 27,
        "posicoesKiai": "Movimentos 13 e 25", "significadoNome": "Paz e Tranquilidade 4",
        "tecnicasDestaque": "Kakiwake Uke, Mae Geri, Empi Uchi, Juji Uke, Hiza Geri", "nivelDificuldade": "Intermediário"
    },
    {
        "id": "heian-godan", "nome": "Heian Godan", "categoria": "Heian",
        "faixaRecomendada": "2º Kyu (Verde)", "quantidadeMovimentos": 23,
        "posicoesKiai": "Movimentos 12 e 19", "significadoNome": "Paz e Tranquilidade 5",
        "tecnicasDestaque": "Mikazuki Geri, Juji Uke Baixo, Tobi Uke (Salto), Kousa-dachi", "nivelDificuldade": "Intermediário"
    },
    {
        "id": "tekki-shodan", "nome": "Tekki Shodan", "categoria": "Tekki",
        "faixaRecomendada": "1º Kyu (Marrom)", "quantidadeMovimentos": 29,
        "posicoesKiai": "Movimentos 15 e 29", "significadoNome": "Cavaleiro de Ferro 1",
        "tecnicasDestaque": "Kiba-dachi, Kagizuki, Morote Uke, Nami Gaeshi, Sokumen Zuki", "nivelDificuldade": "Intermediário"
    },
    {
        "id": "tekki-nidan", "nome": "Tekki Nidan", "categoria": "Tekki",
        "faixaRecomendada": "1º Dan (Preta)", "quantidadeMovimentos": 24,
        "posicoesKiai": "Movimentos 12 e 24", "significadoNome": "Cavaleiro de Ferro 2",
        "tecnicasDestaque": "Jodan Tate Uke, Soco Duplo Curto, Kiba-dachi, Catenas Laterais", "nivelDificuldade": "Avançado"
    },
    {
        "id": "tekki-sandan", "nome": "Tekki Sandan", "categoria": "Tekki",
        "faixaRecomendada": "2º Dan (Preta)", "quantidadeMovimentos": 36,
        "posicoesKiai": "Movimentos 16 e 36", "significadoNome": "Cavaleiro de Ferro 3",
        "tecnicasDestaque": "Tsuri Uke, Socos Rápidos Cruzados, Kiba-dachi, Cambiamento de Nível", "nivelDificuldade": "Avançado"
    },
    {
        "id": "bassai-dai", "nome": "Bassai Dai", "categoria": "Avançados",
        "faixaRecomendada": "1º Kyu / 1º Dan", "quantidadeMovimentos": 42,
        "posicoesKiai": "Movimentos 19 e 42", "significadoNome": "Romper a Fortaleza - Grande",
        "tecnicasDestaque": "Koshin In, Sokumen Awase Uke, Yama Zuki, Tsukami Uke", "nivelDificuldade": "Avançado"
    },
    {
        "id": "kanku-dai", "nome": "Kanku Dai", "categoria": "Avançados",
        "faixaRecomendada": "1º Dan", "quantidadeMovimentos": 65,
        "posicoesKiai": "Movimentos 15 e 65", "significadoNome": "Contemplar o Céu - Grande",
        "tecnicasDestaque": "Visão em Triângulo, Yoko Geri, Esquiva Rasa no Solo, Tobi Geri", "nivelDificuldade": "Avançado"
    },
    {
        "id": "jion", "nome": "Jion", "categoria": "Avançados",
        "faixaRecomendada": "1º Dan", "quantidadeMovimentos": 47,
        "posicoesKiai": "Movimentos 17 e 47", "significadoNome": "Amor e Gratidão (Templo Budista)",
        "tecnicasDestaque": "Saudação Shao-Lin, Age Uke / Gedan Barai duplo, Kiba-dachi com Kagizuki", "nivelDificuldade": "Intermediário-Avançado"
    },
    {
        "id": "empi", "nome": "Empi", "categoria": "Avançados",
        "faixaRecomendada": "1º Dan", "quantidadeMovimentos": 37,
        "posicoesKiai": "Movimentos 15 e 36", "significadoNome": "O Voo da Andorinha",
        "tecnicasDestaque": "Age Zuki, Mahi Empi Uchi, Mudança de Nível Rasa, Tobi Geri (360°)", "nivelDificuldade": "Avançado"
    },
    {
        "id": "hangetsu", "nome": "Hangetsu", "categoria": "Avançados",
        "faixaRecomendada": "1º Dan", "quantidadeMovimentos": 41,
        "posicoesKiai": "Movimentos 11 e 40", "significadoNome": "Meia-Lua",
        "tecnicasDestaque": "Hangetsu-dachi, Respiração Ibuki, Kakiwake Uke, Mikazuki Geri", "nivelDificuldade": "Avançado"
    },
    {
        "id": "gankaku", "nome": "Gankaku", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 42,
        "posicoesKiai": "Movimentos 28 e 42", "significadoNome": "Grou sobre a Rocha",
        "tecnicasDestaque": "Tsuru-ashi-dachi, Yoko Geri + Uraken, Koshiken, Manji Uke", "nivelDificuldade": "Especialista"
    },
    {
        "id": "jitte", "nome": "Jitte", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 24,
        "posicoesKiai": "Movimentos 13 e 24", "significadoNome": "Dez Mãos",
        "tecnicasDestaque": "Jodan Cross Uke, Teisho Uke, Kaki Uke (Desarme de Bastão), Hasami Zuki", "nivelDificuldade": "Avançado"
    },
    {
        "id": "bassai-sho", "nome": "Bassai Sho", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 27,
        "posicoesKiai": "Movimentos 18 e 27", "significadoNome": "Romper a Fortaleza - Pequeno",
        "tecnicasDestaque": "Haishu Uke, Seiryuto Uke, Nami Gaeshi, Tsukami Uke", "nivelDificuldade": "Especialista"
    },
    {
        "id": "kanku-sho", "nome": "Kanku Sho", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 48,
        "posicoesKiai": "Movimentos 15 e 48", "significadoNome": "Contemplar o Céu - Pequeno",
        "tecnicasDestaque": "Morote Uke, Salto Vertical de Esquiva, Morote Zuki, Empi Uchi", "nivelDificuldade": "Especialista"
    },
    {
        "id": "chinte", "nome": "Chinte", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 32,
        "posicoesKiai": "Movimentos 28 e 32", "significadoNome": "Mãos Estranhas / Raras",
        "tecnicasDestaque": "Nihon Nukite, Nakadaka Ippon Ken, Ryosho Jodan Uke, Tate-tobi", "nivelDificuldade": "Avançado"
    },
    {
        "id": "unsu", "nome": "Unsu", "categoria": "Avançados",
        "faixaRecomendada": "3º Dan", "quantidadeMovimentos": 48,
        "posicoesKiai": "Movimentos 36 e 48", "significadoNome": "Mãos de Nuvens",
        "tecnicasDestaque": "Keito Uke, Mawashi Geri de 360° no Solo, Salto Mortal 360° no Ar", "nivelDificuldade": "Especialista"
    },
    {
        "id": "sochin", "nome": "Sochin", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 41,
        "posicoesKiai": "Movimentos 28 e 40", "significadoNome": "Espírito Inabalável / Força Tranquila",
        "tecnicasDestaque": "Sochin-dachi (Fudo-dachi), Tate Shuto Uke, Nagashi Uke, Yoko Geri", "nivelDificuldade": "Avançado"
    },
    {
        "id": "nijushiho", "nome": "Nijushiho", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 34,
        "posicoesKiai": "Movimentos 18 e 33", "significadoNome": "24 Passos",
        "tecnicasDestaque": "Haisho Uke, Sanchin-dachi, Empi Uchi sobre Palma, Mawashi Uke", "nivelDificuldade": "Avançado"
    },
    {
        "id": "gojushiho-dai", "nome": "Gojushiho Dai", "categoria": "Avançados",
        "faixaRecomendada": "3º Dan", "quantidadeMovimentos": 67,
        "posicoesKiai": "Movimentos 59 e 66", "significadoNome": "54 Passos - Grande",
        "tecnicasDestaque": "Iwashaguruma, Ippon Nukite, Neko-ashi-dachi, Seiryuto Uke", "nivelDificuldade": "Especialista"
    },
    {
        "id": "gojushiho-sho", "nome": "Gojushiho Sho", "categoria": "Avançados",
        "faixaRecomendada": "3º Dan", "quantidadeMovimentos": 65,
        "posicoesKiai": "Movimentos 58 e 64", "significadoNome": "54 Passos - Pequeno",
        "tecnicasDestaque": "Seiryuto Uke, Nukite Central, Neko-ashi-dachi, Haishu Uke", "nivelDificuldade": "Especialista"
    },
    {
        "id": "meikyo", "nome": "Meikyo", "categoria": "Avançados",
        "faixaRecomendada": "3º Dan", "quantidadeMovimentos": 33,
        "posicoesKiai": "Movimento 32", "significadoNome": "Espelho Limpo",
        "tecnicasDestaque": "Guarda Espelhada, Bo Uke (Bloqueio de Bastão alto), Sankaku Tobi", "nivelDificuldade": "Especialista"
    },
    {
        "id": "jiin", "nome": "Jiin", "categoria": "Avançados",
        "faixaRecomendada": "2º Dan", "quantidadeMovimentos": 35,
        "posicoesKiai": "Movimentos 11 e 35", "significadoNome": "Amor e Proteção / Solo Sagrado",
        "tecnicasDestaque": "Jodan Age Uke / Gedan Barai simultâneos, Fumikomi, Morote Zuki", "nivelDificuldade": "Avançado"
    },
    {
        "id": "wankan", "nome": "Wankan", "categoria": "Avançados",
        "faixaRecomendada": "3º Dan", "quantidadeMovimentos": 24,
        "posicoesKiai": "Movimento 24", "significadoNome": "Coroa Real",
        "tecnicasDestaque": "Nage Waza Kamae (Agarre/Projeção), Tate Zuki, Ren Zuki acelerado", "nivelDificuldade": "Especialista"
    }
]

out = []
out.append('export type CategoriKata = "Heian" | "Tekki" | "Avançados";\n')
out.append('export type NivelDificuldade =')
out.append('  | "Iniciante"')
out.append('  | "Intermediário"')
out.append('  | "Intermediário-Avançado"')
out.append('  | "Avançado"')
out.append('  | "Especialista";\n')

out.append('export interface KataTabela {')
out.append('  id: string;')
out.append('  nome: string;')
out.append('  categoria: CategoriKata;')
out.append('  faixaRecomendada: string;')
out.append('  quantidadeMovimentos: number;')
out.append('  posicoesKiai: string;')
out.append('  significadoNome: string;')
out.append('  tecnicasDestaque: string;')
out.append('  nivelDificuldade: NivelDificuldade;')
out.append('  videoUrl: string;')
out.append('  embusenOficialImg: string;')
out.append('  embusenCompletoImg: string;')
out.append('  bunkai: string[];')
out.append('  movimentos: string[];')
out.append('}\n')

out.append('export const KATAS_26: KataTabela[] = [')

for idx, k in enumerate(katas_raw):
    slug = k["id"]
    video = VIDEO_URLS.get(slug, "")
    emb_oficial = f"/images/embusen/oficial/{slug}.png"
    emb_completo = f"/images/embusen/completo/{slug}.png"
    p_data = parsed_data.get(idx, {"bunkai": [], "movimentos": []})
    
    out.append("  {")
    out.append(f'    id: {json.dumps(slug, ensure_ascii=False)},')
    out.append(f'    nome: {json.dumps(k["nome"], ensure_ascii=False)},')
    out.append(f'    categoria: {json.dumps(k["categoria"], ensure_ascii=False)},')
    out.append(f'    faixaRecomendada: {json.dumps(k["faixaRecomendada"], ensure_ascii=False)},')
    out.append(f'    quantidadeMovimentos: {k["quantidadeMovimentos"]},')
    out.append(f'    posicoesKiai: {json.dumps(k["posicoesKiai"], ensure_ascii=False)},')
    out.append(f'    significadoNome: {json.dumps(k["significadoNome"], ensure_ascii=False)},')
    out.append(f'    tecnicasDestaque: {json.dumps(k["tecnicasDestaque"], ensure_ascii=False)},')
    out.append(f'    nivelDificuldade: {json.dumps(k["nivelDificuldade"], ensure_ascii=False)},')
    out.append(f'    videoUrl: {json.dumps(video, ensure_ascii=False)},')
    out.append(f'    embusenOficialImg: {json.dumps(emb_oficial, ensure_ascii=False)},')
    out.append(f'    embusenCompletoImg: {json.dumps(emb_completo, ensure_ascii=False)},')
    
    out.append('    bunkai: [')
    for b in p_data['bunkai']:
        out.append(f'      {json.dumps(b, ensure_ascii=False)},')
    out.append('    ],')
    
    out.append('    movimentos: [')
    for m in p_data['movimentos']:
        out.append(f'      {json.dumps(m, ensure_ascii=False)},')
    out.append('    ],')
    out.append('  },')

out.append('];\n')
out.append('/** Katas filtrados por categoria para uso direto nas tabelas */')
out.append('export const KATAS_HEIAN = KATAS_26.filter((k) => k.categoria === "Heian");')
out.append('export const KATAS_TEKKI = KATAS_26.filter((k) => k.categoria === "Tekki");')
out.append('export const KATAS_AVANCADOS = KATAS_26.filter((k) => k.categoria === "Avançados");')

content = '\n'.join(out) + '\n'
with open('src/Data/katasData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated katasData.ts successfully!')

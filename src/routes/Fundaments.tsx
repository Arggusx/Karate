const Fund = () => {
    return (
        <section id="fundamentos" className="mb-20 w-[85%] mx-auto pt-30">
            <h2 className="text-3xl font-bold mb-8 my-12 flex items-center">
                <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">基</span>
                Fundamentos
            </h2>
            <p className="flex justify-center mx-auto text-xl">No Karate Shotokan, os fundamentos são a base de toda a prática. Eles envolvem disciplina, respeito, técnica, respiração e estado mental. Antes de</p>
            <p className="flex justify-center mx-auto text-xl">aprender a lutar, o praticante aprende a se comportar, a se concentrar e a se conhecer.</p>
            <hr className="w-[20%] my-7 border-[2px] border-red-500 rounded-full mx-auto" />
            <div className="grid gap-8 mb-12">
                <div className="bg-red-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">O Dojo</h3>
                    <p className="mb-4 italic font-semibold">O local de treino é chamado de Dojo (道場), que significa "local do caminho". É um espaço sagrado onde se pratica não apenas técnicas físicas, mas também desenvolvimento espiritual.</p>
                    <div className="shadow-lg bg-gray-200 p-4 rounded flex gap-10 justify-between">
                        <div>
                            <h4 className="font-bold mb-2">Etiqueta no Dojo:</h4>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Reverência ao entrar e sair (Rei)</li>
                                <li className="mb-2">Respeito ao Sensei (professor) e sempai (alunos mais graduados)</li>
                                <li className="mb-2">Manter o Dojo limpo e organizado</li>
                                <li>Silêncio e concentração durante os treinos</li>
                            </ul>
                        </div>
                        <img src="Dojo-shomen.jpg" alt="" className="rounded" />
                    </div>
                </div>

                <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Kiai</h3>
                    <p>O Kiai (気合) é o grito característico do Karate, que expressa a energia vital (ki) e serve para:</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <h4 className="font-bold mb-2">Foco</h4>
                            <p>Concentrar toda a energia em um único ponto durante a execução da técnica.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <h4 className="font-bold mb-2">Intimidação</h4>
                            <p>Surpreender o oponente psicologicamente.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <h4 className="font-bold mb-2">Respiração</h4>
                            <p>Coordenação da respiração com o movimento, expelindo o ar dos pulmões.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 my-12 flex items-center">
                    <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">衣</span>
                    Vestimenta
                </h2>

                <div className="bg-red-100 p-6 rounded-lg shadow-lg">
                    <div className="w-150 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">O Karategi</h3>
                        <p className="italic font-semibold text-gray-800 mb-3 ml-3 w-250">O uniforme de treino, chamado Karategi, é geralmente branco, simbolizando pureza e humildade, independente da graduação. O Shotokan tradicional usa um gi mais pesado que outros estilos.</p>
                        <div className="shadow-lg bg-gray-100 flex gap-20 w-290 rounded p-4">
                            <div className="pl-5 flex flex-col justify-center gap-4">
                                <li>O <strong>obi</strong> é a faixa usada sobre o karatê-gi e tem a função de mantê-lo fechado corretamente durante a prática. Além disso, ela representa o nível técnico e a experiência do praticante, sendo suas cores um símbolo do progresso dentro do karatê. No Shotokan, o obi também carrega um forte valor simbólico, lembrando o compromisso do karateca com a disciplina, o respeito e o aperfeiçoamento contínuo.</li>
                                <li>O <strong>wagi</strong> é a parte superior do uniforme de karatê, semelhante a uma jaqueta. Ele permite liberdade de movimento para a execução dos golpes, defesas e posturas, além de oferecer resistência durante os treinos e competições.</li>
                                <li>O <strong>shitabaki</strong> é a calça do karatê-gi, projetada para proporcionar conforto e mobilidade, especialmente nas bases baixas e nos chutes característicos do Shotokan. Seu corte amplo facilita a execução correta das técnicas, enquanto o tecido resistente garante durabilidade.</li>
                            </div>
                            <img src="karategi.webp" alt="Karategi" className="w-75 h-80 rounded" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-r-lg mb-10">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Faixas (Obi)</h3>
                <p className="italic text-gray-800  font-semibold ml-3">As faixas no Karate Shotokan indicam o nível de aprendizado e experiência do praticante. Elas não representam superioridade, mas sim etapas do caminho de evolução técnica, mental e espiritual.</p>

                <div className="flex gap-10">
                    <div className="justify-items-center gap-4 mt-4 bg-gray-100 shadow-lg py-4 rounded w-full">
                        <p className="flex  font-bold text-[17px]">O sistema Kyū</p>
                        <span className="flex justify-items-center w-[80%] text-[14px] my-5">As graduações Kyū correspondem aos níveis iniciais e intermediários, onde o praticante constrói sua base técnica, disciplina e compreensão do Karate.</span>
                        <hr className="w-[20%] my-7 border-[2px] border-red-500 rounded-full" />

                        <div className="grid md:grid-cols gap-3">
                            <li className="italic font-semibold"><strong className="text-gray-500">Branca</strong> — início e humildade</li>
                            <li className="italic font-semibold"><strong className="text-yellow-400">Amarela</strong> — primeiros fundamentos</li>
                            <li className="italic font-semibold"><strong className="text-red-400">Vermelha</strong> — força e determinação</li>
                            <li className="italic font-semibold"><strong className="text-orange-400">Laranja</strong> — coordenação e confiança</li>
                            <li className="italic font-semibold"><strong className="text-green-400">Verde</strong> — crescimento técnico</li>
                            <li className="italic font-semibold"><strong className="text-purple-400">Roxa</strong> — Amadurecimento</li>
                            <li className="italic font-semibold"><strong className="text-yellow-800">Marrom</strong> — preparação</li>
                            <li className="italic font-semibold"><strong>Preta (Dan)</strong> — novo começo</li>
                        </div>
                    </div>

                    <div className="justify-items-center gap-4 mt-4 bg-gray-100 shadow-lg py-4 rounded w-full">
                        <p className="flex  font-bold text-[17px]">O sistema de Dan</p>
                        <span className="flex justify-items-center text-[14px] w-[80%] my-5">O sistema Dan começa com a faixa preta e representa o início do verdadeiro aprofundamento no Karate. No Shotokan, alcançar a faixa preta não significa domínio total, mas o compromisso com o aprendizado contínuo.</span>

                        <hr className="w-[20%] my-7 border-[2px] border-red-500 rounded-full" />
                        <div className="grid md:grid-cols gap-3 text-[13px]">
                            <span className="text-gray-700 font-semibold">— Yundansha (Termo para quem possui grau Dan) —</span>
                            <li className="italic font-semibold"><strong>1º Dan (Shodan)</strong> — Início do nível avançado, consolidação dos fundamentos</li>
                            <li className="italic font-semibold text-gray-700"><strong>2º Dan (Nidan)</strong> — Aprofundamento técnico e maior responsabilidade</li>
                            <li className="italic font-semibold text-gray-600"><strong>3º Dan (Sandan)</strong> — Maturidade técnica e compreensão do estilo</li>
                            <li className="italic font-semibold text-gray-500"><strong>4º Dan (Yondan)</strong> — Alto domínio técnico e liderança no Dojo</li>
                            <li className="italic font-semibold text-gray-400"><strong>5º Dan (Godan)</strong> — Referência técnica e filosófica</li>
                            <span className="text-gray-700 font-semibold mt-3">— Kodansha (Termo para mestres antigos) —</span>
                            <li className="italic font-semibold text-gray-400"><strong>6º Dan (Rokudan)</strong> — Alto grau, reconhecimento técnico e experiência</li>
                            <li className="italic font-semibold text-gray-400"><strong>7º Dan (Nanadan)</strong> — Contribuição significativa ao Karate</li>
                            <li className="italic font-semibold text-gray-400"><strong>8º Dan (Hachidan)</strong> — Referência histórica e técnica</li>
                            <li className="italic font-semibold text-gray-400"><strong>9º Dan (Kudan)</strong> — Grau honorífico extremamente raro</li>
                            <li className="italic font-semibold text-gray-400"><strong>10º Dan (Judan)</strong> — Grau máximo, geralmente honorário</li>

                        </div>
                    </div>

                </div>
            </div>
            <h2 className="text-3xl font-bold mb-8 my-12 flex items-center">
                <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">結</span>
                Conclusão — Os Fundamentos do Shotokan
            </h2>
            <div className="p-5">
                <div className="conclusao-fundamentos flex flex-col gap-4 w-[30%] font-semibold bg-red-100 border-l-3 border-red-600 p-5 text-[18px] rounded-r shadow-lg italic">
                    <p>No Karate Shotokan, os fundamentos são mais do que regras, técnicas ou tradições. Eles formam a base sobre a qual o praticante constrói seu caminho, unindo disciplina, respeito, controle e consciência.</p>
                    <p>Ao compreender o valor do Dojo, do Karategi, do Kiai e da progressão pelas faixas, o karateca percebe que cada treino é uma oportunidade de evolução não apenas física, mas também mental e moral.</p>
                    <p>Assim, os fundamentos não marcam um ponto de chegada, mas o início de uma jornada contínua de aprendizado, que se aprofunda a cada passo dentro e fora do Dojo.</p>
                </div>
            </div>



        </section>
    )
}

export default Fund;
const Fund = () => {
    return (
        <section id="fundamentos" className="mb-20 w-[85%] mx-auto pt-30">
            <h2 className="md:text-3xl text-2xl font-bold mb-8 my-12 flex items-center">
                <span className="kanji-title bg-red-600 text-white md:text-4xl md:px-4 md:py-2 py-1.5 px-3 mr-4">基</span>
                Fundamentos
            </h2>
            <p className="md:text-xl text-center">No Karate Shotokan, os fundamentos são a base de toda a prática. Eles envolvem disciplina, respeito, técnica, respiração e estado mental. Antes de aprender a lutar, o praticante aprende a se comportar, a se concentrar e a se conhecer.</p>
            <hr className="w-[20%] my-7 border-[2px] border-red-500 rounded-full mx-auto" />
            <div className="grid gap-8 mb-12">
                <div className="bg-red-100 p-6 rounded-lg shadow-lg w-full">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">O Dojo</h3>
                    <p className="mb-4 italic font-semibold text-center">O local de treino é chamado de Dojo (道場), que significa "local do caminho". É um espaço sagrado onde se pratica não apenas técnicas físicas, mas também desenvolvimento espiritual.</p>
                    <div className="shadow-lg bg-gray-200 p-4 rounded md:flex gap-10 justify-between">
                        <div className="japanese-bg">
                            <h4 className="font-bold mb-2">Etiqueta no Dojo:</h4>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Reverência ao entrar e sair (Rei)</li>
                                <li className="mb-2">Respeito ao Sensei (professor) e sempai (alunos mais graduados)</li>
                                <li className="mb-2">Manter o Dojo limpo e organizado</li>
                                <li>Silêncio e concentração durante os treinos</li>
                            </ul>
                        </div>
                        <img src="Dojo-shomen.jpg" alt="" className="rounded h-40 w-80 mt-5 md:mt-0 md:h-55 md:w-100" />
                    </div>
                </div>

                <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-r-lg w-full">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Kiai</h3>
                    <p className="text-center">O Kiai (気合) é o grito característico do Karate, que expressa a energia vital (ki) e serve para:</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-100 p-4 rounded shadow japanese-bg">
                            <h4 className="font-bold mb-2">Foco</h4>
                            <p>Concentrar toda a energia em um único ponto durante a execução da técnica.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow japanese-bg">
                            <h4 className="font-bold mb-2">Intimidação</h4>
                            <p>Surpreender o oponente psicologicamente.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow japanese-bg">
                            <h4 className="font-bold mb-2">Respiração</h4>
                            <p>Coordenação da respiração com o movimento, expelindo o ar dos pulmões.</p>
                        </div>
                    </div>
                </div>

                <section id="dojo-kun" className="">
                    <div className="w-[80%] rounded-b-lg bg-red-600 p-8 rounded-lg shadow-lg mx-auto">
                        <div className="flex flex-col gap-10 w-[80%] mx-auto my-10">


                            <div className="flex justify-between items-center mx-auto gap-10">
                                <img src="kanji-dojokun.png" className="h-100 w-80" alt="" />
                                <div className="dojo-kun md:text-xl text-xs space-y-4 flex flex-col">
                                    <h2 className="md:text-5xl text-xl font-bold mb-8 mx-auto">
                                        Dojo Kun
                                    </h2>
                                    <div className="mx-auto flex flex-col go gap-5">
                                        <span className="text-blue-900 ordinal">1 "Esforçar-se para a perfeição do caráter"</span>
                                        <span className="text-blue-900">1. "Ser fiel ao caminho da verdade"</span>
                                        <span className="text-blue-900">1. "Cultivar o espírito de esforço"</span>
                                        <span className="text-blue-900">1. "Respeitar acima de tudo"</span>
                                        <span className="text-blue-900">1. "Conter o espírito de agressão"</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-xl flex justify-center md:gap-20 text-blue-900 font-bold">
                                <div className="flex flex-col">
                                    <p>人</p>
                                    <p>格</p>
                                    <p>完</p>
                                    <p>成</p>
                                    <p>に</p>
                                    <p>努</p>
                                    <p>め</p>
                                    <p>る</p>
                                    <p>こ</p>
                                    <p>と</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>誠</p>
                                    <p>の</p>
                                    <p>道</p>
                                    <p>を</p>
                                    <p>守</p>
                                    <p>る</p>
                                    <p>こ</p>
                                    <p>と</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>努</p>
                                    <p>力</p>
                                    <p>の</p>
                                    <p>精</p>
                                    <p>神</p>
                                    <p>を</p>
                                    <p>養</p>
                                    <p>う</p>
                                    <p>こ</p>
                                    <p>と</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>礼</p>
                                    <p>儀</p>
                                    <p>を</p>
                                    <p>重</p>
                                    <p>ん</p>
                                    <p>ず</p>
                                    <p>る</p>
                                    <p>こ</p>
                                    <p>と</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>血</p>
                                    <p>気</p>
                                    <p>の</p>
                                    <p>勇</p>
                                    <p>を</p>
                                    <p>戒</p>
                                    <p>む</p>
                                    <p>こ</p>
                                    <p>と</p>
                                </div>
                                <div className="flex flex-col text-3xl justify-center ml-2">
                                    <p>道</p>
                                    <p>場</p>
                                    <p>訓</p>
                                </div>
                            </h2>
                        </div>
                        <div className="mt-8 bg-black bg-opacity-30 p-6 rounded-lg max-w-[70%] mx-auto">
                            <p className="italic text-center text-white">"O verdadeiro Karate é este: que no dia a dia, na vida cotidiana, mente e corpo sejam treinados e desenvolvidos num espírito de humildade; e que, em momentos críticos, sejamos totalmente devotados à causa da justiça."</p>
                            <span className="text-white justify-end flex mt-5">- Gichin Funakoshi</span>
                        </div>
                    </div>
                </section>

                <h2 className="md:text-3xl text-2xl font-bold mb-8 flex items-center">
                    <span className="kanji-title bg-red-600 text-white md:text-4xl md:px-4 md:py-2 py-1.5 px-3 mr-4">衣</span>
                    Vestimenta
                </h2>

                <div className="bg-red-100 p-6 rounded-lg shadow-lg">
                    <div className="md:w-150 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">O Karategi</h3>
                        <p className="italic font-semibold text-gray-800 mb-3 ml-3 md:w-250 text-center">O uniforme de treino, chamado Karategi, é geralmente branco, simbolizando pureza e humildade, independente da graduação. O Shotokan tradicional usa um gi mais pesado que outros estilos.</p>
                        <div className="shadow-lg bg-gray-100 md:flex gap-20 md:w-290 w-full rounded p-4 japanese-bg">
                            <div className="pl-5 flex flex-col justify-center gap-4">
                                <li>O <strong>obi</strong> é a faixa usada sobre o karatê-gi e tem a função de mantê-lo fechado corretamente durante a prática. Além disso, ela representa o nível técnico e a experiência do praticante, sendo suas cores um símbolo do progresso dentro do karatê. No Shotokan, o obi também carrega um forte valor simbólico, lembrando o compromisso do karateca com a disciplina, o respeito e o aperfeiçoamento contínuo.</li>
                                <li>O <strong>wagi</strong> é a parte superior do uniforme de karatê, semelhante a uma jaqueta. Ele permite liberdade de movimento para a execução dos golpes, defesas e posturas, além de oferecer resistência durante os treinos e competições.</li>
                                <li>O <strong>shitabaki</strong> é a calça do karatê-gi, projetada para proporcionar conforto e mobilidade, especialmente nas bases baixas e nos chutes característicos do Shotokan. Seu corte amplo facilita a execução correta das técnicas, enquanto o tecido resistente garante durabilidade.</li>
                            </div>
                            <img src="karategi.webp" alt="Karategi" className="w-75 h-80 rounded mt-5 md:mt-0 md:h-55 md:w-100" />
                        </div>
                    </div>
                </div>
            </div >

            <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-r-lg mb-10">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Faixas (Obi)</h3>
                <p className="italic text-gray-800  font-semibold ml-3 text-center">As faixas no Karate Shotokan indicam o nível de aprendizado e experiência do praticante. Elas não representam superioridade, mas sim etapas do caminho de evolução técnica, mental e espiritual.</p>

                <div className="md:flex gap-10">
                    <div className="justify-items-center gap-4 mt-4 bg-gray-100 shadow-lg py-4 rounded w-full japanese-bg">
                        <p className="flex  font-bold text-[17px]">O sistema Kyū</p>
                        <span className="flex justify-items-center w-[80%] text-[14px] my-5 text-center">As graduações Kyū correspondem aos níveis iniciais e intermediários, onde o praticante constrói sua base técnica, disciplina e compreensão do Karate.</span>
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

                    <div className="justify-items-center gap-4 mt-4 bg-gray-100 shadow-lg py-4 rounded w-full japanese-bg">
                        <p className="flex  font-bold text-[17px]">O sistema de Dan</p>
                        <span className="flex justify-items-center text-[14px] w-[80%] my-5 text-center">O sistema Dan começa com a faixa preta e representa o início do verdadeiro aprofundamento no Karate. No Shotokan, alcançar a faixa preta não significa domínio total, mas o compromisso com o aprendizado contínuo.</span>

                        <hr className="w-[20%] my-7 border-[2px] border-red-500 rounded-full" />
                        <div className="grid md:grid-cols gap-3 text-[13px] w-[80%]">
                            <span className="text-gray-700 font-semibold md:w-[80%] mx-auto">— Yundansha (Grau Dan) —</span>
                            <li className="italic font-semibold"><strong>1º Dan (Shodan)</strong> — Início do nível avançado, consolidação dos fundamentos</li>
                            <li className="italic font-semibold text-gray-700"><strong>2º Dan (Nidan)</strong> — Aprofundamento técnico e maior responsabilidade</li>
                            <li className="italic font-semibold text-gray-600"><strong>3º Dan (Sandan)</strong> — Maturidade técnica e compreensão do estilo</li>
                            <li className="italic font-semibold text-gray-500"><strong>4º Dan (Yondan)</strong> — Alto domínio técnico e liderança no Dojo</li>
                            <li className="italic font-semibold text-gray-400"><strong>5º Dan (Godan)</strong> — Referência técnica e filosófica</li>
                            <span className="text-gray-700 font-semibold mt-3 mx-auto">— Kodansha (Mestres antigos) —</span>
                            <li className="italic font-semibold text-gray-400"><strong>6º Dan (Rokudan)</strong> — Alto grau, reconhecimento técnico e experiência</li>
                            <li className="italic font-semibold text-gray-400"><strong>7º Dan (Nanadan)</strong> — Contribuição significativa ao Karate</li>
                            <li className="italic font-semibold text-gray-400"><strong>8º Dan (Hachidan)</strong> — Referência histórica e técnica</li>
                            <li className="italic font-semibold text-gray-400"><strong>9º Dan (Kudan)</strong> — Grau honorífico extremamente raro</li>
                            <li className="italic font-semibold text-gray-400"><strong>10º Dan (Judan)</strong> — Grau máximo, geralmente honorário</li>

                        </div>
                    </div>

                </div>
            </div>
            <h2 className="md:text-3xl text-2xl font-bold mb-8 my-12 flex items-center">
                <span className="kanji-title bg-red-600 text-white md:text-4xl md:px-4 md:py-2 py-1.5 px-3 mr-4">結</span>
                Conclusão
            </h2>
            <div className="md:p-5">
                <div className="conclusao-fundamentos w-full md:w-[30%] font-semibold bg-red-100 border-l-3 border-red-600 p-5 text-[18px] rounded-r shadow-lg italic">
                    <p className="mb-3">No Karate Shotokan, os fundamentos são mais do que regras, técnicas ou tradições. Eles formam a base sobre a qual o praticante constrói seu caminho, unindo disciplina, respeito, controle e consciência.</p>
                    <p className="mb-3">Ao compreender o valor do Dojo, do Karategi, do Kiai e da progressão pelas faixas, o karateca percebe que cada treino é uma oportunidade de evolução não apenas física, mas também mental e moral.</p>
                    <p className="mb-3">Assim, os fundamentos não marcam um ponto de chegada, mas o início de uma jornada contínua de aprendizado, que se aprofunda a cada passo dentro e fora do Dojo.</p>
                </div>
            </div>



        </section >
    )
}

export default Fund;
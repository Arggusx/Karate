const Fund = () => {
    return (
        <section id="fundamentos" className="mb-20 w-[85%] mx-auto pt-24">

            {/* TÍTULO */}
            <h2 className="md:text-3xl text-2xl font-bold my-12 flex items-center">
                <span className="kanji-title bg-red-600 text-white md:text-4xl md:px-4 md:py-2 py-1.5 px-3 mr-4">
                    基
                </span>
                Fundamentos
            </h2>

            <p className="md:text-xl text-center">
                No Karate Shotokan, os fundamentos são a base de toda a prática. Eles envolvem disciplina, respeito, técnica, respiração e estado mental. Antes de aprender a lutar, o praticante aprende a se comportar, a se concentrar e a se conhecer.
            </p>

            <hr className="w-[20%] my-7 border-[2px] border-red-500 rounded-full mx-auto" />

            <div className="grid gap-8 mb-12">

                {/* O DOJO */}
                <div className="bg-transparent backdrop-blur-sm p-6 rounded-lg shadow-lg w-full">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">O Dojo</h3>

                    <p className="mb-4 italic font-semibold text-center">
                        O local de treino é chamado de Dojo (道場), que significa "local do caminho". É um espaço sagrado onde se pratica não apenas técnicas físicas, mas também desenvolvimento espiritual.
                    </p>

                    <div className="shadow-lg bg-gray-300 p-4 rounded md:flex gap-10 justify-between">
                        <div className="japanese-bg">
                            <h4 className="font-bold mb-2">Etiqueta no Dojo:</h4>
                            <ul className="list-disc pl-5">
                                <li>Reverência ao entrar e sair (Rei)</li>
                                <li>Respeito ao Sensei e sempai</li>
                                <li>Manter o Dojo limpo e organizado</li>
                                <li>Silêncio e concentração</li>
                            </ul>
                        </div>

                        <img
                            src="Dojo-shomen.jpg"
                            alt=""
                            className="rounded w-80 max-w-full mt-5 md:mt-0"
                        />
                    </div>
                </div>

                {/* KIAI */}
                <div className="bg-transparent backdrop-blur-sm border-l-4 border-red-600 p-6 rounded-r-lg w-full">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Kiai</h3>

                    <p className="text-center">
                        O Kiai (気合) é o grito característico do Karate, que expressa a energia vital (ki) e serve para:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-300 p-4 rounded shadow japanese-bg">
                            <h4 className="font-bold mb-2">Foco</h4>
                            <p>Concentrar toda a energia em um único ponto durante a execução da técnica..</p>
                        </div>

                        <div className="bg-gray-300 p-4 rounded shadow japanese-bg">
                            <h4 className="font-bold mb-2">Intimidação</h4>
                            <p>Surpreender o oponente psicologicamente.</p>
                        </div>

                        <div className="bg-gray-300 p-4 rounded shadow japanese-bg">
                            <h4 className="font-bold mb-2">Respiração</h4>
                            <p>Coordenação da respiração com o movimento, expelindo o ar dos pulmões.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DOJO KUN — FULL WIDTH */}
            <div
                id="dojo-kun"
                className="relative left-1/2 -translate-x-1/2 w-screen bg-red-600 py-12 shadow-lg overflow-hidden"
            >
                <div className="bg-gray-300 w-[80%] md:w-[60%] max-w-6xl mx-auto rounded-lg p-6">

                    <div className="flex md:flex-col mx-auto justify-center gap-10 items-center my-10 w-full">

                        <img
                            src="kanji-dojokun.png"
                            className="md:h-100 md:w-80 md:max-w-full h-30 w-20"
                            alt=""
                        />

                        <div className="dojo-kun md:text-xl text-[10px] space-y-4 flex flex-col">
                            <h2 className="md:text-5xl text-xl font-bold mb-8 mx-auto">
                                Dojo Kun
                            </h2>

                            <div className="mx-auto flex flex-col md:gap-5 gap-2 text-blue-900">
                                <span>1. Esforçar-se para a perfeição do caráter</span>
                                <span>2. Ser fiel ao caminho da verdade</span>
                                <span>3. Cultivar o espírito de esforço</span>
                                <span>4. Respeitar acima de tudo</span>
                                <span>5. Conter o espírito de agressão</span>
                            </div>
                        </div>
                    </div>

                    {/* KANJIS */}
                    <h2 className="md:text-xl text-sm flex justify-center md:gap-35 gap-10 text-blue-900 font-bold">
                        <div className="flex flex-col">
                            <p>人</p><p>格</p><p>完</p><p>成</p><p>に</p><p>努</p><p>め</p><p>る</p>
                        </div>
                        <div className="flex flex-col">
                            <p>誠</p><p>の</p><p>道</p><p>を</p><p>守</p><p>る</p>
                        </div>
                        <div className="flex flex-col">
                            <p>礼</p><p>儀</p><p>を</p><p>重</p><p>ん</p><p>ず</p><p>る</p>
                        </div>
                        <div className="flex flex-col text-3xl justify-center ml-2">
                            <p>道</p><p>場</p><p>訓</p>
                        </div>
                    </h2>

                    {/* CITAÇÃO */}
                    <div className="mt-10 bg-black bg-opacity-30 p-6 rounded-lg max-w-3xl mx-auto">
                        <p className="italic text-center text-gray-200 md:text-lg text-sm">
                            "O verdadeiro Karate é este: que no dia a dia, na vida cotidiana, mente e corpo sejam treinados e desenvolvidos num espírito de humildade; e que, em momentos críticos, sejamos totalmente devotados à causa da justiça."
                        </p>
                        <span className="text-gray-200 flex justify-end mt-4">
                            - Gichin Funakoshi
                        </span>
                    </div>
                </div>
            </div>

            {/* CONCLUSÃO */}
            <h2 className="md:text-3xl text-2xl font-bold my-12 flex items-center">
                <span className="kanji-title bg-red-600 text-gray-200 md:text-4xl md:px-4 md:py-2 py-1.5 px-3 mr-4">
                    結
                </span>
                Conclusão
            </h2>

            <div className="md:p-5">
                <div className="conclusao-fundamentos w-full md:w-full leading-relaxed indent-8 font-semibold bg-red-100 border-l-3 border-red-600 p-5 text-[18px] rounded-r shadow-lg italic flex flex-col gap-6">
                    <p>No Karate Shotokan, os fundamentos são mais do que regras, técnicas ou tradições. Eles formam a base sobre a qual o praticante constrói seu caminho, unindo disciplina, respeito, controle e consciência.</p>
                    <p>Ao compreender o valor do Dojo, do Karategi, do Kiai e da progressão pelas faixas, o karateca percebe que cada treino é uma oportunidade de evolução não apenas física, mas também mental e moral</p>
                    <p>Assim, os fundamentos não marcam um ponto de chegada, mas o início de uma jornada contínua de aprendizado, que se aprofunda a cada passo dentro e fora do Dojo</p>
                </div>
            </div>

        </section>
    );
};

export default Fund;

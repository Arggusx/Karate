const Reishiki = () => {
    return (
        <>
            <section id="tecnicas" className="mb-20 w-[85%] mx-auto">
                    <h2 className="text-3xl font-bold my-12 mb-8 flex items-center">
                        <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">技</span>
                        Técnicas do Shotokan
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Kihon (基本)</h3>
                            <p className="mb-4">São os fundamentos básicos do Karate, incluindo:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Posturas (Dachi)</li>
                                <li>Golpes (Tsuki)</li>
                                <li>Defesas (Uke)</li>
                                <li>Chutes (Geri)</li>
                            </ul>
                            <img src="kihon.png" alt="Kihon" className="mt-4 w-full h-auto rounded" />
                            <div className="mt-4 p-4 bg-gray-100 rounded">
                                <p className="italic">"O Karate começa e termina com cortesia." - Gichin Funakoshi</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Kata (型)</h3>
                            <p className="mb-4">Sequências formais de movimentos que simulam combate contra múltiplos oponentes. O Shotokan possui 26 katas principais, incluindo:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Heian (Paz e tranquilidade)</li>
                                <li>Tekki (Cavaleiro de ferro)</li>
                                <li>Bassai (Penetrar a fortaleza)</li>
                                <li>Kanku (Olhar para o céu)</li>
                            </ul>
                            <img src="kata.png" alt="Kata" className="mt-4 w-full h-auto rounded" />
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Kumite (組手)</h3>
                            <p className="mb-4">Combate treinado, que no Shotokan enfatiza:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Controle absoluto</li>
                                <li>Timing perfeito</li>
                                <li>Distância correta (Maai)</li>
                                <li>Postura estável</li>
                            </ul>
                            <img src="kumite.png" alt="Kumite" className="mt-4 w-full h-auto rounded" />
                            <div className="mt-4 p-4 bg-gray-100 rounded">
                                <p>O Kumite evolui desde formas básicas pré-arranjadas (Kihon Kumite) até combate livre (Jiyu Kumite).</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Diferenças para Outros Estilos</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-700">
                                        <th className="p-3 text-left">Característica</th>
                                        <th className="p-3 text-left">Shotokan</th>
                                        <th className="p-3 text-left">Goju-Ryu</th>
                                        <th className="p-3 text-left">Shito-Ryu</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    <tr>
                                        <td className="p-3">Posturas</td>
                                        <td className="p-3">Baixas e longas</td>
                                        <td className="p-3">Médias e naturais</td>
                                        <td className="p-3">Variadas</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Movimentos</td>
                                        <td className="p-3">Lineares e potentes</td>
                                        <td className="p-3">Circulares e fluidos</td>
                                        <td className="p-3">Mistura de ambos</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Katas</td>
                                        <td className="p-3">26 principais</td>
                                        <td className="p-3">12 principais</td>
                                        <td className="p-3">Mais de 40</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Foco</td>
                                        <td className="p-3">Força e distância</td>
                                        <td className="p-3">Respiração e energia</td>
                                        <td className="p-3">Velocidade e precisão</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Seção Dojo-kun */}
                <section id="dojo-kun" className="mb-20">
                    <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
                            <span className="kanji-title bg-white text-red-600 text-4xl px-4 py-2 mr-4">道</span>
                            Dojo Kun - Os Princípios do Shotokan
                        </h2>

                        <div className="max-w-3xl mx-auto">
                            <ul className="dojo-kun text-xl space-y-4">
                                <li className="font-bold">Hitotsu! Jinkaku kansei ni tsutomuru koto (人格完成に努めること) - Esforçar-se para a perfeição do caráter</li>
                                <li className="font-bold">Hitotsu! Makoto no michi o mamoru koto (誠の道を守ること) - Ser fiel ao caminho da verdade</li>
                                <li className="font-bold">Hitotsu! Doryoku no seishin o yashinau koto (努力の精神を養うこと) - Cultivar o espírito de esforço</li>
                                <li className="font-bold">Hitotsu! Reigi o omonzuru koto (礼儀を重んずること) - Respeitar acima de tudo</li>
                                <li className="font-bold">Hitotsu! Kekki no yu o imashimuru koto (血気の勇を戒むること) - Conter o espírito de agressão</li>
                            </ul>

                            <div className="mt-8 bg-black bg-opacity-30 p-6 rounded-lg">
                                <p className="italic text-center">"O verdadeiro Karate é este: que no dia a dia, na vida cotidiana, mente e corpo sejam treinados e desenvolvidos num espírito de humildade; e que, em momentos críticos, sejamos totalmente devotados à causa da justiça." - Gichin Funakoshi</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default Reishiki;
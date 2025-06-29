const Home = () => {
    return (
        <>

            {/* Seção de História */}
            <section id="historia" className="mb-20 ">
                <div className="flex flex-col md:flex-row items-center my-12 mx-auto w-[85%]">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">歴</span>
                            História do Shotokan
                        </h2>
                        <p className="mb-4">O Shotokan Karate é um dos estilos mais tradicionais e influentes do Karate moderno, desenvolvido no início do século XX no Japão.</p>
                        <p className="mb-4">O nome "Shotokan" vem do pseudônimo poético de Gichin Funakoshi (船越 義珍), "Shoto" (松濤), que significa "ondas dos pinheiros", e "kan" (館), que significa "casa" ou "salão".</p>
                        <p>Funakoshi, nascido em 1868 em Okinawa, é considerado o pai do Karate moderno por ter sido o primeiro a sistematizar e difundir a arte para o Japão continental.</p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Gichin_Funakoshi.jpg/800px-Gichin_Funakoshi.jpg" alt="Gichin Funakoshi" className="w-full h-auto rounded" />
                            <p className="text-center mt-2 text-sm italic">Gichin Funakoshi (1868-1957), fundador do Shotokan Karate</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[85%] mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-red-400">A Evolução do Karate</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-bold mb-2 text-red-300">Origem em Okinawa</h4>
                            <p>O Karate surgiu em Okinawa como uma síntese de artes marciais locais (Te) com influências chinesas (Kempo). Era praticado secretamente durante o período de proibição de armas.</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-bold mb-2 text-red-300">Introdução no Japão</h4>
                            <p>Em 1922, Funakoshi foi convidado a demonstrar o Karate em Tóquio. Sua apresentação foi tão impressionante que ficou no Japão para ensinar, adaptando a arte para a cultura japonesa.</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-bold mb-2 text-red-300">Sistematização</h4>
                            <p>Funakoshi e seus alunos, incluindo seu filho Yoshitaka, desenvolveram o estilo Shotokan com ênfase em posturas baixas, movimentos lineares e potentes, e um sistema de graduação.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Fundamentos */}
            <section id="fundamentos" className="mb-20 w-[85%] mx-auto">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                    <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">基</span>
                    Fundamentos do Shotokan
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">O Dojo</h3>
                        <p className="mb-4">O local de treino é chamado de Dojo (道場), que significa "local do caminho". É um espaço sagrado onde se pratica não apenas técnicas físicas, mas também desenvolvimento espiritual.</p>
                        <div className="bg-gray-100 p-4 rounded">
                            <h4 className="font-bold mb-2">Etiqueta no Dojo:</h4>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Reverência ao entrar e sair (Rei)</li>
                                <li className="mb-2">Respeito ao Sensei (professor) e sempai (alunos mais graduados)</li>
                                <li className="mb-2">Manter o Dojo limpo e organizado</li>
                                <li>Silêncio e concentração durante os treinos</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">O Karategi</h3>
                        <p className="mb-4">O uniforme de treino, chamado Karategi, é geralmente branco, simbolizando pureza e humildade. O Shotokan tradicional usa um gi mais pesado que outros estilos.</p>
                        <img src="https://www.ikfkickboxing.com/wp-content/uploads/2020/05/karate-gi-1024x683.jpg" alt="Karategi" className="w-full h-auto rounded mb-4" />
                        <p>O cobi (faixa) indica o nível do praticante. As cores seguem uma ordem: branca, amarela, laranja, verde, azul, marrom e preta (dan).</p>
                    </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">O Kiai</h3>
                    <p>O Kiai (気合) é o grito característico do Karate, que expressa a energia vital (ki) e serve para:</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white p-4 rounded shadow">
                            <h4 className="font-bold mb-2">Foco</h4>
                            <p>Concentrar toda a energia em um único ponto durante a execução da técnica.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h4 className="font-bold mb-2">Intimidação</h4>
                            <p>Surpreender o oponente psicologicamente.</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h4 className="font-bold mb-2">Respiração</h4>
                            <p>Coordenação da respiração com o movimento, expelindo o ar dos pulmões.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Seção de Técnicas */}
            <section id="tecnicas" className="mb-20 w-[85%] mx-auto">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
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
                        <img src="https://www.karate-kids.nl/wp-content/uploads/2019/11/Karate-Kata.jpg" alt="Kata" className="mt-4 w-full h-auto rounded" />
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
        </>
    );
};

export default Home;
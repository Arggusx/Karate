const Fund = () => {
    return (
        <section id="fundamentos" className="mb-20 w-[85%] mx-auto">
                <h2 className="text-3xl font-bold mb-8 my-12 flex items-center">
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
                        <img src="karategi.webp" alt="Karategi" className="w-full h-auto rounded mb-4 bg-black p-3" />
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
    )
}

export default Fund;
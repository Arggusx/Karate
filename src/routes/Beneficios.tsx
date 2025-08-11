const Beneficios = () => {
    return (
        <section id="beneficios" className="mb-20 w-[85%] mx-auto">
                <h2 className="text-3xl font-bold mb-8 flex items-center my-12">
                    <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">益</span>
                    Benefícios do Karate
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">Físicos</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Melhora a coordenação motora e equilíbrio</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Aumento da força e resistência muscular</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Desenvolvimento da flexibilidade</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Melhora do condicionamento cardiovascular</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Controle do peso corporal</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">Mentais</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Desenvolvimento da concentração</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Aumento da autoconfiança</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Controle do estresse e ansiedade</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Desenvolvimento da disciplina</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Melhora da capacidade de tomada de decisões</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-red-600">Sociais</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Desenvolvimento do respeito pelos outros</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Aprendizado do trabalho em equipe</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Fortaleciemnto do senso de comunidade</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Desenvolvimento da paciência e tolerância</span>
                            </li>

                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>Compreensão da hierarquia e responsabilidade</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 bg-red-50 bolder-l-4 bolder-red-600 p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Karatê para Todas as Idades</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold mb-2">Criança:</h4>
                            <p>Desenvolve coordenação, disciplona e autoconfiança dende cedo. Ensina valores como respeito e perceverança que  serão úteis por toda a vida.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Adultos:</h4>
                            <p>Desenvolve coordenação, disciplona e autoconfiança dende cedo. Ensina valores como respeito e perceverança que  serão úteis por toda a vida.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Idosos:</h4>
                            <p>Desenvolve coordenação, disciplona e autoconfiança dende cedo. Ensina valores como respeito e perceverança que  serão úteis por toda a vida.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Mulheres:</h4>
                            <p>Fortalecimento muscular, melhora de postura e autoconfiança. Técnicas de autodefesa especialmente úteis em situações de risco.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Beneficios;
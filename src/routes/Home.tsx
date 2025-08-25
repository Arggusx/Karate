import Welcome from "../components/Welcome"

const Home = () => {
    return (
        <>
            <Welcome />

            {/* Seção de História */}
            <section id="historia" className="mb-20 ">
                <div className="flex md:flex-row items-start my-12 mx-auto w-[85%]">
                    <div className="md:w-[50%] mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">歴</span>
                            História do Shotokan
                        </h2>
                        <p className="mb-4 indent-8 leading-relaxed">Gichin Funakoshi nasceu em 1868, em Shuri, Okinawa, e foi criado pelos avós maternos, aprendendo poesias clássicas chinesas. Aos 11 anos iniciou o treinamento no Naha-Te com o mestre Asato e no Shuri-Te com o mestre Itosu. Em 1921, foi escolhido para representar Okinawa em Tóquio, realizando a primeira demonstração pública do Okinawa-te e, a partir daí, reestruturou e codificou a arte, passando a chamá-la de Karate-Do, com foco no desenvolvimento do caráter e da autodisciplina.</p>
                        <p className="indent-8 leading-relaxed">Poeta sob o pseudônimo Shoto (“ondas de pinheiro”), inspirado nas colinas de pinheiros de sua terra natal, continuou a ensinar e desenvolver o Karate. Em 1933, criou exercícios básicos de kumite (Gohon e Ippon Kumite) e, em 1934, introduziu o Ju Ippon Kumite. Em 1935, publicou Karate-Do Kyohan, dedicado aos kata. Por temer que o Karate fosse usado para matar, removeu técnicas perigosas como quebras de juntas e golpes fatais, adaptando-o para ser menos letal.</p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-white p-4 shadow-lg w-[65%] px-15 mx-auto rounded-lg">
                            <img src="ginshin.webp" alt="Gichin Funakoshi" className="p-1 rounded border border-10" />
                            <p className="text-center mt-2 text-sm italic">Gichin Funakoshi (1868-1957), fundador do Shotokan Karate</p>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] ml-28 mb-10">
                    <p className="mb-4 indent-8 leading-relaxed">Em 1936, alterou o significado de “Karate” de “Mãos Chinesas” para “Mãos Vazias” e participou da fundação do primeiro dojo oficial, batizado Shotokan (“Escola de Shoto”), inaugurado em 1939. Com a crescente militarização do Japão, o Karate ganhou popularidade. Porém, em 1941, com o ataque a Pearl Harbor, o país entrou na Segunda Guerra Mundial. O Shotokan foi destruído durante os bombardeios, Okinawa devastada e as artes marciais banidas. Em 1945, seu filho e sucessor técnico, Gigo, morreu de tuberculose; em 1947, sua esposa também faleceu.</p>
                    <p className="mb-4 indent-8 leading-relaxed">Após o fim da guerra, alguns alunos convenceram as autoridades de ocupação a permitir o Karate como esporte, reintroduzindo-o oficialmente em 1948. Em 1949, foi fundada a Nihon Karate Kyokai (Associação Japonesa de Karate), com Funakoshi como instrutor-chefe. Em 1955, a organização ganhou seu próprio dojo.</p>
                    <p className="indent-8 leading-relaxed">Funakoshi suportou perdas familiares, a destruição do Japão e a proibição temporária de sua arte, mas permaneceu fiel ao seu espírito pacifista. Considerado o “Pai do Karate Moderno”, faleceu em 26 de abril de 1957, aos 89 anos. Em sua lápide está gravado Karate Ni Sente Nashi (“No Karate não existe atitude ofensiva”).</p>
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
        </>
    );
};

export default Home;
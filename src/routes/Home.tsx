import Welcome from "../components/Welcome"

const Home = () => {
    return (
        <>
            <Welcome />

            {/* Seção de História */}
            <section id="historia" className="mb-20 ">
                <div className="items-start mt-12 mx-auto w-[80%]">
                    <div className="md:w-[50%] mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="kanji-title bg-red-600 text-white text-4xl px-4 py-2 mr-4">歴</span>
                            História do Karate Shotokan
                        </h2>
                    </div>
                    <div className="md:flex md:justify-between gap-20">
                        <div className="flex flex-col gap-3">
                            <h1 className="md:text-xl font-semibold mb-3 border-b-3 md:w-[50%] pb-1 border-red-600">Origem e formação de Gichin Funakoshi</h1>
                            <p className="indent-8 leading-relaxed text-sm md:text-base">Gichin Funakoshi nasceu em 1868, em Shuri, Okinawa, e foi criado pelos avós maternos, com forte influência da cultura clássica chinesa, especialmente da poesia e da caligrafia. Aos 11 anos iniciou seu treinamento nas artes marciais locais, estudando o Naha-Te com o mestre Anko Asato e o Shuri-Te com o mestre Anko Itosu, dois dos mais importantes expoentes do Karate de Okinawa. Essas experiências moldaram a base técnica e filosófica que mais tarde daria origem ao Karate Shotokan.</p>
                            <p className="indent-8 leading-relaxed text-sm md:text-base">Em 1921, Funakoshi foi escolhido para representar Okinawa em Tóquio, realizando a primeira grande demonstração pública do Okinawa-te no Japão continental. A partir desse marco, passou a reorganizar e sistematizar a arte, adotando o nome Karate-Do, enfatizando o “Do” (caminho) como um meio de formação do caráter, da autodisciplina e do autocontrole, e não apenas como método de combate.</p>

                            <div className="mx-auto p-4 w-full h-full ">
                                <img src="ginshin.webp" alt="Gichin Funakoshi" className="mx-auto block md:hidden h-80 w-60" />
                                <p className="text-center mt-2 text-sm italic font-semibold block md:hidden">Gichin Funakoshi (1868-1957), fundador do Shotokan Karate</p>
                            </div>

                            <h1 className="md:text-xl font-semibold my-3 border-b-3 md:w-[66%] pb-1 border-red-600">Desenvolvimento técnico e sistematização do Karate</h1>
                            <p className="indent-8 leading-relaxed text-sm md:text-base">Além de mestre marcial, Funakoshi era poeta e utilizava o pseudônimo Shoto (“ondas de pinheiro”), inspirado nos sons do vento entre os pinheiros de sua terra natal. Esse nome viria a se tornar símbolo de seu estilo. Ao longo das décadas de 1930, ele aprofundou a organização técnica do Karate, criando exercícios estruturados de kumite, como o Gohon Kumite e o Ippon Kumite (1933), além do Ju Ippon Kumite (1934), estabelecendo uma progressão pedagógica clara para o ensino.</p>
                        </div>
                        <div className="mx-auto p-4 w-full h-full hidden md:block ">
                            <img src="ginshin.webp" alt="Gichin Funakoshi" className="mx-auto md:h-90 md:w-70" />
                            <p className="text-center mt-2 text-sm italic font-semibold">Gichin Funakoshi (1868-1957), fundador do Shotokan Karate</p>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] mt-3 flex flex-col mx-auto mb-10 gap-3">
                    <p className="indent-8 leading-relaxed text-sm md:text-base">Em 1935, publicou a obra Karate-Do Kyohan, um dos livros mais importantes da história do Karate, dedicado ao estudo e à execução dos kata. Preocupado com o uso indevido da arte marcial, Funakoshi passou a desencorajar o ensino de técnicas excessivamente letais, como golpes fatais e quebras de articulações, direcionando o Karate para uma prática mais segura, educativa e acessível, sem perder sua eficácia marcial.</p>
                    <h1 className="my-3 md:text-xl font-semibold border-b-3 md:w-[33%] pb-1 border-red-600">Filosofia, ética e princípios do Karate-Do</h1>
                    <p className="indent-8 leading-relaxed text-sm md:text-base">Funakoshi defendia que o Karate deveria transcender o aspecto físico. Para isso, difundiu princípios éticos fundamentais, como o Dojo Kun e os Niju Kun (Vinte Preceitos do Karate), que abordam valores como respeito, humildade, perseverança, autocontrole e integridade moral. Em sua visão, o verdadeiro oponente não estava fora, mas dentro de cada praticante.</p>
                    <p className="indent-8 leading-relaxed text-sm md:text-base">Essa filosofia é sintetizada em sua máxima mais conhecida: “Karate ni sente nashi” (“No Karate não há primeiro ataque”), que reforça o caráter defensivo e pacifista da arte. Essa abordagem contribuiu decisivamente para que o Karate fosse reconhecido como um caminho educativo e formativo, amplamente aceito em ambientes escolares e universitários.</p>

                    <div className="flex justify-between">
                        <div className="flex flex-col gap-6">
                            <h1 className="mt-3 md:text-xl font-semibold border-b-3 md:w-[45%] w-[80%] pb-1 border-red-600">Consolidação do Shotokan no Japão</h1>
                            <div>
                                <p className="indent-8 leading-relaxed text-sm md:text-base">Após se estabelecer definitivamente no Japão, Funakoshi promoveu adaptações nos nomes e nas formas dos kata, padronizando-os para facilitar o ensino e a compreensão no contexto cultural japonês. Em 1936, alterou a escrita do termo “Karate”, que passou de “Mãos Chinesas” para “Mãos Vazias”, reforçando seu caráter universal e desvinculado de influências nacionais específicas.</p>
                                <p className="indent-8 leading-relaxed text-sm md:text-base">Em 1939, foi inaugurado o primeiro dojo oficial do estilo, denominado Shotokan (“Casa de Shoto”), que também passou a designar o próprio estilo. Durante esse período, o Karate se expandiu rapidamente por meio de clubes universitários, como os das universidades Keio, Waseda e Takushoku, que tiveram papel essencial na formação de instrutores e na difusão do Shotokan pelo Japão.</p>
                            </div>
                            <div className="mx-auto p-4 w-full h-full md:hidden block">
                                <img src="first_dojo.jpg" alt="Primeiro Dojo Shotokan" className="mx-auto my-4 w-74 h-58" />
                                <p className="text-center mt-2 text-sm italic font-semibold">Primeiro Dojo Shotokan original.</p>
                            </div>
                        </div>
                        <div className="mx-auto p-4 w-full h-full hidden md:block">
                            <img src="first_dojo.jpg" alt="Primeiro Dojo Shotokan" className="mx-auto my-4 w-74 h-58" />
                            <p className="text-center mt-2 text-sm italic font-semibold">Primeiro Dojo Shotokan original</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="md:text-xl font-semibold my-3 border-b-3 md:w-[41%] pb-1 border-red-600">A Segunda Guerra Mundial e o período pós-guerra</h1>
                        <p className="indent-8 leading-relaxed text-sm md:text-base">Com a intensificação da Segunda Guerra Mundial, a prática das artes marciais sofreu severas restrições. Após o ataque a Pearl Harbor, em 1941, o Japão entrou em um conflito total: Okinawa foi devastada, o dojo Shotokan foi destruído pelos bombardeios e o Karate chegou a ser temporariamente proibido pelas forças de ocupação aliadas. Nesse contexto, Funakoshi enfrentou profundas perdas pessoais, incluindo a morte de seu filho Yoshitaka (Gigo), responsável por importantes inovações técnicas no estilo, e, posteriormente, o falecimento de sua esposa.</p>

                        <div className="mx-auto p-4 w-full h-full">
                            <img src="posguerra.jpg" alt="Primeiro Dojo Shotokan" className="mx-auto my-4 w-74 h-58 md:w-84 md:h-68" />
                            <p className="text-center mt-2 text-sm italic font-semibold">Treino universitário (1930–1950)</p>
                        </div>

                        <p className="indent-8 leading-relaxed text-sm md:text-base">No período pós-guerra, antigos alunos atuaram para que o Karate fosse reconhecido como prática educativa e esportiva, desvinculada do militarismo. Esse esforço resultou, em 1949, na fundação da Nihon Karate Kyokai (Japan Karate Association – JKA), com Funakoshi como instrutor-chefe. Em 1955, a organização inaugurou seu próprio dojo, consolidando a retomada e a expansão do Shotokan.</p>
                    </div>

                    <h1 className="my-3 md:text-xl font-semibold border-b-3 md:w-[37%] pb-1 border-red-600">Características técnicas e legado do Shotokan</h1>
                    <p className="indent-8 leading-relaxed text-sm md:text-base">O Shotokan passou a se distinguir por suas posturas longas e baixas, movimentos predominantemente lineares, forte rotação do quadril e ênfase na potência gerada pelo corpo inteiro. Essas características refletem a busca de Funakoshi pelo equilíbrio entre força, controle, eficiência e disciplina mental. Diferente de outros estilos de Karate, o Shotokan valoriza a clareza técnica, a precisão e a padronização dos movimentos.</p>
                    <p className="indent-8 leading-relaxed text-sm md:text-base">Mesmo diante das adversidades históricas e pessoais, Funakoshi permaneceu fiel ao seu espírito pacifista e educativo. Faleceu em 26 de abril de 1957, aos 89 anos, sendo reconhecido como o “Pai do Karate Moderno”. Em sua lápide está gravado o princípio que resume toda a sua filosofia de vida e arte marcial: Karate ni sente nashi (“No Karate não existe atitude ofensiva”).</p>

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
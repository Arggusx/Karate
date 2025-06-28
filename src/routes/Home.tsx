const Home = () => {
  return (
    <>
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Gichin_Funakoshi.jpg/800px-Gichin_Funakoshi.jpg" alt="Gichin Funakoshi" className="w-full h-auto rounded"/>
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
    </>
  );
};

export default Home;
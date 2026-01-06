// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Email: info@shotokan.com</p>
            <p className="mt-2">Telefone: (82) 99612-5491</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-red-500 transition">Facebook</a>
              <a href="#" className="hover:text-red-500 transition">Instagram</a>
              <a href="#" className="hover:text-red-500 transition">YouTube</a>
            </div>
          </div>
          <div>
            <h2 className="text-md font-bold mb-4">Envie sugestões de melhorias</h2>
            <div className="mt-4 flex justify-between gap-5">

              <input
                type="text"
                placeholder="Digite aqui"
                className="px-4 py-2 w-full rounded text-gray-800 bg-gray-300"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2025 Douglas - Todos os direitos reservados</p>
          <p className="mt-2 text-sm text-gray-500">
            空手に先手なし - "Não existe ataque primeiro no Karate"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

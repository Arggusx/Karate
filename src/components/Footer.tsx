// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shotokan Karate</h3>
            <p>
              Uma arte marcial tradicional japonesa que desenvolve corpo, mente
              e espírito através da disciplina e prática constante.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#historia" className="hover:text-red-500 transition">História</a></li>
              <li><a href="#fundamentos" className="hover:text-red-500 transition">Fundamentos</a></li>
              <li><a href="#tecnicas" className="hover:text-red-500 transition">Técnicas</a></li>
              <li><a href="#dojo-kun" className="hover:text-red-500 transition">Dojo Kun</a></li>
              <li><a href="#beneficios" className="hover:text-red-500 transition">Benefícios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Email: info@shotokan.com</p>
            <p className="mt-2">Telefone: (11) 1234-5678</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-red-500 transition">Facebook</a>
              <a href="#" className="hover:text-red-500 transition">Instagram</a>
              <a href="#" className="hover:text-red-500 transition">YouTube</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p>Assine para receber novidades sobre o mundo do Karate Shotokan.</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 w-full rounded-l text-gray-800"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r">
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

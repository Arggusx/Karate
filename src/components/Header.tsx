import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl font-bold">空</span>
            </div>
            <h1 className=" text-2xl font-bold">
                <Link id='Home' to='/'>SHOTOKAN <span className="text-red-500">KARATE</span></Link>
              
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link id='Home' to='/' className="hover:text-red-500 transition">História</Link>
            <a href="#fundamentos" className="hover:text-red-500 transition">Fundamentos</a>
            <a href="#tecnicas" className="hover:text-red-500 transition">Técnicas</a>
            <a href="#dojo-kun" className="hover:text-red-500 transition">Dojo Kun</a>
            <a href="#beneficios" className="hover:text-red-500 transition">Benefícios</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

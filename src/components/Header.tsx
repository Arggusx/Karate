import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "História", id: "/" },
    { label: "Fundamentos", id: "Fund" },
    { label: "Técnicas", id: "Reishiki" },
    { label: "Benefícios", id: "Beneficios" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all ${scrolled
        ? "backdrop-blur-md shadow-md bg-slate-900/60"
        : "bg-black backdrop-blur-0 shadow-none"
        }`}
    >
      <div
        className={`flex justify-between py-3 px-5 sm:px-25 transition-all duration-300
                          ${menuOpen ?
            "bg-[#030014]" : "bg-transparent"
          }`}
      >


        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-bold">空</span>
          </div>
          <h1 className=" text-2xl font-bold">
            <Link id='Home' to='/' className='text-white'>SHOTOKAN <span className="text-red-500">KARATE</span></Link>

          </h1>
        </div>
        <button
          className="sm:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-red-500 " />
          ) : (
            <Menu className="w-6 h-6 text-red-500" />
          )}
        </button>

        {/*mobile*/}
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 transition-all bg-[#030014] z-40 shadow-lg">
            <div className="flex flex-col items-start gap-4 p-4">
              {navLinks.map(({ label, id }) => (
                <Link
                  id={id}
                  to={id}
                  className="text-lg font-bold text-red-500 pl-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/*desktop */}
        <nav className="hidden sm:flex gap-6 pt-2.5">
          {navLinks.map(({ label, id }) => (
            <Link
              id={id}
              to={id}
              className="group relative px-1 py-2 text-lg font-bold"
            >
              <span className="relative z-10 bg-clip-text text-red-600 transition-all duration-300 ">
                {label}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
            </Link>
          ))}
        </nav>
      </div>


    </header>
  );
};

//<header className="bg-black text-white shadow-lg">
//   <div className="container mx-auto px-4 py-6">
//     <div className="flex flex-col md:flex-row justify-between items-center">
//       
//       <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
//         <Link id='historia' to='/' className="hover:text-red-500 transition text-xl">História</Link>
//         <Link id='fundamentos' to='Fund' className="hover:text-red-500 transition text-xl">Fundamentos</Link>
//         <Link id='tecnicas' to='Reishiki' className="hover:text-red-500 transition text-xl">Práticas</Link>
//         <Link id='beneficios' to='Beneficios' className="hover:text-red-500 transition text-xl">Benefícios</Link>
//       </nav>
//     </div>
//   </div>
// </header>

export default Header;

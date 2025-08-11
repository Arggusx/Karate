
const Welcome = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><path fill=%22none%22 stroke=%22%23ef4444%22 stroke-width=%220.5%22 d=%22M0,0 L100,100 M100,0 L0,100%22 opacity=%220.1%22/></svg>')] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-red-500">空手道</span>{" "}
            <span className="block md:inline">松濤館</span>
          </h2>
          <p className="text-xl mb-8">
            O caminho da mão vazia - Tradição, disciplina e evolução pessoal
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Welcome;

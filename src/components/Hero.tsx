import { ArrowRight, Code2 } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDEuNjU3LTEuMzQzIDMtMyAzczMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzem0wIDI0YzAgMS42NTctMS4zNDMgMy0zIDNzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zIDMgMS4zNDMgMyAzem0tMjQgMGMwIDEuNjU3LTEuMzQzIDMtMyAzcy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtMyAzIDEuMzQzIDMgM3ptMC0yNGMwIDEuNjU3LTEuMzQzIDMtMyAzcy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtMyAzIDEuMzQzIDMgM3oiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Code2 className="w-12 h-12 text-red-600" strokeWidth={1.5} />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="text-white">&lt;</span>
            <span className="text-red-600">LVF_Code</span>
            <span className="text-white">/&gt;</span>
          </h1>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          Desenvolvimento Web Profissional
        </p>

        <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transformo suas ideias em soluções digitais de alta performance.
          Especializado em landing pages modernas, websites responsivos e sistemas completos
          para gestão de clínicas veterinárias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-red-600 text-white font-semibold rounded-lg
                     hover:bg-red-700 transition-all duration-300 transform hover:scale-105
                     hover:shadow-2xl hover:shadow-red-600/50 flex items-center gap-2"
          >
            Iniciar Projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg
                     hover:bg-white hover:text-black transition-all duration-300 transform
                     hover:scale-105"
          >
            Ver Portfólio
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
            <div className="text-gray-400">Projetos Entregues</div>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-400">Clientes Satisfeitos</div>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

import { ExternalLink, Layout, Globe, HeartPulse, Store, Briefcase, Laptop } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page - Advocacia',
    category: 'Landing Page',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Layout,
    description: 'Landing page moderna para escritório de advocacia com formulário de contato integrado'
  },
  {
    title: 'E-commerce Fashion',
    category: 'Website',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Store,
    description: 'Loja virtual completa com carrinho de compras e checkout integrado'
  },
  {
    title: 'Sistema VetCare',
    category: 'Sistema',
    image: 'https://images.pexels.com/photos/6235663/pexels-photo-6235663.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: HeartPulse,
    description: 'Sistema completo de gestão para clínica veterinária com agenda e prontuários'
  },
  {
    title: 'Portfolio Arquitetura',
    category: 'Website',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Briefcase,
    description: 'Site portfolio para escritório de arquitetura com galeria de projetos'
  },
  {
    title: 'Landing Page - SaaS',
    category: 'Landing Page',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Laptop,
    description: 'Landing page de conversão para plataforma SaaS com preços e CTA otimizado'
  },
  {
    title: 'Site Institucional',
    category: 'Website',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Globe,
    description: 'Website corporativo multi-páginas com blog e área de clientes'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfólio
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi para meus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800
                       hover:border-red-600 transition-all duration-500 hover:scale-105
                       hover:shadow-2xl hover:shadow-red-600/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4 p-3 bg-red-600/90 rounded-lg backdrop-blur-sm">
                  <project.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
              </div>

              <div className="p-6 relative">
                <div className="mb-2">
                  <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <button className="flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  Ver Projeto
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg
                           hover:bg-red-700 transition-all duration-300 transform hover:scale-105
                           hover:shadow-2xl hover:shadow-red-600/50">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}

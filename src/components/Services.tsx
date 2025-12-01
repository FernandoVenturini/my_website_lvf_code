import { Layout, Globe, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Páginas de conversão otimizadas para transformar visitantes em clientes. Design moderno, responsivo e focado em resultados.',
    features: ['Design Responsivo', 'SEO Otimizado', 'Alta Performance', 'Integração com Analytics']
  },
  {
    icon: Globe,
    title: 'Websites Completos',
    description: 'Sites institucionais e corporativos com design personalizado e funcionalidades sob medida para seu negócio.',
    features: ['Multi-páginas', 'CMS Integrado', 'Blog Profissional', 'Painel Administrativo']
  },
  {
    icon: HeartPulse,
    title: 'Sistema para Clínicas Veterinárias',
    description: 'Solução completa de gestão para clínicas veterinárias com controle de pacientes, agendamentos e prontuários.',
    features: ['Gestão de Pacientes', 'Agendamento Online', 'Prontuário Eletrônico', 'Relatórios Gerenciais']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas e personalizadas para impulsionar seu negócio no ambiente digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl
                       border border-gray-800 hover:border-red-600 transition-all duration-500
                       hover:shadow-2xl hover:shadow-red-600/20 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-red-600" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full py-3 border border-red-600 text-red-600 font-semibold rounded-lg
                                 hover:bg-red-600 hover:text-white transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

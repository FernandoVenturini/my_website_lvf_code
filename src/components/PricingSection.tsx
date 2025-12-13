import { Check } from "lucide-react";

export default function PricingSection() {

    const plans = [
        {
            name: "Básico",
            price: "R$ 99",
            period: "/mês",
            description:
                "Perfeito para clínicas iniciantes ou pequenos consultórios",
            features: [
                "Até 300 atendimentos/mês",
                "1 usuário",
                "Agenda + prontuário eletrônico",
                "Relatórios básicos",
                "Suporte por e-mail",
            ],
            cta: "Começar grátis",
            popular: false,
        },
        {
            name: "Profissional",
            price: "R$ 199",
            period: "/mês",
            description: "O mais escolhido por clínicas que querem crescer rápido",
            features: [
                "Atendimentos ilimitados",
                "Até 5 usuários",
                "Financeiro completo",
                "Estoque e vacinas",
                "WhatsApp integrado",
                "Relatórios avançados",
                "Suporte prioritário",
            ],
            cta: "Testar 14 dias grátis",
            popular: true,
        },
        {
            name: "Premium",
            price: "R$ 399",
            period: "/mês",
            description: "Para clínicas 24h, redes e hospitais veterinários",
            features: [
                "Tudo do Profissional",
                "Usuários ilimitados",
                "Multi-clínicas",
                "Telemedicina nativa",
                "Dashboard em tempo real",
                "API e integrações",
                "Suporte VIP 24h",
            ],
            cta: "Falar com especialista",
            popular: false,
        },
    ];



    return (
        <section className="py-20 bg-black" id="planos">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Escolha o plano <span className="text-red-600"> ideal</span> para sua clínica.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Sem pegadinha. Cancele quando quiser.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`
                relative rounded-2xl overflow-hidden transition-all duration-300 
                ${plan.popular
                                    ? "bg-white text-black scale-105 shadow-2xl shadow-red-600/20"
                                    : "bg-[#1a1a1a] border border-gray-800 hover:border-red-600"
                                }
                hover:-translate-y-4 hover:shadow-2xl
                `}
                        >
                            {/* Badge "Mais Popular" */}
                            {plan.popular && (
                                <div className="absolute -top-0 left-1/2 -translate-x-1/2 pt-1">
                                    <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg
									">
                                        MAIS POPULAR
                                    </span>
                                </div>
                            )}

                            <div className="p-8 pt-10 text-center">
                                <h3 className={`text-2xl font-bold ${plan.popular ? "text-black" : "text-white"}`}>
                                    {plan.name}
                                </h3>
                                <div className="mt-6">
                                    <span className={`text-5xl font-bold ${plan.popular ? "text-black" : "text-white"}`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                                <p className={`mt-4 text-sm ${plan.popular ? "text-gray-700" : "text-gray-400"}`}>
                                    {plan.description}
                                </p>

                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center justify-center gap-3">
                                            <Check className={`w-5 h-5 ${plan.popular ? "text-red-600" : "text-red-500"}`} />
                                            <span className={`text-sm ${plan.popular ? "text-gray-800" : "text-gray-300"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`
                    mt-10 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300
                    ${plan.popular
                                            ? "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-600/50"
                                            : "bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                                        }
                    hover:scale-105 active:scale-95
                    `}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-12 text-sm">
                    Todos os planos incluem: atualizações grátis · backup diário · 100% na nuvem · sem fidelidade
                </p>
            </div>
        </section>
    )
}

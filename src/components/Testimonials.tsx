import { Card } from "./ui/card";
import { CardContent } from "./ui/card";


const Testimonials = () => {
    return (
        <section className="py-20 px-4 bg-black/50">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-12">O que dizem nossos clientes...</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-black/70 border-red-600/30">
                        <CardContent className="pt-6">
                            <p className="text-gray-300 italic">"A rotina da clínia era caótica até conhecermos o SofVet.
Agora, tudo flui de forma integrada: agendamentos, prontuários e controle financeiro.
A redução de erros e o ganho de tempo foram impressionantes.
Percebemos um novo nível de organização e qualidade no nosso trabalho.
É, sem dúvida, a melhor decisão que tomamos para o negócio!"</p>
                            <p className="mt-4 font-semibold text-white">- Dr. João Silva</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-black/70 border-red-600/30">
                        <CardContent className="pt-6">
                            <p className="text-gray-300 italic">"Desde que implementamos o SofVet, a eficiência da clínica deu um salto.
A gestão de fichas, agendamentos e estoque ficou centralizada e simples.
O tempo que ganhamos nos permite focar no que realmente importa: o cuidado com os animais.
A equipe e os clientes perceberam a diferença positiva.
Recomendo de olhos fechados!"</p>
                            <p className="mt-4 font-semibold text-white">- Dr. Maria Oliveira</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-black/70 border-red-600/30">
                        <CardContent className="pt-6">
                            <p className="text-gray-300 italic">"O SofVet não foi apenas uma aquisição, foi uma transformação para nossa clínica.
Integrou todos os setores, da recepção ao pós-consulta, eliminando retrabalhos.
A clareza nos relatórios financeiros nos deu um controle que não tínhamos antes.
A paz mental de ter tudo organizado é impagável.
Indico para qualquer veterinário que queira crescer com profissionalismo!"</p>
                            <p className="mt-4 font-semibold text-white">- Dra. Ana Costa</p>
                        </CardContent>
                    </Card>
                    {/* Mais depoimentos */}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
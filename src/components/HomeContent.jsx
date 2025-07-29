import imgfundocontent from '../assets/imgfundocontent.png';
import funcionario from '../assets/funcionario.png';

export default function HomeContent() {
    return (
        <section
            className="w-full relative">
            <div>
                <img
                    src={imgfundocontent}
                    alt="Imagem de uma plantação de milho"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="absolute top-16 right-20 w-[650px] h-[400px] px-20 flex items-center">
                <p className="text-white text-xl leading-relaxed">
                    Na Chicago Foods, temos o compromisso de fornecer derivados de
                    milho de alta qualidade adaptados para atender à sua marca própria.
                    <br />
                    <br />
                    Nossa flexibilidade e capacidade de produção nos tornam o parceiro
                    ideal para atender às suas necessidades exclusivas e em expansão no
                    mercado norte-americano.
                    <br />
                    <br />
                    Vamos transformar suas ideias em produtos que geram valor e confiança!
                </p>
            </div>

            <img
                src={funcionario}
                alt="Imagem de um funcionário em uma plantação de milho"
                className="absolute left-56 top-16 w-[420px] h-[500px] object-cover shadow-lg rounded-2xl"
            />

            <div className="relative py-20 px-8 md:px-32 text-gray-800">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    🌽 Transformamos Derivados de Milho em Alimentos e Rações
                </h2>
                <p className="mb-4">
                    Com foco em eficiência e aproveitamento integral do milho, produzimos:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Rações balanceadas para diversos tipos de animais;</li>
                    <li>Alimentos derivados para o consumo humano;</li>
                    <li>Ingredientes industriais e aditivos de base vegetal.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-2">Produção Personalizada</h3>
                <p className="mb-4">Capacidade de adaptação para atender especificações exclusivas.</p>
            
                <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
                <p className="mb-4">
                    Processos controlados para os mais altos padrões alimentícios.
                </p>

                <h3 className="text-xl font-semibold mb-2">Qualidade e Segurança como Prioridade</h3>
                <p className="mb-4">
                    Da armazenagem de grãos e fertilizantes à transformação industrial, garantimos processos
                    controlados, rastreabilidade total e padrão internacional de segurança alimentar,
                    respeitando o meio ambiente e o produtor rural.
                </p>

                <h3 className="text-xl font-semibold mb-2">Localização Estratégica</h3>
                <p className="mb-4">
                    Facilita exportações para mercados internacionais. Nosso complexo conta com silos,
                    centros de distribuição e unidades de produção altamente automatizadas, posicionando
                    a CHIGAGO FOODS entre as mais completas estruturas do agronegócio brasileiro.
                </p>

                <h3 className="text-xl font-semibold mb-2">Prontos para Atender Sua Operação</h3>
                <p className="mb-4">
                    Com o compromisso de investir em novas máquinas e expandir conforme necessário,
                    oferecemos a flexibilidade que seu mercado exige.
                </p>

                <p className="mb-4">
                    Vamos construir juntos uma relação de confiança e crescimento.
                </p>

                <h3 className="text-xl font-semibold mb-2">Compromisso com Quem Alimenta o Mundo</h3>
                <p>
                    Trabalhamos lado a lado com produtores, cooperativas e distribuidores, levando ao mercado
                    soluções nutritivas, sustentáveis e acessíveis, do campo à mesa.
                </p>
            </div>
        </section>
    );
}

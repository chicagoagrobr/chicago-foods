import { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import empresa from '../assets/empresa.png';
import empresa1 from '../assets/empresa3.png';
import empresa2 from '../assets/empresa2.png';
import funcionario from '../assets/funcionario.png';
import img1 from '../assets/fundo1.png';
import img2 from '../assets/fundo2.jpeg';
import img3 from '../assets/fundo3.jpeg';
import img4 from '../assets/fundo4.jpeg';
import CepeaWidget from '../components/CepeaWidget';

const images = [img1, img2, img3, img4];

export default function HomeContent() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
    }, []);

    return (
    <section
        className="w-full relative"
        style={{ boxShadow: `inset 0px -4px 6px rgba(0,0,0,0.10)` }}
    >
        <div className="relative w-full h-[500px] overflow-hidden">
            <img
            src={images[currentImage]}
            alt="Imagem do carrossel"
            className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 pointer-events-none" />
        </div>

        <div className="absolute top-16 right-20 w-[680px] max-w-[90%] h-auto flex items-center mt-2">
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-8 text-lime-50 shadow-lg">
                <div className="space-y-6 text-base md:text-lg leading-relaxed">
                    <div>
                        <div className="flex items-center gap-2 text-orange-200 font-semibold mb-1">
                        <FaCheckCircle size={20} className="text-green-400" />
                        <span>Produção Personalizada:</span>
                        </div>
                        <p>Capacidade de adaptação para atender especificações exclusivas.</p>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-orange-200 font-semibold mb-1">
                        <FaCheckCircle size={20} className="text-green-400" />
                        <span>Qualidade e Segurança como Prioridade:</span>
                        </div>
                        <p>
                        Processos controlados, rastreabilidade total e padrão internacional de segurança alimentar,
                        respeitando o meio ambiente e o produtor rural.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-orange-200 font-semibold mb-1">
                        <FaCheckCircle size={20} className="text-green-400" />
                        <span>Localização Estratégica:</span>
                        </div>
                        <p>
                        Complexo com silos, centros de distribuição e unidades de produção automatizadas,
                        posicionando a <span className="text-orange-300 font-semibold">CHIGAGO FOODS</span> entre as mais completas estruturas do agronegócio brasileiro.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <img
            src={funcionario}
            alt="Funcionário"
            className="absolute left-56 top-16 w-[420px] h-[500px] object-cover shadow-lg rounded-2xl"
        />

        <div className="w-full flex justify-center px-4 mt-24">
            <p className="max-w-[1200px] text-xl md:text-2xl p-6">
                Na <span className="font-semibold text-orange-400">Chicago Foods</span>, temos o compromisso de fornecer derivados de milho de alta qualidade adaptados para atender à sua marca própria.
                Nossa flexibilidade e capacidade de produção nos tornam o parceiro ideal para atender às suas necessidades exclusivas e em expansão no mercado norte-americano.
                Vamos transformar suas ideias em produtos que geram valor e confiança.
            </p>
        </div>

        <div className="w-full h-[600px] relative flex">
            <img
                src={empresa}
                alt="Imagem da empresa"
                className="absolute left-[22%] top-48 w-[420px] max-h-[500px] rounded-2xl shadow-2xl"
            />
            <img
                src={empresa1}
                alt="Imagem da empresa"
                className="absolute left-[6%] top-28 w-[320px] rounded-2xl shadow-2xl"
            />
            <img
                src={empresa2}
                alt="Imagem da empresa"
                className="absolute left-[26%] top-14 w-[420px] max-h-[500px] rounded-2xl shadow-2xl"
            />
            <div className="absolute top-[310px] right-[15%] shadow-2xl">
                <CepeaWidget/>
            </div>

            <div className="absolute right-[8%] top-20">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Transformamos Derivados de <span className="font-semibold text-orange-400">Milho</span>
                    <br/> em Alimentos e Rações
                </h2>
                <p className="mb-4">
                    Com foco em eficiência e aproveitamento integral do milho, produzimos:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-800">
                    <li>Rações balanceadas para diversos tipos de animais;</li>
                    <li>Alimentos derivados para o consumo humano;</li>
                    <li>Ingredientes industriais e aditivos de base vegetal.</li>
                </ul>
            </div>

        </div>

        <div className="relative mt-20 pb-20 px-8 md:px-32 text-gray-800">

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

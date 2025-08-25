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
import colaboracao from '../assets/colaboracao.jpeg'
import CepeaWidget from '../components/CepeaWidget';

const images = [img1, img2, img3, img4];

const allImages = [
  img1, img2, img3, img4,
  empresa, empresa1, empresa2,
  funcionario, colaboracao
];


export default function HomeContent() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        allImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
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

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-0 relative -mt-[430px] items-center ">
                <div className="flex justify-center sm:justify-start -mt-[10px]">
                    <img
                        src={funcionario}
                        alt="Funcionário"
                        className="w-[320px] lg:w-[380px] h-[500px] medium:ml-12 lg:ml-10 xl:ml-24 object-cover shadow-2xl rounded-2xl"
                    />
                </div>
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-8 text-lime-50 shadow-2xl medium:mr-14 sm:-mt-[90px] md:-mt-[100px] lg:mr-6 ">
                    <div className="space-y-6 sm:text-xs medium:text-sm lg:text-base xl:text-lg leading-relaxed">
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

            <div className="w-full flex justify-center px-4 mt-8 md:mt-24">
                <p className="max-w-[1200px] text-xl md:text-2xl p-6">
                    Na <span className="font-semibold text-orange-400">Chicago Foods</span>, temos o compromisso de fornecer derivados de milho de alta qualidade adaptados para atender à sua marca própria.
                    Nossa flexibilidade e capacidade de produção nos tornam o parceiro ideal para atender às suas necessidades exclusivas e em expansão no mercado norte-americano.
                    Vamos transformar suas ideias em produtos que geram valor e confiança.
                </p>
            </div>

            <div className="w-full py-10 px-4 mb-6 flex justify-center">
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="w-full h-[400px] relative flex xxs:-mt-24 md:mt-0">
                        <img
                            src={empresa}
                            alt="Imagem da empresa"
                            className="absolute left-[26%] big:left-[34%] top-56 md:top-40 xxs:w-[210px] lg:w-[300px] xl:w-[340px] overflow-hidden rounded-2xl shadow-2xl"
                        />
                        <img
                            src={empresa1}
                            alt="Imagem da empresa"
                            className="absolute lg:left-[6%] big:left-[12%] top-32 md:top-16 xxs:w-[220px] lg:w-[260px] overflow-hidden rounded-2xl shadow-2xl"
                        />
                        <img
                            src={empresa2}
                            alt="Imagem da empresa"
                            className="absolute left-[29%] big:left-[40%] top-16 md:top-4 lg:top-2 xxs:w-[205px] lg:w-[300px] xl:w-[360px] overflow-hidden rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div className="flex flex-col gap-8 text-center text-lg md:text-sm xl:text-lg md:text-left">
                        <div>
                            <h2 className="text-xl big:text-2xl sm:text-3xl md:text-xl xl:text-2xl font-semibold mb-4">
                                Transformamos Derivados de <span className="text-orange-400">Milho</span> <br /> em Alimentos e Rações
                            </h2>
                            <p className="mb-4 sm:text-left">
                                Com foco em eficiência e aproveitamento integral do milho, produzimos:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-green-800 text-left">
                                <li>Rações balanceadas para diversos tipos de animais;</li>
                                <li>Alimentos derivados para o consumo humano;</li>
                                <li>Ingredientes industriais e aditivos de base vegetal.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center md:justify-start md:-ml-10 xl:ml-0 -mt-10">
                            <div className="scale-75 xs:scale-90 big:scale-100 md:scale-75 xl:scale-100">
                                <CepeaWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative px-6 mb-24 md:px-32 max-w-[1600px] mx-auto" >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-green-800">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Prontos para Atender Sua Operação
                    </h3>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Com o compromisso de investir em novas máquinas e expandir conforme necessário,
                    oferecemos a flexibilidade que seu mercado exige.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    Vamos construir juntos uma relação de confiança e crescimento.
                    </p>
                </div>
            </div>

            <div className="relative w-full h-[300px]">
                <img
                    src={colaboracao}
                    alt="Colaboração entre pessoas"
                    className="w-full h-full object-cover blur-xs"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
                    <h3 className="text-2xl font-semibold mb-2"><span className="text-orange-300">Compromisso</span> com Quem Alimenta o Mundo</h3>
                    <p className="max-w-2xl">
                        Trabalhamos lado a lado com produtores, cooperativas e distribuidores, levando ao mercado
                        soluções nutritivas, sustentáveis e acessíveis, do campo à mesa.
                    </p>
                </div>
            </div>
        </section>
    );
}

import caminhao from '../assets/caminhao.jpeg';
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

            <img
                src={funcionario}
                alt="Imagem de um funcionário em uma plantação de milho"
                className="absolute left-56 top-16 w-[420px] h-[500px] object-cover shadow-lg rounded-2xl"
            />

            <div className="max-w-5xl mx-auto px-4 pt-32 text-center">
                <h2 className="text-2xl font-title text-ambar-900 mb-4">Bem-vindo à Chicago Foods</h2>
                <p className="text-orange-950 text-base font-body">
                    Aqui você encontra os melhores produtos com qualidade e sabor incomparáveis.
                </p>
                <div className="text-center">
                    <img
                        src={caminhao}
                        alt="Caminhão no campo juntamente com logo da empresa Chicago Foods"
                        className="w-1/3 rounded-lg shadow-md mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}

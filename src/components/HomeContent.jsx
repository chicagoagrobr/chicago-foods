import caminhao from '../assets/caminhao.jpeg';

export default function HomeContent(){
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-title text-ambar-900 mb-4">Bem-vindo à Chicago Foods</h2>
            <p className="text-orange-950 text-base font-body">
                Aqui você encontra os melhores produtos com qualidade e sabor incomparáveis.
            </p>
            <div className='text-center'>
                <img src= {caminhao} alt="Caminhão no campo juntamente com logo da empresa Chicago Foods" className="w-1/3 rounded-lg shadow-md" />
            </div>
        </section>
    )
}

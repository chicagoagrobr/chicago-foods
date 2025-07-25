import caminhao from '../assets/caminhao.jpeg';

export default function HomeContent(){
    return (
        <section className="w-full py-10"
            style={{
                boxShadow: `inset 0px 4px 8px rgba(0,0,0,0.15), inset 0px -4px 8px rgba(0,0,0,0.15)`
            }}
        >
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-title text-ambar-900 mb-4">Bem-vindo à Chicago Foods</h2>
                <p className="text-orange-950 text-base font-body">
                    Aqui você encontra os melhores produtos com qualidade e sabor incomparáveis.
                </p>
                <div className='text-center'>
                    <img src= {caminhao} alt="Caminhão no campo juntamente com logo da empresa Chicago Foods" className="w-1/3 rounded-lg shadow-md" />
                </div>
            </div>
        </section>
    )
}

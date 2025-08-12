import nome from '../assets/nome.png';
import logo from '../assets/cf.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-orange-100 text-sm font-medium">
      <div className="max-w-7xl mx-auto py-8 px-4 grid md:grid-cols-3 gap-4 items-start">

        <div className="flex flex-col md:items-left gap-1 -mt-1">
          <div className="flex items-center space-x-1">
            <img src={logo} alt="Logo Chicago Foods" className="w-[105px]" />
            <img src={nome} alt="Nome Chicago Foods" className="h-[57px]" />
          </div>
          <p className="md:text-left leading-relaxed">
            Chicago Foods. Distrito Agroindustrial de<br/> Jataí, GO - Av. Primária Qd 07
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-8">
          <div className="flex flex-col items-start text-left gap-2">
            <h3 className="text-lg text-orange-300">Seja um Parceiro</h3>
            <p className="text-sm max-w-xs">
              Trabalhamos lado a lado com quem alimenta o mundo. Junte-se a nós.
            </p>
            <Link
              to="/contato"
              className="text-orange-300 text-lg font-bold hover:text-orange-400"
              onClick={() => window.scrollTo(0,0)}
            >
              Faça Parte
            </Link>
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <p>&copy; {new Date().getFullYear()} Chicago Foods</p>
            <p>Todos os direitos reservados.</p>
            <Link to="#" className="text-orange-300 hover:text-orange-400">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

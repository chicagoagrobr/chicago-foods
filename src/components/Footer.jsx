import nome from '../assets/nome.avif';
import logo from '../assets/cf.avif';
import { Link } from 'react-router-dom';

export default function Footer({ lang }) {
  return (
    <footer className="bg-green-800 text-orange-100 text-sm font-medium">
      <div className="max-w-7xl mx-auto py-8 px-4 grid medium:grid-cols-3 gap-4 items-start">

        <div className="flex flex-col medium:items-left gap-1 -mt-1">
          <div className="flex items-center space-x-1">
            <img src={logo} alt="Logo Chicago Foods" className="w-[105px]" />
            <img src={nome} alt="Nome Chicago Foods" className="h-[57px]" />
          </div>
          <p className="medium:text-left leading-relaxed">
            {lang === "pt" ? (
              <>
                Chicago Foods. Distrito Agroindustrial de<br /> Jataí, GO - Av. Primária Qd 07
              </>
            ) : (
              <>
                Chicago Foods. Agroindustrial District of<br /> Jataí, GO - Av. Primária Qd 07
              </>
            )}
          </p>
        </div>

        <div className="medium:col-span-2 flex flex-col medium:flex-row justify-end gap-8">

          <div className="flex flex-col items-start text-left gap-2">
            <h3 className="text-lg">
              {lang === "pt" ? "Seja um Parceiro" : "Become a Partner"}
            </h3>
            <p className="text-sm max-w-xs">
              {lang === "pt"
                ? "Trabalhamos lado a lado com quem alimenta o mundo. Junte-se a nós."
                : "We work side by side with those who feed the world. Join us."}
            </p>
            <Link
              to="/contato"
              className="text-orange-300 text-base hover:text-orange-400"
              onClick={() => window.scrollTo(0, 0)}
            >
              {lang === "pt" ? "Faça Parte" : "Join Us"}
            </Link>
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <p>&copy; {new Date().getFullYear()} Chicago Foods</p>
            <p>
              {lang === "pt"
                ? "Todos os direitos reservados."
                : "All rights reserved."}
            </p>
            <Link to="/politica" className="text-orange-300 hover:text-orange-400">
              {lang === "pt"
                ? "Política de Privacidade"
                : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

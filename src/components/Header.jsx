import nome from '../assets/nome.png';
import logo from '../assets/cf.png';
import { Link } from "react-router-dom";
import { Home, Boxes, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-green-800 py-3.5 sticky top-0 z-50 shadow-md shadow-green-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-1 transition-transform duration-300 hover:scale-105">
          <img src= {logo} alt="Logo da empresa: Chicago Foods" className="w-[104px]" />
          <img src= {nome} alt="Nome da empresa: Chicago Foods" className="h-[59px] mt-1" />
        </div>
        <nav className="flex items-center justify-center gap-x-16 p-3">
          <Link to="/" className="flex items-center gap-2 text-orange-100 text-sm hover:text-orange-300 px-6 transitions-all duration-200">
          <Home className="w-5 h-5"/>
          Home
          </Link>
          <Link to="/produtos" className="flex items-center gap-2 text-orange-100 text-sm hover:text-orange-300 transitions-all duration-200">
          <Boxes className="w-5 h-5"/>
          Produtos
          </Link>
          <Link to="/contato" className="flex items-center gap-2 text-orange-100 text-sm hover:text-orange-300 transition-all duration-200 ml-4">
          <Mail className="w-5 h-5"/>
          Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

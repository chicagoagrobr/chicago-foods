import nome from '../assets/nome.png';
import logo from '../assets/cf.png';
import { Link } from "react-router-dom";
import { Home, Boxes } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-green-800 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src= {logo} alt="Logo da empresa: Chicago Foods" className="w-32 h-20" />
          <img src= {nome} alt="Nome da empresa: Chicago Foods" className="w-42 h-20" />
        </div>
        <nav className="flex items-center justify-center gap-x-12 p-3">
          <Link to="/" className="flex items-center gap-2 text-orange-200 hover:text-orange-400">
          <Home className="w-5 h-5"/>
          Home
          </Link>
          <Link to="/produtos" className="flex items-center gap-2 text-orange-200 hover:text-orange-400">
          <Boxes className="w-5 h-5"/>
          Produtos
          </Link>
        </nav>
      </div>
    </header>
  );
}

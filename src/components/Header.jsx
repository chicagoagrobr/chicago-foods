import nome from '../assets/nome.png';
import logo from '../assets/cf.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-800 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img src= {logo} alt="Logo da empresa: Chicago Foods" className="h-20" />
          <img src= {nome} alt="Nome da empresa: Chicago Foods" className="h-20" />
        </div>
        <nav className="flex items-center justify-center gap-x-12 p-3">
          <Link to="/" className="text-lime-200 text-sm hover:text-orange-400">Home</Link>
          <Link to="/produtos" className="text-lime-200 text-sm hover:text-orange-400">Produtos</Link>
        </nav>
      </div>
    </header>
  );
}

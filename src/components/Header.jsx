import { useState } from "react";
import { Search } from "lucide-react";
import nome from '../assets/nome.png';
import logo from '../assets/cf.png';

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-amber-950 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img src= {logo} alt="Logo da empresa: Chicago Foods" className="h-20" />
          <img src= {nome} alt="Nome da empresa: Chicago Foods" className="h-20" />
        </div>

        <div className="relative w-52">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-xs font-normal rounded-full px-4 py-2 bg-white placeholder-gray-500 border border-gray-300 shadow-inner focus:outline-none w-full"
          />
          <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}

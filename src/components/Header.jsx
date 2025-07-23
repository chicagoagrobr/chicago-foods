import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-blue-300 flex items-center justify-between p-4">
      <div className="text-2xl font-bold text-green-700 tracking-wide">
        Chicago Agro Br
      </div>
      <nav className="flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
        <Link to="/produto" className="text-gray-700 hover:text-green-700">Produto</Link>
        <Link to="/contato" className="text-gray-700 hover:text-green-700">Contato</Link>
      </nav>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1"
      />
    </header>
  );
}
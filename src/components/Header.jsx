import { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-blue-300 flex items-center justify-between p-4">
      <div className="text-2xl font-bold text-green-700 tracking-wide">
        Chicago Agro Br
      </div>

      <div className="relative w-48">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-sm font-normal rounded-full px-4 py-2 bg-white placeholder-gray-600 placeholder:font-semibold border border-gray-300 shadow-innner focus:outline-none"
          />
          <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none"></Search>
      </div>
    </header>
  );
}

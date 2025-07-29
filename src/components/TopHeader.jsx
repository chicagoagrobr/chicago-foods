import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Phone } from "lucide-react";

export default function SubHeader() {
    const [search, setSearch] = useState("");

    return (
        <div className="bg-lime-200 font-body py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/contato" className="text-green-900 text-sm hover:text-orange-400 flex items-center gap-1">
                    Contato
                    <Phone className="w-4 h-4" />
                </Link>

                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="text-sm rounded-full px-4 py-2  pl-5  pr-10 bg-lime-200 placeholder-gray-600 border border-green-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all w-full"
                    />
                    <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}

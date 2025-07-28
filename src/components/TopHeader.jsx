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
        </div>
    );
}

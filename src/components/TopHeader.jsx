import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Phone } from "lucide-react";

export default function SubHeader() {
    const [search, setSearch] = useState("");

    return (
        <div className="bg-lime-200 font-body py-3" style={{boxShadow: `inset 0px 4px 12px rgba(0,0,0,0.15), inset 0px -4px 8px rgba(0,0,0,0.25)`}}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                <Link to="/contato" className="text-green-900 font-semibold text-sm hover:text-orange-500 transition-colors duration-200 flex items-center gap-1">
                    Contato
                    <Phone className="w-4 h-5" />
                </Link>

                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="text-sm font-semibold rounded-full px-4 py-2 pl-5 pr-10 bg-lime-50
                        placeholder-green-800 w-full focus:outline-none
                        focus:ring-2 focus:ring-green-900 transition-all duration-200"
                    />
                    <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-green-900 w-5 h-5 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}

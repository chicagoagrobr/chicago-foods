import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Phone } from "lucide-react";

const keywordMap = [
    { keywords: ['contato', 'fale', 'suporte', 'orçamento', 'email', 'endereço'], path: '/contato', label:'Página de Contato'},
    { keywords: ['sobre', 'empresa', 'quem somos'], path: '/', label: 'Sobre Nós'},
    { keywords: ['produto', 'serviço', 'oferta', 'milho', 'canjica', 'fuba', 'germen', 'gritz'], path: '/produtos', label:'Produtos'},
];


export default function SubHeader() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    function normalize(text) {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    function searchRedirect() {
        const userInput = normalize(search);

        const match = keywordMap.find(item =>
            item.keywords.some(keyword => userInput.includes(normalize(keyword)))
        );

        if (match) {
            navigate(match.path);

            setTimeout(() => {
                window.scrollTo({
                    top: 100,
                    behavior: "smooth"
                });
            }, 100);
        } else {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000);
        }
    }
    
    return (
        <div className="bg-lime-200 font-body py-3" style={{boxShadow: `inset 0px -4px 8px rgba(0,0,0,0.2)`}}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                <Link to="/contato" className="text-green-900 font-semibold text-xs sm:text-sm transition-transform duration-300 hover:scale-105 flex items-center gap-1">
                    Fale Conosco!
                    <Phone className="w-4 h-5 xxs:hidden xs:flex" />
                </Link>

                <div className="relative w-64 pl-12 sm:pl-0">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') searchRedirect()}}
                        className="text-sm font-semibold rounded-full px-4 py-2 pl-5 pr-10 bg-lime-50
                        placeholder-green-800 w-full focus:outline-none
                        focus:ring-2 focus:ring-green-900 transition-all duration-200"
                    />
                    <button
                        onClick={searchRedirect}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-green-900 w-5 h-5 flex items-center justify-center"
                        aria-label="Pesquisar"
                    >
                        <Search className="w-5 h-5"/>
                    </button>
                </div>
            </div>
            
            {showToast && (
                <div className="fixed bottom-5 right-5 bg-white px-4 py-3 rounded shadow-lg animate-slide-in z-50">
                    Nenhuma página encontrada para sua pesquisa. <br />
                    Tente palavras como: <strong>oferta, orçamento, quem somos...</strong>
                </div>
            )}

            <style jsx>{`
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

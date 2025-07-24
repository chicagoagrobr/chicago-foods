import { Link } from "react-router-dom";

export default function SubHeader() {

    return (
        <nav className="bg-amber-900 font-body flex items-center justify-center gap-x-12 p-3"
            style={{
                boxShadow: `
                inset 0 4px 8px rgba(0, 0, 0, 0.25),
                inset 0 -4px 8px rgba(0, 0, 0, 0.25)
                `
            }}
        >
            <Link to="/" className="text-orange-200 text-sm hover:text-orange-400">Home</Link>
            <Link to="/produto" className="text-orange-200 text-sm hover:text-orange-400">Produtos</Link>
            <Link to="/contato" className="text-orange-200 text-sm hover:text-orange-400">Contato</Link>
        </nav>
    );
}

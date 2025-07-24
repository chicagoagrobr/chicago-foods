import { Link } from "react-router-dom";

export default function SubHeader() {

    return (
        <nav className="bg-amber-900 flex items-center justify-center gap-x-12 p-3"
            style={{
                boxShadow: `
                inset 0 4px 6px rgba(0, 0, 0, 0.3),
                inset 0 -4px 4px rgba(0, 0, 0, 0.2)
                `
            }}
        >
            <Link to="/" className="text-orange-200">Home</Link>
            <Link to="/produto" className="text-orange-200">Produto</Link>
            <Link to="/contato" className="text-orange-200">Contato</Link>
        </nav>
    );
}

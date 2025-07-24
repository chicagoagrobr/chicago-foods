import { Link } from "react-router-dom";

export default function SubHeader() {

    return (
        <nav className="bg-amber-900 flex items-center justify-between p-4 flex gap-6">
            <Link to="/" className="text-orange-200">Home</Link>
            <Link to="/produto" className="text-orange-200">Produto</Link>
            <Link to="/contato" className="text-orange-200">Contato</Link>
        </nav>
    );
}

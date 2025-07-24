import { Link } from "react-router-dom";

export default function SubHeader() {

    return (
        <nav className="bg-blue-300 flex items-center justify-between p-4 flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
            <Link to="/produto" className="text-gray-700 hover:text-green-700">Produto</Link>
            <Link to="/contato" className="text-gray-700 hover:text-green-700">Contato</Link>
        </nav>
    );
}

export default function Footer(){
    return (
        <footer className="bg-green-800 text-orange-200 text-sm">
            <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="font-body text-center md:text-left">
                    &copy; {new Date().getFullYear()} Chicago Foods. Todos os direitos reservados.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-orange-400 transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-orange-400 transition-colors">Contato</a>
                </div>
            </div>
        </footer>
    );
}

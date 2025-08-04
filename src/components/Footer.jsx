export default function Footer(){
    return (
        <footer className="bg-green-800 text-orange-100 text-sm font-semibold">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="font-body text-center md:text-left">
                    &copy; {new Date().getFullYear()} Chicago Foods. Todos os direitos reservados.
                </p>

                <div className="flex gap-16">
                    <a href="#" className="hover:text-orange-300 transition-colors">Política de Privacidade</a>
                    <a href="/contato" className="hover:text-orange-300 transition-colors">Contato</a>
                </div>
            </div>
        </footer>
    );
}

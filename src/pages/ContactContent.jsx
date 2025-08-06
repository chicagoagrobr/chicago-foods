import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import colaboracao from '../assets/colaboracao.jpeg'

export default function ContactContent() {
  return (
    <section className="min-h-screen text-gray-800" style={{ boxShadow: `inset 0px -4px 6px rgba(0,0,0,0.10)`}}>
      <div className="relative w-full h-[200px] bg-gradient-to-b from-black/100">
        <img
            src={colaboracao}
            alt="Colaboração entre pessoas"
            className="w-full h-full object-cover blur-xs" style={{ boxShadow: `0px 4px 16px rgba(0,0,0,0.4)`}}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
            <h3 className="text-2xl font-semibold mb-2"><span className="text-orange-300">Fale Conosco</span></h3>
            <p className="max-w-2xl">
                Estamos à disposição para tirar dúvidas, receber sugestões e iniciar novas parcerias.
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-4 bg-white p-8 rounded-xl shadow-xl">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="email@exemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Assunto</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                className="w-full border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Digite sua mensagem..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900 transition"
            >
              Enviar
            </button>
          </form>


          <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>

            <div className="flex items-start gap-4 mb-4">
              <FaEnvelope className="text-green-800 mt-1" />
              <div>
                <p className="font-medium">E-mail</p>
                <p>contato@chicagofoods.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <FaPhoneAlt className="text-green-800 mt-1" />
              <div>
                <p className="font-medium">Telefone</p>
                <p>(64) 99964-2170</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <FaMapMarkerAlt className="text-green-800 mt-1" />
              <div>
                <p className="font-medium">Endereço</p>
                <p>Av. Primária Qd 07 - Distrito Agroindustrial de Jataí, GO</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-green-800">
              Responderemos sua mensagem o mais breve possível!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Fale Conosco
        </h2>

        <p className="text-center mb-12 text-lg text-gray-600">
          Estamos à disposição para tirar dúvidas, receber sugestões e iniciar novas parcerias.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <form className="space-y-4 bg-white p-8 rounded-xl shadow">
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


          <div className="bg-white p-8 rounded-xl shadow flex flex-col">
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

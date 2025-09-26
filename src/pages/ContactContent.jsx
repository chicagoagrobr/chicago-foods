import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import colaboracao from '../assets/colaboracao.avif'
import { useState, useEffect } from 'react';
import SEO from "../components/SEO";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    try {
      const emailjs = await import('emailjs-com');

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusMessage({
        type: "success",
        text: "Obrigado por entrar em contato! Responderemos em breve."
      });

      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
    } catch (err) {
      console.error("Erro:", err);
      setStatusMessage({
        type: "error",
        text: "Ops! Tivemos um problema ao enviar sua mensagem. Tente novamente."
      });
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <>
      <SEO
        title="Contato | Chicago Foods"
        description="Na Chicago Foods, temos o compromisso de fornecer derivados de milho de alta qualidade. Transformamos suas ideias em produtos que geram valor e confiança."
        url="https://chicagofoods.com.br/contato"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />

      <main className="min-h-0 text-gray-800">
        <a
          href="https://wa.me/5564999642170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-50">
            <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-white" />
          </button>
        </a>
        <section className="relative w-full h-[180px]">
          <img
            src={colaboracao}
            alt="Colaboração entre profissionais na indústria de milho"
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover"
            style={{ boxShadow: `0px 4px 12px rgba(0,0,0,0.35)` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
            <h1 className="text-2xl font-semibold mb-2">
              <span className="text-orange-300">Fale Conosco</span>
            </h1>
            <h2 className="max-w-2xl">
              Estamos à disposição para tirar dúvidas, receber sugestões e iniciar novas parcerias.
            </h2>
          </div>
        </section>

        <section className="max-w-4xl md:pl-2 xxs:pl-0 pr-2 mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <form
              aria-label="Formulário de contato"
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-8 rounded-xl shadow-2xl xxs:w-[280px] celular:w-[320px] big:w-full max-w-md mx-auto"
            >
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Seu nome"
                required
              />
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="email@exemplo.com"
                required
              />
              <label className="block text-sm font-medium mb-1">Assunto</label>
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Assunto da mensagem"
                required
              />
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Digite sua mensagem..."
                required
              ></textarea>
              <button
                disabled={sending}
                className={`px-6 py-2 rounded text-white transition ${
                  sending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-900"
                }`}
              >
                {sending ? "Enviando..." : "Enviar"}
              </button>
            </form>

            <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col xxs:w-[280px] celular:w-[320px] big:w-full max-w-md mx-auto">
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
        </section>

        {statusMessage && (
          <div
            className={`fixed animate-slide-in z-50 bottom-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white transition-opacity duration-500
              ${statusMessage.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {statusMessage.text}
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
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </main>
    </>
  );
}

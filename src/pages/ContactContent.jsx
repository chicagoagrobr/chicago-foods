import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import colaboracao from '../assets/colaboracao.avif';
import { useState, useEffect } from 'react';
import SEO from "../components/SEO";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function ContactContent({ lang }) {
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
        text: lang === "pt"
          ? "Obrigado por entrar em contato! Responderemos em breve."
          : "Thank you for contacting us! We will get back to you soon."
      });

      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
    } catch (err) {
      console.error("Erro:", err);
      setStatusMessage({
        type: "error",
        text: lang === "pt"
          ? "Ops! Tivemos um problema ao enviar sua mensagem. Tente novamente."
          : "Oops! There was a problem sending your message. Please try again."
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
        title={lang === "pt" ? "Contato | Chicago Foods" : "Contact | Chicago Foods"}
        description={lang === "pt"
          ? "Na Chicago Foods, temos o compromisso de fornecer derivados de milho de alta qualidade. Transformamos suas ideias em produtos que geram valor e confiança."
          : "At Chicago Foods, we are committed to providing high-quality corn-based products. We transform your ideas into products that create value and trust."
        }
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
            alt={lang === "pt"
              ? "Colaboração entre profissionais na indústria de milho"
              : "Collaboration between professionals in the corn industry"
            }
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover"
            style={{ boxShadow: `0px 4px 12px rgba(0,0,0,0.25)` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-orange-300">{lang === "pt" ? "Fale Conosco" : "Contact Us"}</span>
            </h1>
            <h2 className="max-w-2xl font-medium">
              {lang === "pt"
                ? "Estamos à disposição para tirar dúvidas, receber sugestões e iniciar novas parcerias."
                : "We are available to answer questions, receive suggestions, and start new partnerships."
              }
            </h2>
          </div>
        </section>

        <section className="max-w-4xl md:pl-2 xxs:pl-0 pr-2 mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <form
              aria-label={lang === "pt" ? "Formulário de contato" : "Contact form"}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-8 rounded-xl shadow-2xl xxs:w-[280px] celular:w-[320px] big:w-full max-w-md mx-auto"
            >
              <label className="block text-sm font-medium mb-1">{lang === "pt" ? "Nome" : "Name"}</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder={lang === "pt" ? "Seu nome" : "Your name"}
                required
              />

              <label className="block text-sm font-medium mb-1">{lang === "pt" ? "E-mail" : "Email"}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder={lang === "pt" ? "email@exemplo.com" : "email@example.com"}
                required
              />

              <label className="block text-sm font-medium mb-1">{lang === "pt" ? "Assunto" : "Subject"}</label>
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder={lang === "pt" ? "Assunto da mensagem" : "Subject of the message"}
                required
              />

              <label className="block text-sm font-medium mb-1">{lang === "pt" ? "Mensagem" : "Message"}</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder={lang === "pt" ? "Digite sua mensagem..." : "Type your message..."}
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
                {sending ? (lang === "pt" ? "Enviando..." : "Sending...") : (lang === "pt" ? "Enviar" : "Send")}
              </button>
            </form>

            <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col xxs:w-[280px] celular:w-[320px] big:w-full max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">{lang === "pt" ? "Informações de Contato" : "Contact Information"}</h3>

              <div className="flex items-start gap-4 mb-4">
                <FaEnvelope className="text-green-800 mt-1" />
                <div>
                  <p className="font-medium">{lang === "pt" ? "E-mail" : "Email"}</p>
                  <p>contato@chicagofoods.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <FaPhoneAlt className="text-green-800 mt-1" />
                <div>
                  <p className="font-medium">{lang === "pt" ? "Telefone" : "Phone"}</p>
                  <p>(64) 99964-2170</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <FaMapMarkerAlt className="text-green-800 mt-1" />
                <div>
                  <p className="font-medium">{lang === "pt" ? "Endereço" : "Address"}</p>
                  <p>{lang === "pt"
                    ? "Av. Primária Qd 07 - Distrito Agroindustrial de Jataí, GO"
                    : "Av. Primária Qd 07 - Jataí Industrial District, GO"
                  }</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-green-800">
                {lang === "pt"
                  ? "Responderemos sua mensagem o mais breve possível!"
                  : "We will respond to your message as soon as possible!"
                }
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

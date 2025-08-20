export default function PrivacyPolicyContent() {
  return (
    <section className="min-h-screen text-gray-800">

      <div className="relative flex items-center justify-center h-64">
        <div className="text-center px-6">
          <h1 className="text-lg sm:text-3xl mb-2 text-green-800 font-bold">Política de Privacidade</h1>
          <p className="max-w-2xl text-gray-700 mx-auto text-sm sm:text-lg">
            Este site não coleta, armazena ou compartilha informações pessoais de seus usuários. Nosso objetivo é fornecer informações sem necessidade de cadastro ou dados pessoais.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12 px-6 space-y-12">
        <div className="bg-white shadow-2xl hover:scale-105 transition rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Dados que não coletamos</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Nome, e-mail, telefone, endereço ou qualquer outro dado pessoal.</li>
            <li>Informações de geolocalização ou cookies para rastreamento.</li>
          </ul>
        </div>

        <div className="bg-white shadow-2xl hover:scale-105 transition rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Serviços externos</h2>
          <p className="text-gray-700">
            Nosso site utiliza apenas serviços externos para melhorar a experiência do usuário, como bibliotecas de fontes ou envio de formulários de contatos. Esses serviços não coletam dados pessoais diretamente para nós.
          </p>
        </div>

        <div className="bg-white shadow-2xl hover:scale-105 transition rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Segurança</h2>
          <p className="text-gray-700">
            Embora não coletemos informações pessoais, mantemos medidas técnicas para garantir que o site esteja seguro e funcionando corretamente.
          </p>
        </div>

        <div className="bg-white shadow-2xl hover:scale-105 transition rounded-lg p-8">
          <h2 className="text-2xl font-semibold">Atualizações</h2>
          <p className="text-gray-700">
            Esta política de privacidade pode ser atualizada ocasionalmente. Recomendamos que os usuários verifiquem periodicamente a página.
          </p>
        </div>
      </div>
    </section>
  );
}

import germen from './assets/germen.jpeg';
import fubafino from './assets/fubafino.jpeg';
import fubaitaliano from './assets/fubaitaliano.jpeg';
import fubamimoso from './assets/fubamimoso.jpeg';
import canjica from './assets/canjica.jpeg';
import canjicao from './assets/canjicao.jpeg';
import canjiquinha from './assets/canjiquinha.jpeg';
import gritz1 from './assets/gritz1.jpeg';
import gritz2 from './assets/gritz2.jpeg';
import gritz3 from './assets/gritz3.jpeg';
import mixpro from './assets/mixpro.jpeg';

const products = [
    {
      id: "fuba-italiano",
      name: "FUBÁ ITALIANO – Moagem Média",
      description:
        "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      longDesc:
        "O Fubá Italiano de Moagem Média combina tradição e tecnologia para oferecer uma textura encorpada e um toque gourmet que eleva a qualidade de receitas artesanais e industriais. Produzido a partir de grãos de milho selecionados, seu ponto de moagem proporciona equilíbrio entre maciez e estrutura, garantindo desempenho excepcional em processos de extrusão e preparações culinárias. É ideal para a produção de polentas autênticas, pratos congelados, snacks extrusados, cremes salgados, sopas espessas, farofas industriais e misturas de panificação. Sua textura marcante e sabor característico proporcionam alta aceitação sensorial, rendimento elevado, atendendo tanto ao segmento gourmet quanto ao mercado saudável e fitness.",
      image: fubaitaliano,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Produção de polentas e pratos prontos congelados", valor: "" },
            { caracteristica: "Indústria de salgadinhos e snacks extrusados (como base ou pré-gelatinizado)", valor: "" },
            { caracteristica: "Culinária gourmet (empacotados e food service)", valor: "" },
            { caracteristica: "Indústria de cremes salgados, sopas espessas e farofas industriais", valor: "" },
            { caracteristica: "Misturas de panificação e empanados", valor: "" },
            { caracteristica: "Produtos sem glúten (linha saudável e fitness)", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [{ caracteristica: "Peneiras ABNT", valor: "40 e 45" }]
        }
      ]
    },
    {
      id: "fuba-mimoso",
      name: "FUBÁ MIMOSO – Moagem Fina Tradicional",
      description:
        "Produto de textura suave e coloração uniforme, ideal para receitas tradicionais e aplicações industriais que demandam acabamento refinado.",
      longDesc: "Reconhecido pela suavidade e uniformidade, o Fubá Mimoso de Moagem Fina Tradicional é a escolha ideal para preparações que exigem acabamento delicado e textura aveludada. Produzido com rigoroso controle de qualidade, mantém coloração uniforme e granulometria precisa, favorecendo o preparo de bolos, biscoitos e pães de milho. Sua estrutura fina possibilita absorção e hidratação homogênea, o que garante massas mais leves e consistentes. Muito utilizado na indústria de alimentos instantâneos e pré-cozidos, bem como em cremes e sopas, oferece excelente desempenho técnico aliado a uma experiência sensorial agradável, atendendo desde pequenas produções artesanais até linhas industriais de alto padrão.",
      image: fubamimoso,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Produção de bolos, biscoitos e pães de milho", valor: "" },
            { caracteristica: "Indústria de alimentos instantâneos e pré-cozidos", valor: "" },
            { caracteristica: "Misturas para panificação e confeitaria", valor: "" },
            { caracteristica: "Indústria de cremes e sopas", valor: "" },
            { caracteristica: "Produtos sem glúten para linhas saudáveis", valor: "" }
          ]
        },
        {
          title: "Físico-químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "2,00%" },
            { caracteristica: "Acidez (ml sol. 1N NaOH/100g) Máx.", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "450 a 600 g/L" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneira 25 (0,710 mm)", valor: "Máx. 1,00%" },
            { caracteristica: "Peneira 40 (0,355 mm)", valor: "50 – 65%" },
            { caracteristica: "Peneira 45 (0,355 mm)", valor: "10 – 20%" },
            { caracteristica: "Peneira 50 (0,850 mm)", valor: "Máx. 15,00%" },
            { caracteristica: "Peneira 60 (0,250 mm)", valor: "Máx. 5,00%" },
            { caracteristica: "Peneira 70 (0,212 mm)", valor: "Máx. 2,00%" },
            { caracteristica: "Peneira 80 (0,180 mm)", valor: "Máx. 2,00%" },
            { caracteristica: "Fundo", valor: "Máx. 2,00%" }
          ]
        }
      ]
    },
    {
      id: "fuba-fino",
      name: "FUBÁ FINO – Moagem Ultrafina",
      description:
        "Produto com alta dispersão e absorção, ideal para formulações fermentadas e panificação.",
      longDesc: "O Fubá Fino de Moagem Ultrafina é desenvolvido para aplicações que demandam máxima dispersão, absorção e delicadeza na textura. Sua moagem extremamente refinada potencializa a homogeneidade das formulações e favorece o desenvolvimento de massas leves e bem estruturadas, tornando-o indispensável para panificação e misturas fermentadas. Com alta performance em receitas como bolos, cookies, biscoitos e farinhas instantâneas, também é amplamente utilizado em cervejarias artesanais como adjunto fino e na formulação de alimentos infantis, onde a suavidade e qualidade nutricional são essenciais. Seu padrão físico-químico rigorosamente controlado assegura estabilidade, rendimento e uniformidade em processos industriais e artesanais.",
      image: fubafino,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Misturas para bolos e panificação industrial", valor: "" },
            { caracteristica: "Farinhas instantâneas e pré-cozidas", valor: "" },
            { caracteristica: "Indústria de biscoitos e cookies", valor: "" },
            { caracteristica: "Cervejarias artesanais (adjunto fino)", valor: "" },
            { caracteristica: "Indústria de alimentos infantis", valor: "" }
          ]
        },
        {
          title: "Físico-químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "2,00%" },
            { caracteristica: "Acidez (ml sol. 1N NaOH/100g) Máx.", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "450 a 600 g/L" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneira 45 (0,355 mm)", valor: "Máx. 0,00%" },
            { caracteristica: "Peneira 50 (0,850 mm)", valor: "Máx. 1,00%" },
            { caracteristica: "Peneira 60 (0,250 mm)", valor: "5 – 15%" },
            { caracteristica: "Peneira 70 (0,212 mm)", valor: "2 – 10%" },
            { caracteristica: "Peneira 80 (0,180 mm)", valor: "5 – 15%" },
            { caracteristica: "Fundo", valor: "Mín. 50,00%" }
          ]
        }
      ]
    },
    {
      id: "gritz-1",
      name: "GRITZ 1 – Granulação Fina",
      description: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez.",
      longDesc: "O GRITZ 1 é produzido a partir de grãos de milho rigorosamente selecionados e submetidos a um processo de moagem controlada, resultando em partículas de granulometria fina, uniformes e com excelente fluidez. Essa característica garante um desempenho superior em processos industriais que demandam homogeneidade, precisão e estabilidade na formulação. Sua baixa umidade e alta pureza asseguram maior vida útil, enquanto o controle rigoroso de partículas reduz desperdícios e melhora a eficiência produtiva. É amplamente utilizado na fabricação de cereais matinais (como corn flakes, flocos e extrusados), snacks, salgadinhos, panificação, massas pré-prontas, sopas desidratadas, misturas instantâneas e pet food premium. Sua versatilidade, associada ao controle granulométrico detalhado, torna o GRITZ 1 uma matéria-prima estratégica para indústrias que buscam padronização e qualidade constante.",
      image: gritz1,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Indústria de cereais matinais (corn flakes, flocos e extrusados)", valor: "" },
            { caracteristica: "Fabricação de snacks e salgadinhos extrusados", valor: "" },
            { caracteristica: "Panificação e massas pré-prontas", valor: "" },
            { caracteristica: "Base para sopas desidratadas", valor: "" },
            { caracteristica: "Misturas instantâneas", valor: "" },
            { caracteristica: "Pet food premium (ração seca)", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneiras ABNT 25 a 30", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Baixa umidade", valor: "" },
            { caracteristica: "Alta pureza", valor: "" },
            { caracteristica: "Controle rigoroso de partículas", valor: "" }
          ]
        },
        {
          title: "Especificações Físico-Químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "0,80%" },
            { caracteristica: "Acidez Máx. (ml sol. 1N de NaOH/100g)", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "600 a 750 g/L" },
            { caracteristica: "Pintas Pretas Máx.", valor: "50 / 100 g" },
            { caracteristica: "Películas Máx.", valor: "60 / 100 g" }
          ]
        },
        {
          title: "Granulometria Detalhada",
          data: [
            { caracteristica: "Peneira 16 (0,118 mm)", valor: "Máx. 1,00%" },
            { caracteristica: "Peneira 25 (0,710 mm)", valor: "10 - 25%" },
            { caracteristica: "Peneira 30 (0,600 mm)", valor: "65 – 85%" },
            { caracteristica: "Peneira 35 (0,500 mm)", valor: "15 – 30%" },
            { caracteristica: "Peneira 40 (0,425 mm)", valor: "5 - 10%" },
            { caracteristica: "Peneira 45 (0,355 mm)", valor: "Máx. 5,00%" },
            { caracteristica: "Peneira 50 (0,850 mm)", valor: "Máx. 5,00%" },
            { caracteristica: "Fundo", valor: "Máx. 1,00%" }
          ]
        }
      ]
    },
    {
      id: "gritz-2",
      name: "GRITZ 2 – Granulação Intermediária",
      description: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade.",
      longDesc: "O GRITZ 2 apresenta um ponto de granulação intermediário que equilibra estrutura e solubilidade, atendendo a um amplo espectro de aplicações industriais. Com partículas uniformes e retenção mínima de 50% na peneira ABNT 16, oferece excelente absorção de líquidos e estabilidade térmica durante o cozimento, características essenciais para processos como a produção de cerveja (como adjunto cervejeiro), rações extrusionadas, misturas para panificação, molhos espessantes e alimentos congelados. Sua granulometria otimizada possibilita melhor rendimento e textura nas formulações, preservando o sabor e garantindo consistência no produto final. Com qualidade controlada desde a seleção do milho até a embalagem, o GRITZ 2 é a escolha ideal para indústrias que buscam desempenho técnico aliado à versatilidade produtiva.",
      image: gritz2,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Indústria cervejeira (adjunto cervejeiro)", valor: "" },
            { caracteristica: "Rações extrusionadas e suplementos animais", valor: "" },
            { caracteristica: "Misturas de panificação industrial", valor: "" },
            { caracteristica: "Ingrediente para molhos espessantes", valor: "" },
            { caracteristica: "Indústria de alimentos congelados", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Retenção mínima de 50% na peneira ABNT 16", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Boa absorção de líquidos", valor: "" },
            { caracteristica: "Estabilidade no cozimento", valor: "" }
          ]
        },
        {
          title: "Especificações Físico-Químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "0,80%" },
            { caracteristica: "Acidez Máx. (ml sol. 1N de NaOH/100g)", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "600 a 750 g/L" }
          ]
        },
        {
          title: "Granulometria Detalhada",
          data: [
            { caracteristica: "Peneira 12 (0,700 mm)", valor: "Máx. 5,00%" },
            { caracteristica: "Peneira 16 (1,180 mm)", valor: "Mín. 50,00%" },
            { caracteristica: "Peneira 20 (0,850 mm)", valor: "25 – 35%" },
            { caracteristica: "Peneira 40 (0,425 mm)", valor: "Máx. 15,00%" },
            { caracteristica: "Fundo", valor: "Máx. 2,00%" }
          ]
        }
      ]
    },
    {
      id: "mixpro",
      name: "MIXPRO – Mistura de Gritz 1 e Gritz 2",
      description: "Blend desenvolvido para oferecer equilíbrio entre solubilidade e estrutura, unindo as características de duas granulometrias diferentes.",
      longDesc: "O MIXPRO foi desenvolvido para unir o melhor de duas granulometrias em um único produto: a fluidez e homogeneidade do GRITZ 1 com a estrutura e retenção do GRITZ 2. Essa combinação estratégica proporciona um equilíbrio perfeito entre solubilidade e resistência, resultando em um desempenho estável em diferentes processos industriais. É indicado para fabricação de snacks extrusados, panificação, massas pré-prontas, adjuntos cervejeiros, misturas para sopas, cremes e molhos, além de rações extrusionadas. Sua composição híbrida reduz a necessidade de múltiplos insumos, gerando economia logística e simplificação no controle de estoque, sem abrir mão da qualidade e da padronização do produto final. O MIXPRO é ideal para indústrias que buscam eficiência operacional e flexibilidade de uso.",
      image: mixpro,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Fabricação de snacks e salgadinhos extrusados", valor: "" },
            { caracteristica: "Panificação industrial e massas pré-prontas", valor: "" },
            { caracteristica: "Adjuntos cervejeiros para microcervejarias", valor: "" },
            { caracteristica: "Misturas para sopas, cremes e molhos", valor: "" },
            { caracteristica: "Rações extrusionadas e suplementos animais", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Composição mista (Gritz 1 e Gritz 2)", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Versatilidade técnica", valor: "" },
            { caracteristica: "Desempenho estável em processos industriais", valor: "" },
            { caracteristica: "Redução de custos pela integração de partículas", valor: "" }
          ]
        }
      ]
    },
    {
      id: "gritz-3",
      name: "GRITZ 3 – Granulação Grossa",
      description: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata.",
      longDesc: "O GRITZ 3 é um produto de granulação grossa, desenvolvido para aplicações que exigem retenção de estrutura e menor solubilidade imediata. Suas partículas maiores, resultantes de peneiramento controlado nas malhas ABNT 10 e 14, proporcionam liberação gradual de amido e maior resistência térmica, tornando-o perfeito para cervejarias artesanais, rações animais de alto valor nutricional, blocos de suplementação, snacks densos e panificação rústica. O controle granulométrico garante uniformidade e desempenho consistente, enquanto a pureza e baixa umidade contribuem para estabilidade e durabilidade no armazenamento. Essa combinação de características torna o GRITZ 3 indispensável para segmentos que valorizam textura diferenciada e comportamento controlado durante o processamento.",
      image: gritz3,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Indústria de cerveja artesanal", valor: "" },
            { caracteristica: "Rações animais de alto valor nutricional", valor: "" },
            { caracteristica: "Blocos nutricionais (pet food e ruminantes)", valor: "" },
            { caracteristica: "Snacks densos e produtos desidratados", valor: "" },
            { caracteristica: "Panificação rústica", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneiras ABNT 10 e 14", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Liberação controlada de amido", valor: "" },
            { caracteristica: "Boa resistência térmica", valor: "" }
          ]
        },
        {
          title: "Especificações Físico-Químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "0,80%" },
            { caracteristica: "Acidez Máx. (ml sol. 1N de NaOH/100g)", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "600 a 750 g/L" }
          ]
        },
        {
          title: "Distribuição Granulométrica",
          data: [
            { caracteristica: "Peneira 8 (2,360 mm)", valor: "Máx. 2,00" },
            { caracteristica: "Peneira 10 (2,000 mm)", valor: "10 – 20" },
            { caracteristica: "Peneira 14 (1,400 mm)", valor: "40 – 60" },
            { caracteristica: "Peneira 20 (0,850 mm)", valor: "Máx. 3,00" },
            { caracteristica: "Peneira 50 (0,300 mm)", valor: "Máx. 5,00" },
            { caracteristica: "Fundo", valor: "Máx. 1,00" }
          ]
        }
      ]
    },
    {
      id: "canjiquinha",
      name: "CANJIQUINHA – Textura Encorpada",
      description: "Produto robusto e tradicional com textura ideal para preparo de alimentos prontos.",
      longDesc: "A Canjiquinha é produzida a partir de grãos de milho degerminados e selecionados, passando por moagem controlada que resulta em partículas de granulometria média-grossa, com retenção predominante na peneira ABNT 12. Essa configuração garante uma textura encorpada e uniforme, ideal para preparos que exigem presença visual e sensorial marcante. Sua composição proporciona cozimento homogêneo, com liberação gradual de amido e excelente rendimento culinário. É amplamente utilizada pela indústria de refeições prontas, alimentação institucional, bases culinárias e panificação rústica. A Canjiquinha se destaca pela estabilidade térmica e pela capacidade de manter estrutura após o cozimento, atendendo a exigências de padronização e qualidade no produto final.",
      image: canjiquinha,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Indústria de refeições prontas (pratos regionais)", valor: "" },
            { caracteristica: "Culinária hospitalar e institucional", valor: "" },
            { caracteristica: "Produção de bases culinárias (caldos e cremes)", valor: "" },
            { caracteristica: "Panificação rústica e artesanal", valor: "" },
            { caracteristica: "Alimentação escolar/governamental", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneira ABNT 12", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Cozimento uniforme", valor: "" },
            { caracteristica: "Alto rendimento culinário", valor: "" }
          ]
        },
        {
          title: "Especificações Físico-Químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "0,80%" },
            { caracteristica: "Acidez Máx. (ml sol. 1N de NaOH/100g)", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "600 a 750 g/L" },
            { caracteristica: "Pintas Pretas Máx.", valor: "50 / 100 g" },
            { caracteristica: "Películas Máx.", valor: "60 / 100 g" }
          ]
        },
        {
          title: "Distribuição Granulométrica",
          data: [
            { caracteristica: "Peneira 6 (3,350 mm)", valor: "Máx. 0,00" },
            { caracteristica: "Peneira 8 (2,360 mm)", valor: "Máx. 10,00" },
            { caracteristica: "Peneira 12 (1,200 mm)", valor: "65 – 85" },
            { caracteristica: "Peneira 14 (1,400 mm)", valor: "Máx. 20,00" },
            { caracteristica: "Peneira 16 (1,180 mm)", valor: "Máx. 7,00" },
            { caracteristica: "Peneira 18 (1,000 mm)", valor: "Máx. 1,00" },
            { caracteristica: "Peneira 20 (0,850 mm)", valor: "Máx. 1,00" },
            { caracteristica: "Peneira 25 (0,710 mm)", valor: "Máx. 1,00" },
            { caracteristica: "Fundo", valor: "Máx. 1,00" }
          ]
        }
      ]
    },
    {
      id: "canjica",
      name: "CANJICA – Grão Degerminado",
      description: "Grão grande ideal para preparações doces e pratos gourmet industrializados.",
      longDesc: "A Canjica é formada por grãos inteiros de milho degerminado, cuidadosamente classificados para atender a padrões rigorosos de tamanho e aparência. Com predominância de retenção nas peneiras ABNT 5 e 7, apresenta grãos grandes, de alto valor visual, ideais para preparações doces e pratos típicos industrializados, como canjica e curau. O processo de beneficiamento garante uniformidade de cor, peso específico adequado para embalagens e baixa umidade, contribuindo para maior vida útil. Sua textura firme e resistência ao cozimento preservam a integridade dos grãos, tornando-a uma matéria-prima essencial para a indústria de sobremesas congeladas, refeições prontas e o setor gourmet, onde aparência e qualidade sensorial são fatores decisivos.",
      image: canjica,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Indústria de sobremesas congeladas e doces prontos", valor: "" },
            { caracteristica: "Pratos típicos envasados (canjica, curau)", valor: "" },
            { caracteristica: "Alimentação institucional (militar, escolar)", valor: "" },
            { caracteristica: "Produtos para food service (hotéis, restaurantes)", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneiras ABNT 5 e 7", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Alto padrão visual", valor: "" },
            { caracteristica: "Peso específico ideal para embalagem", valor: "" }
          ]
        },
        {
          title: "Especificações Físico-Químicas",
          data: [
            { caracteristica: "Umidade Máx.", valor: "13,00%" },
            { caracteristica: "Óleo Máx.", valor: "1,00%" },
            { caracteristica: "Acidez Máx. (ml sol. 1N de NaOH/100g)", valor: "3,00%" },
            { caracteristica: "Peso Específico", valor: "700 a 850 g/L" }
          ]
        },
        {
          title: "Distribuição Granulométrica",
          data: [
            { caracteristica: "Peneira 3,5 (5,600 mm)", valor: "Máx. 1,00" },
            { caracteristica: "Peneira 5 (4,000 mm)", valor: "10 – 30" },
            { caracteristica: "Peneira 7 (2,800 mm)", valor: "50 – 90" },
            { caracteristica: "Peneira 16 (1,180 mm)", valor: "Mín. 10,00" },
            { caracteristica: "Fundo", valor: "Máx. 2,00" }
          ]
        }
      ]
    },
    {
      id: "canjicao",
      name: "CANJICÃO – Grão Médio Degerminado",
      description: "Produto de grãos médios, indicado para preparações que necessitam textura consistente e sabor característico do milho.",
      longDesc: "O Canjicão é composto por grãos médios degerminados, obtidos a partir de um rigoroso processo de classificação que assegura uniformidade e ausência de impurezas. Com retenção predominante nas peneiras ABNT 8 e 10, oferece textura consistente e excelente capacidade de absorção, características que favorecem o preparo de pratos regionais, mingaus encorpados e alimentos congelados ou envasados. Sua granulometria intermediária permite equilíbrio entre maciez e integridade após o cozimento, entregando rendimento elevado e sabor característico do milho. Além de aplicações alimentícias humanas, o Canjicão também é utilizado em formulações premium de rações, agregando valor nutricional e funcional ao produto final.",
      image: canjicao,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Produção de pratos regionais e típicos (canjicão, mingaus encorpados)", valor: "" },
            { caracteristica: "Indústria de alimentos congelados e envasados", valor: "" },
            { caracteristica: "Alimentação institucional (escolar, hospitalar e militar)", valor: "" },
            { caracteristica: "Linha de produtos gourmet e food service", valor: "" },
            { caracteristica: "Formulações de rações premium para animais", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneiras ABNT 8 e 10", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Textura consistente", valor: "" },
            { caracteristica: "Excelente capacidade de absorção", valor: "" },
            { caracteristica: "Alto rendimento no preparo", valor: "" }
          ]
        }
      ]
    },
    {
      id: "germen",
      name: "Nutrição Animal-Gérmen de Milho – Alto Valor Nutricional",
      description: "Subproduto nobre do milho, rico em nutrientes e óleos essenciais, indicado para enriquecimento nutricional e formulações de alto valor agregado.",
      longDesc: "O Gérmen de milho é a fração nobre do grão, rica em proteínas, fibras, vitaminas e ácidos graxos essenciais. Obtido durante o processo de degerminação, preserva compostos bioativos e óleos naturais de alto valor agregado. Sua versatilidade o torna ingrediente-chave para panificação funcional, produtos integrais, barras de cereais, suplementos e rações de alto desempenho. Disponível em granulometrias variáveis, adapta-se a diferentes linhas produtivas, desde a extração de óleo até o enriquecimento nutricional de formulações alimentícias. Sua composição favorece o aporte energético, melhora a textura e contribui para o sabor característico, tornando-o um insumo estratégico para indústrias que buscam unir qualidade nutricional e desempenho tecnológico.",
      image: germen,
      tables: [
        {
          title: "Aplicações Industriais",
          data: [
            { caracteristica: "Indústria de panificação e confeitaria (pães funcionais)", valor: "" },
            { caracteristica: "Produtos naturais e integrais", valor: "" },
            { caracteristica: "Produção de óleos e suplementos alimentares", valor: "" },
            { caracteristica: "Rações de alto desempenho para pets e animais de produção", valor: "" },
            { caracteristica: "Barras de cereais e snacks saudáveis", valor: "" }
          ]
        },
        {
          title: "Granulometria",
          data: [
            { caracteristica: "Peneiras variáveis conforme aplicação", valor: "" }
          ]
        },
        {
          title: "Diferenciais",
          data: [
            { caracteristica: "Fonte rica de fibras, proteínas e ácidos graxos essenciais", valor: "" },
            { caracteristica: "Contribui para sabor e valor nutricional elevados", valor: "" }
          ]
        },
        {
          title: "Análise Nutricional (%)",
          data: [
            { caracteristica: "Matéria Seca", valor: "86,95%" },
            { caracteristica: "Umidade", valor: "13,05%" },
            { caracteristica: "Proteína Bruta", valor: "9,17%" },
            { caracteristica: "Extrato Etéreo", valor: "9,11%" },
            { caracteristica: "Cinzas", valor: "2,45%" },
            { caracteristica: "Fibra Detergente Ácido", valor: "4,75%" },
            { caracteristica: "Fibra Detergente Neutro", valor: "17,24%" },
            { caracteristica: "Energia Líquida Ganho", valor: "1,55" },
            { caracteristica: "Energia Líquida Lactação", valor: "1,88" },
            { caracteristica: "Energia Metabolizável", valor: "2,19" },
            { caracteristica: "Carboidratos Não Fibrosos", valor: "48,98%" },
            { caracteristica: "Proteína Não Degradável No Rúmen", valor: "4,86%" },
            { caracteristica: "Nutrientes Digestíveis Totais", valor: "87,34%" },
            { caracteristica: "Proteína Degradável No Rúmen Total", valor: "4,31%" }
          ]
        }
      ]
    }
  ];

export default products;

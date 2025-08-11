import germen from './assets/germen.jpeg';
import gritz3 from './assets/gritz3.jpeg';
import fubafino from './assets/fubafino.jpeg';
import fubaitaliano from './assets/fubaitaliano.jpeg';
import fubamedio from './assets/fubamedio.jpeg';
import canjicao from './assets/canjicao.jpeg';
import canjiquinha from './assets/canjiquinha.jpeg';
import dz1 from './assets/dz1.jpeg';
import gritz1 from './assets/gritz1.jpeg';

const products = [
    {
      id: "fuba-italiano",
      name: "FUBÁ ITALIANO – Moagem Média",
      description:
        "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      longDesc:
        "Versatilidade técnica e valor agregado para produtos salgados e gourmet. Excelente desempenho em extrusão, textura marcante, rendimento elevado e ampla aceitação sensorial.",
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
      longDesc: "",
      image: fubamedio,
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
      longDesc: "",
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
      longDesc: "",
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
      longDesc: "",
      image: gritz1,
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
      longDesc: "",
      image: gritz1,
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
      longDesc: "",
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
      longDesc: "",
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
      longDesc: "",
      image: dz1,
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
      longDesc: "",
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
      name: "GÉRMEN – Alto Valor Nutricional",
      description: "Subproduto nobre do milho, rico em nutrientes e óleos essenciais, indicado para enriquecimento nutricional e formulações de alto valor agregado.",
      longDesc: "",
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

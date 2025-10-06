import germen from './assets/germen.avif';
import fubafino from './assets/fubafino.avif';
import fubaitaliano from './assets/fubaitaliano.avif';
import fubamimoso from './assets/fubamimoso.avif';
import canjica from './assets/canjica.avif';
import canjicao from './assets/canjicao.avif';
import canjiquinha from './assets/canjiquinha.avif';
import gritz1 from './assets/gritz1.avif';
import gritz2 from './assets/gritz2.avif';
import gritz3 from './assets/gritz3.avif';
import mixpro from './assets/mixpro.avif';

const products = [
  {
    id: "fuba-italiano",
    name: { 
      en: "Italian Cornmeal – Medium Grind", 
      pt: "Fubá Italiano – Moagem Média" 
    },
    description: {
      en: "Full-bodied texture with a gourmet touch, suitable for traditional recipes and modern industrial processes.",
      pt: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos."
    },
    longDesc: {
      en: "Italian Medium Grind Cornmeal combines tradition and technology to offer a full-bodied texture and a gourmet touch that elevates the quality of artisanal and industrial recipes. Made from selected corn kernels, its grind provides a balance between softness and structure, ensuring exceptional performance in extrusion processes and culinary preparations. Ideal for authentic polenta production, frozen meals, extruded snacks, savory creams, thick soups, industrial farofas, and bakery mixes. Its distinctive texture and characteristic flavor provide high sensory acceptance and high yield, meeting both the gourmet segment and the healthy/fitness market.",
      pt: "O Fubá Italiano de Moagem Média combina tradição e tecnologia para oferecer uma textura encorpada e um toque gourmet que eleva a qualidade de receitas artesanais e industriais. Produzido a partir de grãos de milho selecionados, seu ponto de moagem proporciona equilíbrio entre maciez e estrutura, garantindo desempenho excepcional em processos de extrusão e preparações culinárias. É ideal para a produção de polentas autênticas, pratos congelados, snacks extrusados, cremes salgados, sopas espessas, farofas industriais e misturas de panificação. Sua textura marcante e sabor característico proporcionam alta aceitação sensorial, rendimento elevado, atendendo tanto ao segmento gourmet quanto ao mercado saudável e fitness."
    },
    image: fubaitaliano,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Production of polenta and frozen ready meals", pt: "Produção de polentas e pratos prontos congelados" }, valor: "" },
          { caracteristica: { en: "Snack and extruded products industry (as base or pre-gelatinized)", pt: "Indústria de salgadinhos e snacks extrusados (como base ou pré-gelatinizado)" }, valor: "" },
          { caracteristica: { en: "Gourmet cuisine (packaged and food service)", pt: "Culinária gourmet (empacotados e food service)" }, valor: "" },
          { caracteristica: { en: "Savory creams, thick soups, and industrial farofas", pt: "Indústria de cremes salgados, sopas espessas e farofas industriais" }, valor: "" },
          { caracteristica: { en: "Bakery mixes and breaded products", pt: "Misturas de panificação e empanados" }, valor: "" },
          { caracteristica: { en: "Gluten-free products (healthy and fitness line)", pt: "Produtos sem glúten (linha saudável e fitness)" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "ABNT Sieves", pt: "Peneiras ABNT" }, valor: {pt:"40 e 45", en: "40 and 45"} }
        ]
      }
    ]
  },
  {
    id: "fuba-mimoso",
    name: { 
      en: "Mimoso Cornmeal – Traditional Fine Grind", 
      pt: "Fubá Mimoso – Moagem Fina Tradicional" 
    },
    description: {
      en: "Soft-textured product with uniform color, ideal for traditional recipes and industrial applications requiring refined finishing.",
      pt: "Produto de textura suave e coloração uniforme, ideal para receitas tradicionais e aplicações industriais que demandam acabamento refinado."
    },
    longDesc: {
      en: "Known for its smoothness and uniformity, Mimoso Traditional Fine Grind Cornmeal is the ideal choice for preparations requiring delicate finishing and velvety texture. Produced under strict quality control, it maintains uniform color and precise granulation, favoring the preparation of cakes, cookies, and corn breads. Its fine structure allows homogeneous absorption and hydration, resulting in lighter and more consistent doughs. Widely used in the instant and pre-cooked food industry, as well as in creams and soups, it offers excellent technical performance combined with a pleasant sensory experience, suitable from small artisanal productions to high-standard industrial lines.",
      pt: "Reconhecido pela suavidade e uniformidade, o Fubá Mimoso de Moagem Fina Tradicional é a escolha ideal para preparações que exigem acabamento delicado e textura aveludada. Produzido com rigoroso controle de qualidade, mantém coloração uniforme e granulometria precisa, favorecendo o preparo de bolos, biscoitos e pães de milho. Sua estrutura fina possibilita absorção e hidratação homogênea, o que garante massas mais leves e consistentes. Muito utilizado na indústria de alimentos instantâneos e pré-cozidos, bem como em cremes e sopas, oferece excelente desempenho técnico aliado a uma experiência sensorial agradável, atendendo desde pequenas produções artesanais até linhas industriais de alto padrão."
    },
    image: fubamimoso,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Production of cakes, cookies, and corn breads", pt: "Produção de bolos, biscoitos e pães de milho" }, valor: "" },
          { caracteristica: { en: "Instant and pre-cooked food industry", pt: "Indústria de alimentos instantâneos e pré-cozidos" }, valor: "" },
          { caracteristica: { en: "Bakery and confectionery mixes", pt: "Misturas para panificação e confeitaria" }, valor: "" },
          { caracteristica: { en: "Creams and soups industry", pt: "Indústria de cremes e sopas" }, valor: "" },
          { caracteristica: { en: "Gluten-free products for healthy lines", pt: "Produtos sem glúten para linhas saudáveis" }, valor: "" }
        ]
      },
      {
        title: { en: "Physico-chemical Properties", pt: "Físico-químicas" },
        data: [
          { caracteristica: { en: "Maximum Moisture", pt: "Umidade Máx." }, valor: "13,00%" },
          { caracteristica: { en: "Maximum Oil", pt: "Óleo Máx." }, valor: "2,00%" },
          { caracteristica: { en: "Acidity (ml 1N NaOH/100g) Max.", pt: "Acidez (ml sol. 1N NaOH/100g) Máx." }, valor: "3,00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"450 a 600 g/L", en:"450 to 600 g/L"} }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "Sieve 25 (0.710 mm)", pt: "Peneira 25 (0,710 mm)" }, valor: "Max. 1,00%" },
          { caracteristica: { en: "Sieve 40 (0.355 mm)", pt: "Peneira 40 (0,355 mm)" }, valor: "50 – 65%" },
          { caracteristica: { en: "Sieve 45 (0.355 mm)", pt: "Peneira 45 (0,355 mm)" }, valor: "10 – 20%" },
          { caracteristica: { en: "Sieve 50 (0.850 mm)", pt: "Peneira 50 (0,850 mm)" }, valor: "Max. 15,00%" },
          { caracteristica: { en: "Sieve 60 (0.250 mm)", pt: "Peneira 60 (0,250 mm)" }, valor: "Max. 5,00%" },
          { caracteristica: { en: "Sieve 70 (0.212 mm)", pt: "Peneira 70 (0,212 mm)" }, valor: "Max. 2,00%" },
          { caracteristica: { en: "Sieve 80 (0.180 mm)", pt: "Peneira 80 (0,180 mm)" }, valor: "Max. 2,00%" },
          { caracteristica: { en: "Bottom", pt: "Fundo" }, valor: "Max. 2,00%" }
        ]
      }
    ]
  },
  {
    id: "fuba-fino",
    name: { 
      en: "Fine Cornmeal – Ultra Fine Grind", 
      pt: "Fubá Fino – Moagem Ultrafina" 
    },
    description: {
      en: "Product with high dispersion and absorption, ideal for fermented formulations and bakery applications.",
      pt: "Produto com alta dispersão e absorção, ideal para formulações fermentadas e panificação."
    },
    longDesc: {
      en: "Ultra Fine Grind Cornmeal is developed for applications requiring maximum dispersion, absorption, and delicate texture. Its extremely refined grinding enhances the homogeneity of formulations and promotes the development of light and well-structured doughs, making it essential for bakery and fermented mixes. With high performance in recipes such as cakes, cookies, biscuits, and instant flours, it is also widely used in craft breweries as a fine adjunct and in infant food formulations, where smoothness and nutritional quality are essential. Its strictly controlled physico-chemical standards ensure stability, yield, and uniformity in both industrial and artisanal processes.",
      pt: "O Fubá Fino de Moagem Ultrafina é desenvolvido para aplicações que demandam máxima dispersão, absorção e delicadeza na textura. Sua moagem extremamente refinada potencializa a homogeneidade das formulações e favorece o desenvolvimento de massas leves e bem estruturadas, tornando-o indispensável para panificação e misturas fermentadas. Com alta performance em receitas como bolos, cookies, biscoitos e farinhas instantâneas, também é amplamente utilizado em cervejarias artesanais como adjunto fino e na formulação de alimentos infantis, onde a suavidade e qualidade nutricional são essenciais. Seu padrão físico-químico rigorosamente controlado assegura estabilidade, rendimento e uniformidade em processos industriais e artesanais."
    },
    image: fubafino,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Cake and industrial bakery mixes", pt: "Misturas para bolos e panificação industrial" }, valor: "" },
          { caracteristica: { en: "Instant and pre-cooked flours", pt: "Farinhas instantâneas e pré-cozidas" }, valor: "" },
          { caracteristica: { en: "Cookies and biscuit industry", pt: "Indústria de biscoitos e cookies" }, valor: "" },
          { caracteristica: { en: "Craft breweries (fine adjunct)", pt: "Cervejarias artesanais (adjunto fino)" }, valor: "" },
          { caracteristica: { en: "Infant food industry", pt: "Indústria de alimentos infantis" }, valor: "" }
        ]
      },
      {
        title: { en: "Physico-chemical Properties", pt: "Físico-químicas" },
        data: [
          { caracteristica: { en: "Maximum Moisture", pt: "Umidade Máx." }, valor: "13,00%" },
          { caracteristica: { en: "Maximum Oil", pt: "Óleo Máx." }, valor: "2,00%" },
          { caracteristica: { en: "Acidity (ml 1N NaOH/100g) Max.", pt: "Acidez (ml sol. 1N NaOH/100g) Máx." }, valor: "3,00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"450 a 600 g/L", en: "450 to 600 g/L"} }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "Sieve 45 (0.355 mm)", pt: "Peneira 45 (0,355 mm)" }, valor: "Max. 0,00%" },
          { caracteristica: { en: "Sieve 50 (0.850 mm)", pt: "Peneira 50 (0,850 mm)" }, valor: "Max. 1,00%" },
          { caracteristica: { en: "Sieve 60 (0.250 mm)", pt: "Peneira 60 (0,250 mm)" }, valor: "5 – 15%" },
          { caracteristica: { en: "Sieve 70 (0.212 mm)", pt: "Peneira 70 (0,212 mm)" }, valor: "2 – 10%" },
          { caracteristica: { en: "Sieve 80 (0.180 mm)", pt: "Peneira 80 (0,180 mm)" }, valor: "5 – 15%" },
          { caracteristica: { en: "Bottom", pt: "Fundo" }, valor: "Min. 50,00%" }
        ]
      }
    ]
  },
  {
    id: "gritz-1",
    name: { 
      en: "Gritz 1 – Fine Granulation", 
      pt: "Gritz 1 – Granulação Fina" 
    },
    description: {
      en: "Fine granulation product, ideal for industrial processes requiring uniformity and good flow.",
      pt: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez."
    },
    longDesc: {
      en: "GRITZ 1 is produced from strictly selected corn kernels and subjected to a controlled grinding process, resulting in fine, uniform particles with excellent flow. This ensures superior performance in industrial processes requiring homogeneity, precision, and formulation stability. Its low moisture and high purity ensure longer shelf life, while strict particle control reduces waste and improves production efficiency. Widely used in breakfast cereals (corn flakes, flakes, and extrudates), snacks, bakery products, pre-made doughs, dehydrated soups, instant mixes, and premium pet food. Its versatility, combined with detailed granulometric control, makes GRITZ 1 a strategic raw material for industries seeking standardization and consistent quality.",
      pt: "O GRITZ 1 é produzido a partir de grãos de milho rigorosamente selecionados e submetidos a um processo de moagem controlada, resultando em partículas de granulometria fina, uniformes e com excelente fluidez. Essa característica garante um desempenho superior em processos industriais que demandam homogeneidade, precisão e estabilidade na formulação. Sua baixa umidade e alta pureza asseguram maior vida útil, enquanto o controle rigoroso de partículas reduz desperdícios e melhora a eficiência produtiva. É amplamente utilizado na fabricação de cereais matinais (como corn flakes, flocos e extrusados), snacks, salgadinhos, panificação, massas pré-prontas, sopas desidratadas, misturas instantâneas e pet food premium. Sua versatilidade, associada ao controle granulométrico detalhado, torna o GRITZ 1 uma matéria-prima estratégica para indústrias que buscam padronização e qualidade constante."
    },
    image: gritz1,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Breakfast cereals industry (corn flakes, flakes, and extrudates)", pt: "Indústria de cereais matinais (corn flakes, flocos e extrusados)" }, valor: "" },
          { caracteristica: { en: "Snack and extruded products manufacturing", pt: "Fabricação de snacks e salgadinhos extrusados" }, valor: "" },
          { caracteristica: { en: "Bakery and pre-made doughs", pt: "Panificação e massas pré-prontas" }, valor: "" },
          { caracteristica: { en: "Base for dehydrated soups", pt: "Base para sopas desidratadas" }, valor: "" },
          { caracteristica: { en: "Instant mixes", pt: "Misturas instantâneas" }, valor: "" },
          { caracteristica: { en: "Premium pet food (dry feed)", pt: "Pet food premium (ração seca)" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "ABNT Sieves 25 to 30", pt: "Peneiras ABNT 25 a 30" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Low moisture", pt: "Baixa umidade" }, valor: "" },
          { caracteristica: { en: "High purity", pt: "Alta pureza" }, valor: "" },
          { caracteristica: { en: "Strict particle control", pt: "Controle rigoroso de partículas" }, valor: "" }
        ]
      },
      {
        title: { en: "Physico-Chemical Specifications", pt: "Especificações Físico-Químicas" },
        data: [
          { caracteristica: { en: "Maximum Moisture", pt: "Umidade Máx." }, valor: "13,00%" },
          { caracteristica: { en: "Maximum Oil", pt: "Óleo Máx." }, valor: "0,80%" },
          { caracteristica: { en: "Maximum Acidity (ml 1N NaOH/100g)", pt: "Acidez Máx. (ml sol. 1N de NaOH/100g)" }, valor: "3,00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"600 a 750 g/L", en:"600 to 750 g/L"} },
          { caracteristica: { en: "Maximum Black Spots", pt: "Pintas Pretas Máx." }, valor: "50 / 100 g" },
          { caracteristica: { en: "Maximum Films", pt: "Películas Máx." }, valor: "60 / 100 g" }
        ]
      },
      {
        title: { en: "Detailed Granulation", pt: "Granulometria Detalhada" },
        data: [
          { caracteristica: { en: "Sieve 16 (0.118 mm)", pt: "Peneira 16 (0,118 mm)" }, valor: "Max. 1,00%" },
          { caracteristica: { en: "Sieve 25 (0.710 mm)", pt: "Peneira 25 (0,710 mm)" }, valor: "10 - 25%" },
          { caracteristica: { en: "Sieve 30 (0.600 mm)", pt: "Peneira 30 (0,600 mm)" }, valor: "65 – 85%" },
          { caracteristica: { en: "Sieve 35 (0.500 mm)", pt: "Peneira 35 (0,500 mm)" }, valor: "15 – 30%" },
          { caracteristica: { en: "Sieve 40 (0.425 mm)", pt: "Peneira 40 (0,425 mm)" }, valor: "5 - 10%" },
          { caracteristica: { en: "Sieve 45 (0.355 mm)", pt: "Peneira 45 (0,355 mm)" }, valor: "Max. 5,00%" },
          { caracteristica: { en: "Sieve 50 (0.850 mm)", pt: "Peneira 50 (0,850 mm)" }, valor: "Max. 5,00%" },
          { caracteristica: { en: "Bottom", pt: "Fundo" }, valor: "Max. 1,00%" }
        ]
      }
    ]
  },
  {
    id: "gritz-2",
    name: { 
      en: "Gritz 2 – Intermediate Granulation", 
      pt: "Gritz 2 – Granulação Intermediária" 
    },
    description: {
      en: "Versatile for applications requiring a balance between structure and solubility.",
      pt: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade."
    },
    longDesc: {
      en: "GRITZ 2 features an intermediate granulation that balances structure and solubility, suitable for a wide range of industrial applications. With uniform particles and a minimum 50% retention on ABNT 16 sieve, it provides excellent liquid absorption and thermal stability during cooking, essential for processes such as beer production (as brewing adjunct), extruded animal feed, industrial bakery mixes, thickening sauces, and frozen foods. Its optimized granulometry ensures better yield and texture in formulations, preserving flavor and ensuring product consistency. With controlled quality from corn selection to packaging, GRITZ 2 is the ideal choice for industries seeking technical performance combined with production versatility.",
      pt: "O GRITZ 2 apresenta um ponto de granulação intermediário que equilibra estrutura e solubilidade, atendendo a um amplo espectro de aplicações industriais. Com partículas uniformes e retenção mínima de 50% na peneira ABNT 16, oferece excelente absorção de líquidos e estabilidade térmica durante o cozimento, características essenciais para processos como a produção de cerveja (como adjunto cervejeiro), rações extrusionadas, misturas para panificação, molhos espessantes e alimentos congelados. Sua granulometria otimizada possibilita melhor rendimento e textura nas formulações, preservando o sabor e garantindo consistência no produto final. Com qualidade controlada desde a seleção do milho até a embalagem, o GRITZ 2 é a escolha ideal para indústrias que buscam desempenho técnico aliado à versatilidade produtiva."
    },
    image: gritz2,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Brewing industry (brewing adjunct)", pt: "Indústria cervejeira (adjunto cervejeiro)" }, valor: "" },
          { caracteristica: { en: "Extruded animal feed and supplements", pt: "Rações extrusionadas e suplementos animais" }, valor: "" },
          { caracteristica: { en: "Industrial bakery mixes", pt: "Misturas de panificação industrial" }, valor: "" },
          { caracteristica: { en: "Ingredient for thickening sauces", pt: "Ingrediente para molhos espessantes" }, valor: "" },
          { caracteristica: { en: "Frozen food industry", pt: "Indústria de alimentos congelados" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "Minimum 50% retention on ABNT 16 sieve", pt: "Retenção mínima de 50% na peneira ABNT 16" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Good liquid absorption", pt: "Boa absorção de líquidos" }, valor: "" },
          { caracteristica: { en: "Cooking stability", pt: "Estabilidade no cozimento" }, valor: "" }
        ]
      },
      {
        title: { en: "Physico-Chemical Specifications", pt: "Especificações Físico-Químicas" },
        data: [
          { caracteristica: { en: "Maximum Moisture", pt: "Umidade Máx." }, valor: "13,00%" },
          { caracteristica: { en: "Maximum Oil", pt: "Óleo Máx." }, valor: "0,80%" },
          { caracteristica: { en: "Maximum Acidity (ml 1N NaOH/100g)", pt: "Acidez Máx. (ml sol. 1N de NaOH/100g)" }, valor: "3,00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"600 a 750 g/L", en:"600 to 750 g/L"} }
        ]
      },
      {
        title: { en: "Detailed Granulation", pt: "Granulometria Detalhada" },
        data: [
          { caracteristica: { en: "Sieve 12 (0.700 mm)", pt: "Peneira 12 (0,700 mm)" }, valor: "Max. 5,00%" },
          { caracteristica: { en: "Sieve 16 (1.180 mm)", pt: "Peneira 16 (1,180 mm)" }, valor: "Min. 50,00%" },
          { caracteristica: { en: "Sieve 20 (0.850 mm)", pt: "Peneira 20 (0,850 mm)" }, valor: "25 – 35%" },
          { caracteristica: { en: "Sieve 40 (0.425 mm)", pt: "Peneira 40 (0,425 mm)" }, valor: "Max. 15,00%" },
          { caracteristica: { en: "Bottom", pt: "Fundo" }, valor: "Max. 2,00%" }
        ]
      }
    ]
  },
  {
    id: "mixpro",
    name: { 
      en: "MixPro – Gritz 1 and Gritz 2 Blend", 
      pt: "MixPro – Mistura de Gritz 1 e Gritz 2" 
    },
    description: {
      en: "Blend designed to provide a balance between solubility and structure, combining the characteristics of two different granulometries.",
      pt: "Blend desenvolvido para oferecer equilíbrio entre solubilidade e estrutura, unindo as características de duas granulometrias diferentes."
    },
    longDesc: {
      en: "MIXPRO was developed to combine the best of two granulometries in a single product: the fluidity and homogeneity of GRITZ 1 with the structure and retention of GRITZ 2. This strategic combination provides a perfect balance between solubility and strength, resulting in stable performance across various industrial processes. It is suitable for the production of extruded snacks, bakery products, pre-cooked doughs, brewing adjuncts, soup mixes, creams, sauces, and extruded animal feeds. Its hybrid composition reduces the need for multiple raw materials, generating logistics savings and simplifying stock control, without compromising the quality and standardization of the final product. MIXPRO is ideal for industries seeking operational efficiency and versatile usage.",
      pt: "O MIXPRO foi desenvolvido para unir o melhor de duas granulometrias em um único produto: a fluidez e homogeneidade do GRITZ 1 com a estrutura e retenção do GRITZ 2. Essa combinação estratégica proporciona um equilíbrio perfeito entre solubilidade e resistência, resultando em um desempenho estável em diferentes processos industriais. É indicado para fabricação de snacks extrusados, panificação, massas pré-prontas, adjuntos cervejeiros, misturas para sopas, cremes e molhos, além de rações extrusionadas. Sua composição híbrida reduz a necessidade de múltiplos insumos, gerando economia logística e simplificação no controle de estoque, sem abrir mão da qualidade e da padronização do produto final. O MIXPRO é ideal para indústrias que buscam eficiência operacional e flexibilidade de uso."
    },
    image: mixpro,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Production of extruded snacks", pt: "Fabricação de snacks e salgadinhos extrusados" }, valor: "" },
          { caracteristica: { en: "Industrial bakery and pre-cooked doughs", pt: "Panificação industrial e massas pré-prontas" }, valor: "" },
          { caracteristica: { en: "Brewing adjuncts for microbreweries", pt: "Adjuntos cervejeiros para microcervejarias" }, valor: "" },
          { caracteristica: { en: "Mixes for soups, creams, and sauces", pt: "Misturas para sopas, cremes e molhos" }, valor: "" },
          { caracteristica: { en: "Extruded animal feed and supplements", pt: "Rações extrusionadas e suplementos animais" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "Mixed composition (Gritz 1 and Gritz 2)", pt: "Composição mista (Gritz 1 e Gritz 2)" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Technical versatility", pt: "Versatilidade técnica" }, valor: "" },
          { caracteristica: { en: "Stable performance in industrial processes", pt: "Desempenho estável em processos industriais" }, valor: "" },
          { caracteristica: { en: "Cost reduction through particle integration", pt: "Redução de custos pela integração de partículas" }, valor: "" }
        ]
      }
    ]
  },
  {
    id: "gritz-3",
    name: { 
      en: "Gritz 3 – Coarse Granulation", 
      pt: "Gritz 3 – Granulação Grossa" 
    },
    description: {
      en: "Larger particles, ideal for formulations that require structure retention and lower immediate solubility.",
      pt: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata."
    },
    longDesc: {
      en: "GRITZ 3 is a coarse granulation product, developed for applications that demand structure retention and lower immediate solubility. Its larger particles, resulting from controlled sieving with ABNT 10 and 14 meshes, provide gradual starch release and higher thermal resistance, making it perfect for craft breweries, high-nutritional-value animal feeds, nutritional blocks, dense snacks, and rustic bakery products. Granulometric control ensures uniformity and consistent performance, while purity and low moisture contribute to stability and storage durability. This combination of characteristics makes GRITZ 3 essential for segments that value differentiated texture and controlled behavior during processing.",
      pt: "O GRITZ 3 é um produto de granulação grossa, desenvolvido para aplicações que exigem retenção de estrutura e menor solubilidade imediata. Suas partículas maiores, resultantes de peneiramento controlado nas malhas ABNT 10 e 14, proporcionam liberação gradual de amido e maior resistência térmica, tornando-o perfeito para cervejarias artesanais, rações animais de alto valor nutricional, blocos de suplementação, snacks densos e panificação rústica. O controle granulométrico garante uniformidade e desempenho consistente, enquanto a pureza e baixa umidade contribuem para estabilidade e durabilidade no armazenamento. Essa combinação de características torna o GRITZ 3 indispensável para segmentos que valorizam textura diferenciada e comportamento controlado durante o processamento."
    },
    image: gritz3,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Craft beer industry", pt: "Indústria de cerveja artesanal" }, valor: "" },
          { caracteristica: { en: "High-nutritional-value animal feeds", pt: "Rações animais de alto valor nutricional" }, valor: "" },
          { caracteristica: { en: "Nutritional blocks (pet food and ruminants)", pt: "Blocos nutricionais (pet food e ruminantes)" }, valor: "" },
          { caracteristica: { en: "Dense snacks and dehydrated products", pt: "Snacks densos e produtos desidratados" }, valor: "" },
          { caracteristica: { en: "Rustic bakery products", pt: "Panificação rústica" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "ABNT Sieves 10 and 14", pt: "Peneiras ABNT 10 e 14" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Controlled starch release", pt: "Liberação controlada de amido" }, valor: "" },
          { caracteristica: { en: "High thermal resistance", pt: "Boa resistência térmica" }, valor: "" }
        ]
      },
      {
        title: { en: "Physico-Chemical Specifications", pt: "Especificações Físico-Químicas" },
        data: [
          { caracteristica: { en: "Max. Moisture", pt: "Umidade Máx." }, valor: "13,00%" },
          { caracteristica: { en: "Max. Oil", pt: "Óleo Máx." }, valor: "0,80%" },
          { caracteristica: { en: "Max. Acidity (ml 1N NaOH/100g)", pt: "Acidez Máx. (ml sol. 1N de NaOH/100g)" }, valor: "3,00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"600 a 750 g/L",en:"600 to 750 g/L"} }
        ]
      },
      {
        title: { en: "Granulation Distribution", pt: "Distribuição Granulométrica" },
        data: [
          { caracteristica: { en: "Sieve 8 (2.360 mm)", pt: "Peneira 8 (2,360 mm)" }, valor: "Max. 2,00%" },
          { caracteristica: { en: "Sieve 10 (2.000 mm)", pt: "Peneira 10 (2,000 mm)" }, valor: "10 – 20%" },
          { caracteristica: { en: "Sieve 14 (1.400 mm)", pt: "Peneira 14 (1,400 mm)" }, valor: "40 – 60%" },
          { caracteristica: { en: "Sieve 20 (0.850 mm)", pt: "Peneira 20 (0,850 mm)" }, valor: "Max. 3,00%" },
          { caracteristica: { en: "Sieve 50 (0.300 mm)", pt: "Peneira 50 (0,300 mm)" }, valor: "Max. 5,00%" },
          { caracteristica: { en: "Fines", pt: "Fundo" }, valor: "Max. 1,00%" }
        ]
      }
    ]
  },
  {
    id: "canjiquinha",
    name: { 
      en: "Canjiquinha – Full-Bodied Texture", 
      pt: "Canjiquinha – Textura Encorpada" 
    },
    description: {
      en: "A robust and traditional product with the ideal texture for ready-to-eat food preparations.",
      pt: "Produto robusto e tradicional com textura ideal para preparo de alimentos prontos."
    },
    longDesc: {
      en: "Canjiquinha is produced from degerminated and selected corn kernels, undergoing controlled milling that results in medium-coarse granulation particles, predominantly retained on ABNT sieve 12. This configuration ensures a full-bodied and uniform texture, ideal for preparations requiring a striking visual and sensory presence. Its composition provides homogeneous cooking, gradual starch release, and excellent culinary yield. It is widely used in the ready-meal industry, institutional catering, culinary bases, and rustic bakery. Canjiquinha stands out for its thermal stability and ability to maintain structure after cooking, meeting strict standardization and quality requirements in the final product.",
      pt: "A Canjiquinha é produzida a partir de grãos de milho degerminados e selecionados, passando por moagem controlada que resulta em partículas de granulometria média-grossa, com retenção predominante na peneira ABNT 12. Essa configuração garante uma textura encorpada e uniforme, ideal para preparos que exigem presença visual e sensorial marcante. Sua composição proporciona cozimento homogêneo, com liberação gradual de amido e excelente rendimento culinário. É amplamente utilizada pela indústria de refeições prontas, alimentação institucional, bases culinárias e panificação rústica. A Canjiquinha se destaca pela estabilidade térmica e pela capacidade de manter estrutura após o cozimento, atendendo a exigências de padronização e qualidade no produto final."
    },
    image: canjiquinha,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Ready-meal industry (regional dishes)", pt: "Indústria de refeições prontas (pratos regionais)" }, valor: "" },
          { caracteristica: { en: "Hospital and institutional catering", pt: "Culinária hospitalar e institucional" }, valor: "" },
          { caracteristica: { en: "Production of culinary bases (broths and creams)", pt: "Produção de bases culinárias (caldos e cremes)" }, valor: "" },
          { caracteristica: { en: "Rustic and artisanal bakery", pt: "Panificação rústica e artesanal" }, valor: "" },
          { caracteristica: { en: "School and government food programs", pt: "Alimentação escolar/governamental" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "ABNT Sieve 12", pt: "Peneira ABNT 12" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Uniform cooking", pt: "Cozimento uniforme" }, valor: "" },
          { caracteristica: { en: "High culinary yield", pt: "Alto rendimento culinário" }, valor: "" }
        ]
      },
      {
        title: { en: "Physico-Chemical Specifications", pt: "Especificações Físico-Químicas" },
        data: [
          { caracteristica: { en: "Max. Moisture", pt: "Umidade Máx." }, valor: "13,00%" },
          { caracteristica: { en: "Max. Oil", pt: "Óleo Máx." }, valor: "0,80%" },
          { caracteristica: { en: "Max. Acidity (ml 1N NaOH/100g)", pt: "Acidez Máx. (ml sol. 1N de NaOH/100g)" }, valor: "3,00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"600 a 750 g/L", en:"600 to 750 g/L"} },
          { caracteristica: { en: "Max. Black Specks", pt: "Pintas Pretas Máx." }, valor: "50 / 100 g" },
          { caracteristica: { en: "Max. Hulls", pt: "Películas Máx." }, valor: "60 / 100 g" }
        ]
      },
      {
        title: { en: "Granulation Distribution", pt: "Distribuição Granulométrica" },
        data: [
          { caracteristica: { en: "Sieve 6 (3.350 mm)", pt: "Peneira 6 (3,350 mm)" }, valor: "Max. 0,00" },
          { caracteristica: { en: "Sieve 8 (2.360 mm)", pt: "Peneira 8 (2,360 mm)" }, valor: "Max. 10,00" },
          { caracteristica: { en: "Sieve 12 (1.200 mm)", pt: "Peneira 12 (1,200 mm)" }, valor: "65 – 85" },
          { caracteristica: { en: "Sieve 14 (1.400 mm)", pt: "Peneira 14 (1,400 mm)" }, valor: "Max. 20,00" },
          { caracteristica: { en: "Sieve 16 (1.180 mm)", pt: "Peneira 16 (1,180 mm)" }, valor: "Max. 7,00" },
          { caracteristica: { en: "Sieve 18 (1.000 mm)", pt: "Peneira 18 (1,000 mm)" }, valor: "Max. 1,00" },
          { caracteristica: { en: "Sieve 20 (0.850 mm)", pt: "Peneira 20 (0,850 mm)" }, valor: "Max. 1,00" },
          { caracteristica: { en: "Sieve 25 (0.710 mm)", pt: "Peneira 25 (0,710 mm)" }, valor: "Max. 1,00" },
          { caracteristica: { en: "Fines", pt: "Fundo" }, valor: "Max. 1,00" }
        ]
      }
    ]
  },
  {
    id: "canjica",
    name: { 
      en: "Hominy Corn – Degerminated Grain", 
      pt: "Canjica – Grão Degerminado" 
    },
    description: { 
      en: "Large grain ideal for sweet preparations and gourmet industrial dishes.", 
      pt: "Grão grande ideal para preparações doces e pratos gourmet industrializados." 
    },
    longDesc: { 
      en: "Hominy Corn is made from whole degerminated corn kernels, carefully classified to meet strict size and appearance standards. With predominant retention on ABNT sieves 5 and 7, it presents large grains with high visual value, ideal for sweet preparations and traditional industrialized dishes such as hominy pudding and corn custard. The processing ensures color uniformity, suitable specific weight for packaging, and low moisture content, contributing to extended shelf life. Its firm texture and resistance to cooking preserve the integrity of the grains, making it an essential raw material for the frozen dessert, ready-meal, and gourmet food industries, where appearance and sensory quality are decisive factors.",
      pt: "A Canjica é formada por grãos inteiros de milho degerminado, cuidadosamente classificados para atender a padrões rigorosos de tamanho e aparência. Com predominância de retenção nas peneiras ABNT 5 e 7, apresenta grãos grandes, de alto valor visual, ideais para preparações doces e pratos típicos industrializados, como canjica e curau. O processo de beneficiamento garante uniformidade de cor, peso específico adequado para embalagens e baixa umidade, contribuindo para maior vida útil. Sua textura firme e resistência ao cozimento preservam a integridade dos grãos, tornando-a uma matéria-prima essencial para a indústria de sobremesas congeladas, refeições prontas e o setor gourmet, onde aparência e qualidade sensorial são fatores decisivos."
    },
    image: canjica,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Frozen desserts and ready-made sweets industry", pt: "Indústria de sobremesas congeladas e doces prontos" }, valor: "" },
          { caracteristica: { en: "Packaged traditional dishes (hominy, corn pudding)", pt: "Pratos típicos envasados (canjica, curau)" }, valor: "" },
          { caracteristica: { en: "Institutional food service (military, school)", pt: "Alimentação institucional (militar, escolar)" }, valor: "" },
          { caracteristica: { en: "Food service products (hotels, restaurants)", pt: "Produtos para food service (hotéis, restaurantes)" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "ABNT Sieves 5 and 7", pt: "Peneiras ABNT 5 e 7" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "High visual standard", pt: "Alto padrão visual" }, valor: "" },
          { caracteristica: { en: "Ideal specific weight for packaging", pt: "Peso específico ideal para embalagem" }, valor: "" }
        ]
      },
      {
        title: { en: "Physicochemical Specifications", pt: "Especificações Físico-Químicas" },
        data: [
          { caracteristica: { en: "Max. Moisture", pt: "Umidade Máx." }, valor: "13.00%" },
          { caracteristica: { en: "Max. Oil", pt: "Óleo Máx." }, valor: "1.00%" },
          { caracteristica: { en: "Max. Acidity (ml 1N NaOH solution/100g)", pt: "Acidez Máx. (ml sol. 1N de NaOH/100g)" }, valor: "3.00%" },
          { caracteristica: { en: "Specific Weight", pt: "Peso Específico" }, valor: {pt:"700 a 850 g/L", en: "700 to 850 g/L"} }
        ]
      },
      {
        title: { en: "Granulometric Distribution", pt: "Distribuição Granulométrica" },
        data: [
          { caracteristica: { en: "Sieve 3.5 (5.600 mm)", pt: "Peneira 3,5 (5,600 mm)" }, valor: "Máx. 1,00" },
          { caracteristica: { en: "Sieve 5 (4.000 mm)", pt: "Peneira 5 (4,000 mm)" }, valor: "10 – 30" },
          { caracteristica: { en: "Sieve 7 (2.800 mm)", pt: "Peneira 7 (2,800 mm)" }, valor: "50 – 90" },
          { caracteristica: { en: "Sieve 16 (1.180 mm)", pt: "Peneira 16 (1,180 mm)" }, valor: "Min. 10,00" },
          { caracteristica: { en: "Bottom", pt: "Fundo" }, valor: "Max. 2,00" }
        ]
      }
    ]
  },
  {
    id: "canjicao",
    name: { 
      en: "Coarse Hominy Corn – Medium Degerminated Grain", 
      pt: "Canjicão – Grão Médio Degerminado" 
    },
    description: { 
      en: "Medium-sized grains, ideal for preparations that require a consistent texture and characteristic corn flavor.", 
      pt: "Produto de grãos médios, indicado para preparações que necessitam textura consistente e sabor característico do milho." 
    },
    longDesc: { 
      en: "Coarse Hominy Corn is made from medium degerminated grains obtained through a rigorous classification process that ensures uniformity and absence of impurities. With predominant retention on ABNT sieves 8 and 10, it offers a consistent texture and excellent absorption capacity, characteristics that favor the preparation of regional dishes, thick porridges, and frozen or packaged foods. Its intermediate granulation provides a balance between softness and integrity after cooking, ensuring high yield and the characteristic flavor of corn. In addition to human food applications, Coarse Hominy Corn is also used in premium animal feed formulations, adding nutritional and functional value to the final product.",
      pt: "O Canjicão é composto por grãos médios degerminados, obtidos a partir de um rigoroso processo de classificação que assegura uniformidade e ausência de impurezas. Com retenção predominante nas peneiras ABNT 8 e 10, oferece textura consistente e excelente capacidade de absorção, características que favorecem o preparo de pratos regionais, mingaus encorpados e alimentos congelados ou envasados. Sua granulometria intermediária permite equilíbrio entre maciez e integridade após o cozimento, entregando rendimento elevado e sabor característico do milho. Além de aplicações alimentícias humanas, o Canjicão também é utilizado em formulações premium de rações, agregando valor nutricional e funcional ao produto final."
    },
    image: canjicao,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Production of regional and traditional dishes (canjicão, thick porridges)", pt: "Produção de pratos regionais e típicos (canjicão, mingaus encorpados)" }, valor: "" },
          { caracteristica: { en: "Frozen and packaged food industry", pt: "Indústria de alimentos congelados e envasados" }, valor: "" },
          { caracteristica: { en: "Institutional food (school, hospital, and military)", pt: "Alimentação institucional (escolar, hospitalar e militar)" }, valor: "" },
          { caracteristica: { en: "Gourmet and food service product lines", pt: "Linha de produtos gourmet e food service" }, valor: "" },
          { caracteristica: { en: "Premium animal feed formulations", pt: "Formulações de rações premium para animais" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "ABNT Sieves 8 and 10", pt: "Peneiras ABNT 8 e 10" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Consistent texture", pt: "Textura consistente" }, valor: "" },
          { caracteristica: { en: "Excellent absorption capacity", pt: "Excelente capacidade de absorção" }, valor: "" },
          { caracteristica: { en: "High yield during preparation", pt: "Alto rendimento no preparo" }, valor: "" }
        ]
      }
    ]
  },
  {
    id: "germen",
    name: {
      en: "Corn Germ – High Nutritional Value",
      pt: "Gérmen de Milho – Alto Valor Nutricional"
    },
    description: {
      en: "A noble corn byproduct, rich in nutrients and essential oils, recommended for nutritional enrichment and high-value formulations.",
      pt: "Subproduto nobre do milho, rico em nutrientes e óleos essenciais, indicado para enriquecimento nutricional e formulações de alto valor agregado."
    },
    longDesc: {
      en: "Corn Germ is the noble fraction of the kernel, rich in proteins, fibers, vitamins, and essential fatty acids. Obtained during the degermination process, it preserves bioactive compounds and natural oils of high added value. Its versatility makes it a key ingredient in functional baking, whole grain products, cereal bars, supplements, and high-performance feeds. Available in variable granulations, it adapts to different production lines, from oil extraction to nutritional enrichment of food formulations. Its composition provides energy input, improves texture, and enhances characteristic flavor, making it a strategic input for industries seeking to combine nutritional quality with technological performance.",
      pt: "O Gérmen de Milho é a fração nobre do grão, rica em proteínas, fibras, vitaminas e ácidos graxos essenciais. Obtido durante o processo de degerminação, preserva compostos bioativos e óleos naturais de alto valor agregado. Sua versatilidade o torna ingrediente-chave para panificação funcional, produtos integrais, barras de cereais, suplementos e rações de alto desempenho. Disponível em granulometrias variáveis, adapta-se a diferentes linhas produtivas, desde a extração de óleo até o enriquecimento nutricional de formulações alimentícias. Sua composição favorece o aporte energético, melhora a textura e contribui para o sabor característico, tornando-o um insumo estratégico para indústrias que buscam unir qualidade nutricional e desempenho tecnológico."
    },
    image: germen,
    tables: [
      {
        title: { en: "Industrial Applications", pt: "Aplicações Industriais" },
        data: [
          { caracteristica: { en: "Bakery and confectionery industry (functional breads)", pt: "Indústria de panificação e confeitaria (pães funcionais)" }, valor: "" },
          { caracteristica: { en: "Natural and whole-grain products", pt: "Produtos naturais e integrais" }, valor: "" },
          { caracteristica: { en: "Production of oils and food supplements", pt: "Produção de óleos e suplementos alimentares" }, valor: "" },
          { caracteristica: { en: "High-performance feed for pets and livestock", pt: "Rações de alto desempenho para pets e animais de produção" }, valor: "" },
          { caracteristica: { en: "Cereal bars and healthy snacks", pt: "Barras de cereais e snacks saudáveis" }, valor: "" }
        ]
      },
      {
        title: { en: "Granulation", pt: "Granulometria" },
        data: [
          { caracteristica: { en: "Variable sieves depending on application", pt: "Peneiras variáveis conforme aplicação" }, valor: "" }
        ]
      },
      {
        title: { en: "Differentials", pt: "Diferenciais" },
        data: [
          { caracteristica: { en: "Rich source of fibers, proteins, and essential fatty acids", pt: "Fonte rica de fibras, proteínas e ácidos graxos essenciais" }, valor: "" },
          { caracteristica: { en: "Enhances flavor and nutritional value", pt: "Contribui para sabor e valor nutricional elevados" }, valor: "" }
        ]
      },
      {
        title: { en: "Nutritional Analysis (%)", pt: "Análise Nutricional (%)" },
        data: [
          { caracteristica: { en: "Dry Matter", pt: "Matéria Seca" }, valor: "86.95%" },
          { caracteristica: { en: "Moisture", pt: "Umidade" }, valor: "13.05%" },
          { caracteristica: { en: "Crude Protein", pt: "Proteína Bruta" }, valor: "9.17%" },
          { caracteristica: { en: "Ether Extract", pt: "Extrato Etéreo" }, valor: "9.11%" },
          { caracteristica: { en: "Ash", pt: "Cinzas" }, valor: "2.45%" },
          { caracteristica: { en: "Acid Detergent Fiber", pt: "Fibra Detergente Ácido" }, valor: "4.75%" },
          { caracteristica: { en: "Neutral Detergent Fiber", pt: "Fibra Detergente Neutro" }, valor: "17.24%" },
          { caracteristica: { en: "Net Energy for Gain", pt: "Energia Líquida Ganho" }, valor: "1.55" },
          { caracteristica: { en: "Net Energy for Lactation", pt: "Energia Líquida Lactação" }, valor: "1.88" },
          { caracteristica: { en: "Metabolizable Energy", pt: "Energia Metabolizável" }, valor: "2.19" },
          { caracteristica: { en: "Non-Fibrous Carbohydrates", pt: "Carboidratos Não Fibrosos" }, valor: "48.98%" },
          { caracteristica: { en: "Undegradable Protein in the Rumen", pt: "Proteína Não Degradável No Rúmen" }, valor: "4.86%" },
          { caracteristica: { en: "Total Digestible Nutrients", pt: "Nutrientes Digestíveis Totais" }, valor: "87.34%" },
          { caracteristica: { en: "Rumen Degradable Protein (Total)", pt: "Proteína Degradável No Rúmen Total" }, valor: "4.31%" }
        ]
      }
    ]
  }
];

export default products;

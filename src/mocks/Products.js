export const productsMock = [
  {
    id: 15,
    title: "Limpador Perfumado",
    volume: "500ml",
    tagline: "Sua casa com perfume de longa duração",
    category: "Limpeza Perfumada",
    brand: "Teiú",
    usage: "Para limpeza diária, dilua 2 tampas em 5 litros de água. O Limpador Perfumado Teiú deixa um rastro de frescor por muito mais tempo.",
    specs: [
      { value: 2, label: "Volumes disponíveis" },
      { value: 4, label: "Fragrâncias disponíveis" },
      { value: 1, label: "Edição Especial" }
    ],
    variants: [
      { 
        id: 101, 
        label: "Felicitá", 
        color: "#be357f", 
        image: "/assets/img/TEIÚ - LIMPADOR PERFUMADO FELICITÁ 500ML.png", 
        featured: true 
      },
      { 
        id: 102, 
        label: "Intimitá", 
        color: "#95358f", 
        image: "/assets/img/limpador-roxo.png",
        featured: true 
      },
      { 
        id: 103, 
        label: "Aqua", 
        color: "#0497b8", 
        image: "/assets/img/limpador-azul.png", 
        featured: true 
      },
      { 
        id: 104, 
        label: "Rosas", 
        color: "#a0112d", 
        image: "/assets/img/TEIÚ - LIMPADOR PERFUMADO INTIMITÁ 500ML.png", 
        featured: true 
      },
    ]
  },
  {
    id: 9,
    title: "Lava Roupas Líquido",
    volume: "1L",
    tagline: "Limpeza profunda que preserva as cores",
    category: "Roupas",
    brand: "Teiú",
    usage: "Use uma tampa para uma máquina cheia. Ideal para todos os tipos de tecidos.",
    specs: [
      { value: 3, label: "Volumes disponíveis" },
      { value: 1, label: "Fragrância" }
    ],
    variants: [
      { 
        id: 201, 
        label: "Perfumes", 
        color: "#2563EB", 
        image: "/assets/img/TEIÚ - LAVA ROUPAS LÍQUIDO PERFUMES 1L.png",
        featured: true 
      }
    ]
  },
  {
    id: 13,
    title: "Vatz Extreme",
    volume: "500ml",
    tagline: "A força da limpeza extrema para superfícies",
    category: "Multiuso",
    brand: "Vatz",
    usage: "Aplique sobre a superfície a ser limpa e remova com um pano úmido. Não necessita enxágue.",
    specs: [
      { value: 1, label: "Volume" },
      { value: 1, label: "Espuma Ativa" },
      { value: 0, label: "Edição Especial" }
    ],
    variants: [
      { 
        id: 202, 
        label: "Extreme Espuma", 
        color: "#1e1a2d", 
        image: "/assets/img/vatz1.png",
        featured: true 
      }
    ]
  },
  {
    id: 1,
    title: "Água Sanitária",
    volume: "1L",
    tagline: "Proteção e brancura impecável para sua casa",
    category: "Limpeza Pesada",
    brand: "Teiú",
    usage: "Para desinfecção de ralos e vasos sanitários, utilize o produto puro.",
    specs: [
      { value: 3, label: "Volumes" },
      { value: 1, label: "Edição Especial" }
    ],
    variants: [
      { id: 101, label: "Original", color: "#2563EB", image: "/assets/img/agua.png", featured: true }
    ]
  },
  {
    id: 4,
    title: "Amaciante Amor",
    volume: "2L",
    tagline: "Cuidado, maciez e perfume para suas roupas",
    category: "Roupas",
    brand: "Teiú",
    usage: "Adicione meia tampa no último enxágue.",
    specs: [
      { value: 3, label: "Volumes" },
      { value: 1, label: "Fragrância" },
      { value: 2, label: "Edições Especiais" }
    ],
    variants: [
      { id: 501, label: "Tradicional", color: "#F9A8D4", image: "/assets/img/TEIÚ - AMACIANTE AMOR 2L.png", featured: true }
    ]
  }
];
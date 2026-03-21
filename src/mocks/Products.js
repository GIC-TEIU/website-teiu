export const produtosTeiuAgrupados = [
  {
    id: 15, 
    title: "Limpador Perfumado",
    tagline: "Sua casa com perfume de longa duração",
    category: "Limpeza Perfumada",
    brand: "Teiú",
    usage: "Para limpeza diária, dilua 2 tampas em 5 litros de água. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
    specs: { volumes: 2, fragrancias: 4, especial: 1 },
    defaultVariantId: 101,
    variants: [
      { 
        id: 101, 
        label: "Felicitá", 
        color: "bg-pink-500", 
        textColor: "#be357f", 
        image: "/assets/img/TEIÚ - LIMPADOR PERFUMADO FELICITÁ 500ML.png", 
        volume: "500ml",
        featured: true 
      },
      { 
        id: 102, 
        label: "Intimitá", 
        color: "bg-purple-600", 
        textColor: "#95358f", 
        image: "/assets/img/limpador-roxo.png",
        volume: "500ml",
        featured: true 
      },
      { 
        id: 103, 
        label: "Aqua", 
        color: "bg-cyan-500", 
        textColor: " #0497b8", 
        image: "/assets/img/limpador-azul.png", 
        volume: "500ml",
        featured: true 
      },
      { 
        id: 104, 
        label: "Rosas", 
        color: "bg-red-700", 
        textColor: "#a0112d", 
        image: "/assets/img/TEIÚ - LIMPADOR PERFUMADO INTIMITÁ 500ML.png", 
        volume: "500ml",
        featured: true 
      },
    ]
  },
  {
    id: 12, 
    title: "Lava Roupas Líquido",
    tagline: "Limpeza profunda",
    category: "Roupas",
    brand: "Teiú",
    usage: "Use uma tampa para uma máquina cheia.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
    specs: { volumes: 3, fragrancias: 1, especial: 0 },
    defaultVariantId: 201,
    variants: [
      { 
        id: 201, 
        label: "Perfumes 1L", 
        color: "bg-blue-600", 
        textColor: "text-blue-600", 
        image: "/assets/img/TEIÚ - LAVA ROUPAS LÍQUIDO PERFUMES 1L.png",
        volume: "1L", 
        featured: true 
      }
    ]
  },
  {
    id: 13, 
    title: "Vatz",
    tagline: "Limpeza profunda",
    category: "multiuso",
    brand: "Vatz",
    usage: "Limpe superficies. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
    specs: { volumes: 3, fragrancias: 1, especial: 0 },
    defaultVariantId: 203,
    variants: [
      { 
        id: 202, 
        label: "Extreme Espuma ", 
        color: "bg-gray-900", 
        textColor: "#1e1a2d", 
        image: "/assets/img/vatz1.png",
        volume: "1L", 
        featured: true 
      }
    ]
  }
];

export const produtosTeiu = produtosTeiuAgrupados.flatMap(grupo => 
  grupo.variants.map(variant => ({
    ...variant,
    parentId: grupo.id, 
    title: `${grupo.title} ${variant.label}`, 
    category: grupo.category,
    brand: grupo.brand,
  }))
);
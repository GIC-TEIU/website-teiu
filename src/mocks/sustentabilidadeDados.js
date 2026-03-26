import { Leaf, Recycle, Wind, Droplets } from "lucide-react"; // Importando ícones de exemplo

export const sustentabilidadeItems = [
  {
    id: 1,
    id_name: "inovacao",
    icon: Leaf, 
    color: "#60944F", 
    color_light: "#84B075", 
    title: "Inovação e Produtos",
    description: "Desenvolver soluções, serviços ou produtos com menor impacto ambiental e maior benefício social."
  },
  {
    id: 2,
    id_name: "circular",
    icon: Recycle,
    color: "#84B075", 
    color_light: "#A3C796", 
    title: "Economia Circular",
    description: "Maximizar o uso de recursos recicláveis e reutilizáveis, reduzindo o desperdício em toda a cadeia de produção."
  },
  {
    id: 3,
    id_name: "energia",
    icon: Wind,
    color: "#A3C796", 
    color_light: "#C0DDB6", 
    title: "Energia Renovável",
    description: "Implementar fontes de energia limpa (solar, eólica) para mover as fábricas e operações da Teiú."
  },
  {
    id: 4,
    id_name: "agua",
    icon: Droplets,
    color: "#C0DDB6", 
    color_light: "#60944F",
    title: "Gestão Hídrica",
    description: "Utilizar tecnologias avançadas para reuso de água e tratamento eficiente de efluentes industriais."
  },
];
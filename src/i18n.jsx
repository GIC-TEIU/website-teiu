import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "menu": {
        "empresa": "A Empresa",
        "marcas": "Nossas Marcas",
        "produtos": "Nossos Produtos",
        "projetos": "Nossos Projetos",
        "sustentabilidade": "Sustentabilidade",
        "teiuAdventure": "Teiú Adventure",
        "trabalheConosco": "Trabalhe Conosco",
        "contato": "Fale Conosco"
      },
       "footer": {
        "empresa": "A Empresa",
        "marcas": "Nossas Marcas",
        "produtos": "Nossos Produtos",
        "trabalheConosco": "Trabalhe Conosco",
        "contato": "Fale Conosco",
        "siga": "Siga-nos"
      }
    }
  },
  en: {
    translation: {
      "menu": {
        "empresa": "The Company",
        "marcas": "Our Brands",
        "produtos": "Our Products",
        "projetos": "Our Projects",
        "sustentabilidade": "Sustainability",
        "teiuAdventure": "Teiú Adventure",
        "trabalheConosco": "Work With Us",
        "contato": "Contact Us"
      },
       "footer": {
        "empresa": "The Company",
        "marcas": "Our Brands",
        "produtos": "Our Products",
        "trabalheConosco": "Work With Us",
        "contato": "Contact Us",
        "siganos": "Follow Us",
        "direitos": "All rights reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", 
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
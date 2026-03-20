🫧 Teiú Indústria e Comércio - Website
Este é o repositório do novo website institucional da Teiú, desenvolvido com foco em performance, design moderno e interatividade.

🛠️ Instalação e Execução
Para rodar este projeto localmente, siga os passos abaixo:

Clone o repositório:

Bash
git clone https://github.com/seu-usuario/website-teiu.git
Entre na pasta do projeto:

Bash
cd website-teiu
Instale as dependências:
Devido a conflitos de peer-dependencies entre Tailwind 4 e Vite 8 (resolvido com o comando abaixo):

Bash
npm install --legacy-peer-deps
Inicie o servidor de desenvolvimento:

Bash
npm run dev

📁 Estrutura de Pastas
Plaintext
src/
 ├── assets/        # Imagens, fontes e vídeos
 ├── components/    # Componentes reutilizáveis (Navbar, Footer, Cards)
 ├── pages/         # Páginas da aplicação (Home, AboutUs)
 ├── sections/      # Blocos de conteúdo específicos (Hero, InstagramSection)
 ├── App.jsx        # Configuração de Rotas
 └── index.css      # Configurações globais do Tailwind 4 e fontes

🛠️ Instalações 

geral: 

npm install --legacy-peer-deps

individual:

npm install react-router-dom --legacy-peer-deps
npm install lucide-react --legacy-peer-deps
npm install swiper --legacy-peer-deps
npm install tailwindcss @tailwindcss/vite --legacy-peer-deps

OBS:

--legacy-peer-deps: É a forma mais comum de resolver conflitos. Ela diz ao npm para ignorar essas regras de "paridade" e instalar o pacote mesmo que as versões não batam exatamente. É geralmente seguro se as ferramentas forem retrocompatíveis.
# Go Car Brazil - Frontend (React + Vite)

Este repositório contém o código-fonte do frontend para a aplicação web "Go Car Brazil", uma plataforma de locadora de carros. A aplicação é construída com React e Vite, apresentando uma interface moderna e minimalista para interação do usuário.

**Nota:** Este é apenas o frontend. O backend (API Node.js) correspondente está planejado, mas ainda não implementado. Atualmente, as chamadas à API são simuladas para permitir o desenvolvimento e teste da interface do usuário.

## Funcionalidades

### Frontend (Implementadas/Simuladas)

- **Navegação:** Interface de página única com roteamento usando `react-router-dom`.
- **Listagem de Carros:** Exibição da frota de veículos disponíveis em formato de cards (`/`). (Dados atualmente mockados).
- **Cadastro de Usuário:** Formulário para registro de novos usuários (`/register`). (Chamada à API simulada).
- **Login de Usuário:** Formulário para autenticação de usuários (`/login`). (Chamada à API simulada).
- **Gerenciamento de Estado de Autenticação:** Uso do React Context API (`AuthContext`) para gerenciar se o usuário está logado e armazenar um token JWT simulado.
- **Armazenamento Local:** O token de autenticação simulado é persistido no `localStorage`.
- **Rotas Protegidas:** A página inicial (`/`) é protegida, exigindo que o usuário esteja logado para acessá-la. Usuários não autenticados são redirecionados para `/login`.
- **Design Responsivo (Básico):** Estrutura CSS visando adaptabilidade (mais testes e refinamentos podem ser necessários).
- **Componentização:** Estrutura organizada com componentes reutilizáveis (Header, Footer, Button, CarCard, etc.).
- **Simulação de API:** O serviço (`src/services/api.js`) simula chamadas de rede para login, registro e busca de carros, permitindo testar a UI sem o backend.

### Backend (Planejado)

- **API RESTful:** Construída com Node.js e Express.
- **Banco de Dados:** MongoDB com Mongoose para persistência de dados.
- **Autenticação:** Gerenciamento de usuários (cadastro, login) com senhas criptografadas (bcrypt) e autenticação via Token JWT. Endpoints: `/api/auth/register` e `/api/auth/login`.
- **Gerenciamento de Clientes:** CRUD para perfis de clientes vinculados aos usuários. Endpoints: `/api/clientes`.
- **Gerenciamento de Carros:** CRUD para o catálogo de veículos (marca, modelo, ano, preço, disponibilidade). Endpoints: `/api/carros`.
- **Gerenciamento de Reservas:** CRUD para registrar aluguéis (cliente, carro(s), datas, valor, status). Endpoints: `/api/reservas`.
- **Segurança:** Middleware para proteger endpoints que exigem autenticação.

## Tecnologias Utilizadas

### Frontend

- ⚛️ **React 19** (com Hooks)
- ⚡ **Vite:** Build tool rápido para desenvolvimento frontend.
- 🛣️ **React Router DOM v7:** Para roteamento no lado do cliente.
- 🔄 **Axios:** Para realizar chamadas HTTP (atualmente para a simulação).
- 🧠 **React Context API:** Para gerenciamento do estado global de autenticação.
- 💅 **CSS Modules & CSS Variables:** Para estilização modular e organizada.
- 🚨 **ESLint:** Para linting de código.

### Backend (Planejado)

- 🟩 **Node.js**
- 🚀 **Express.js**
- 🍃 **MongoDB**
- 💧 **Mongoose**
- 🔐 **JSON Web Token (JWT)**
- 🔑 **bcrypt.js**

## Configuração e Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório (se estiver no Git):**

    ```bash
    git clone https://github.com/taavaresdiego/car-rental-app.git
    cd car-rental-app
    ```

    _Se você baixou como ZIP, descompacte e navegue até a pasta pelo terminal._

2.  **Instale as dependências:**

    Usando npm:

    ```bash
    npm install
    ```

    Ou usando Yarn:

    ```bash
    yarn install
    ```

## Rodando o Projeto

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

Usando npm:

```bash
npm run dev
```

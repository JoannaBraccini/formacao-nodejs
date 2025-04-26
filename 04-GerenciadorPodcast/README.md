# 🎙️ Gerenciador de Podcasts

Este é um projeto de API REST desenvolvida em Node.js sem uso de frameworkd para gerenciar podcasts. Ele permite listar episódios e filtrar episódios por nome do podcast.

## 🚀 Funcionalidades

- **Listar episódios**: Retorna todos os episódios disponíveis.
- **Filtrar episódios**: Filtra episódios com base no nome do podcast.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **HTTP**: Módulo nativo do Node.js para criar o servidor.
- **JSON**: Formato utilizado para armazenar os dados dos podcasts.

## 📂 Estrutura do Projeto

```
src/
├── app.ts                # Configuração principal do servidor
├── controllers/          # Controladores para lidar com as requisições
├── models/               # Modelos de dados
├── repositories/         # Repositório de dados (mockado em JSON)
├── routes/               # Rotas da aplicação
├── services/             # Serviços para lógica de negócios
├── utils/                # Utilitários como enums e constantes
```

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## ⚙️ Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd 04-GerenciadorPodcast
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure a porta no arquivo `.env`:
   ```
   PORT=3000
   ```

## ▶️ Como Executar

### Modo de Desenvolvimento

Para rodar o servidor em modo de desenvolvimento com recarregamento automático:

```bash
npm run watch
```

### Modo de Produção

Para compilar e executar o servidor:

```bash
npm start
```

O servidor estará disponível em `http://localhost:<PORT>`.

## 📡 Endpoints

### **Listar Episódios**

- **URL**: `/api/list`
- **Método**: `GET`
- **Resposta**:
  ```json
  [
    {
      "podcastName": "Código Fonte TV",
      "episode": "VOCÊ ENCARA O NOSSO DESAFIO DE LÓGICA DE PROGRAMAÇÃO?",
      "videoId": "NcvjJe0UdLY",
      "categories": ["desenvolvimento de software", "programação"]
    }
  ]
  ```

### **Filtrar Episódios**

- **URL**: `/api/episodes?p=<nome_do_podcast>`
- **Método**: `GET`
- **Exemplo**: `/api/episodes?p=Código Fonte TV`
- **Resposta**:
  ```json
  [
    {
      "podcastName": "Código Fonte TV",
      "episode": "VOCÊ ENCARA O NOSSO DESAFIO DE LÓGICA DE PROGRAMAÇÃO?",
      "videoId": "NcvjJe0UdLY",
      "categories": ["desenvolvimento de software", "programação"]
    }
  ]
  ```

## 🧪 Testes

Atualmente, o projeto não possui testes automatizados. Contribuições para adicionar testes são bem-vindas!

## 🤝 Contribuindo

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## 📜 Licença

Este projeto está licenciado sob a licença ISC.

---

Feito com ❤️ por **Joanna Braccini**.

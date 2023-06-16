# Nullstack Portfolio

Este projeto de portfólio pessoal foi criado usando [Nullstack](https://nullstack.app/) e [TypeScript](https://www.typescriptlang.org/), com dados armazenados em uma base de dados MongoDB.

## Recursos

- Informações pessoais e introdução
- Experiências profissionais detalhadas, incluindo empresas e cargos
- Projetos pessoais com links para demonstração e código-fonte
- Contribuições em projetos de código aberto
- Histórico de educação e qualificações

## Como executar este projeto

### Instalar as dependências

```bash
npm install
```

### Configurar as variáveis de ambiente

Copie o exemplo de arquivo de ambiente para um arquivo .env e preencha as variáveis correspondentes.

```sh
NULLSTACK_PROJECT_NAME="[dev] Nullstack Portfolio"
NULLSTACK_PROJECT_DOMAIN="localhost"
NULLSTACK_PROJECT_COLOR="#D22365"
NULLSTACK_SERVER_PORT="3000"
NULLSTACK_SECRETS_DATABASE_NAME="" # Nome do seu banco de dados no MongoDB
NULLSTACK_SECRETS_MONGODB_URI="" # URI de conexão ao seu MongoDB
```

### Executar a aplicação

```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação em seu navegador.

## Estrutura de Dados

O projeto inclui várias classes de modelo TypeScript para estruturar os dados. Cada classe representa uma coleção diferente no MongoDB. Aqui estão as classes de modelo:

- `SummaryModel`: Informações pessoais e introdução
- `roleModel`: Cargos dentro de uma empresa (uma pessoa pode ter ocupado vários cargos em uma única empresa)
- `WorkExperiencesModel`: Representa uma empresa, que contém um array de roles (cargos).
- `PersonalProjectModel`: Projetos pessoais
- `OpenSourceContribsModel`: Contribuições em projetos de código aberto
- `EducationModel`: Histórico de educação e qualificações

Você pode encontrar a definição completa dessas classes no arquivo de tipagem do banco de dados `databaseInterfaces.ts`.

## Aprenda mais sobre Nullstack

Para saber mais sobre como este projeto foi construído e como você pode aproveitar o Nullstack em seus próprios projetos, consulte a [documentação oficial do Nullstack](https://nullstack.app/documentation).

---

Espero que este README melhorado torne o seu projeto mais compreensível e fácil de usar. Não se esqueça de preencher as variáveis de ambiente antes de executar o projeto!
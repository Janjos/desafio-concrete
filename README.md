# Desafio Concrete

Simples SPA construída em React, que realiza buscas de perfis e seus respectivos repositórios no Github.

## Rodando o projeto
```
npm start
```
O comando `npm start` irá iniciar um servidor local rodando a aplicação na porta :8080.

##

```
npm run test
```
Roda os testes

##

```
npm run build
```
Cria uma pasta "dist" com os arquivos prontos para produção

##

```
npm run deploy
```
Faz o build do projeto e realiza o deploy para o Firebase. É necessário ter o Firebase instalado na sua máquina.

---

## Sobre o projeto e decisões tomadas
Logo depois de escrever `npm init` no meu terminal, e começar estruturar o projeto, pensei:
"Tão simples quanto a tarefa que esta aplicação cumpre, deve ser sua estrutura e funcionamento".
E foi exatamente o que segui ao estruturar o projeto. O que me levou a duas importantes decisões:

**Criar o projeto sem o `create-react-app`**\
Assim eu me certificaria de usar somente o necessário durante o processo de desenvolvimento, além de conhecer cada pedaço do código.

**Não utilizar Redux ou Context**\
Uma das primeiras coisas que coloquei no `constants.js` foram as rotas da API do Github que seriam utilizadas. Eram apenas duas rotas,
cujos dados seriam utilizados nos componentes de apenas uma das telas. O fluxo unidirecional de dados seria garantido, então decidi que não seria
necessário haver um estado global, ou mesmo contextual na aplicação.

###

O framework utilizado para testes foi o Jest, junto com o Enzyme (Para testar componentes React).
Todos os componentes do projeto são cobertos por pelo menos um "smoke test", renderizados com o `shallow` do Enzyme.

Os componentes maiores e mais complexos, possuem testes unitários que verificam se os componentes e dados renderizados estão de
acordo com o "mock" utilizado no teste.


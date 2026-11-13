# Vibe Products API

API mockada de produtos desenvolvida com Express e TypeScript. Os dados ficam em memória e servem para desenvolvimento de interfaces, aulas e testes locais.

## Tecnologias

- Node.js
- Express 5
- TypeScript
- ts-node-dev

## Como executar

```bash
npm install
npm run dev
```

A API fica em `http://localhost:3000`. A variável `PORT` permite escolher outra porta.

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/products` | Lista todos os produtos |
| `GET` | `/products/search` | Filtra por `category` e/ou `stockStatus` |
| `GET` | `/products/:id` | Consulta um produto pelo ID |

Valores aceitos para `stockStatus`: `available` e `unavailable`.

Exemplos:

```bash
curl http://localhost:3000/products
curl 'http://localhost:3000/products/search?category=corpo&stockStatus=available'
curl http://localhost:3000/products/1
```

O arquivo `requests.http` contém requisições prontas para clientes compatíveis.

## Limitações

- Dados fixos em memória.
- Sem banco de dados.
- Sem autenticação.
- Sem persistência entre reinicializações.

Uma versão anterior desta documentação está em `src/README.md`; este README na raiz reúne instalação, rotas e limitações.

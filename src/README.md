# API Mock de Produtos

## Objetivo

Esta API mockada simula a consulta de produtos fictícios em memória para uso em desenvolvimento e testes locais.

## Rotas

- `GET /products` - lista todos os produtos mockados.
- `GET /products/search` - busca produtos filtrando por `category` e/ou `stockStatus` via query string.
- `GET /products/:id` - retorna um produto específico pelo id.

## Exemplo de resposta

### `GET /products`

```json
[
	{
		"id": 1,
		"name": "Creme Hidratante Essencial",
		"imageUrl": "https://placehold.co/600x600?text=Creme+Hidratante",
		"category": "Cuidados com a pele",
		"price": "R$ 49,90",
		"stockStatus": "available",
		"isAvailable": true
	}
]
```

## Status HTTP

- `200 OK` - resposta bem-sucedida nas rotas existentes.
- `400 Bad Request` - erro de validação (ex: valor inválido para `stockStatus` em `/products/search`).
- `404 Not Found` - produto não encontrado em `GET /products/:id`.

## Como testar manualmente

1. Inicie a API com `npm run dev`.
2. Acesse `GET http://localhost:3000/products` no navegador, Insomnia, Postman ou `curl`.
3. Acesse `GET http://localhost:3000/products/search?category=Perfumaria&stockStatus=unavailable` para testar a busca.
4. Acesse `GET http://localhost:3000/products/1` para consultar um item existente.
5. Acesse `GET http://localhost:3000/products/999` para validar o retorno `404`.

## Limitações da versão mockada

- Os dados ficam em memória e são fixos.
- Não há banco de dados.
- Não há autenticação.
- Não há persistência entre reinicializações.
- A API expõe apenas as três rotas documentadas acima.

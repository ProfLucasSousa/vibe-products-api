import type { Request, Response } from "express";

const express = require("express");

const { formatProduct, findProductById, mockProducts } = require("./products");

type StockStatus = "available" | "unavailable";

interface ProductResponse {
	id: number;
	name: string;
	imageUrl: string;
	category: string;
	price: string;
	stockStatus: StockStatus;
	isAvailable: boolean;
}

const app = express();
const port = Number(process.env.PORT) || 3000;

function parseId(value: string): number | null {
	const id = Number(value);
	return Number.isInteger(id) && id > 0 ? id : null;
}

app.get("/products", (_request: Request, response: Response) => {
	const products = mockProducts.map(formatProduct);
	response.json(products);
});

app.get("/products/:id", (request: Request, response: Response) => {
	const rawId = request.params.id;
	const id = typeof rawId === "string" ? parseId(rawId) : null;

	if (id === null) {
		response.status(404).json({ message: "Produto não encontrado." });
		return;
	}

	const product = findProductById(id);

	if (!product) {
		response.status(404).json({ message: "Produto não encontrado." });
		return;
	}

	response.json(formatProduct(product));
});

app.listen(port, () => {
	console.log(`Mock API rodando em http://localhost:${port}`);
});

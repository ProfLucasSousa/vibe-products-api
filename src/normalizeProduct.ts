type StockStatus = "available" | "unavailable";

interface ProductInput {
	id: number;
	name: string;
	imageUrl?: string;
	category: string;
	price: number;
	stockStatus: StockStatus;
}

interface NormalizedProduct {
	id: number;
	name: string;
	imageUrl: string;
	category: string;
	price: string;
	stockStatus: StockStatus;
	isAvailable: boolean;
}

const DEFAULT_PRODUCT_IMAGE_URL = "https://placehold.co/600x600?text=Produto";

function normalizeProduct(product: ProductInput): NormalizedProduct {
	if (!product || typeof product !== "object") {
		throw new TypeError("Produto inválido.");
	}

	const { id, name, imageUrl, category, price, stockStatus } = product;

	if (typeof id !== "number" || Number.isNaN(id)) {
		throw new TypeError("ID do produto inválido.");
	}

	if (typeof name !== "string" || name.trim() === "") {
		throw new TypeError("Nome do produto inválido.");
	}

	if (typeof category !== "string" || category.trim() === "") {
		throw new TypeError("Categoria do produto inválida.");
	}

	if (typeof price !== "number" || !Number.isFinite(price)) {
		throw new TypeError("Preço do produto inválido.");
	}

	if (price < 0) {
		throw new RangeError("Preço não pode ser negativo.");
	}

	if (stockStatus !== "available" && stockStatus !== "unavailable") {
		throw new TypeError("Status de estoque inválido.");
	}

	const normalizedImageUrl =
		typeof imageUrl === "string" && imageUrl.trim() !== ""
			? imageUrl.trim()
			: DEFAULT_PRODUCT_IMAGE_URL;

	return {
		id,
		name: name.trim(),
		imageUrl: normalizedImageUrl,
		category: category.trim(),
		price: new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(price),
		stockStatus,
		isAvailable: stockStatus === "available",
	};
}

declare const module: {
	exports: {
		normalizeProduct: typeof normalizeProduct;
	};
};

module.exports = { normalizeProduct };
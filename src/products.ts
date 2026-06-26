type StockStatus = "available" | "unavailable";

interface MockProduct {
	id: number;
	name: string;
	imageUrl: string;
	category: string;
	price: number;
	stockStatus: StockStatus;
}

interface ProductResponse {
	id: number;
	name: string;
	imageUrl: string;
	category: string;
	price: string;
	stockStatus: StockStatus;
	isAvailable: boolean;
}

const DEFAULT_PRODUCT_IMAGE_URL = "https://placehold.co/600x600?text=Produto";

const mockProducts: MockProduct[] = [
	{
		id: 1,
		name: "Creme Hidratante Essencial",
		imageUrl: "https://placehold.co/600x600?text=Creme+Hidratante",
		category: "Cuidados com a pele",
		price: 49.9,
		stockStatus: "available",
	},
	{
		id: 2,
		name: "Shampoo Suave Diário",
		imageUrl: "https://placehold.co/600x600?text=Shampoo+Suave",
		category: "Cuidados pessoais",
		price: 28.5,
		stockStatus: "available",
	},
	{
		id: 3,
		name: "Colônia Frescor Leve",
		imageUrl: "https://placehold.co/600x600?text=Colonia+Frescor",
		category: "Perfumaria",
		price: 89.9,
		stockStatus: "unavailable",
	},
];

function formatProduct(product: MockProduct): ProductResponse {
	return {
		id: product.id,
		name: product.name,
		imageUrl: product.imageUrl || DEFAULT_PRODUCT_IMAGE_URL,
		category: product.category,
		price: new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(product.price),
		stockStatus: product.stockStatus,
		isAvailable: product.stockStatus === "available",
	};
}

function findProductById(id: number): MockProduct | undefined {
	return mockProducts.find((product) => product.id === id);
}

module.exports = {
	mockProducts,
	formatProduct,
	findProductById,
};
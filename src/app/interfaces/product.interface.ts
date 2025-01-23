export interface ProductModel {
	_id: string;
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tags: string[];
	characteristics: ProductCharacteristic[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	reviews: ReviewModel[];
	reviewCount: number;
	reviewAvg: number;
}
export interface ProductCharacteristic {
	name: string;
	value: string;
}
export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

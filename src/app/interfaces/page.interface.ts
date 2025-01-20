export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export interface TopPageModel {
	_id: string;
	firstCategory: TopLevelCategory;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	tags: any[];
	advantages: any[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

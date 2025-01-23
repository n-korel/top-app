import { ReactNode } from 'react';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}
export interface TopPageModel {
	seoText: ReactNode;
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

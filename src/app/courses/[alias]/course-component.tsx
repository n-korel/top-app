'use client';

import { MenuItem } from '@/app/interfaces/menu.interface';
import { TopPageModel } from '@/app/interfaces/page.interface';
import { ProductModel } from '@/app/interfaces/product.interface';
import { withLayout } from '@/app/layout/Layout';

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: TopPageModel;
	products: ProductModel[];
}

function CourseComponent({ menu, page, products, firstCategory }: CourseProps): JSX.Element {
	return <>{products && products.length}</>;
}

export default withLayout(CourseComponent);

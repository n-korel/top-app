import { MenuItem } from '@/app/interfaces/menu.interface';
import { TopPageModel } from '@/app/interfaces/page.interface';
import { ProductModel } from '@/app/interfaces/product.interface';
import axios from 'axios';
import { notFound } from 'next/navigation';
import CourseComponent from './course-component';

// Генерация статических путей (замена getStaticPaths)
export async function generateStaticParams() {
	const firstCategory = 0;
	try {
		const { data: menu } = await axios.post<MenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{ firstCategory },
		);

		// Формируем массив параметров для всех возможных путей
		return menu.flatMap((m) =>
			m.pages.map((p) => ({
				alias: p.alias,
			})),
		);
	} catch (error) {
		console.error('Error generating paths:', error);
		return [];
	}
}

// Получение данных для страницы (замена getStaticProps)
async function getData(alias: string) {
	const firstCategory = 0;
	try {
		// Получаем все необходимые данные параллельно
		const [menuRes, pageRes] = await Promise.all([
			axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
				firstCategory,
			}),
			axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + alias),
		]);

		// Получаем продукты после получения страницы
		const { data: products } = await axios.post<ProductModel[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
			{
				category: pageRes.data.category,
				limit: 10,
			},
		);

		return {
			menu: menuRes.data,
			page: pageRes.data,
			products,
			firstCategory,
		};
	} catch (error) {
		return null;
	}
}

// Основной компонент страницы
export default async function CoursePage({ params }: { params: { alias: string } }) {
	const data = await getData(params.alias);

	if (!data) {
		notFound();
	}

	return (
		<CourseComponent
			menu={data.menu}
			page={data.page}
			products={data.products}
			firstCategory={data.firstCategory}
		/>
	);
}

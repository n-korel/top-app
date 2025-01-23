import { MenuItem } from '@/app/interfaces/menu.interface';
import { TopPageModel } from '@/app/interfaces/page.interface';
import { ProductModel } from '@/app/interfaces/product.interface';
import { Footer } from '@/app/layout/Footer/Footer';
import { Header } from '@/app/layout/Header/Header';
import { Sidebar } from '@/app/layout/Sidebar/Sidebar';
import axios from 'axios';
import styles from '@/app/layout/Layout.module.css';
import { LayoutProps } from '@/app/layout/Layout.props';

interface CoursePageProps {
	params: {
		alias?: string;
	};
}

// Генерация статических параметров для динамических маршрутов
export async function generateStaticParams() {
	const firstCategory = 0;

	// Запрос для получения меню
	const { data: menu } = await axios.post<MenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}api/top-page/find`,
		{ firstCategory },
	);

	// Возвращаем параметры маршрута
	return menu.flatMap((m) =>
		m.pages.map((p) => ({
			alias: p.alias, // Динамический параметр
		})),
	);
}

// Основной компонент страницы
export default async function CoursePage({ params }: CoursePageProps) {
	if (!params?.alias) {
		return <div>Alias is required but not provided.</div>;
	}
	const { alias } = params;

	// Получение данных страницы и продуктов
	const { data: page } = await axios.get<TopPageModel>(
		`${process.env.NEXT_PUBLIC_DOMAIN}api/top-page/byAlias/${alias}`,
	);

	const { data: products } = await axios.post<ProductModel[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}api/product/find`,
		{ category: page.category, limit: 10 },
	);

	// Возвращаем рендеринг страницы
	return (
		<div>
			<div className={styles.wrapper}>
				<Header className={styles.header} />
				<Sidebar className={styles.sidebar} />
				<p>{page.secondCategory}</p>
				<Footer className={styles.footer} />
			</div>
			<ul>
				{products.map((product) => (
					<li key={product._id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
}

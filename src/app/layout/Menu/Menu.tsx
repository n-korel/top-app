'use client';

import { AppContext } from '@/app/context/app.context';
import { FirstLevelMenuItem } from '@/app/interfaces/menu.interface';
import { useContext } from 'react';
import CourseIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import style from './Menu.module.css';

/* const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]; */

export const Menu = (): JSX.Element => {
	/* 	const { menu, setMenu, firstCategory } = useContext(AppContext);

	if (!menu || menu.length === 0) {
		return <div>Loading menu...</div>;
	} */

	return (
		<div className={style.firstlevel}>
			<div>
				<CourseIcon />
			</div>
			Курсы
			<div>
				<ServicesIcon />
			</div>
			Сервисы
			<div>
				<BooksIcon />
			</div>
			Книги
			<div>
				<ProductsIcon />
			</div>
			Продукты
		</div>
	);
};

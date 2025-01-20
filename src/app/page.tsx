import axios from 'axios';
import { MenuItem } from './interfaces/menu.interface';
import ClientPage from './components/client-page';

// Функция получения данных на этапе сборки
async function getData() {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
		{ firstCategory },
	);
	return { menu, firstCategory };
}

// Основной компонент страницы
export default async function HomePage() {
	const { menu, firstCategory } = await getData();

	return <ClientPage menu={menu} firstCategory={firstCategory} />;
}

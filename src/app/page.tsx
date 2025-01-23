'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Htag } from './components/Htag/Htag';
import { Button } from './components/Button/Button';
import { P } from './components/P/P';
import { Tag } from './components/Tag/Tag';
import { Rating } from './components/Rating/Rating';
import { MenuItem } from './interfaces/menu.interface';
import { withLayout } from './layout/Layout';

function Home(): JSX.Element {
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const firstCategory = 0;

	useEffect(() => {
		const fetchMenu = async () => {
			const { data } = await axios.post<MenuItem[]>(
				`${process.env.NEXT_PUBLIC_DOMAIN}api/top-page/find`,
				{ firstCategory },
			);
			setMenu(data);
		};

		fetchMenu();
	}, []);

	return (
		<>
			<Htag tag="h1">Заголовок</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<P size="l">Big</P>
			<P>middle</P>
			<P size="s">small</P>
			<Tag size="s">Ghost</Tag>
			<Tag size="m" color="red">
				Red
			</Tag>
			<Tag size="s" color="green">
				Green
			</Tag>
			<Tag color="primary">Primary</Tag>
			<Rating rating={4} isEditable setRating={() => {}} />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}

export default withLayout(Home);

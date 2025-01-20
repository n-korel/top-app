'use client';

import { useState } from 'react';
import { Button } from './Button/Button';
import { Htag } from './Htag/Htag';
import { P } from './P/P';
import { Tag } from './Tag/Tag';
import { Rating } from './Rating/Rating';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

// Определяем базовый интерфейс для props
export interface ClientPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

function ClientPage({ menu, firstCategory }: ClientPageProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

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
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}

// Типизируем HOC withLayout
export default withLayout<ClientPageProps>(ClientPage);

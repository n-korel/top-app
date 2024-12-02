'use client';

import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Htag } from './components/Htag/Htag';
import { P } from './components/P/P';
import { Tag } from './components/Tag/Tag';
import { Rating } from './components/Rating/Rating';
import { withLayout } from './layout/Layout';

function Home(): JSX.Element {
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
		</>
	);
}

export default withLayout(Home);

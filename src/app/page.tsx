'use client';

import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import { Htag } from './components/Htag/Htag';
import { P } from './components/P/P';
import { Tag } from './components/Tag/Tag';
import { Rating } from './components/Rating/Rating';

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('Counter' + counter);
	});

	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
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
			<Rating rating={4} />
		</>
	);
}

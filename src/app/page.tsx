import { Button } from './components/Button/Button';
import { Htag } from './components/Htag/Htag';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">ХЕЕЙ</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
		</>
	);
}

import { AppContext } from '@/app/context/app.context';
import { useContext } from 'react';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	return <div></div>;
};

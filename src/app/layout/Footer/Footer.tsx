import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>OwlTop © 2024 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};

import { NavButton } from '../NavButton/NavButton';
import styles from './NotSign.module.scss';

export function NotSign() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.message}>
				<h1 className={styles.title}>Вы не авторизованы</h1>
				<span className={styles.text}>Для разработки вы сперва должны авторизоваться.</span>
			</div>
			<NavButton url="/login" text="Войти" />
		</div>
	);
}

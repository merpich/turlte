import { NavButton } from '../NavButton/NavButton';
import styles from './Intro.module.scss';

export function Intro() {
	return (
		<div className={styles.intro}>
			<div className={styles.text}>
				<h1 className={styles.title}>Место, где вы можете создавать свой front-end</h1>
				<h2 className={styles.subtitle}>Opossum - онлайн редактор кода для front-end разработчиков</h2>
			</div>
			<NavButton url="/login" text="Начать разработку" />
		</div>
	);
}

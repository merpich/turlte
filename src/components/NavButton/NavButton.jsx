import { Link } from 'react-router-dom';
import styles from './NavButton.module.scss';

export function NavButton({ url, text }) {
	return (
		<Link className={styles.button} to={url}>
			{ text }
		</Link>
	);
}

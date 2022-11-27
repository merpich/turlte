import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export const Button = ({ text, type = 'button', onClick = null, url = null }) => {
	return (
		<>
			{
				onClick
					? (
						<button className={styles.button} type={type} onClick={onClick}>
							{ text }
						</button>
					) : (
						<Link className={styles.button} to={url}>
							{ text }
						</Link>
					)
			}
		</>
	);
}

import styles from './Input.module.scss';

export function Input({ type, name, caption = '', placeholder = '', required = false }) {
	const attrs = { caption, type, name, placeholder, required };

	return (
		<label className={styles.label}>
			<span className={styles.caption}>{caption}</span>
			<input
				className={styles.input}
				{...attrs}
			/>
		</label>
	);
}

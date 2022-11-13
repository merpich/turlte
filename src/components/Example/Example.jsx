import styles from './Example.module.scss';

export function Example({ title, action, imageUrl, alt }) {
	return (
		<div className={styles.code}>
			<div className={styles.text}>
				<h4 className={styles.title}>{title}</h4>
				<h5 className={styles.subtitle}>{action}</h5>
			</div>
			<picture className={styles.picture}>
				<img className={styles.image} src={imageUrl} alt={alt} />
			</picture>
		</div>
	);
}

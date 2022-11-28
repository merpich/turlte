import { useMemo, useContext } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import styles from './Preview.module.scss';

export function Preview() {
	const { html, css, js } = useContext(EditorContext);

	const document = useMemo(() => {
		if (!html && !css && !js) return

		return (
			`<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<style>
						${css}
					</style>
				</head>
				<body>
					${html}
					<script>
						${js}
					</script>
				</body>
			</html>`
		);
	}, [html, css, js]);

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>

			</header>
			<div className={styles.content}>
				{document
					? <iframe className={styles.view} title="view" srcDoc={document} />
					: <div className={styles.loading}>Результат вашего кода отоброзится здесь</div>}
			</div>
		</div>
	);
}

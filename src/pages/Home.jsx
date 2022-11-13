import { Intro } from '../components/Intro/Intro';
import { Example } from '../components/Example/Example';
import styles from '../styles/modules/Home.module.scss';

export function Home() {
	const editors = [
		{title: 'HTML', action: 'Размечай страницу', imageUrl: './images/code/html.jpg', alt: 'Пример кода html'},
		{title: 'CSS', action: 'Стилизуй элементы', imageUrl: './images/code/css.jpg', alt: 'Пример кода css'},
		{title: 'JavaScript', action: 'Оживляй интерфейс', imageUrl: './images/code/js.jpg', alt: 'Пример кода javascript'}
	];

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Intro />
				<div className={styles.examples}>
					{editors.map((item, key) => (
						<Example
							key={key}
							{...item}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

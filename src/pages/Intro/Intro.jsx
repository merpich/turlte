import { Link } from "react-router-dom";
import { useSpring, useTrail, animated, easings } from 'react-spring';
import { Example } from '../../components/Example/Example';
import styles from './Intro.module.scss';

export const Intro = () => {
	const examples = [
		{title: 'HTML', action: 'Размечай страницу', imageUrl: './images/examples/html.jpg', alt: 'Пример кода html'},
		{title: 'CSS', action: 'Стилизуй элементы', imageUrl: './images/examples/css.jpg', alt: 'Пример кода css'},
		{title: 'JavaScript', action: 'Оживляй интерфейс', imageUrl: './images/examples/js.jpg', alt: 'Пример кода javascript'}
	];

	const animateTitle = useSpring({
		from: {
			opacity: 0,
			transform: 'translate(0, -100%)'
		},
		to: {
			opacity: 1,
			transform: 'translate(0, 0)'
		},
		config: {
			duration: 800,
			easing: easings.easeInOutQuad
		},
		delay: 200
	});

	const animateSubtitle = useSpring({
		from: {
			opacity: 0,
			transform: 'translate(0, 100%)'
		},
		to: {
			opacity: 1,
			transform: 'translate(0, 0)'
		},
		config: {
			duration: 800,
			easing: easings.easeInOutQuad
		},
		delay: 600
	});

	const trail = useTrail(examples.length, {
		from: {
			opacity: 0,
			transform: 'scale(0.8) translate(100%, 0)'
		},
		to: {
			opacity: 1,
			transform: 'scale(1) translate(0, 0)'
		},
		delay: 1000,
		config: {
			duration: 1000,
			easing: easings.easeInOutQuad
		}
	});

	return (
		<div className={styles.intro}>
			<div className={styles.container}>
				<div className={styles.welcome}>
					<nav className={styles.nav}>
						<ul className={styles.list}>
							<li className={styles.item}>
								<img src="./images/icons/turtle.svg" alt="Логотип Turtle" />
							</li>
							<li className={styles.item}>
								<Link className={styles.link} to="/login">Вход</Link>
							</li>
							<li className={styles.item}>
								<Link className={styles.link} to="/login">Регистрация</Link>
							</li>
						</ul>
					</nav>
					<div className={styles.text}>
						<animated.h1 className={styles.title} style={animateTitle}>
							Место, где вы можете создавать свой front-end
						</animated.h1>
						<animated.h2 className={styles.subtitle} style={animateSubtitle}>
							Turtle - онлайн редактор кода для front-end разработчиков
						</animated.h2>
					</div>
				</div>
				<div className={styles.examples}>
					{
						trail.map((props, index) => (
							<animated.div
								key={index}
								style={{...props}}
							>
								<Example
									{...examples[index]}
								/>
							</animated.div>
						))
					}
				</div>
			</div>
		</div>
	);
}

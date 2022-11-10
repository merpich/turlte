import { useState } from 'react';
import styles from '../styles/modules/Login.module.scss';

export function Login() {
	const [activeAuth, setActiveAuth] = useState(true);
	const [activeReg, setActiveReg] = useState(false);

	function clickSwitcher(event) {
		const textContent = event.target.textContent;

		if (textContent === 'Авторизация') {
			if (!activeAuth) {
				setActiveAuth(true);
				setActiveReg(false);
			}
		} else if (!activeReg) {
			setActiveAuth(false);
			setActiveReg(true);
		}
	}

	function login(event) {
		event.preventDefault();
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.controls}>
				<button
					className={`${styles.switcher} ${activeAuth ? styles.switcher_active : ''}`}
					onClick={clickSwitcher}
				>
					Авторизация
				</button>
				<button
					className={`${styles.switcher} ${activeReg ? styles.switcher_active : ''}`}
					onClick={clickSwitcher}
				>
					Регистрация
				</button>
			</div>

			<form className={styles.form} method="post" onSubmit={login}>
				{activeAuth
					? (
						<p>Авторизация</p>
					) : (
						<p>Регистрация</p>
					)}
				<button className={styles.button} type="submit">
					Войти
				</button>
			</form>
		</div>
	);
}

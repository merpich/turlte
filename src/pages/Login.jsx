import { useState } from 'react';
import { Input } from '../components/Input/Input';
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
						<fieldset className={styles.fieldset}>
							<Input
								caption="Электронная почта"
								type="email"
								name="login"
								placeholder="user@mail.com"
								required={true}
							/>
							<Input
								caption="Пароль"
								type="password"
								name="password"
								placeholder="password"
								required={true}
							/>
						</fieldset>
					) : (
						<fieldset className={styles.fieldset}>
							<Input
								caption="Ваш никнейм"
								type="text"
								name="nickname"
								placeholder="Как вас называть"
								required={true}
							/>
							<Input
								caption="Электронная почта"
								type="email"
								name="login"
								placeholder="user@mail.com"
								required={true}
							/>
							<Input
								caption="Пароль"
								type="password"
								name="password"
								placeholder="password"
								required={true}
							/>
							<Input
								caption="Повторите пароль"
								type="password"
								name="password"
								placeholder="password"
								required={true}
							/>
						</fieldset>
					)}
				<button className={styles.button} type="submit">
					Войти
				</button>
			</form>
		</div>
	);
}

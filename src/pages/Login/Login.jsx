import { Input } from '../../components/Input/Input';
import { FormHeader } from '../../components/Introduction/FormHeader/FormHeader';
import styles from './Login.module.scss';

export const Login = () => {
	return (
		<div className={styles.wrapper}>
			<FormHeader
				title="Авторизация"
				linkCaption="Регистрация"
				linkPath="/register"
			/>
			<form className={styles.form} method='post'>
				<fieldset className={styles.fieldset} data-direct='right'>
					<Input
						caption="Электронная почта"
						type="email"
						name="login"
						placeholder="user@mail.com"
						required={true}
					/>
				</fieldset>
				<fieldset className={styles.fieldset} data-direct='left'>
					<Input
						caption="Пароль"
						type="password"
						name="password"
						placeholder="password"
						required={true}
					/>
				</fieldset>

				<button className={styles.button}>Войти</button>
			</form>
		</div>
	);
}

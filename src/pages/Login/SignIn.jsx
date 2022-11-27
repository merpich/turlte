import { useSpring, animated, easings } from 'react-spring';
import { FormHeader } from '../../components/Introduction/FormHeader/FormHeader';
import { Input } from '../../components/Ui/Input/Input';
import { Button } from '../../components/Ui/Button/Button';
import styles from './Login.module.scss';

export const SignIn = () => {
	const inputs = {
		email: {
			caption: 'Электронная почта',
			type: 'email',
			name: 'email',
			placeholder: 'user@mail.com',
			required: true
		},
		password: {
			caption: 'Пароль',
			type: 'password',
			name: 'password',
			placeholder: 'password',
			required: true
		}
	}

	const animateEmail = useSpring({
		from: {
			opacity: 0,
			transform: 'translate(-100%, 0)'
		},
		to: {
			opacity: 1,
			transform: 'translate(0, 0)'
		},
		config: {
			duration: 1000,
			easing: easings.easeInOutCubic
		},
		delay: 200
	});

	const animatePassword = useSpring({
		from: {
			opacity: 0,
			transform: 'translate(100%, 0)'
		},
		to: {
			opacity: 1,
			transform: 'translate(0, 0)'
		},
		config: {
			duration: 1000,
			easing: easings.easeInOutQuad
		},
		delay: 600
	});

	const animateButton = useSpring({
		from: {
			opacity: 0,
			transform: 'translate(0, 100%)'
		},
		to: {
			opacity: 1,
			transform: 'translate(0, 0)'
		},
		config: {
			duration: 1000,
			easing: easings.easeInOutCubic
		},
		delay: 1000
	});

	return (
		<div className={styles.wrapper}>
			<FormHeader
				title="Авторизация"
				linkCaption="Регистрация"
				linkPath="/register"
			/>
			<form className={styles.form} method='post'>
				<animated.fieldset className={styles.fieldset} data-direct='right' style={animateEmail}>
					<Input {...inputs.email} />
				</animated.fieldset>
				<animated.fieldset className={styles.fieldset} data-direct='left' style={animatePassword}>
					<Input {...inputs.password} />
				</animated.fieldset>

				<animated.div style={animateButton}>
					<Button text="Войти" type="submit" />
				</animated.div>
			</form>
		</div>
	);
}

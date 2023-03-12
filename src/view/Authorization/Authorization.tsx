import { BaseButton, BaseContainer, BaseInput } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Authorization.module.scss';

interface IValue {
	email: string;
	password: string;
}

const Authorization: React.FC = () => {
	const router = useRouter();

	const [value, setValue] = React.useState<IValue>({
		email: '',
		password: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Ты авторизовался');
	};

	return (
		<BaseContainer>
			<div className={s.Authorization}>
				<form className={s.Form} onSubmit={handleSubmit}>
					<div className={s.Form_Title}>
						<span>Вход</span>
					</div>

					<BaseInput
						name='email'
						placeholder='Эл. почта'
						label='Эл. почта'
						value={value.email}
						onChange={(val: string) => setNewValue(val, 'email')}
						className={s.Form_Input}
					/>

					<BaseInput
						name='password'
						placeholder='Пароль'
						label='Пароль'
						type='password'
						prefix=''
						icon='eye-off'
						value={value.password}
						onChange={(val: string) => setNewValue(val, 'password')}
						className={s.Form_Input}
						autocomplete='new-password'
					/>

					<Link href='/password-recovery' className={s.Form_PasswordRecovery}>
						Забыли пароль?
					</Link>

					<div className={s.Form_Register}>
						<div className={s.Form_Register_Question}>Ещё нет аккаунта?</div>

						<Link href='/registration' className={s.Form_Register_Link}>
							Зарегистрироваться
						</Link>
					</div>

					<BaseButton
						title='Войти'
						type='blue'
						to_details
						className={s.Form_Button}
					/>
				</form>
			</div>
		</BaseContainer>
	);
};

export default Authorization;

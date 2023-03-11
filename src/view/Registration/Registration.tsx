import { BaseButton, BaseContainer, BaseInput } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Registration.module.scss';

interface IValue {
	email: string;
	first_name: string;
	second_name: string;
	phone: string;
	password: string;
	confirm_password: string;
}

const Registration: React.FC = () => {
	const router = useRouter();

	const [value, setValue] = React.useState<IValue>({
		email: '',
		first_name: '',
		second_name: '',
		phone: '',
		password: '',
		confirm_password: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Вы зарегистрировались');
	};

	return (
		<BaseContainer>
			<div className={s.Authorization}>
				<form className={s.Form} onSubmit={handleSubmit}>
					<div className={s.Form_Title}>
						<span>Регистрация</span>
					</div>

					<BaseInput
						name='first_name'
						placeholder='Имя'
						label='Имя'
						value={value.first_name}
						onChange={(val: string) => setNewValue(val, 'first_name')}
						className={s.Form_Input}
					/>

					<BaseInput
						name='second_name'
						placeholder='Фамилия'
						label='Фамилия'
						value={value.second_name}
						onChange={(val: string) => setNewValue(val, 'second_name')}
						className={s.Form_Input}
					/>

					<BaseInput
						name='phone'
						placeholder='Телефон'
						label='Телефон'
						value={value.phone}
						onChange={(val: string) => setNewValue(val, 'phone')}
						className={s.Form_Input}
					/>

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

					<BaseInput
						name='confirm_password'
						placeholder='Повторите пароль'
						label='Повторите пароль'
						type='password'
						prefix=''
						icon='eye-off'
						value={value.confirm_password}
						onChange={(val: string) => setNewValue(val, 'confirm_password')}
						className={s.Form_Input}
						autocomplete='new-password'
					/>

					<BaseButton
						title='Зарегистрироваться'
						type='blue'
						className={s.Form_Button}
					/>

					<div className={s.Form_Register}>
						<div className={s.Form_Register_Question}>Уже есть аккаунт?</div>

						<Link href='/' className={s.Form_Register_Link}>
							Войти
						</Link>
					</div>
				</form>
			</div>
		</BaseContainer>
	);
};

export default Registration;

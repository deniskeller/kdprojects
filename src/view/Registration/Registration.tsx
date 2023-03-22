import {
	BaseButton,
	BaseCheckbox,
	BaseContainer,
	BaseIcon,
	BaseInput,
	BaseInputPhone,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import s from './Registration.module.scss';

import InputMask from 'react-input-mask';
console.log('InputMask: ', InputMask);

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
		phone: '+',
		password: '',
		confirm_password: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [isChecked, setIsChecked] = React.useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Вы зарегистрировались');
		router.push('/successful-auth');
	};

	//валидация формы
	const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

	useEffect(() => {
		if (value.password.length >= 8 && isChecked) {
			setIsDisabled(false);
		}
		return () => {
			setIsDisabled(true);
		};
	}, [value.password, isChecked]);

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

					{/* <BaseInput
						name='phone'
						placeholder='Телефон'
						label='Телефон'
						value={value.phone}
						onChange={(val: string) => setNewValue(val, 'phone')}
						className={s.Form_Input}
					/> */}

					<BaseInputPhone
						name='phone'
						placeholder='Телефон22'
						label='Телефон'
						value={value.phone}
						onChange={(val: string) => setNewValue(val, 'phone')}
						className={s.Form_Input}
						formatter={(value) => {
							return (
								value
									.toString()
									.slice(0, 18)
									.replace(/\D/g, '')
									.replace(/(\d{0})(\d)/, '+7 $1')
									.replace(/(\d{3})(\d)/, '($1) $2')
									.replace(/(\d{3})(\d)/, '$1-$2')
									.replace(/(\d{2})(\d{2})/, '$1-$2') || '+7 '
							);
						}}
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

					<div className={s.Form_PasswordCheck}>
						<div className={s.Form_PasswordCheck_VerificationItem}>
							<BaseIcon
								viewBox='0 0 16 13'
								icon={ALL_ICONS.CHECKBOX_TICK}
								className={`${s.Form_PasswordCheck_VerificationItem_Icon} ${
									value.password.length >= 8 ? s.Match : ''
								}`}
							/>

							<div className={s.Form_PasswordCheck_VerificationItem_Parameter}>
								8+ символов
							</div>
						</div>

						<div className={s.Form_PasswordCheck_VerificationItem}>
							<BaseIcon
								viewBox='0 0 16 13'
								icon={ALL_ICONS.CHECKBOX_TICK}
								className={s.Form_PasswordCheck_VerificationItem_Icon}
							/>

							<div className={s.Form_PasswordCheck_VerificationItem_Parameter}>
								Цифры
							</div>
						</div>

						<div className={s.Form_PasswordCheck_VerificationItem}>
							<BaseIcon
								viewBox='0 0 16 13'
								icon={ALL_ICONS.CHECKBOX_TICK}
								className={s.Form_PasswordCheck_VerificationItem_Icon}
							/>

							<div className={s.Form_PasswordCheck_VerificationItem_Parameter}>
								Буквы
							</div>
						</div>
					</div>

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

					<div className={s.Form_PasswordCheck}>
						<div className={s.Form_PasswordCheck_VerificationItem}>
							<BaseIcon
								viewBox='0 0 16 13'
								icon={ALL_ICONS.CHECKBOX_TICK}
								className={`${s.Form_PasswordCheck_VerificationItem_Icon} ${
									value.password === value.confirm_password ? s.Match : ''
								}`}
							/>

							<div className={s.Form_PasswordCheck_VerificationItem_Parameter}>
								Пароли совпадают
							</div>
						</div>
					</div>

					<BaseCheckbox
						checked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
						className={s.Form_Checkbox}
					>
						Соглашаюсь с Политикой конфиденциальности
					</BaseCheckbox>

					<BaseButton
						disabled={isDisabled}
						title='Зарегистрироваться'
						type='blue'
						className={s.Form_Button}
					/>

					<div className={s.Form_Register}>
						<div className={s.Form_Register_Question}>Уже есть аккаунт?</div>

						<Link href='/'>
							<a href='' className={s.Form_Register_Link}>
								Войти
							</a>
						</Link>
					</div>
				</form>
			</div>
		</BaseContainer>
	);
};

export default Registration;

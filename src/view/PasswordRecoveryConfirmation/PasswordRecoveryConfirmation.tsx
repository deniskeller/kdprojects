import { BaseButton, BaseContainer, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import s from './PasswordRecoveryConfirmation.module.scss';

interface IValue {
	password: string;
	confirm_password: string;
}

const PasswordRecoveryConfirmation: React.FC = () => {
	const router = useRouter();

	const [value, setValue] = React.useState<IValue>({
		password: '',
		confirm_password: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Вы восстановили доступ');
	};

	//валидация формы
	const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

	useEffect(() => {
		if (
			value.password.length >= 8 &&
			value.password === value.confirm_password
		) {
			setIsDisabled(false);
		}
		return () => {
			setIsDisabled(true);
		};
	}, [value.password, value.confirm_password]);

	return (
		<BaseContainer>
			<div className={s.Authorization}>
				<form className={s.Form} onSubmit={handleSubmit}>
					<div className={s.Form_Title}>
						<span>Восстановление доступа</span>
					</div>

					<div className={s.Form_Subtitle}>
						<span>
							Введите эл. почту указанную при регистрации. Мы вышлем ссылку для
							смены пароля
						</span>
					</div>

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

					<BaseButton
						disabled={isDisabled}
						title='Сменить пароль'
						type='blue'
						className={s.Form_Button}
					/>
				</form>
			</div>
		</BaseContainer>
	);
};

export default PasswordRecoveryConfirmation;

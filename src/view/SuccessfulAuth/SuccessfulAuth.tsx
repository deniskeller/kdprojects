import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './SuccessfulAuth.module.scss';

const SuccessfulAuth: React.FC = () => {
	const router = useRouter();

	return (
		<div className={s.SuccessfulAuth}>
			<BaseContainer>
				<div className={s.Form}>
					<div className={s.Form_Image}></div>

					<div className={s.Form_Title}>
						<span>Вы успешно зарегистрированы!</span>
					</div>

					<div className={s.Form_Subtitle}>
						<span>Можете теперь делать разное</span>
					</div>

					<BaseButton
						title='Все проекты'
						icon_position='left'
						to_details
						className={`${s.Form_Button} ${s.Form_Button1}`}
						onClick={() => router.push('/user/projects')}
					/>

					<BaseButton
						title='Предложить проект'
						type='blue'
						to_details
						className={s.Form_Button}
						onClick={() => router.push('/create-project')}
					/>
				</div>
			</BaseContainer>
		</div>
	);
};

export default SuccessfulAuth;

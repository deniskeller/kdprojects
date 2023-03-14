import { BaseButton, BasePopup, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React from 'react';
import s from './AcceptProjectPopup.module.scss';

interface Props {
	className: string;
}

const AcceptProjectPopup: React.FC<Props> = ({ className = '' }) => {
	const { setPopup } = modalSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<BasePopup className={className} type='small'>
			<div className={s.Header}>
				<BaseTitle type='app'>Принять проект?</BaseTitle>
			</div>

			<div className={s.Description}>
				<p>Проект будет опубликован на витрине и доступен пользователям</p>
			</div>

			<div className={s.Actions}>
				<BaseButton title='Отмена' type='white' className={s.Actions_Button} />

				<BaseButton title='Принять' type='blue' className={s.Actions_Button} />
			</div>
		</BasePopup>
	);
};

export default AcceptProjectPopup;

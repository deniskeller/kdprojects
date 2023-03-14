import { BaseButton, BasePopup, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React from 'react';
import s from './DeleteProjectPopup.module.scss';

interface Props {
	className: string;
}

const DeleteProjectPopup: React.FC<Props> = ({ className = '' }) => {
	const { setPopup } = modalSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<BasePopup className={className} type='small'>
			<div className={s.Header}>
				<BaseTitle type='app'>Удаление</BaseTitle>
			</div>

			<div className={s.Description}>
				<p>Удалить проект навсегда?</p>
			</div>

			<div className={s.Actions}>
				<BaseButton title='Отмена' type='white' className={s.Actions_Button} />

				<BaseButton title='Удалить' type='red2' className={s.Actions_Button} />
			</div>
		</BasePopup>
	);
};

export default DeleteProjectPopup;

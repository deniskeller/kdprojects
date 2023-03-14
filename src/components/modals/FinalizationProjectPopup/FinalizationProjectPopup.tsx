import { BaseButton, BasePopup, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import { AccordionProjectComment } from 'components/content';
import React, { useEffect, useState } from 'react';
import s from './FinalizationProjectPopup.module.scss';

interface Props {
	className: string;
}

const FinalizationProjectPopup: React.FC<Props> = ({ className = '' }) => {
	const { setPopup } = modalSlice.actions;
	const dispatch = useAppDispatch();

	const [value, setValue] = React.useState({
		main: '',
		investment: '',
		alternatives: '',
		plans: '',
		contacts: '',
		gallery: '',
	});

	const setNewValue = (val: string, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (value.main) {
			setDisabled(false);
		}
		return () => {
			setDisabled(true);
		};
	}, [value]);

	return (
		<BasePopup className={className} type='small'>
			<div className={s.Header}>
				<BaseTitle type='app'>Доработка проекта</BaseTitle>
			</div>

			<div className={s.Description}>
				<p>
					Прокомментируйте блоки с ошибками. Если блок не имеет комментария, он
					будет считаться заполненным корректно.
				</p>
			</div>

			<div className={s.Comments}>
				<AccordionProjectComment
					number={1}
					title='Основное'
					value={value.main}
					onChange={(val: string) => setNewValue(val, 'main')}
				/>

				<AccordionProjectComment
					number={2}
					title='Инвестиции'
					value={value.investment}
					onChange={(val: string) => setNewValue(val, 'investment')}
				/>

				<AccordionProjectComment
					number={3}
					title='Альтернативные способы участия'
					value={value.alternatives}
					onChange={(val: string) => setNewValue(val, 'alternatives')}
				/>

				<AccordionProjectComment
					number={4}
					title='Планы развития'
					value={value.plans}
					onChange={(val: string) => setNewValue(val, 'plans')}
				/>

				<AccordionProjectComment
					number={5}
					title='Контакты'
					value={value.contacts}
					onChange={(val: string) => setNewValue(val, 'contacts')}
				/>

				<AccordionProjectComment
					number={6}
					title='Галерея'
					value={value.gallery}
					onChange={(val: string) => setNewValue(val, 'gallery')}
				/>
			</div>

			<div className={s.Actions}>
				<BaseButton title='Отмена' type='white' className={s.Actions_Button} />

				<BaseButton
					disabled={disabled}
					title='Сохранить'
					type='blue'
					className={s.Actions_Button}
				/>
			</div>
		</BasePopup>
	);
};

export default FinalizationProjectPopup;

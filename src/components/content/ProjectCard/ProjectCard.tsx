import { BaseButton } from '@base/index';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './ProjectCard.module.scss';

interface Props {
	className?: string;
}

const ProjectCard: React.FC<Props> = ({ className }) => {
	const [status, setStatus] = useState('Доступен');

	return (
		<div className={`${s.ProjectCard} ${className}`}>
			<div className={s.ProjectCard_Header}>
				<div className={s.ProjectCard_Header_Name}>Кодеки</div>
				<div
					className={`${s.ProjectCard_Header_Status} ${
						status == 'Модерация'
							? s.Moderation
							: status == 'Доработка'
							? s.Available
							: status == 'Доступен'
							? s.Refinement
							: ''
					}`}
				>
					<span>Доступен</span>
				</div>
			</div>

			<div className={s.ProjectCard_About}>
				<div className={s.ProjectCard_About_Text}>
					<p>
						Поможем найти работу по душе, даже если нет опыта. Практики и
						стажировки в топовых компаниях и на реальных проектах.
					</p>
				</div>

				<div className={s.ProjectCard_About_Image}>
					<Image src='/images/image/main-bg.png' priority fill alt={'Image'} />
				</div>
			</div>

			<div className={s.ProjectCard_Info}>
				<div className={s.ProjectCard_Info_Item}>
					<div className={s.ProjectCard_Info_Item_Name}>
						<span>Сумма инвестиций:</span>
					</div>

					<div className={s.ProjectCard_Info_Item_Value}>1 000 000 ₽</div>
				</div>

				<div className={s.ProjectCard_Info_Item}>
					<div className={s.ProjectCard_Info_Item_Name}>
						<span>Доступен к участию до:</span>
					</div>

					<div className={s.ProjectCard_Info_Item_Value}>21.02.2023</div>
				</div>
			</div>

			<div className={s.ProjectCard_Tags}>
				<div className={s.ProjectCard_Tags_Item}>
					<span>Образование</span>
				</div>

				<div className={s.ProjectCard_Tags_Item}>
					<span>Стажировки и практики</span>
				</div>

				<div className={s.ProjectCard_Tags_Item}>
					<span>Информационные технологии</span>
				</div>
			</div>

			<div className={s.ProjectCard_Actions}>
				<div className={s.ProjectCard_Actions_Details}>
					<span>Детали проекта</span>

					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.1667 6.66602L17.5 9.99935M17.5 9.99935L14.1667 13.3327M17.5 9.99935L2.5 9.99935'
							stroke='#0284C5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>

				<div className={s.ProjectCard_Actions_Buttons}>
					<BaseButton title='На доработку' type='red' className={s.Button} />

					<BaseButton title='Принять' type='blue' className={s.Button} />
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

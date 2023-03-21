import { BaseButton, BaseIcon } from '@base/index';
import { IProject } from '@constants/globals/types';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './ProjectCard.module.scss';

interface Props {
	className?: string;
	to?: string;
	admin?: boolean;
	project: IProject;
}

const ProjectCard: React.FC<Props> = ({
	className = '',
	to = '',
	admin = false,
	project,
}) => {
	const router = useRouter();
	const [status, setStatus] = useState('Доступен');

	return (
		<div className={`${s.ProjectCard} ${className}`}>
			<div className={s.ProjectCard_Header}>
				<div className={s.ProjectCard_Header_Name}>{project.project_name}</div>
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
					<p>{project.description}</p>
				</div>

				<div className={s.ProjectCard_About_Image}>
					<Image
						src={`/images/image/${project.image_logo || 'main-bg.png'}`}
						priority
						layout='fill'
						alt={'Image'}
					/>
				</div>
			</div>

			<div className={s.ProjectCard_Info}>
				<div className={s.ProjectCard_Info_Item}>
					<div className={s.ProjectCard_Info_Item_Name}>
						<span>Сумма инвестиций:</span>
					</div>

					<div className={s.ProjectCard_Info_Item_Value}>
						{project.amount_of_investment} ₽
					</div>
				</div>

				<div className={s.ProjectCard_Info_Item}>
					<div className={s.ProjectCard_Info_Item_Name}>
						<span>Доступен к участию до:</span>
					</div>

					<div className={s.ProjectCard_Info_Item_Value}>
						{project.round_ends}
					</div>
				</div>
			</div>

			<div className={s.ProjectCard_Tags}>
				{project.tags?.map((tag: string, index: number) => {
					return (
						<div className={s.ProjectCard_Tags_Item} key={index}>
							<span>{tag}</span>
						</div>
					);
				})}
			</div>

			<div className={s.ProjectCard_Actions}>
				<div
					className={s.ProjectCard_Actions_Details}
					onClick={() => router.push(`${to}` + project.id)}
				>
					<span>Детали проекта</span>

					<BaseIcon
						viewBox='0 0 20 20'
						icon={ALL_ICONS.TO_DETAILS}
						className={s.Icon}
					/>
				</div>

				{admin ? (
					<>
						<div className={s.ProjectCard_Actions_Buttons}>
							<BaseButton
								title='На доработку'
								type='orange'
								className={s.Button}
							/>

							<BaseButton title='Принять' type='blue' className={s.Button} />
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default ProjectCard;

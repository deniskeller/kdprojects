import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { mock_projects } from '@services/index';
import { ProjectCard } from 'components/content';
import { useRouter } from 'next/router';
import React from 'react';
import s from './UserDetails.module.scss';

interface Props {
	id?: string;
}

const UserDetails: React.FC<Props> = ({ id }) => {
	console.log('id: ', id);
	const router = useRouter();

	const tabs = [
		{ id: 1, title: 'На модерации' },
		{ id: 2, title: 'На витрине' },
	];

	const [tab, setTab] = React.useState(0);

	return (
		<BaseContainer className={s.BaseContainer}>
			<div className={s.UserDetails}>
				<div className={s.UserDetails_Back} onClick={() => router.back()}>
					<BaseIcon
						viewBox='0 0 20 20'
						icon={ALL_ICONS.TO_DETAILS}
						className={s.UserDetails_Back_Icon}
					/>
					<span className={s.UserDetails_Back_Label}>Назад</span>
				</div>

				<div className={s.UserDetails_Info}>
					<div className={s.UserDetails_Info_Register}>
						<div className={s.UserDetails_Info_Register_Name}>
							<span>Александра Синицина</span>
						</div>

						<div className={s.UserDetails_Info_Register_Date}>
							Зарегистрирован(-а) 21.02.2023
						</div>
					</div>

					<div className={s.UserDetails_Info_MainInfo}>
						<div className={s.UserDetails_Info_MainInfo_Col}>
							<div className={s.UserDetails_Info_MainInfo_Label}>
								<span>Телефон</span>
							</div>
							<div className={s.UserDetails_Info_MainInfo_Phone}>
								+7 952 888 77 66
							</div>
						</div>

						<div className={s.UserDetails_Info_MainInfo_Col}>
							<div className={s.UserDetails_Info_MainInfo_Label}>
								<span>Телеграм</span>
							</div>

							<div className={s.UserDetails_Info_MainInfo_Telegram}>
								edu@kodiki.ru
							</div>
						</div>

						<div className={s.UserDetails_Info_MainInfo_Col}>
							<div className={s.UserDetails_Info_MainInfo_Label}>
								<span>Эл.почта</span>
							</div>

							<div className={s.UserDetails_Info_MainInfo_Email}>
								edu@kodiki.ru
							</div>
						</div>
					</div>
				</div>

				<div className={s.Projects}>
					<div className={s.Projects_Navbar}>
						<ul className={s.Projects_Navbar_Tabs}>
							{tabs.map((item, index) => (
								<li
									onClick={() => setTab(index)}
									className={`${s.TabItem} ${tab === index ? s.Active : ''}`}
									key={item.id}
								>
									<span>{item.title}</span>
								</li>
							))}
						</ul>
					</div>

					<div className={s.Projects_List}>
						{/* <ProjectCard to='/user/projects/project-details/' admin />
						<ProjectCard to='/user/projects/project-details/' admin /> */}

						{mock_projects?.map((project, index) => {
							return (
								// <ProjectCard
								// to='/project-details/'
								// 	project={project}
								// 	key={project.id}
								// />

								<ProjectCard
									to='/user/projects/project-details/'
									admin
									project={project}
									key={project.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</BaseContainer>
	);
};

export default UserDetails;

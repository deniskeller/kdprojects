import { BaseButton, BaseContainer } from '@base/index';
import { ProjectCard } from 'components/content';
import React, { useState } from 'react';
import s from './Projects.module.scss';

type Props = {};

const sorting_by = [
	'Все',
	'Маркетплейс',
	'Нетворкинг',
	'Образование',
	'Финтех',
	'Портфолио',
	'Знакомства',
	'Креативные индустрии',
	'Стажировки и практики',
	'Системы контроля',
	'Агро',
];

const Projects: React.FC<Props> = () => {
	const [current_item, setCurrentItem] = useState(0);
	return (
		<>
			<BaseContainer>
				<div className={s.Projects}>
					<div className={s.Projects_Title}>
						<span>Проекты</span>
					</div>

					<div className={s.Projects_Sorting}>
						{sorting_by?.map((item, index) => {
							return (
								<div
									className={`${s.Projects_Sorting_Item} ${
										current_item == index ? s.Projects_Sorting_Item_Active : ''
									}`}
									key={index}
									onClick={() => setCurrentItem(index)}
								>
									<span>{item}</span>
								</div>
							);
						})}
					</div>

					<div className={s.Projects_Cards}>
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</div>

					<BaseButton title='Показать ещё' className={s.Projects_Button} />
				</div>
			</BaseContainer>
		</>
	);
};

export default Projects;

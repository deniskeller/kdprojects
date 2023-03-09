import { BaseButton, BaseContainer } from '@base/index';
import { Logo } from 'components/content';
import React from 'react';
import s from './About.module.scss';

type Props = {};

const About: React.FC<Props> = () => {
	return (
		<>
			<BaseContainer>
				<div className={s.About}>
					<Logo className={s.About_Logo} />

					<div className={s.About_Description}>
						<p>
							Самым объемным сектором калининградской креативной экономики с
							1990-х является геймдевелопмент и IT-проекты. По приблизительным
							оценкам, сейчас на этом рынке заняты около 4500 человек и 350
							компаний.
						</p>

						<p>
							Среди якорных можно выделить «Системные технологии», «Битрикс»,
							«Технополис GS», около десятка сильных геймдев-компаний, давно и
							успешно экспортирующих игры, а также сотни малых инновационных
							бизнесов. В этом секторе также есть образовательная часть: оба
							крупнейших университета в какой-то степени готовят специалистов в
							IT, также есть практикориентированная магистерская программа
							KrausLab и IT-школа Samsung в Центре для одаренных детей.
						</p>
					</div>

					<BaseButton
						title='Добавить проект'
						type='blue'
						className={s.About_Button}
					/>

					<div className={s.About_Achievements}>
						<div className={s.About_Achievements_Item}>
							<div className={s.About_Achievements_Item_Name}>
								<span>Проектов к инвестированию</span>
							</div>
							<div className={s.About_Achievements_Item_Value}>76</div>
						</div>

						<div className={s.About_Achievements_Item}>
							<div className={s.About_Achievements_Item_Name}>
								<span>Доступно к инвестированию</span>
							</div>
							<div className={s.About_Achievements_Item_Value}>
								150 000 000 ₽
							</div>
						</div>

						<div className={s.About_Achievements_Item}>
							<div className={s.About_Achievements_Item_Name}>
								<span>Стартапы</span>
							</div>
							<div className={s.About_Achievements_Item_Value}>12</div>
						</div>

						<div className={s.About_Achievements_Item}>
							<div className={s.About_Achievements_Item_Name}>
								<span>Существующие проекты</span>
							</div>
							<div className={s.About_Achievements_Item_Value}>7</div>
						</div>
					</div>
				</div>
			</BaseContainer>
		</>
	);
};

export default About;

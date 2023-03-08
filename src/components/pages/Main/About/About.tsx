import React from 'react';
import s from './About.module.scss';

type Props = {};

const About: React.FC<Props> = () => {
	return (
		<>
			<div className={s.Wrapper}>
				<div className={s.Container}>
					<div className={s.About}>
						<div className={s.About_Title}>
							<h1>IT-проекты Калининграда</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

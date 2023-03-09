import { BaseContainer } from '@base/index';
import React from 'react';
import s from './Projects.module.scss';

type Props = {};

const Projects: React.FC<Props> = () => {
	return (
		<>
			<BaseContainer>
				<div className={s.Projects}>Projects</div>
			</BaseContainer>
		</>
	);
};

export default Projects;

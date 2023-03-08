/* eslint-disable react/no-unescaped-entities */
import { BaseButton } from '@base/index';
import React from 'react';
import s from './NotFound.module.scss';

const NotFound: React.FC = () => {
	return (
		<div className={s.NotFound}>
			<div className={s.NotFound_Title}>
				<h1>Coming soon</h1>
			</div>

			<div className={s.NotFound_Subtitle}>
				<p>Page you're looking for will be here soon</p>
			</div>

			<BaseButton title='Main page' className={s.NotFound_Button} />
		</div>
	);
};

export default NotFound;

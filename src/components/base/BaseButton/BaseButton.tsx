import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import { BaseIcon } from '..';
import s from './BaseButton.module.scss';

interface Props {
	title?: string;
	type?: string;
	to_details?: boolean;
	disabled?: boolean;
	className?: string;
	icon_position?: string;
	style?: object;
	onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButton: React.FC<Props> = ({
	title = '',
	type = 'white',
	icon_position = 'right',
	disabled = false,
	to_details = false,
	className = '',
	style,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${className} ${s.Button} ${s['Button_' + type]}`}
			style={style}
		>
			{to_details && icon_position == 'left' ? (
				<BaseIcon
					viewBox='0 0 20 20'
					icon={ALL_ICONS.TO_DETAILS}
					className={`${s.Icon} ${s.Icon_Left}`}
				/>
			) : null}

			<div className={s.Title}>{title}</div>

			{to_details && icon_position == 'right' ? (
				<BaseIcon
					viewBox='0 0 20 20'
					icon={ALL_ICONS.TO_DETAILS}
					className={s.Icon}
				/>
			) : null}
		</button>
	);
};

export default BaseButton;

import React from 'react';
import s from './BaseButton.module.scss';

interface Props {
	title?: string;
	type?: string;
	disabled?: boolean;
	className?: string;
	style?: object;
	onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButton: React.FC<Props> = ({
	title = '',
	type = 'empty',
	disabled = false,
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
			<div className={s.Title}>{title}</div>
		</button>
	);
};

export default BaseButton;

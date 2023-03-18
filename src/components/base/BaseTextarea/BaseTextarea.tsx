import React, { useRef, useState } from 'react';
import s from './BaseTextarea.module.scss';

interface Props {
	type?: string;
	name?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	error?: string | boolean;
	value: string;
	showCount?: boolean;
	maxLength?: number;
	onChange(value: string): void;
}

const BaseTextarea: React.FC<Props> = ({
	value,
	label,
	error,
	name,
	required,
	placeholder,
	className = '',
	showCount = false,
	maxLength,
	onChange,
}) => {
	const [focus, setFocus] = useState(false);
	const refTextarea = useRef<HTMLTextAreaElement | null>(null);

	return (
		<div className={`${s.BaseTextarea} ${className}`}>
			<div
				className={`${s.Textarea} ${error ? s.Error : ''} ${
					focus ? s.Focus : ''
				}`}
				onClick={() => refTextarea.current?.focus()}
			>
				<textarea
					ref={refTextarea}
					value={value}
					name={name}
					maxLength={maxLength}
					placeholder={placeholder}
					required={required}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						onChange(e.target.value)
					}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={`${s.Textarea_Input}`}
				/>
			</div>

			{label ? (
				<label
					className={`${s.Label} ${value || focus ? s.NoEmpty : ''} ${
						s.Label_Default
					}`}
				>
					{label}
				</label>
			) : null}

			{showCount ? (
				<div className={s.ShowCount}>
					<span
						className={s.ShowCount_CurrentValue}
						style={{ color: value.length == maxLength ? '#ef4343' : '#e7b008' }}
					>
						{value.length}
					</span>
					<span className={s.ShowCount_MaxValue}>/{maxLength}</span>
				</div>
			) : null}

			{error ? <div className={s.ErrorText}>{error}</div> : null}
		</div>
	);
};
export default BaseTextarea;

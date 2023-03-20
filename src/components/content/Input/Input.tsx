import useId from '@accessible/use-id';
import { InputBase } from '@mui/material';
import {
	forwardRef,
	InputHTMLAttributes,
	ReactNode,
	useRef,
	useState,
} from 'react';
import s from './Input.module.scss';

type TThemes = 'light' | 'dark';

type InputProps = {
	label?: ReactNode;
	variant?: 'default' | 'error' | 'success';
	message?: string;
	left?: ReactNode;
	right?: ReactNode;
	bottom?: ReactNode;
	labelVariant?: 'default' | 'floating';
	readOnly?: boolean;
	theme?: TThemes;
	noBorder?: boolean;
	height?: number;
	noBottom?: boolean;
	valueCompare?: string; //for input.password
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			variant,
			message,
			left,
			right,
			bottom,
			labelVariant = 'floating',
			readOnly = false,
			theme = 'dark',
			type,
			noBorder,
			height,
			...props
		},
		ref
	) => {
		const inputRef = useRef<HTMLInputElement | null>(null);
		const randomId = useId();
		const [focused, setFocused] = useState(false);

		return (
			<>
				<div className={s.InputCalendar}>
					<InputBase
						className={`${s.Input} ${focused ? s.Input_Focus : ''}`}
						inputProps={{
							...props,

							placeholder:
								labelVariant === 'floating' && label && !focused
									? ''
									: props.placeholder,
							ref: (node: HTMLInputElement) => {
								if (typeof ref === 'function') {
									ref(node);
								}
							},
						}}
						id={randomId}
						onFocus={() => {
							setFocused(true);
						}}
						type={type}
						onBlur={() => {
							setFocused(false);
						}}
						ref={(node: HTMLInputElement) => {
							inputRef.current = node;

							if (typeof ref === 'function') {
								ref(node);
							} else if (ref) {
								ref.current = node;
							}
						}}
					/>

					{labelVariant === 'floating' && label && (
						<label
							className={`${s.InputCalendar_Label} ${
								focused || props.value ? s.InputCalendar_Label_Focus : ''
							}`}
						>
							{label}
						</label>
					)}

					{right && (
						<div
							onClick={() => {
								inputRef.current?.focus();
							}}
							className={s.InputCalendar_Icon}
						>
							{right}
						</div>
					)}
				</div>
			</>
		);
	}
);

export default Input;
Input.displayName = 'InputTw';

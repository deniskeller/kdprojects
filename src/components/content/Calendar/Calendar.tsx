import { forwardRef } from 'react';
import {
	CalendarProps,
	default as DefaultCalendar,
	OnChangeDateCallback,
} from 'react-calendar';
import s from './Calendar.module.scss';

type InputProps = {
	haveTodayButton?: boolean;
} & CalendarProps;

export const Calendar = forwardRef<HTMLInputElement, InputProps>(
	({ haveTodayButton, ...props }: InputProps, ref) => {
		return (
			<div>
				<DefaultCalendar
					{...props}
					inputRef={ref || undefined}
					nextLabel={<Chevron />}
					prevLabel={<Chevron className={s.Chevron2} />}
					next2Label={<Chevron2 />}
					prev2Label={<Chevron2 className={s.Chevron2} />}
					locale='ru-Ru'
				/>
				{haveTodayButton && (
					<div
						onClick={(e) => {
							if (props.onChange) {
								const onChange = props.onChange as OnChangeDateCallback;

								onChange(new Date(), e as any);
							}
						}}
						className='Calendar_today'
					>
						<span>Today</span>
					</div>
				)}
			</div>
		);
	}
);

Calendar.displayName = 'Calendar';

export const Chevron = ({ className = '' }) => {
	return (
		<>
			<svg
				width='28'
				height='28'
				viewBox='0 0 28 28'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
			>
				<path
					d='M11.5 19.832L17.3333 13.9987L11.5 8.16536'
					stroke='#121212'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</>
	);
};

export const Chevron2 = ({ className = '' }) => {
	return (
		<>
			<svg
				width='28'
				height='28'
				viewBox='0 0 28 28'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
			>
				<path
					d='M14.8327 19.832L20.666 13.9987L14.8327 8.16536M8.16602 19.832L13.9993 13.9987L8.16602 8.16536'
					stroke='#121212'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</>
	);
};

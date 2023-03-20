import { format, isValid } from 'date-fns';
import {
	ComponentPropsWithRef,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Calendar as CalendarIcon } from 'react-feather';
import { usePopper } from 'react-popper';
import { useClickAway } from 'react-use';
import { Calendar } from '../Calendar/Calendar';
import Input from './Input';
import s from './Input.module.scss';

type InputCalendarProps = {
	defaultValue?: string | Date;
	value?: string | Date;
	calendarProps?: ComponentPropsWithRef<typeof Calendar>;
	onChange?: (date?: Date) => void;
} & ComponentPropsWithRef<typeof Input>;

export const InputCalendar = forwardRef<HTMLInputElement, InputCalendarProps>(
	({ type = 'date', calendarProps, ...props }, ref) => {
		const [value, setValue] = useState<Date | null>(
			(typeof props.value === 'string' && isValid(new Date(props.value))
				? new Date(props.value)
				: props.value instanceof Date && !isNaN(props.value.getTime())
				? props.value
				: null) ??
				(typeof props.defaultValue === 'string' &&
				isValid(new Date(props.defaultValue))
					? new Date(props.defaultValue)
					: props.defaultValue instanceof Date &&
					  !isNaN(props.defaultValue.getTime())
					? props.defaultValue
					: null)
		);
		const [isCalendarOpen, setIsCalendarOpen] = useState(false);
		const [referenceElement, setReferenceElement] =
			useState<HTMLInputElement | null>(null);
		const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
			null
		);
		const { styles, attributes } = usePopper(referenceElement, popperElement, {
			placement: 'bottom-end',
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [38, 8],
					},
				},
			],
		});
		const calendarRef = useRef<HTMLInputElement>(null);
		useClickAway(calendarRef, () => {
			if (isCalendarOpen) setIsCalendarOpen(false);
		});
		useEffect(() => {
			props.onChange?.(value ? value : undefined);
		}, [props, value]);
		const [focused, setFocused] = useState(false);

		return (
			<>
				{isCalendarOpen && (
					<div
						ref={setPopperElement}
						style={styles.popper}
						{...attributes.popper}
						className={s.Calendar}
					>
						<div ref={calendarRef}>
							<Calendar
								{...calendarProps}
								onActiveStartDateChange={(d) => {
									console.log('onActiveStartDateChange', d);
								}}
								haveTodayButton={true}
								value={value && !isNaN(value.getTime()) ? value : undefined}
								onChange={(date: unknown) => {
									if (date && date instanceof Date && !isNaN(date.getTime())) {
										setValue(new Date(format(date, 'yyyy-MM-dd')));
									}
									setIsCalendarOpen(false);
								}}
							/>
						</div>
					</div>
				)}
				<Input
					{...props}
					ref={setReferenceElement}
					type={focused ? 'date' : 'text'}
					onChange={(e) => {
						setValue(new Date(e.target.value));
					}}
					onFocus={() => {
						setFocused(true);
					}}
					onBlur={() => {
						setFocused(false);
					}}
					value={
						value && isValid(value)
							? focused
								? format(value, 'yyyy-MM-dd')
								: value.toLocaleDateString()
							: ''
					}
					right={
						<CalendarIcon
							color={'rgba(26, 26, 26, 0.5)'}
							onClick={() => {
								setIsCalendarOpen(!isCalendarOpen);
							}}
							style={{
								pointerEvents: isCalendarOpen ? 'none' : 'auto',
								cursor: 'pointer',
							}}
						/>
					}
				/>
			</>
		);
	}
);

InputCalendar.displayName = 'Input.Calendar';

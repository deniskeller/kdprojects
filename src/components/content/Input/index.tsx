import { default as InputBase } from './Input';
import { InputCalendar } from './InputCalendar';

const Input = Object.assign(InputBase, {
	Calendar: InputCalendar,
});

export { Input };

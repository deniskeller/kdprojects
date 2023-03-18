import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
// import { format } from 'date-fns';

const BaseInputCalendar = ({}) => {
	const [value, setValue] = useState(new Date());
	useEffect(() => {
		// console.log('value: ', Date.now(format(value, 'yyyy-MM-dd')));
	}, [value]);

	return (
		<div>
			{/* <input type='date' value={value} />
			<Calendar
				onChange={(date) => setValue(format(value, 'yyyy-MM-dd'))}
				value={value}
			/> */}
		</div>
	);
};

export default BaseInputCalendar;

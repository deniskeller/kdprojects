import { BaseIcon, BaseTextarea } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import React from 'react';
import s from './AccordionProjectComment.module.scss';

interface IProps {
	number?: number;
	title?: string;
	value: string;
	onChange: any;
}

const AccordionProjectComment: React.FC<IProps> = ({
	number,
	title,
	value,
	onChange,
}) => {
	const router = useRouter();
	const [isVisible, setIsVisible] = React.useState<boolean>(true);

	const thisAccordion = React.useRef<HTMLDivElement>(null);
	const clickOutsideHandler = () => {
		setIsVisible(true);
	};
	useOnClickOutside(thisAccordion, clickOutsideHandler);

	return (
		<>
			<div
				ref={thisAccordion}
				className={s.ProjectComment}
				style={{
					borderBottom: !isVisible ? 'none' : '1px solid rgba(26, 26, 26, 0.1)',
				}}
			>
				<div
					className={`${s.ProjectComment_Header}`}
					onClick={() => setIsVisible(!isVisible)}
				>
					<div className={s.ProjectComment_Header_Title}>
						{number}.&nbsp;{title}
					</div>

					<BaseIcon
						icon={ALL_ICONS.CHEVERON}
						viewBox='0 0 24 24'
						className={`${s.ProjectComment_Header_IconToggle}  ${
							!isVisible ? s.ProjectComment_Header_IconToggle_Open : ''
						}`}
					/>
				</div>

				<div
					className={`${s.ProjectComment_Content}  ${
						isVisible ? s.ProjectComment_Content_Hidden : ''
					}`}
				>
					<BaseTextarea
						name='message'
						label='Discription'
						placeholder='Discription'
						type='text'
						value={value}
						onChange={onChange}
						className={s.Discription}
					/>
				</div>
			</div>
		</>
	);
};

export default AccordionProjectComment;

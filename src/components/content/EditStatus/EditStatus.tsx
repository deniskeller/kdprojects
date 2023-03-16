import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import s from './EditStatus.module.scss';

interface Props {
	status: string;
	comment: string;
}

const EditStatus: React.FC<Props> = ({ status, comment = '' }) => {
	return (
		<div className={s.Status}>
			<span
				className={`${s.Status_Name} ${
					status == 'accepted' ? s.Accepted : ''
				} ${status == 'denied' ? s.Denied : ''}`}
			>
				{status == 'denied'
					? 'Рекомендации'
					: status == 'accepted'
					? 'Принято'
					: null}
			</span>

			<div className={s.Status_Icon}>
				{status == 'denied' ? (
					<BaseIcon
						viewBox='0 0 24 24'
						icon={ALL_ICONS.STATUS_COMMENT}
						className={s.IconComment}
					/>
				) : status == 'accepted' ? (
					<BaseIcon
						viewBox='0 0 16 13'
						icon={ALL_ICONS.CHECKBOX_TICK}
						className={s.IconCheckboxTick}
					/>
				) : null}

				{comment ? (
					<div className={s.CommentTooltip}>
						<p>{comment}</p>
					</div>
				) : (
					<div className={s.CommentTooltip}>
						<p>Что-то пошло не так!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default EditStatus;

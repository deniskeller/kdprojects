import { BaseIcon, BasePopupApp, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useAppDispatch } from '@hooks/redux';
import { mock_notifications } from '@services/index';
import { modalSlice } from '@store/modals/reducer';
import { NotificationItem } from 'components/content';
import React, { useState } from 'react';
import s from './NotificationsPopup.module.scss';

import ReactPaginate from 'react-paginate';

interface Props {
	className: string;
}

const NotificationsPopup: React.FC<Props> = ({ className }) => {
	const [page, setPage] = useState(1);
	const { setPopup } = modalSlice.actions;
	const dispatch = useAppDispatch();

	const deletAllHandler = () => {
		dispatch(setPopup({ popup: '' }));
		setTimeout(() => {
			dispatch(setPopup({ popup: 'DeleteAllNotificationsPopup' }));
		}, 300);
	};

	return (
		<BasePopupApp className={className} type='large'>
			<div className={s.Header}>
				<BaseTitle type='app'>Уведомления</BaseTitle>

				<div className={s.Header_ClearAll} onClick={deletAllHandler}>
					<div className={s.Header_ClearAll_Title}>Очистить всё</div>

					<BaseIcon
						icon={ALL_ICONS.DELETE}
						viewBox='0 0 20 20'
						className={s.Header_ClearAll_Icon}
					/>
				</div>
			</div>

			<div className={s.Content}>
				{mock_notifications?.map((item, index) => {
					return (
						<NotificationItem
							key={index}
							type={item.type}
							description={item.description}
							time={item.time}
							date={item.date}
							new_notification={item.new_notification}
						/>
					);
				})}
			</div>

			<div className={s.Pagination}>
				{/* убрать в стилях overflow: hidden; и сдлеать логику пагинации */}

				<ReactPaginate
					breakLabel='...'
					nextLabel={
						<BaseIcon
							icon={ALL_ICONS.CHEVERON}
							viewBox='0 0 24 24'
							className={s.NextIcon}
						/>
					}
					onPageChange={(page) => {
						setPage(page);
					}}
					pageRangeDisplayed={1}
					pageCount={Math.ceil(mock_notifications.length / 10)}
					previousLabel={
						<BaseIcon
							icon={ALL_ICONS.CHEVERON}
							viewBox='0 0 24 24'
							className={s.PrevIcon}
						/>
					}
					// renderOnZeroPageCount={null}
				/>
			</div>
		</BasePopupApp>
	);
};

export default NotificationsPopup;

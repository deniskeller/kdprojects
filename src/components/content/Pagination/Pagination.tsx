//@ts-nocheck
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { mock_notifications } from '@services/index';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

type Props = {};

const Pagination: React.FC<Props> = ({}) => {
	const [page, setPage] = useState(1);

	return (
		<>
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
		</>
	);
};

export default Pagination;

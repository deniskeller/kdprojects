import { ALL_ICONS } from '@constants/icons';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { modalSlice } from '@store/modals/reducer';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { BaseIcon } from '..';
import styles from './BasePopup.module.scss';

interface Props {
	children: ReactNode | ReactNode[];
	className?: string;
	type?: string;
}

const BasePopup: React.FC<Props> = ({
	children,
	className,
	type = 'large',
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const popup = useAppSelector((state) => state.modals.popup);
	const { setPopup } = modalSlice.actions;
	const dispatch = useAppDispatch();
	const thisClass = React.useRef<HTMLDivElement>(null);

	const showPopup = useCallback(() => {
		setIsVisible(true);
		document.body.style.overflow = 'hidden';
		document.body.style.height = '100%';
	}, []);

	const hidePopup = useCallback(() => {
		setIsVisible(false);
		document.body.style.overflow = '';
		document.body.style.height = '';
		dispatch(setPopup({ popup: '' }));
	}, [dispatch, setPopup]);

	useEffect(() => {
		if (thisClass.current?.classList.contains(popup)) {
			showPopup();
		}
		if (!popup) {
			hidePopup();
		}
	}, [popup, hidePopup, showPopup]);

	useEffect(() => {
		function onKeyDown(event: any) {
			if (event.keyCode === 27) {
				hidePopup();
			}
		}
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [hidePopup]);

	const thisPopup = React.useRef<HTMLDivElement>(null);

	const clickOutsideHandler = () => {
		if (thisClass.current?.classList.contains(popup)) {
			hidePopup();
		}
	};
	useOnClickOutside(thisPopup, clickOutsideHandler);

	useEffect(() => {
		return () => {
			hidePopup();
		};
	}, [hidePopup]);

	return (
		<div
			className={` ${styles.Wrapper} ${
				isVisible ? styles.Visible : ''
			} ${className}`}
			ref={thisClass}
		>
			<div
				className={`${styles.Popup} ${styles['Popup_' + type]}`}
				ref={thisPopup}
			>
				<BaseIcon
					icon={ALL_ICONS.CLOSE_POPUP}
					viewBox='0 0 16 16'
					className={styles.Popup_Close}
					onClick={hidePopup}
				/>

				{children}
			</div>
		</div>
	);
};

export default BasePopup;

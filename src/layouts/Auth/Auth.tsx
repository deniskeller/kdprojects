import { useAppDispatch } from '@hooks/redux';
import {
	AcceptProjectPopup,
	DeleteProjectPopup,
	FinalizationProjectPopup,
	NotificationsPopup,
} from '@modals/index';
import { buttonsSlice } from '@store/buttons/reducers';
import { Footer } from 'components/footer';
import { Navbar2 } from 'components/navbar';
import React, { useEffect, useState } from 'react';
import s from './Auth.module.scss';

interface Props {
	children: JSX.Element;
	auth?: boolean;
	app?: boolean;
}

const Auth: React.FC<Props> = ({ children, auth = false, app = false }) => {
	const [isVisible, setIsVisible] = useState(false);

	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};

		if (scrollTop && scrollTop > 180) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollTop]);

	//логика для липких кнопок
	const scrollBlockRef = React.useRef<HTMLDivElement>(null);
	const { setVisibleButtons } = buttonsSlice.actions;
	const dispatch = useAppDispatch();

	const scrollFunction = () => {
		const scrollTop = scrollBlockRef.current?.scrollTop;
		if (scrollTop && scrollTop > 300) {
			dispatch(setVisibleButtons({ visible: true }));
		} else {
			dispatch(setVisibleButtons({ visible: false }));
		}
	};

	return (
		<>
			<div className={`${s.Wrapper} ${app ? s.App : ''}`}>
				{/* <div className={s.Image}>
				<Image src='/images/image/main-bg.png' priority fill alt={'Image'} />
			</div> */}

				<Navbar2 auth={auth} app />

				<div
					className={s.Content}
					ref={scrollBlockRef}
					onScroll={scrollFunction}
				>
					{children}
				</div>

				{app ? null : <Footer />}
			</div>
			<NotificationsPopup className='NotificationsPopup' />
			<AcceptProjectPopup className='AcceptProjectPopup' />
			<DeleteProjectPopup className='DeleteProjectPopup' />
			<FinalizationProjectPopup className='FinalizationProjectPopup' />
		</>
	);
};

export default Auth;

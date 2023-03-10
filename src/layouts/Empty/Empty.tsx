import { NotificationsPopup } from '@modals/index';
import { Footer } from 'components/footer';
import { Navbar2 } from 'components/navbar';
import React, { useEffect, useState } from 'react';
import s from './Empty.module.scss';

interface Props {
	children: JSX.Element;
}

const Empty: React.FC<Props> = ({ children }) => {
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

	//моковая авторизация
	const [auth, setAuth] = useState(true);

	return (
		<>
			<div className={s.Wrapper}>
				<Navbar2 auth={auth} />

				<div className={s.Content}>{children}</div>

				<Footer />
			</div>

			<NotificationsPopup className='NotificationsPopup' />
		</>
	);
};

export default Empty;

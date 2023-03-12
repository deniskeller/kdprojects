import { Footer } from 'components/footer';
import { Navbar2 } from 'components/navbar';
import React, { useEffect, useState } from 'react';
import s from './Auth.module.scss';

interface Props {
	children: JSX.Element;
	auth?: boolean;
}

const Auth: React.FC<Props> = ({ children, auth = false }) => {
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

	return (
		<div className={s.Wrapper}>
			{/* <div className={s.Image}>
				<Image src='/images/image/main-bg.png' priority fill alt={'Image'} />
			</div> */}

			<Navbar2 auth={auth} />

			<div className={s.Content}>{children}</div>

			<Footer />
		</div>
	);
};

export default Auth;

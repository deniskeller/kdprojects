// import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import s from './Default.module.scss';

interface Props {
	children: JSX.Element;
}

const Default: React.FC<Props> = ({ children }) => {
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
			<div className={s.Image}>
				<Image src='/images/image/main-bg.png' priority fill alt={'Image'} />
			</div>

			<Navbar />

			<div className={s.Content}>{children}</div>

			{/* <Footer /> */}
		</div>
	);
};

export default Default;

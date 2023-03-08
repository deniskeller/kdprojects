// import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/navbar';
import React, { useEffect, useState } from 'react';
import styles from './Default.module.scss';

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
		<div className={styles.Wrapper}>
			<Navbar fixed={isVisible} />

			<div className={styles.Content}>{children}</div>

			{/* <Footer /> */}
		</div>
	);
};

export default Default;

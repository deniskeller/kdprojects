import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './NavbarLink.module.scss';

interface Props {
	href: string;
	title: string;
	className?: string;
	index?: number;
}

const NavbarLink: React.FC<Props> = ({ href, title, className, index }) => {
	const router = useRouter();

	return (
		<li
			key={index}
			className={`${
				router.pathname.split('/').slice(-1)[0] === href.split('/').slice(-1)[0]
					? styles.Active
					: ''
			} ${styles.Link} ${className}`}
		>
			<Link href={href}>{title}</Link>
		</li>
	);
};

export default NavbarLink;

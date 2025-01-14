import Link from 'next/link';
import React from 'react';
import s from './Footer.module.scss';

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<>
			<div className={s.Wrapper}>
				<div className={s.Container}>
					<div className={s.Footer}>
						<Link href='/'>
							<a className={s.Footer_Link}>IT-проекты Калининграда, 2023</a>
						</Link>
						<Link href='/'>
							<a className={s.Footer_Link}>Политика конфиденциальности</a>
						</Link>
						<Link href='/'>
							<a className={s.Footer_Link}>IT омбудсмен Калининграда</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

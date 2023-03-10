import { BaseContainer } from '@base/index';
import Link from 'next/link';
import React from 'react';
import s from './Footer.module.scss';

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<>
			<div className={s.Container}>
				<BaseContainer>
					<div className={s.Footer}>
						<Link href='/' className={s.Footer_Link}>
							IT-проекты Калининграда, 2023
						</Link>
						<Link href='/' className={s.Footer_Link}>
							Политика конфиденциальности
						</Link>
						<Link href='/' className={s.Footer_Link}>
							IT омбудсмен Калининграда
						</Link>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Footer;
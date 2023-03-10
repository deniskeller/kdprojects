import { BaseButton } from '@base/index';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { Logo, Notifications } from 'components/content';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NavbarLink from '../NavbarLink/NavbarLink';
import s from './Navbar2.module.scss';

interface Props {
	auth?: boolean;
}

interface Links {
	[key: string]: string;
}

const links: Links[] = [
	{
		href: '/',
		title: 'Главная',
	},
	{
		href: '/coming-soon',
		title: 'Пресса',
	},
	{
		href: '/video',
		title: 'Видео',
	},
	{
		href: '/demo-day',
		title: 'Демо-день',
	},
];

const Navbar2: React.FC<Props> = ({ auth }) => {
	const [visible, setVisible] = React.useState(false);
	const thisDrawer = React.useRef<HTMLDivElement>(null);
	const router = useRouter();

	const clickOutsideHandler = () => {
		setVisible(false);
	};
	useOnClickOutside(thisDrawer, clickOutsideHandler);

	useEffect(() => {
		//Закрываем меню по нажатию Esc
		function onKeyDown(event: any) {
			if (event.keyCode === 27) {
				setVisible(false);
			}
		}

		const documentWidth = document.documentElement.clientWidth;
		const windowsWidth = window.innerWidth;
		const scrollbarWidth = windowsWidth - documentWidth;

		if (visible) {
			document.body.style.overflow = 'hidden';
			document.body.style.height = '100%';
			document.body.style.position = 'fixed';

			//добавляем ширину скрола
			document.body.style.paddingRight = scrollbarWidth + 'px';
			document.addEventListener('keydown', onKeyDown);
		}

		return () => {
			document.body.style.overflow = '';
			document.body.style.height = '';
			document.body.style.position = 'relative';
			//убираем ширину скрола
			document.body.style.paddingRight = '0px';
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [visible]);

	//уведомления юзера
	const [isNotifications, setIsNotifications] = React.useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const thisDropdown = React.useRef<HTMLDivElement>(null);

	const clickOutsideHandler2 = () => {
		setShowDropdown(false);
	};
	useOnClickOutside(thisDropdown, clickOutsideHandler2);

	return (
		<div className={s.Container}>
			<div className={s.Navbar}>
				<div className={s.Navbar_Burger} onClick={() => setVisible(true)}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<Logo className={s.Navbar_Logo} />

				<ul className={`${s.Navbar_List} ${s.Desktop}`}>
					{links.map((link, index) => {
						return (
							<NavbarLink
								href={link.href}
								title={link.title}
								index={index}
								key={index}
								className={s.Navbar_List_Item}
							/>
						);
					})}
				</ul>

				{!auth ? (
					<>
						<div className={s.Navbar_Actions}>
							<BaseButton title='Войти' className={s.Navbar_Actions_Login} />

							<BaseButton
								title='Зарегистрироваться'
								type='blue'
								className={s.Navbar_Actions_SignUp}
							/>
						</div>
					</>
				) : (
					<>
						<div className={s.Navbar_IsAuth}>
							<div className={s.Navbar_IsAuth_Notifications}>
								<svg
									width='18'
									height='20'
									viewBox='0 0 18 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={s.Navbar_IsAuth_Notifications_Icon}
									onClick={() => setIsNotifications(!isNotifications)}
								>
									<path
										d='M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6'
										stroke='#0D1026'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>

								<div
									className={s.Navbar_IsAuth_Notifications_Counter}
									onClick={() => setIsNotifications(!isNotifications)}
								>
									<span>8</span>
								</div>

								<Notifications
									isNotifications={isNotifications}
									setIsNotifications={setIsNotifications}
								/>
							</div>

							<div className={s.Navbar_IsAuth_Profile} ref={thisDropdown}>
								<div
									className={s.Navbar_IsAuth_Profile_User}
									onClick={() => setShowDropdown(!showDropdown)}
								>
									<div className={s.Navbar_IsAuth_Profile_User_Name}>
										<span>Константин Иванов</span>
									</div>

									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Navbar_IsAuth_Profile_User_IconCheveron}
										style={{ transform: showDropdown ? 'rotate(180deg)' : '' }}
									>
										<path
											d='M19 9L12 16L5 9'
											stroke='#111827'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</div>
								{showDropdown ? (
									<>
										<div className={s.Navbar_IsAuth_Profile_Dropdown}>
											<ul className={s.Navbar_IsAuth_Profile_Dropdown_List}>
												<li
													className={s.Navbar_IsAuth_Profile_Dropdown_List_Item}
												>
													<span
														className={
															s.Navbar_IsAuth_Profile_Dropdown_List_Item_Title
														}
													>
														Профиль
													</span>

													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
															stroke='#9CA3B0'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
														<path
															d='M12 14C8.81933 14 6.13414 16.1214 5.28208 19.0264C4.9712 20.0863 5.89543 21 7 21H17C18.1046 21 19.0288 20.0863 18.7179 19.0264C17.8659 16.1214 15.1807 14 12 14Z'
															stroke='#9CA3B0'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												</li>

												<li
													className={s.Navbar_IsAuth_Profile_Dropdown_List_Item}
												>
													<span
														className={
															s.Navbar_IsAuth_Profile_Dropdown_List_Item_Title
														}
													>
														Мои проекты
													</span>

													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M5 19C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H15C16.1046 7 17 7.89543 17 9V10M5 19H19C20.1046 19 21 18.1046 21 17V12C21 10.8954 20.1046 10 19 10H9C7.89543 10 7 10.8954 7 12V17C7 18.1046 6.10457 19 5 19Z'
															stroke='#9CA3B0'
															strokeLinecap='round'
														/>
													</svg>
												</li>

												<li
													className={s.Navbar_IsAuth_Profile_Dropdown_List_Item}
												>
													<span
														className={
															s.Navbar_IsAuth_Profile_Dropdown_List_Item_Title
														}
													>
														Выход
													</span>

													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8'
															stroke='#9CA3B0'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												</li>
											</ul>
										</div>
									</>
								) : null}
							</div>
						</div>
					</>
				)}
			</div>

			{/* Drawer */}
			<div
				className={`${s.Drawer} ${visible ? s.Drawer_Visible : ''}`}
				ref={thisDrawer}
			>
				<div className={s.Drawer_Wrapper}>
					<div className={s.Drawer_Header}>
						<div className={s.Drawer_Burger} onClick={() => setVisible(false)}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<div className={s.Drawer_Body}>
						<div className={s.Drawer_Navbar}>
							{auth ? (
								<>
									<div className={s.Drawer_Navbar_Profile} ref={thisDropdown}>
										<div
											className={s.Drawer_Navbar_Profile_User}
											onClick={() => setShowDropdown(!showDropdown)}
										>
											<div className={s.Drawer_Navbar_Profile_User_Name}>
												<span>Константин Иванов</span>
											</div>

											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className={s.Drawer_Navbar_Profile_User_IconCheveron}
												style={{
													transform: showDropdown ? 'rotate(180deg)' : '',
												}}
											>
												<path
													d='M19 9L12 16L5 9'
													stroke='#111827'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
										{showDropdown ? (
											<>
												<div className={s.Drawer_Navbar_Profile_Dropdown}>
													<ul className={s.Drawer_Navbar_Profile_Dropdown_List}>
														<li
															className={
																s.Drawer_Navbar_Profile_Dropdown_List_Item
															}
														>
															<span
																className={
																	s.Drawer_Navbar_Profile_Dropdown_List_Item_Title
																}
															>
																Профиль
															</span>

															<svg
																width='24'
																height='24'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
																	stroke='#9CA3B0'
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
																<path
																	d='M12 14C8.81933 14 6.13414 16.1214 5.28208 19.0264C4.9712 20.0863 5.89543 21 7 21H17C18.1046 21 19.0288 20.0863 18.7179 19.0264C17.8659 16.1214 15.1807 14 12 14Z'
																	stroke='#9CA3B0'
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
															</svg>
														</li>

														<li
															className={
																s.Drawer_Navbar_Profile_Dropdown_List_Item
															}
														>
															<span
																className={
																	s.Drawer_Navbar_Profile_Dropdown_List_Item_Title
																}
															>
																Мои проекты
															</span>

															<svg
																width='24'
																height='24'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	d='M5 19C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H15C16.1046 7 17 7.89543 17 9V10M5 19H19C20.1046 19 21 18.1046 21 17V12C21 10.8954 20.1046 10 19 10H9C7.89543 10 7 10.8954 7 12V17C7 18.1046 6.10457 19 5 19Z'
																	stroke='#9CA3B0'
																	strokeLinecap='round'
																/>
															</svg>
														</li>

														<li
															className={
																s.Drawer_Navbar_Profile_Dropdown_List_Item
															}
														>
															<span
																className={
																	s.Drawer_Navbar_Profile_Dropdown_List_Item_Title
																}
															>
																Выход
															</span>

															<svg
																width='24'
																height='24'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	d='M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8'
																	stroke='#9CA3B0'
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
															</svg>
														</li>
													</ul>
												</div>
											</>
										) : null}
									</div>
								</>
							) : null}

							<ul className={s.Drawer_Navbar_List}>
								{links.map((link, index) => {
									return (
										<li
											className={`${s.Drawer_Navbar_List_Item} ${
												router.pathname.split('/')[1] ===
												link.href.split('/')[1]
													? s.Drawer_Navbar_List_Item_Active
													: ''
											}`}
											key={index}
										>
											<Link href={link.href}>
												{link.title == 'Главная' ? (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15'
															stroke='#1A1A1A'
															strokeOpacity='0.6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												) : link.title == 'Пресса' ? (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528'
															stroke='#1A1A1A'
															strokeOpacity='0.6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												) : link.title == 'Видео' ? (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z'
															stroke='#1A1A1A'
															strokeOpacity='0.6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												) : link.title == 'Демо-день' ? (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z'
															stroke='#1A1A1A'
															strokeOpacity='0.6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
														<path
															d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
															stroke='#1A1A1A'
															strokeOpacity='0.6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												) : link.title == 'Проекты' ? (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M4 4V3.5H3.5V4H4ZM20 4H20.5V3.5H20V4ZM6.64645 11.6464C6.45118 11.8417 6.45118 12.1583 6.64645 12.3536C6.84171 12.5488 7.15829 12.5488 7.35355 12.3536L6.64645 11.6464ZM10 9L10.3536 8.64645C10.1583 8.45118 9.84171 8.45118 9.64645 8.64645L10 9ZM13 12L12.6464 12.3536C12.8417 12.5488 13.1583 12.5488 13.3536 12.3536L13 12ZM17.3536 8.35355C17.5488 8.15829 17.5488 7.84171 17.3536 7.64645C17.1583 7.45118 16.8417 7.45118 16.6464 7.64645L17.3536 8.35355ZM7.64645 20.6464C7.45118 20.8417 7.45118 21.1583 7.64645 21.3536C7.84171 21.5488 8.15829 21.5488 8.35355 21.3536L7.64645 20.6464ZM12 17L12.3536 16.6464C12.1583 16.4512 11.8417 16.4512 11.6464 16.6464L12 17ZM15.6464 21.3536C15.8417 21.5488 16.1583 21.5488 16.3536 21.3536C16.5488 21.1583 16.5488 20.8417 16.3536 20.6464L15.6464 21.3536ZM3 3.5C2.72386 3.5 2.5 3.72386 2.5 4C2.5 4.27614 2.72386 4.5 3 4.5V3.5ZM21 4.5C21.2761 4.5 21.5 4.27614 21.5 4C21.5 3.72386 21.2761 3.5 21 3.5V4.5ZM4 4.5H20V3.5H4V4.5ZM19.5 4V16H20.5V4H19.5ZM19 16.5H5V17.5H19V16.5ZM4.5 16V4H3.5V16H4.5ZM5 16.5C4.72386 16.5 4.5 16.2761 4.5 16H3.5C3.5 16.8284 4.17157 17.5 5 17.5V16.5ZM19.5 16C19.5 16.2761 19.2761 16.5 19 16.5V17.5C19.8284 17.5 20.5 16.8284 20.5 16H19.5ZM7.35355 12.3536L10.3536 9.35355L9.64645 8.64645L6.64645 11.6464L7.35355 12.3536ZM9.64645 9.35355L12.6464 12.3536L13.3536 11.6464L10.3536 8.64645L9.64645 9.35355ZM13.3536 12.3536L17.3536 8.35355L16.6464 7.64645L12.6464 11.6464L13.3536 12.3536ZM8.35355 21.3536L12.3536 17.3536L11.6464 16.6464L7.64645 20.6464L8.35355 21.3536ZM11.6464 17.3536L15.6464 21.3536L16.3536 20.6464L12.3536 16.6464L11.6464 17.3536ZM3 4.5H21V3.5H3V4.5Z'
															fill='#1A1A1A'
															fillOpacity='0.6'
														/>
													</svg>
												) : link.title == 'Пользователи' ? (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H4C3.44772 21 3 20.5523 3 20V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H20C20.5523 21 21 20.5523 21 20V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z'
															stroke='#1A1A1A'
															strokeOpacity='0.6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												) : (
													''
												)}

												{link.title}
											</Link>
										</li>
									);
								})}
							</ul>

							{!auth ? (
								<>
									<div className={s.Drawer_Navbar_Actions}>
										<BaseButton
											title='Войти'
											className={s.Drawer_Navbar_Actions_Login}
										/>

										<BaseButton
											title='Зарегистрироваться'
											type='blue'
											className={s.Drawer_Navbar_Actions_SignUp}
										/>
									</div>
								</>
							) : null}

							<div className={s.Drawer_Navbar_Footer}>
								<Link href='/' className={s.Drawer_Navbar_Footer_Link}>
									IT-проекты Калининграда, 2023
								</Link>
								<Link href='/' className={s.Drawer_Navbar_Footer_Link}>
									Политика конфиденциальности
								</Link>
								<Link href='/' className={s.Drawer_Navbar_Footer_Link}>
									IT омбудсмен Калининграда
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar2;
//@ts-nocheck
import { BaseButton, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import s from './ProjectDetailsUser.module.scss';

import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const images = [
	'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

interface Props {
	id: string;
	status?: string;
	actions?: boolean;
}

const ProjectDetailsUser: React.FC<Props> = ({
	id,
	status = 'Модерация',
	actions = false,
}) => {
	const router = useRouter();
	const [current_status, setCurrentStatus] = useState(status);

	const { setPopup } = modalSlice.actions;
	const dispatch = useAppDispatch();

	//slider settings
	const settings = {
		className: 'project-details-slider',
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const slider = useRef(null);

	return (
		<>
			<BaseContainer className={s.BaseContainer}>
				<div className={s.ProjectDetails}>
					<div className={s.ProjectDetails_Header}>
						<div className={s.ProjectDetails_Header_Title}>Детали проекта</div>

						{actions ? (
							<>
								<div className={s.ProjectDetails_Header_Actions}>
									<BaseButton
										icon='delete'
										type='red'
										className={s.ProjectDetails_Header_Actions_Delete}
										onClick={() =>
											dispatch(setPopup({ popup: 'DeleteProjectPopup' }))
										}
									/>

									<BaseButton
										title='Редактировать'
										type='white'
										className={s.ProjectDetails_Header_Actions_Complete}
										onClick={() => router.push('/edit-project')}
									/>
								</div>
							</>
						) : null}
					</div>

					<div className={s.ProjectDetails_Content}>
						<div className={s.ProjectDetails_Content_Header}>
							<div className={s.ProjectDetails_Content_Header_Image}>
								<Image
									src='/images/image/main-bg.png'
									priority
									fill
									alt={'Image'}
								/>
							</div>

							<div className={s.ProjectDetails_Content_Header_Parameters}>
								<div className={s.Header}>
									<div className={s.Header_Name}>
										<div className={s.Header_Name_Title}>Кодики</div>

										<div className={s.Header_Name_Date}>
											<span>На рынке с 2018</span>
										</div>
									</div>

									<div className={s.Header_Status}>
										<div
											className={`${s.Header_Status_Name} ${
												current_status === 'Модерация'
													? s.Moderation
													: current_status === 'Доработка'
													? s.Available
													: current_status === 'Доступен'
													? s.Refinement
													: ''
											}`}
										>
											<span>{current_status}</span>
										</div>

										<div className={s.Header_Status_Image}>
											<Image
												src='/images/image/main-bg.png'
												priority
												fill
												alt={'Image'}
											/>
										</div>
									</div>
								</div>

								<div className={s.Content}>
									<div className={s.Content_Item}>
										<div className={s.Content_Item_Label}>
											<span>Стоимость проекта</span>
										</div>

										<div className={s.Content_Item_Value}>
											<span className={s.Value}>2 000 000</span>
										</div>
									</div>

									<div className={s.Content_Item}>
										<div className={s.Content_Item_Label}>
											<span>Требуется инвестиций</span>
										</div>

										<div className={s.Content_Item_Value}>
											<span className={s.Value}>1 000 000</span>
										</div>
									</div>

									<div className={s.Content_Item}>
										<div className={s.Content_Item_Label}>
											<span>Условия соучастия</span>
										</div>

										<div className={s.Content_Item_Value}>
											<span className={s.Value}>
												100 000 (5%) - 800 000 (40%)
											</span>
										</div>
									</div>

									<div className={s.Content_Item}>
										<div className={s.Content_Item_Label}>
											<span>До конца раунда</span>
										</div>

										<div className={s.Content_Item_Value}>
											<span className={s.Value}>58 дней 6 часов</span>

											<span className={s.Tooltip}>
												<BaseIcon
													viewBox='0 0 16 16'
													icon={ALL_ICONS.TOOLTIP}
													className={s.Tooltip_Icon}
												/>

												<div className={s.Tooltip_Tooltip}>
													<p>
														Раунд заканчивается
														<br /> 12.03.2023 в 12:00
													</p>
												</div>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className={s.ProjectDetails_Content_Body}>
							<div className={s.AboutProject}>
								<div className={s.AboutProject_Header}>
									<span>О проекте</span>
								</div>

								<div className={s.AboutProject_Title}>
									<span>Стажировки - всем!</span>
								</div>

								<div className={s.AboutProject_Description}>
									<p>
										Поможем найти работу по душе, даже если нет опыта. Практики
										и стажировки в топовых компаниях и на реальных проектах.
									</p>
								</div>

								<div className={s.AboutProject_Tags}>
									<div className={s.AboutProject_Tags_Item}>
										<span>Образование</span>
									</div>
									<div className={s.AboutProject_Tags_Item}>
										<span>Стажировки и практики</span>
									</div>
									<div className={s.AboutProject_Tags_Item}>
										<span>UX/UI</span>
									</div>
									<div className={s.AboutProject_Tags_Item}>
										<span>Frontend</span>
									</div>
									<div className={s.AboutProject_Tags_Item}>
										<span>Backend</span>
									</div>
								</div>

								<div className={s.AboutProject_Documents}>
									<div className={s.AboutProject_Documents_Item}>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.LOCATION_MARKER}
											className={s.AboutProject_Documents_Item_Icon}
										/>

										<div className={s.AboutProject_Documents_Item_Name}>
											Калининград
										</div>
									</div>

									<div className={s.AboutProject_Documents_Item}>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.DOCUMENT}
											className={s.AboutProject_Documents_Item_Icon}
										/>

										<a
											className={s.AboutProject_Documents_Item_Name}
											href='/images/myw3schoolsimage.jpg'
											download
										>
											Презентация.pdf
										</a>
									</div>

									<div className={s.AboutProject_Documents_Item}>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.MAIL}
											className={s.AboutProject_Documents_Item_Icon}
										/>

										<a
											href='mailto:hello@kodiki.ru'
											className={s.AboutProject_Documents_Item_Name}
										>
											hello@kodiki.ru
										</a>
									</div>

									<div className={s.AboutProject_Documents_Item}>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.GLOBE}
											className={s.AboutProject_Documents_Item_Icon}
										/>

										<Link href='https://twitter.com/' target='_blank'>
											<div className={s.AboutProject_Documents_Item_Name}>
												kodiki.ru
											</div>
										</Link>
									</div>

									<div className={s.AboutProject_Documents_Item}>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.VK}
											className={s.AboutProject_Documents_Item_Icon}
										/>
										<Link href='https://vk.ru/kodiki' target='_blank'>
											<div className={s.AboutProject_Documents_Item_Name}>
												vk.ru/kodiki
											</div>
										</Link>
									</div>
								</div>
							</div>

							<div className={s.SecondInfo}>
								<div className={s.DevelopmentPlans}>
									<div className={s.DevelopmentPlans_Header}>
										<span>Планы развития</span>
									</div>

									<div className={s.DevelopmentPlans_List}>
										<div className={s.DevelopmentPlans_List_Item}>
											<div
												className={s.DevelopmentPlans_List_Item_Border}
											></div>

											<div className={s.DevelopmentPlans_List_Item_Quarter}>
												<div
													className={
														s.DevelopmentPlans_List_Item_Quarter_Number
													}
												>
													<span>1 Кв</span>
												</div>

												<div
													className={s.DevelopmentPlans_List_Item_Quarter_Year}
												>
													2023
												</div>
											</div>

											<div className={s.DevelopmentPlans_List_Item_Description}>
												<p>
													Запуск образовательной программы, старт разработки
													портала
												</p>
											</div>
										</div>

										<div className={s.DevelopmentPlans_List_Item}>
											<div
												className={s.DevelopmentPlans_List_Item_Border}
											></div>
											<div className={s.DevelopmentPlans_List_Item_Quarter}>
												<div
													className={
														s.DevelopmentPlans_List_Item_Quarter_Number
													}
												>
													<span>1 Кв</span>
												</div>

												<div
													className={s.DevelopmentPlans_List_Item_Quarter_Year}
												>
													2023
												</div>
											</div>

											<div className={s.DevelopmentPlans_List_Item_Description}>
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Dolore provident dicta, impedit aperiam aliquid
													delectus sunt maxime inventore accusantium architecto
													omnis deserunt suscipit corrupti accusamus. Animi
													blanditiis quas quia recusandae dignissimos tempora,
													sed voluptatem omnis in, consequuntur quos velit error
													eveniet, nulla deleniti!
												</p>
											</div>
										</div>

										<div className={s.DevelopmentPlans_List_Item}>
											<div
												className={s.DevelopmentPlans_List_Item_Border}
											></div>
											<div className={s.DevelopmentPlans_List_Item_Quarter}>
												<div
													className={
														s.DevelopmentPlans_List_Item_Quarter_Number
													}
												>
													<span>1 Кв</span>
												</div>

												<div
													className={s.DevelopmentPlans_List_Item_Quarter_Year}
												>
													2023
												</div>
											</div>

											<div className={s.DevelopmentPlans_List_Item_Description}>
												<p>Запуск образовательной программы</p>
											</div>
										</div>
									</div>
								</div>

								<div className={s.Alternatives}>
									<div className={s.Alternatives_Header}>
										<span>Альтернативные способы участия</span>
									</div>

									<div className={s.Alternatives_List}>
										<div className={s.Alternatives_List_Item}>
											<div className={s.Alternatives_List_Item_Label}>
												<span>Оборудование/техника</span>
											</div>

											<div className={s.Alternatives_List_Item_Description}>
												<p>3 стационарных компьютера и принтер</p>
											</div>
										</div>

										<div className={s.Alternatives_List_Item}>
											<div className={s.Alternatives_List_Item_Label}>
												<span>Люди</span>
											</div>

											<div className={s.Alternatives_List_Item_Description}>
												<p>
													Нужны разработчики: <br /> фронтенд - 2 <br />{' '}
													дизайнер - 1
												</p>
											</div>
										</div>

										<div className={s.Alternatives_List_Item}>
											<div className={s.Alternatives_List_Item_Label}>
												<span>Оборудование/техника</span>
											</div>

											<div className={s.Alternatives_List_Item_Description}>
												<p>3 стационарных компьютера и принтер</p>
											</div>
										</div>

										<div className={s.Alternatives_List_Item}>
											<div className={s.Alternatives_List_Item_Label}>
												<span>Люди</span>
											</div>

											<div className={s.Alternatives_List_Item_Description}>
												<p>
													Нужны разработчики: <br /> фронтенд - 2 <br />{' '}
													дизайнер - 1
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className={s.Contacts}>
									<div className={s.Contacts_Header}>
										<span>Контакты</span>
									</div>

									<div className={s.Contacts_List}>
										<div className={s.Contacts_List_Item}>
											<div className={s.Contacts_List_Item_Label}>
												<span>Телефон</span>
											</div>

											<div className={s.Contacts_List_Item_Description}>
												+7 952 888 77 66
											</div>
										</div>

										<div className={s.Contacts_List_Item}>
											<div className={s.Contacts_List_Item_Label}>
												<span>Эл.почта</span>
											</div>

											<a
												href='mailto:hello@kodiki.ru'
												className={s.Contacts_List_Item_Description}
											>
												edu@kodiki.ru
											</a>
										</div>

										<div className={s.Contacts_List_Item}>
											<div className={s.Contacts_List_Item_Label}>
												<span>Telegram</span>
											</div>

											<a
												href='telegram.me/@groupname'
												className={s.Contacts_List_Item_Description}
											>
												@edu.kurator
											</a>
										</div>

										<div className={s.Contacts_List_Item}>
											<div className={s.Contacts_List_Item_Label}>
												<span>VK</span>
											</div>

											<Link href='https://vk.ru/edu.kurator' target='_blank'>
												<div className={s.Contacts_List_Item_Description}>
													kodiki.ru
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={s.ProjectDetails_Gallery}>
						<div className={s.ProjectDetails_Gallery_Header}>
							<div className={s.ProjectDetails_Gallery_Header_Title}>
								Галерея
							</div>

							<div className={s.ProjectDetails_Gallery_Header_Navbar}>
								<BaseIcon
									icon={ALL_ICONS.TO_DETAILS}
									viewBox='0 0 20 20'
									className={s.PrevSlide}
									onClick={() => slider.current.slickPrev()}
								/>

								<BaseIcon
									icon={ALL_ICONS.TO_DETAILS}
									viewBox='0 0 20 20'
									className={s.NextSlide}
									onClick={() => slider.current.slickNext()}
								/>
							</div>
						</div>

						<div className={s.ProjectDetails_Gallery_Slider}>
							<Slider {...settings} ref={slider} arrows={false}>
								{images.map((image, index) => {
									return (
										<div key={index}>
											<div
												className={s.SlideImage}
												style={{ backgroundImage: `url(${image})` }}
											/>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</BaseContainer>
		</>
	);
};

export default ProjectDetailsUser;

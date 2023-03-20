//@ts-nocheck
import {
	BaseButton,
	BaseContainer,
	BaseIcon,
	BaseInput,
	BaseInputFile,
	BaseRadioButton,
	BaseSelect,
	BaseSelectMultiple,
	BaseTextarea,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useAppSelector } from '@hooks/redux';
import { Input } from 'components/content';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './CreateProject.module.scss';

const navbar_links = [
	'Основное',
	'Инвестиции',
	'Альтернативные способы уч-я',
	'Планы развития',
	'Контакты',
	'Галерея',
];

const CreateProject: React.FC = () => {
	const router = useRouter();

	const [isActive, setIsActive] = useState(0);
	const [choiceType, setChoiceType] = useState<null | number>(null);

	const [value, setValue] = React.useState({
		some_text: '',
		some_text2: '',
		some_text3: '',
		some_text4: '',
		birth_date: '',
		counter: 1,
		dividend_payments: 'Upon expiration',
		files: [],
		title: 'Mr',
		files2: [],
	});

	const setNewValue = (val: string | number | File[], key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [isChecked, setIsChecked] = React.useState<boolean>(true);

	const radio_items = [
		{
			value: 'yes',
			label: 'Хочу участвовать',
		},
		{
			value: 'no',
			label: 'Не хочу участвовать',
		},
	];

	const radio_items2 = [
		{
			value: 'yes',
			label: 'Да',
		},
		{
			value: 'no',
			label: 'Нет',
		},
	];

	const [radioValue, setRadioValue] = React.useState('yes');
	//desktop navigation
	const handleClickNavbar = (index: number) => {
		setIsActive(index);
		const element = document.getElementById(`section-${index + 1}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
	//mobile navigation
	const mobile_links = [
		{ value: 'general', label: '1. Основное' },
		{ value: 'pipeline', label: '2. Инвестиции' },
		{ value: 'payout', label: '3. Альтернативные способы уч-я' },
		{ value: 'fund_expences', label: '4. Планы развития' },
		{ value: 'life_cycle', label: '5. Контакты' },
		{ value: 'commitments', label: '6. Галерея' },
	];

	const handleClickNavbarMobile = (value: string) => {
		const current_index = mobile_links.findIndex((el) => el.value === value);
		const element = document.getElementById(`section-${current_index + 1}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	//логика для липких кнопок
	// const [isVisible, setIsVisible] = useState(true);
	// const [visible, setVisible] = useState(true);
	const visible = useAppSelector((state) => state.buttons.visible);
	//для мульти селекта
	const [value2, setValue2] = React.useState([]);

	return (
		<BaseContainer className={s.BaseContainer}>
			<div className={s.CreateProject} id='section-1'>
				{visible ? (
					<BaseButton
						title='Отправить'
						type='blue'
						className={s.StickyButton}
					/>
				) : null}

				<div className={s.CreateProject_Header}>
					<div className={s.CreateProject_Header_Title}>
						<span>предложить ПРОЕКТ</span>
					</div>

					<div className={s.CreateProject_Header_MobileContent}>
						<BaseSelect
							initialValue='1. Основное'
							options={mobile_links}
							onChange={(val: string) => handleClickNavbarMobile(val)}
							className={s.CreateProject_Header_MobileContent_Navbar}
						/>

						<BaseButton
							title='Отправить'
							type='blue'
							className={s.CreateProject_Header_MobileContent_Button}
						/>
					</div>
				</div>

				<div className={s.CreateProject_Content}>
					<div className={s.CreateProject_Content_Main}>
						<div className={s.Form}>
							{/* 1 */}
							<div className={s.Form_Block}>
								<div className={s.Form_Block_Title}>
									<span>1.&nbsp;Основное</span>
								</div>

								<div className={s.Form_Block_Description}>
									<span>Заполните форму для создания карточки проекта</span>

									<div className={s.Tooltip}>
										<BaseIcon
											viewBox='0 0 16 16'
											icon={ALL_ICONS.TOOLTIP}
											className={s.Tooltip_Icon}
										/>
									</div>
								</div>

								<div className={s.Form_Block_Row}>
									<div className={s.ProjectType}>
										<div
											className={`${s.ProjectType_Item} ${
												choiceType === 1 ? s.ProjectType_Item_Active : ''
											}`}
											onClick={() => setChoiceType(1)}
										>
											<span>Существующий</span>
										</div>

										<div
											className={`${s.ProjectType_Item} ${
												choiceType === 2 ? s.ProjectType_Item_Active : ''
											}`}
											onClick={() => setChoiceType(2)}
										>
											<span>Стартап</span>
										</div>
									</div>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseInput
										name='some_text'
										placeholder='Название проекта'
										label='Название проекта'
										value={value.some_text}
										onChange={(val: string) => setNewValue(val, 'some_text')}
										className={s.Input}
									/>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseInput
										optional
										name='some_text'
										placeholder='Слоган'
										label='Слоган'
										value={value.some_text2}
										onChange={(val: string) => setNewValue(val, 'some_text2')}
										className={s.Input}
									/>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseSelect
										label='Возраст проекта'
										options={[
											{ value: '1', label: 'Менее 6 месяцев' },
											{ value: '2', label: '6 месяцев — 1,5 года' },
											{ value: '3', label: '1,5 — 3 года' },
											{ value: '4', label: 'Более 3 лет' },
										]}
										onChange={(val: string) => setNewValue(val, 'title')}
										className={`${s.Halfwidth}`}
									/>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Логотип проекта</span>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseInputFile
										type='image'
										title='Перетащите или кликните для загрузки файла'
										types='jpg, jpeg, png'
										files={value.files}
										onChange={(val: any[]) => setNewValue(val, 'files')}
									/>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseTextarea
										name='message'
										label='Краткое описание'
										placeholder='Краткое описание'
										type='text'
										maxLength={500}
										showCount
										value={value.some_text3}
										onChange={(val: string) => setNewValue(val, 'some_text3')}
										className={s.Textarea}
									/>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseSelectMultiple
										placeholder='Теги'
										options={[
											{ value: 'Образование' },
											{ value: 'Стажировки и практики' },
											{ value: 'IT' },
											{ value: 'Маркетплейс' },
											{ value: 'Нетворкинг' },
											{ value: 'Финтех' },
											{ value: 'Портфолио' },
										]}
										onChange={setValue2}
										multiple
									/>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseInput
										prefix='marker'
										name='some_text4'
										placeholder='Город, населённый пункт'
										label='Город, населённый пункт'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Участие в демо-днях</span>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<div className={s.ChoiseOptions}>
										{radio_items?.map((item) => {
											return (
												<BaseRadioButton
													key={item.value}
													value={item.value}
													checked={radioValue === item.value}
													onChange={() => setRadioValue(item.value)}
													className={s.ChoiseOptions_Button}
												>
													{item.label}
												</BaseRadioButton>
											);
										})}
									</div>

									<p className={s.Paragraph}>
										Демо-день это очень важное мероприятие на котором тысячи
										людей очень внимательно смотрят на ваши замечательные
										проекты и после этого инвестируют в них все свои сбережения.
									</p>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Ссылки</span>
								</div>

								<div className={s.Form_Block_Row}>
									<div className={s.Links}>
										<div className={s.Links_Item}>
											<div className={s.Links_Item_Header}>
												<div className={s.Links_Item_Header_Title}>
													<span>Ссылка 1</span>
												</div>

												<div className={s.Links_Item_Header_Delete}>
													<span>Удалить</span>

													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.Links_Item_Header_Delete_Icon}
													/>
												</div>
											</div>

											<div className={s.Links_Item_Body}>
												<BaseSelect
													label='Выбрать'
													options={[
														{ value: '1', label: 'Сайт' },
														{ value: '2', label: 'Вконтакте' },
														{ value: '3', label: 'Телеграм' },
														{ value: '4', label: 'Другое' },
													]}
													onChange={(val: string) => setNewValue(val, 'title')}
												/>

												<BaseInput
													name='some_text'
													placeholder='Ссылка'
													label='Ссылка'
													value={value.some_text}
													onChange={(val: string) =>
														setNewValue(val, 'some_text')
													}
													className={s.Links_Item_Body_Input}
												/>
											</div>
										</div>

										<div className={s.Links_Item}>
											<div className={s.Links_Item_Header}>
												<div className={s.Links_Item_Header_Title}>
													<span>Ссылка 2</span>
												</div>

												<div className={s.Links_Item_Header_Delete}>
													<span>Удалить</span>

													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.Links_Item_Header_Delete_Icon}
													/>
												</div>
											</div>

											<div className={s.Links_Item_Body}>
												<BaseSelect
													label='Выбрать'
													options={[
														{ value: '1', label: 'Сайт' },
														{ value: '2', label: 'Вконтакте' },
														{ value: '3', label: 'Телеграм' },
														{ value: '4', label: 'Другое' },
													]}
													onChange={(val: string) => setNewValue(val, 'title')}
												/>

												<BaseInput
													name='some_text'
													placeholder='Ссылка'
													label='Ссылка'
													value={value.some_text}
													onChange={(val: string) =>
														setNewValue(val, 'some_text')
													}
													className={s.Links_Item_Body_Input}
												/>
											</div>
										</div>
									</div>

									<div className={s.AddElement}>
										<span>+ Добавить ссылку</span>
									</div>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Презентация</span>

									<span>Опционально</span>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseInputFile
										title='Перетащите или кликните для загрузки файла'
										types='odt, doc, docx, pdf, jpg, jpeg, png, ppt, odp, pptx (max 3MB)'
										files={value.files}
										onChange={(val: any[]) => setNewValue(val, 'files')}
									/>
								</div>
							</div>

							{/* border */}
							<div className={s.Form_Border} id='section-2'></div>

							{/* 2 */}
							<div className={s.Form_Block}>
								<div className={s.Form_Block_Title}>
									<span>2.&nbsp;Инвестиции</span>
								</div>

								<div className={s.Form_Block_Description}>
									<span>Укажите необходимый объём инвестиций и условия</span>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Оценка проекта</span>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<BaseInput
										prefix='rub'
										name='some_text4'
										placeholder='Стоимость проекта'
										label='Стоимость проекта'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>

									<div className={s.Corresponds}>
										<div className={s.Corresponds_Label}>
											<span>Соответствует</span>
										</div>
										<div className={s.Corresponds_Value}>100%</div>
									</div>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Требуется инвестиций</span>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<BaseInput
										prefix='rub'
										name='some_text4'
										placeholder='Сумма инвестиций'
										label='Сумма инвестиций'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>

									<div className={s.Corresponds}>
										<div className={s.Corresponds_Label}>
											<span>Соответствует</span>
										</div>
										<div className={s.Corresponds_Value}>&mdash;</div>
									</div>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<div style={{ position: 'relative' }}>
										<Input.Calendar
											label={'Период раунда'}
											// value={value.some_text}
											calendarProps={{}}
											valueсodeinitial={''}
											variant={'default'}
											message={''}
											messagecode={''}
											iserrorphone='false'
											iserrorcode='false'
											// onChange={(val: string) => setNewValue(val, 'birth_date')}
											className={s.Input}
										/>
									</div>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Условия соучастия для одного инвестора </span>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<BaseInput
										prefix='rub'
										name='some_text4'
										placeholder='Мин.'
										label='Мин.'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>

									<div className={s.Corresponds}>
										<div className={s.Corresponds_Label}>
											<span>Соответствует</span>
										</div>
										<div className={s.Corresponds_Value}>&mdash;</div>
									</div>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<BaseInput
										prefix='rub'
										name='some_text4'
										placeholder='Макс'
										label='Макс'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>

									<div className={s.Corresponds}>
										<div className={s.Corresponds_Label}>
											<span>Соответствует</span>
										</div>
										<div className={s.Corresponds_Value}>&mdash;</div>
									</div>
								</div>

								<div className={s.Form_Block_Subtitle}>
									<span>Уже были инвестиции?</span>
								</div>

								<div className={s.Form_Block_Row}>
									<div className={s.ChoiseOptions}>
										{radio_items2?.map((item) => {
											return (
												<BaseRadioButton
													key={item.value}
													value={item.value}
													checked={radioValue === item.value}
													onChange={() => setRadioValue(item.value)}
													className={s.ChoiseOptions_Button}
												>
													{item.label}
												</BaseRadioButton>
											);
										})}
									</div>
								</div>
							</div>

							{/* border */}
							<div className={s.Form_Border} id='section-3'></div>

							{/* 3 */}
							<div className={s.Form_Block}>
								<div className={s.Form_Block_Title}>
									<span>3.&nbsp;Альтернативные способы участия</span>
									<div className={s.Optional}>Опционально</div>
								</div>

								<div className={s.Form_Block_Description}>
									<span>
										Вы можете указать необходимые единицы
										материально-технической базы или нематериальные ресурсы
									</span>
								</div>

								<div className={s.Form_Block_Row}>
									<div className={s.Alternatives}>
										<div className={s.Alternatives_Item}>
											<div className={s.Alternatives_Item_Header}>
												<div className={s.Alternatives_Item_Header_Title}>
													<span>Ресурс 1</span>
												</div>

												<div className={s.Alternatives_Item_Header_Delete}>
													<span>Удалить</span>

													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.Alternatives_Item_Header_Delete_Icon}
													/>
												</div>
											</div>

											<div className={s.Alternatives_Item_Body}>
												<BaseSelect
													label='Выберите ресурс'
													options={[
														{ value: '1', label: 'Люди' },
														{ value: '2', label: 'Оборудование/техника' },
														{ value: '3', label: 'Другое' },
													]}
													onChange={(val: string) => setNewValue(val, 'title')}
													className={s.Halfwidth}
												/>

												<BaseTextarea
													name='message'
													label='Описание'
													placeholder='Описание'
													type='text'
													value={value.some_text3}
													onChange={(val: string) =>
														setNewValue(val, 'some_text3')
													}
													className={s.Textarea}
												/>
											</div>
										</div>

										<div className={s.Alternatives_Item}>
											<div className={s.Alternatives_Item_Header}>
												<div className={s.Alternatives_Item_Header_Title}>
													<span>Ресурс 2</span>
												</div>

												<div className={s.Alternatives_Item_Header_Delete}>
													<span>Удалить</span>

													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.Alternatives_Item_Header_Delete_Icon}
													/>
												</div>
											</div>

											<div className={s.Alternatives_Item_Body}>
												<BaseSelect
													label='Выберите ресурс'
													options={[
														{ value: '1', label: 'Люди' },
														{ value: '2', label: 'Оборудование/техника' },
														{ value: '3', label: 'Другое' },
													]}
													onChange={(val: string) => setNewValue(val, 'title')}
													className={s.Halfwidth}
												/>

												<BaseTextarea
													name='message'
													label='Описание'
													placeholder='Описание'
													type='text'
													value={value.some_text3}
													onChange={(val: string) =>
														setNewValue(val, 'some_text3')
													}
													className={s.Textarea}
												/>
											</div>
										</div>
									</div>

									<div className={s.AddElement}>
										<span>+ Добавить</span>
									</div>
								</div>
							</div>

							{/* border */}
							<div className={s.Form_Border} id='section-4'></div>

							{/* 4 */}
							<div className={s.Form_Block}>
								<div className={s.Form_Block_Title}>
									<span>4.&nbsp;Планы развития</span>
								</div>

								<div className={s.Form_Block_Description}>
									<span>
										Вы можете добавить до 5-и вех развития проекта, в т.ч.
										прошедшие
									</span>
								</div>

								<div className={s.Form_Block_Row}>
									<div className={s.Plans}>
										<div className={s.Plans_Item}>
											<div className={s.Plans_Item_Header}>
												<div className={s.Plans_Item_Header_Title}>
													<span>Веха 1</span>
												</div>

												<div className={s.Plans_Item_Header_Delete}>
													<span>Удалить</span>

													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.Plans_Item_Header_Delete_Icon}
													/>
												</div>
											</div>

											<div className={s.Plans_Item_Body}>
												<div className={s.Plans_Item_Body_Col}>
													<BaseSelect
														label='Квартал'
														options={[
															{ value: '1', label: '1 Квартал' },
															{ value: '2', label: '2 Квартал' },
															{ value: '3', label: '3 Квартал' },
															{ value: '4', label: '4 Квартал' },
														]}
														onChange={(val: string) =>
															setNewValue(val, 'title')
														}
													/>

													<BaseSelect
														label='Год'
														options={[
															{ value: '1', label: '2023' },
															{ value: '2', label: '2024' },
															{ value: '3', label: '2025' },
														]}
														onChange={(val: string) =>
															setNewValue(val, 'title')
														}
													/>
												</div>

												<BaseTextarea
													name='message'
													label='Описание'
													placeholder='Описание'
													type='text'
													value={value.some_text3}
													onChange={(val: string) =>
														setNewValue(val, 'some_text3')
													}
													className={s.Textarea}
												/>
											</div>
										</div>

										<div className={s.Plans_Item}>
											<div className={s.Plans_Item_Header}>
												<div className={s.Plans_Item_Header_Title}>
													<span>Веха 2</span>
												</div>

												<div className={s.Plans_Item_Header_Delete}>
													<span>Удалить</span>

													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.Plans_Item_Header_Delete_Icon}
													/>
												</div>
											</div>

											<div className={s.Plans_Item_Body}>
												<div className={s.Plans_Item_Body_Col}>
													<BaseSelect
														label='Квартал'
														options={[
															{ value: '1', label: '1 Квартал' },
															{ value: '2', label: '2 Квартал' },
															{ value: '3', label: '3 Квартал' },
															{ value: '4', label: '4 Квартал' },
														]}
														onChange={(val: string) =>
															setNewValue(val, 'title')
														}
													/>

													<BaseSelect
														label='Год'
														options={[
															{ value: '1', label: '2023' },
															{ value: '2', label: '2024' },
															{ value: '3', label: '2025' },
														]}
														onChange={(val: string) =>
															setNewValue(val, 'title')
														}
													/>
												</div>

												<BaseTextarea
													name='message'
													label='Описание'
													placeholder='Описание'
													type='text'
													value={value.some_text3}
													onChange={(val: string) =>
														setNewValue(val, 'some_text3')
													}
													className={s.Textarea}
												/>
											</div>
										</div>
									</div>

									<div className={s.AddElement}>
										<span>+ Добавить веху</span>
									</div>
								</div>
							</div>

							{/* border */}
							<div className={s.Form_Border} id='section-5'></div>

							{/* 5 */}
							<div className={s.Form_Block}>
								<div className={s.Form_Block_Title}>
									<span>5.&nbsp;Контакты</span>
								</div>

								<div className={s.Form_Block_Description}>
									<span>Укажите контактные данные</span>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<BaseInput
										prefix='phone'
										name='some_text4'
										placeholder='Телефон'
										label='Телефон'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>

									<BaseInput
										prefix='mail'
										name='some_text4'
										placeholder='Эл.почта'
										label='Эл.почта'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>
								</div>

								<div className={`${s.Form_Block_Row} ${s.Form_Block_Col}`}>
									<BaseInput
										prefix='telegram'
										name='some_text4'
										placeholder='Telegram'
										label='Telegram'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>

									<BaseInput
										prefix='vk'
										name='some_text4'
										placeholder='VK'
										label='VK'
										value={value.some_text4}
										onChange={(val: string) => setNewValue(val, 'some_text4')}
										className={s.Input}
									/>
								</div>
							</div>

							{/* border */}
							<div className={s.Form_Border} id='section-6'></div>

							{/* 6 */}
							<div className={s.Form_Block}>
								<div className={s.Form_Block_Title}>
									<span>6.&nbsp;Галерея</span>
								</div>

								<div className={s.Form_Block_Description}>
									<span>Добавьте фото и изображения (не более 10)</span>
								</div>

								<div className={s.Form_Block_Row}>
									<BaseInputFile
										type='image'
										title='Drag file here to upload or browse'
										types='jpg, jpeg, png'
										files={value.files2}
										multiple
										outside
										onChange={(val: any[]) => setNewValue(val, 'files2')}
									/>
								</div>

								<div className={s.Form_Block_RowWithImage}>
									{value.files2?.map((file) => {
										return (
											<div
												className={s.UploadImage}
												key={file?.name}
												style={{
													backgroundImage: `url(/images/image/main-bg.png)`,
												}}
											>
												<div className={s.UploadImage_Overlay}></div>

												<div
													className={`${s.UploadImage_Delete} ${s.UploadImage_Delete_Desktop}`}
												>
													<BaseIcon
														viewBox='0 0 20 20'
														icon={ALL_ICONS.DELETE}
														className={s.UploadImage_Delete_Icon}
													/>
												</div>

												<div
													className={`${s.UploadImage_Delete} ${s.UploadImage_Delete_Mobile}`}
												>
													<BaseIcon
														icon={ALL_ICONS.CLOSE_POPUP}
														viewBox='0 0 16 16'
														className={s.UploadImage_Delete_Mobile_Icon}
													/>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					{/* НАВБАР */}
					<div className={s.CreateProject_Content_Navbar}>
						<div className={s.Navbar}>
							<div className={s.Navbar_Header}>
								<BaseButton
									title='Отправить'
									type='blue'
									className={s.Navbar_Header_Button}
								/>
							</div>

							<ul className={s.Navbar_Content}>
								{navbar_links?.map((link, index) => {
									return (
										<li
											className={`${s.Navbar_Content_Item} ${
												isActive == index ? s.Active : ''
											}`}
											key={index}
											onClick={() => handleClickNavbar(index)}
										>
											<div className={s.Navbar_Content_Item_Number}>
												<span>{index + 1}</span>
											</div>
											<div className={s.Navbar_Content_Item_Name}>{link}</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</BaseContainer>
	);
};

export default CreateProject;

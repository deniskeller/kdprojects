import { BaseButton, BaseContainer, BaseIcon, BaseSelect } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Pagination } from 'components/content';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Users.module.scss';

const Users: React.FC = () => {
	const router = useRouter();

	const [value, setValue] = React.useState({
		some_text: '',
		some_text2: '',
	});

	const setNewValue = (val: string | number | File[], key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	return (
		<div className={s.BaseContainer}>
			<div className={s.Users}>
				<BaseContainer>
					<div className={s.Users_Header}>
						<div className={s.Users_Header_Filter}>
							<input
								type='text'
								placeholder='Поиск'
								value={value.some_text}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setNewValue(e.target.value, 'some_text')
								}
								className={s.Users_Header_Filter_Input}
							/>

							<BaseSelect
								initialValue='По имени'
								options={[
									{ value: '1', label: 'По имени' },
									{ value: '2', label: 'По фамилии' },
									{ value: '3', label: 'По эл.почте' },
								]}
								onChange={(val: string) => setNewValue(val, 'title')}
								className={s.Users_Header_Filter_Select}
							/>
							<div className={s.Users_Header_Filter_Icon}>
								<BaseIcon
									icon={ALL_ICONS.SEARCH}
									viewBox='0 0 20 20'
									className={s.Icon}
								/>
							</div>
						</div>

						<div className={s.Users_Header_Selected}>
							<div className={s.Users_Header_Selected_Label}>
								<span>Отображать по</span>
							</div>

							<BaseSelect
								initialValue='20'
								options={[
									{ value: '1', label: '10' },
									{ value: '2', label: '20' },
									{ value: '3', label: '50' },
								]}
								onChange={(val: string) => setNewValue(val, 'title')}
								className={s.Users_Header_Selected_Select}
							/>

							<BaseButton
								title='Сбросить'
								type='blue'
								className={s.Users_Header_Selected_Button}
							/>
						</div>
					</div>
				</BaseContainer>

				<div className={s.Users_Table}>
					<div className={s.Table}>
						<table>
							<thead>
								<tr>
									<th className={s.SortingCol}>
										Дата регистрации
										<BaseIcon
											icon={ALL_ICONS.SORTING}
											viewBox='0 0 8 13'
											className={s.SortingIcon}
										/>
									</th>
									<th>Имя</th>
									<th>Фамилия</th>
									<th>Email</th>
									<th>Телефон</th>
									<th>Проектов</th>
								</tr>
							</thead>
							<tbody>
								<tr
									onClick={() => router.push('/admin/users/user-details/' + 1)}
								>
									<td>12.02.2022</td>
									<td>Андрей</td>
									<td>Чурсин</td>
									<td>allencooper@company.com</td>
									<td>+7 927-612-21-04</td>
									<td style={{ display: 'flex' }}>
										<span>1</span>
										<BaseIcon
											icon={ALL_ICONS.CHEVERON}
											viewBox='0 0 24 24'
											className={s.UserInfo}
										/>
									</td>
								</tr>

								<tr
									onClick={() => router.push('/admin/users/user-details/' + 1)}
								>
									<td>12.02.2022</td>
									<td>Андрей</td>
									<td>Чурсин</td>
									<td>allencooper@company.com</td>
									<td>+7 927-612-21-04</td>
									<td style={{ display: 'flex' }}>
										<span>1</span>
										<BaseIcon
											icon={ALL_ICONS.CHEVERON}
											viewBox='0 0 24 24'
											className={s.UserInfo}
										/>
									</td>
								</tr>

								<tr
									onClick={() => router.push('/admin/users/user-details/' + 1)}
								>
									<td>12.02.2022</td>
									<td>Андрей</td>
									<td>Чурсин</td>
									<td>allencooper@company.com</td>
									<td>+7 927-612-21-04</td>
									<td style={{ display: 'flex' }}>
										<span>1</span>
										<BaseIcon
											icon={ALL_ICONS.CHEVERON}
											viewBox='0 0 24 24'
											className={s.UserInfo}
										/>
									</td>
								</tr>

								<tr
									onClick={() => router.push('/admin/users/user-details/' + 1)}
								>
									<td>12.02.2022</td>
									<td>Андрей</td>
									<td>Чурсин</td>
									<td>allencooper@company.com</td>
									<td>+7 927-612-21-04</td>
									<td style={{ display: 'flex' }}>
										<span>1</span>
										<BaseIcon
											icon={ALL_ICONS.CHEVERON}
											viewBox='0 0 24 24'
											className={s.UserInfo}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<BaseContainer>
					<Pagination />
				</BaseContainer>
			</div>
		</div>
	);
};

export default Users;

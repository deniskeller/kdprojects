import { BaseButton, BaseContainer, BaseSelect } from '@base/index';
import { useAppSelector } from '@hooks/redux';
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

	const [value, setValue] = React.useState({
		some_text: '',
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
			label: 'yes',
		},
		{
			value: 'no',
			label: 'no',
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
							initialValue='General'
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
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
							eos aut? Inventore similique ducimus tempora dolore eligendi quia
							ullam atque quidem veritatis accusamus illum possimus voluptates
							nobis sapiente quod cum repellendus nam ea consectetur non velit
							placeat, minima fuga. Provident ratione enim porro ducimus tempore
							quibusdam! Aspernatur blanditiis at iusto, dolore eveniet
							consequuntur similique eos laborum necessitatibus molestias alias
							non porro sed voluptate nulla sequi laboriosam, quibusdam
							asperiores mollitia soluta dolorem! Non nihil error laboriosam ab,
							quo delectus nostrum eaque voluptate labore perspiciatis ullam
							quaerat. Excepturi ipsa itaque accusantium obcaecati laboriosam
							necessitatibus iusto maxime doloribus facere laborum
							exercitationem, quasi eum ad expedita sit, fugit eos earum
							voluptas labore. Corrupti accusamus magnam qui expedita cumque.
							Nobis debitis eaque quo quidem asperiores ipsa animi fugit
							corporis ratione praesentium error iure libero, explicabo, maxime
							repellendus. Saepe possimus aut voluptas ad assumenda explicabo
							accusamus vitae dicta, eius incidunt nobis ullam aliquid?
							Quibusdam, sequi nam adipisci veritatis distinctio nihil, eveniet
							aspernatur odio, labore cum sapiente. Eos, non alias, velit quae
							deleniti animi, necessitatibus repellat sint est itaque impedit
							assumenda quo. Suscipit, voluptate libero culpa incidunt unde
							vitae sequi quasi adipisci provident amet vero nesciunt eos
							repudiandae! Optio ducimus, ipsam beatae maxime accusantium
							praesentium placeat odio sapiente earum magni? Reiciendis fuga
							repellat sint accusamus perspiciatis delectus. Facere laboriosam
							voluptatibus, hic quod error numquam dignissimos quas, sequi
							autem, voluptates sint fuga quis amet sunt ex dolorum sit porro
							nulla consequatur. Ex, cupiditate eum ullam repellendus distinctio
							nam similique pariatur expedita praesentium iure nisi temporibus
							consequuntur. Cumque voluptatem quibusdam vero, a quasi voluptas
							optio soluta ab nisi et ratione placeat enim nemo repellat
							voluptate sit sint deleniti doloribus atque ex velit nesciunt
							corporis pariatur! Sunt optio magnam, accusamus nostrum repellat
							tenetur expedita enim ab eum, deleniti sit vero consectetur ea ex
							ratione sed autem consequatur voluptate corrupti? Neque nam a rem
							explicabo dignissimos nobis nihil. Distinctio exercitationem ut
							quidem nobis quam voluptate repudiandae ab accusamus quod laborum
							aut quaerat facere totam saepe sit ipsum temporibus id iusto
							numquam, quisquam minima alias laboriosam. Veniam, animi tenetur
							omnis quod id at cupiditate rerum doloremque? Ipsa repudiandae
							ratione quas minus tempora deleniti, culpa labore unde? Minima
							tempora, pariatur ullam, debitis perferendis qui laudantium
							placeat repudiandae fuga consectetur harum nihil soluta minus.
							Saepe deleniti eligendi quae impedit animi odio cumque quaerat sit
							eum! Magni, est, sequi et harum ipsum qui nostrum consectetur
							omnis repellat consequuntur adipisci debitis at ullam quae
							reiciendis, facere libero vel obcaecati incidunt provident totam!
							Quos hic quis iusto, voluptatibus possimus minus quia ratione esse
							commodi inventore accusantium voluptatem dolores, omnis
							repudiandae rerum itaque cum deserunt, nisi est. Culpa ipsam
							iusto, pariatur est reprehenderit sit nisi deleniti veritatis
							suscipit ex dicta, explicabo eaque sapiente tenetur optio et harum
							at. Tempore, consectetur earum dolore quibusdam aut, saepe
							architecto laborum temporibus sunt odio ipsa alias consequatur.
							Quibusdam corrupti, est, dolore aperiam laudantium saepe atque
							nulla sed dolorem praesentium nemo ducimus, provident cum deserunt
							tempore ipsa? Quo ipsam unde architecto rem accusamus distinctio
							voluptatem beatae obcaecati doloremque perspiciatis, nisi ullam
							odio provident tenetur ipsa sed quisquam cupiditate. Corrupti
							delectus laboriosam soluta accusamus nulla est quam minus ad
							fugiat. Nemo, veritatis temporibus repellat maxime dolorum
							consequatur rerum ipsam odio sit debitis incidunt cumque tempora.
							Aut sed incidunt quia nobis fuga assumenda velit facere, molestiae
							quaerat neque eligendi amet eius porro! Eaque animi vel fugit
							accusamus doloremque dolores eos molestiae unde voluptatibus ipsam
							dolor ex hic tempore labore magnam excepturi earum, ipsum ipsa ad
							tenetur omnis beatae fugiat quia provident. Veniam nemo deleniti
							nam iusto, officia eum eligendi labore quaerat quo similique
							voluptates quae repellendus, modi quasi excepturi saepe natus
							itaque minima quisquam voluptate molestiae quam esse perferendis.
							Nostrum laboriosam exercitationem nemo nihil temporibus numquam,
							mollitia quidem labore itaque, aliquam nam officiis necessitatibus
							ex iure accusamus ad deserunt sunt assumenda. Explicabo sunt
							assumenda, iste autem incidunt quisquam nostrum voluptatem odit,
							voluptate porro ut totam delectus blanditiis adipisci expedita
							accusantium praesentium fugiat dolorum distinctio non quas
							molestiae, sit ipsum. Nemo commodi hic quisquam sint quidem illo
							quam autem id, eum tempore, asperiores ipsa! Corrupti repudiandae
							necessitatibus nemo reprehenderit doloremque, commodi nam illo
							architecto, dolore corporis veritatis vitae molestiae provident
							mollitia non vero accusantium est. Doloribus, nihil sed. Atque
							dolorem voluptate architecto eius quia dolor sequi error officia
							quasi? Doloribus voluptatibus exercitationem id incidunt molestiae
							ipsa ad quasi et itaque repellat, nihil tenetur ut nesciunt vero
							fugiat soluta vel aliquid vitae, repellendus voluptates. Dicta
							accusantium sint architecto quae quidem? Exercitationem reiciendis
							nam beatae nesciunt et autem voluptates a. Possimus explicabo,
							tenetur non iure praesentium eius aut ipsum harum iste, nisi earum
							quo qui esse nostrum neque debitis sapiente maiores magni,
							laudantium laborum illo. Ipsa cupiditate nam facilis hic fuga
							dolorem vero delectus eligendi optio voluptatum dolore magni ex
							corporis eum a dicta odio asperiores tempore, quod quae incidunt
							animi quia nostrum dolor. Quisquam eveniet dolores illum, pariatur
							iusto voluptas cum minus praesentium aliquid at fugit dolore unde
							veniam. Maiores expedita nesciunt inventore sit impedit at dolores
							consequatur sapiente et enim dolor molestias aliquam, sint
							exercitationem temporibus, quae earum sunt ipsam labore itaque
							commodi rerum cum. Fuga nesciunt ipsam iusto ex corrupti fugiat ad
							explicabo culpa, accusantium laboriosam quae ut, molestias sunt
							nihil. Ab, optio. Sunt, dolorem? Doloribus nostrum quam provident
							sequi laudantium autem vel inventore aspernatur voluptatibus
							incidunt. Reiciendis architecto porro dolores repellat alias
							tenetur aut rerum. Harum, velit omnis. Mollitia rerum expedita
							totam accusantium nam dolore debitis, itaque explicabo quam.
							Doloremque totam qui inventore sapiente veritatis alias, sed non
							illo debitis itaque iusto obcaecati nam consequatur libero. Fuga
							animi expedita saepe? Quis libero ex magnam? Ipsam excepturi odit
							ea reprehenderit ipsa doloremque vitae doloribus minus ipsum
							laboriosam esse sit obcaecati fugiat, provident error deserunt
							expedita blanditiis perferendis ex porro quis distinctio
							voluptates! Quam ipsa nulla dolores cupiditate tempora tempore
							tenetur laborum officiis exercitationem cum hic sequi labore error
							quaerat aliquam debitis, vero dolorem voluptatum blanditiis alias
							molestias iusto ipsam! Nulla, repudiandae, tenetur ratione dolore
							praesentium vitae iusto dignissimos commodi, molestias
							consequuntur adipisci a quis omnis. Exercitationem eius ipsum id
							incidunt quos ducimus neque tenetur vitae!
						</p>
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

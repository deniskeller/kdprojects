import { BaseButton, BaseContainer, BaseInput } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './PasswordRecovery.module.scss';

interface IValue {
	email: string;
}

const PasswordRecovery: React.FC = () => {
	const router = useRouter();

	const [value, setValue] = useState<IValue>({
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setRecovery(true);
	};

	const [recovery, setRecovery] = useState(false);

	return (
		<BaseContainer>
			<div className={s.PasswordRecovery}>
				{!recovery ? (
					<>
						<form className={s.Form} onSubmit={handleSubmit}>
							<div className={s.Form_Title}>
								<span>Восстановление доступа</span>
							</div>

							<div className={s.Form_Subtitle}>
								<span>
									Для сброса пароля введите эл. почту указанную при регистрации{' '}
								</span>
							</div>

							<BaseInput
								name='email'
								placeholder='Эл. почта'
								label='Эл. почта'
								value={value.email}
								onChange={(val: string) => setNewValue(val, 'email')}
								className={s.Form_Input}
							/>

							<div className={s.Form_Register}>
								<Link href='/authorization' className={s.Form_Register_Link}>
									Войти
								</Link>

								<div className={s.Form_Register_Question}>или</div>

								<Link href='/registration' className={s.Form_Register_Link}>
									Зарегистрироваться
								</Link>
							</div>

							<BaseButton
								disabled={value.email.length == 0}
								title='Сбросить пароль'
								type='blue'
								className={s.Form_Button}
							/>
						</form>
					</>
				) : (
					<>
						<div className={s.Form}>
							<svg
								width='239'
								height='204'
								viewBox='0 0 239 204'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={s.Form_Icon}
							>
								<ellipse
									cx='82.976'
									cy='180.47'
									rx='4.25721'
									ry='3.00509'
									fill='#EDF1F5'
								/>
								<ellipse
									cx='34.8939'
									cy='148.415'
									rx='4.25721'
									ry='3.00509'
									fill='#EDF1F5'
								/>
								<ellipse
									cx='184.899'
									cy='79.5482'
									rx='6.01017'
									ry='4.25721'
									fill='#EDF1F5'
								/>
								<ellipse
									cx='213.196'
									cy='154.675'
									rx='18.7818'
									ry='13.2725'
									fill='#EDF1F5'
								/>
								<ellipse
									cx='119.787'
									cy='125.376'
									rx='69.117'
									ry='50.0848'
									fill='#EAEEF2'
								/>
								<ellipse
									cx='41.6554'
									cy='75.0408'
									rx='14.5246'
									ry='10.2674'
									fill='#EDF1F5'
								/>
								<g opacity='0.5'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M34.1966 85.3557C-24.6609 185.525 132.344 211.547 138.863 132.184C142.319 90.1131 192.715 57.8082 192.715 57.8082'
										fill='black'
										fillOpacity='0.01'
									/>
									<path
										d='M34.1966 85.3557C-24.6609 185.525 132.344 211.547 138.863 132.184C142.319 90.1131 192.715 57.8082 192.715 57.8082'
										stroke='#8CA4D4'
										strokeWidth='2.50424'
										strokeLinecap='round'
										strokeDasharray='2.5 10.02'
									/>
								</g>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M201.594 65.7371L190.382 62.4588L200.571 52.2671L183.109 59.9834L172.863 56.0576L207.885 46.7542L201.594 65.7371Z'
									fill='#41C1F8'
								/>
								<path
									d='M156.99 126.045L93.9986 145.385C92.9548 145.705 91.8267 145.597 90.8623 145.086C89.8979 144.574 89.1763 143.701 88.856 142.657L81.4897 118.669L75.3743 98.7472L75.2559 98.3663L76.0948 97.3985L103.47 65.8335C103.596 65.6874 103.76 65.5798 103.944 65.5233C104.128 65.4668 104.324 65.4637 104.51 65.5143L144.899 76.2884L146.119 76.6127L146.494 77.8275L159.719 120.898C160.038 121.942 159.93 123.071 159.419 124.036C158.907 125.001 158.034 125.723 156.99 126.045Z'
									fill='#41C1F8'
								/>
								<path
									d='M146.496 77.8262L122.621 105.953V104.409L144.9 76.2871L146.12 76.6114L146.496 77.8262Z'
									fill='#208AF2'
								/>
								<path
									d='M157.064 126.02C157.017 126.035 156.967 126.035 156.92 126.02L118.364 111.704C118.333 111.692 118.305 111.673 118.282 111.649C118.26 111.624 118.244 111.595 118.235 111.563C118.226 111.531 118.224 111.497 118.231 111.464C118.237 111.432 118.251 111.401 118.271 111.375L124.716 103.334L145.873 76.922C145.896 76.892 145.927 76.8689 145.963 76.8554C145.998 76.8418 146.036 76.8383 146.074 76.8453C146.111 76.8522 146.146 76.8692 146.174 76.8946C146.202 76.9199 146.223 76.9526 146.233 76.9889L159.628 120.62L159.715 120.898C160.033 121.929 159.934 123.044 159.438 124.002C158.942 124.96 158.089 125.685 157.064 126.02Z'
									fill='#00A6ED'
								/>
								<path
									d='M115.902 110.088L115.552 110.819L75.6368 98.4847C75.6003 98.4734 75.5614 98.4723 75.5244 98.4815C75.4873 98.4906 75.4534 98.5098 75.4264 98.5368C75.3994 98.5638 75.3803 98.5976 75.3711 98.6347C75.3619 98.6718 75.363 98.7107 75.3743 98.7471L75.2559 98.3662L76.0948 97.3984L115.902 110.088Z'
									fill='#208AF2'
								/>
								<path
									d='M117.927 111.837L94.0472 145.323C94.0198 145.364 93.9774 145.394 93.9288 145.405C92.892 145.703 91.7796 145.582 90.8312 145.068C89.8829 144.554 89.1743 143.688 88.8583 142.656L81.4919 118.668L75.3765 98.7464C75.3653 98.7099 75.3642 98.6711 75.3734 98.634C75.3825 98.5969 75.4017 98.5631 75.4287 98.5361C75.4557 98.5091 75.4896 98.4899 75.5266 98.4808C75.5637 98.4716 75.6026 98.4727 75.6391 98.484L115.554 110.818L117.819 111.518C117.85 111.528 117.879 111.545 117.902 111.568C117.926 111.591 117.943 111.619 117.954 111.65C117.965 111.681 117.968 111.714 117.963 111.747C117.958 111.779 117.946 111.81 117.927 111.837Z'
									fill='#00A6ED'
								/>
								<path
									d='M156.988 126.045L94.0003 145.385C93.0466 145.675 92.0203 145.609 91.1108 145.202C90.2013 144.794 89.4701 144.071 89.0521 143.166C88.9816 143.011 88.9503 142.842 88.961 142.672C88.9718 142.503 89.0241 142.339 89.1135 142.194L114.217 101.303C114.348 101.09 114.552 100.931 114.792 100.858C115.032 100.784 115.29 100.801 115.518 100.904L159.243 120.662C159.398 120.731 159.533 120.838 159.637 120.972C159.741 121.107 159.811 121.265 159.839 121.432C160.001 122.416 159.801 123.424 159.277 124.272C158.753 125.12 157.94 125.75 156.988 126.045Z'
									fill='#0B88C7'
								/>
								<path
									d='M144.555 61.8473C144.518 61.8473 144.481 61.8377 144.449 61.8196C144.416 61.8014 144.389 61.7752 144.369 61.7435C144.349 61.7118 144.338 61.6755 144.336 61.6383C144.334 61.601 144.342 61.5639 144.359 61.5304C144.547 61.1506 144.647 60.9423 144.648 60.9418C144.659 60.9148 144.677 60.8905 144.698 60.8702C144.719 60.85 144.745 60.8343 144.772 60.8241C144.8 60.8139 144.83 60.8094 144.859 60.8108C144.888 60.8122 144.917 60.8195 144.944 60.8324C144.97 60.8452 144.994 60.8632 145.013 60.8854C145.033 60.9076 145.048 60.9334 145.057 60.9614C145.066 60.9894 145.07 61.019 145.067 61.0484C145.065 61.0778 145.056 61.1064 145.042 61.1324C145.042 61.1324 144.941 61.3421 144.752 61.7252C144.733 61.7618 144.705 61.7927 144.671 61.8142C144.636 61.8358 144.596 61.8473 144.555 61.8473Z'
									fill='white'
								/>
								<path
									d='M122.395 93.1102C122.354 93.1102 122.313 93.0983 122.278 93.0758C122.242 93.0534 122.214 93.0213 122.197 92.9835C122.179 92.9456 122.173 92.9035 122.178 92.8621C122.183 92.8207 122.201 92.7817 122.227 92.7497C122.511 92.4118 122.78 92.0766 123.028 91.7533C123.064 91.7071 123.116 91.6769 123.174 91.6692C123.232 91.6616 123.29 91.6772 123.336 91.7127C123.382 91.7481 123.412 91.8004 123.42 91.8581C123.428 91.9158 123.412 91.9742 123.377 92.0204C123.125 92.3487 122.851 92.689 122.564 93.0318C122.543 93.0564 122.517 93.0762 122.488 93.0897C122.459 93.1032 122.428 93.1103 122.395 93.1102ZM123.958 91.0633C123.918 91.0633 123.879 91.0524 123.845 91.0318C123.811 91.0112 123.783 90.9817 123.764 90.9465C123.746 90.9112 123.737 90.8715 123.739 90.8317C123.741 90.7919 123.754 90.7534 123.777 90.7205C124.028 90.3513 124.255 89.9892 124.452 89.6442C124.466 89.6192 124.485 89.5972 124.508 89.5796C124.531 89.5619 124.557 89.5489 124.585 89.5414C124.612 89.5338 124.641 89.5317 124.67 89.5354C124.699 89.539 124.726 89.5482 124.751 89.5625C124.776 89.5768 124.798 89.5959 124.816 89.6187C124.834 89.6414 124.847 89.6675 124.854 89.6953C124.862 89.7231 124.864 89.7521 124.86 89.7807C124.857 89.8093 124.847 89.8369 124.833 89.8619C124.63 90.2168 124.397 90.5886 124.14 90.9673C124.119 90.9969 124.092 91.0211 124.061 91.0379C124.029 91.0546 123.994 91.0633 123.958 91.0633H123.958ZM123.913 88.9717H123.909C123.466 88.9737 123.027 88.8778 122.625 88.6908C122.599 88.6786 122.575 88.6614 122.556 88.6401C122.536 88.6189 122.521 88.594 122.511 88.5669C122.502 88.5398 122.497 88.5111 122.498 88.4823C122.5 88.4535 122.507 88.4252 122.519 88.3991C122.531 88.373 122.548 88.3495 122.569 88.3301C122.591 88.3106 122.616 88.2955 122.643 88.2857C122.67 88.2758 122.699 88.2714 122.727 88.2727C122.756 88.2739 122.784 88.2809 122.811 88.2931C123.155 88.4527 123.53 88.5345 123.91 88.5323C123.927 88.5323 123.946 88.5323 123.964 88.5323H123.968C123.997 88.5321 124.025 88.5375 124.052 88.5483C124.079 88.5591 124.103 88.575 124.124 88.5952C124.144 88.6154 124.161 88.6394 124.172 88.6659C124.183 88.6925 124.189 88.7209 124.189 88.7498C124.19 88.7786 124.184 88.8072 124.173 88.8339C124.163 88.8606 124.147 88.885 124.127 88.9055C124.106 88.9261 124.082 88.9425 124.056 88.9538C124.029 88.965 124.001 88.971 123.972 88.9712C123.952 88.9715 123.933 88.9717 123.913 88.9717H123.913ZM125.22 88.8224C125.169 88.8085 125.123 88.7813 125.087 88.7437C125.051 88.7061 125.025 88.6594 125.012 88.6086C125 88.5577 125.001 88.5044 125.016 88.4543C125.031 88.4041 125.059 88.3589 125.098 88.3232C125.227 88.0027 125.33 87.6721 125.405 87.3347C125.411 87.3063 125.422 87.2793 125.438 87.2553C125.455 87.2313 125.476 87.2107 125.5 87.1949C125.524 87.179 125.551 87.1681 125.58 87.1628C125.608 87.1575 125.638 87.1579 125.666 87.164C125.694 87.1701 125.721 87.1818 125.745 87.1983C125.769 87.2149 125.789 87.236 125.805 87.2604C125.821 87.2849 125.831 87.3122 125.836 87.3408C125.841 87.3694 125.84 87.3987 125.834 87.427C125.785 87.6514 125.723 87.873 125.65 88.0906C125.85 87.9965 126.055 87.8874 126.263 87.7643C126.313 87.7369 126.372 87.7301 126.427 87.7451C126.482 87.7602 126.528 87.7959 126.557 87.8449C126.586 87.8939 126.595 87.9523 126.582 88.0076C126.569 88.063 126.535 88.1111 126.487 88.1417C126.15 88.3431 125.798 88.5166 125.433 88.6605L125.421 88.6886C125.405 88.7281 125.376 88.7619 125.341 88.7856C125.305 88.8093 125.263 88.822 125.22 88.8221L125.22 88.8224ZM121.663 87.9798C121.61 87.9799 121.558 87.9605 121.518 87.9254C121.168 87.6323 120.872 87.2796 120.645 86.8835C120.63 86.8581 120.621 86.8299 120.617 86.8006C120.613 86.7713 120.615 86.7415 120.623 86.7131C120.631 86.6847 120.645 86.6581 120.663 86.6351C120.681 86.612 120.704 86.5929 120.73 86.5789C120.756 86.5649 120.785 86.5563 120.814 86.5536C120.844 86.5509 120.873 86.5542 120.901 86.5633C120.93 86.5723 120.956 86.5869 120.978 86.6063C121 86.6256 121.018 86.6492 121.031 86.6758C121.234 87.0255 121.497 87.3368 121.807 87.5954C121.841 87.6248 121.865 87.6638 121.876 87.7071C121.886 87.7504 121.884 87.7959 121.868 87.8377C121.852 87.8795 121.824 87.9154 121.787 87.9408C121.751 87.9662 121.707 87.9798 121.663 87.9798H121.663ZM127.439 87.4479C127.394 87.448 127.349 87.4337 127.312 87.407C127.274 87.3802 127.246 87.3425 127.231 87.2991C127.217 87.2556 127.216 87.2086 127.229 87.1647C127.243 87.1208 127.269 87.0822 127.306 87.0543C127.621 86.813 127.949 86.5386 128.281 86.2386C128.303 86.2193 128.328 86.2044 128.355 86.1948C128.382 86.1851 128.411 86.1809 128.44 86.1824C128.468 86.1838 128.497 86.191 128.523 86.2034C128.549 86.2157 128.572 86.2331 128.591 86.2545C128.611 86.2759 128.625 86.3009 128.635 86.328C128.645 86.3552 128.649 86.384 128.647 86.4128C128.646 86.4415 128.639 86.4698 128.626 86.4958C128.614 86.5218 128.597 86.5451 128.575 86.5644C128.234 86.8722 127.897 87.1542 127.573 87.4026C127.534 87.4318 127.488 87.4475 127.44 87.4472L127.439 87.4479ZM125.688 86.321C125.635 86.3209 125.584 86.3019 125.544 86.2674C125.504 86.2329 125.478 86.1852 125.471 86.1331C125.423 85.7481 125.258 85.3871 124.998 85.0994C124.958 85.0567 124.938 85.0002 124.94 84.9422C124.942 84.8842 124.967 84.8295 125.01 84.79C125.052 84.7505 125.109 84.7295 125.167 84.7316C125.225 84.7336 125.28 84.7586 125.319 84.801C125.641 85.1535 125.845 85.5966 125.905 86.0698C125.909 86.0983 125.908 86.1274 125.901 86.1553C125.894 86.1833 125.881 86.2096 125.864 86.2327C125.847 86.2558 125.825 86.2753 125.8 86.29C125.776 86.3048 125.748 86.3145 125.72 86.3187C125.709 86.3202 125.698 86.3209 125.688 86.321ZM120.7 85.7586C120.665 85.7587 120.63 85.7501 120.598 85.7338C120.567 85.7174 120.54 85.6938 120.52 85.6648C120.5 85.6358 120.487 85.6024 120.482 85.5673C120.478 85.5323 120.482 85.4966 120.494 85.4635C120.646 85.0509 120.977 84.6915 121.452 84.4247C121.503 84.3962 121.563 84.389 121.619 84.4047C121.675 84.4205 121.722 84.4578 121.751 84.5086C121.779 84.5593 121.787 84.6193 121.771 84.6753C121.755 84.7314 121.718 84.7789 121.667 84.8074C121.284 85.0224 121.021 85.3015 120.906 85.615C120.89 85.6571 120.862 85.6935 120.826 85.7192C120.789 85.7449 120.745 85.7587 120.7 85.7586ZM129.359 85.7272C129.316 85.7272 129.274 85.7144 129.238 85.6904C129.202 85.6665 129.173 85.6324 129.157 85.5925C129.14 85.5526 129.135 85.5086 129.144 85.4661C129.152 85.4236 129.173 85.3845 129.203 85.3537C129.489 85.0641 129.784 84.7501 130.081 84.4215C130.12 84.3783 130.174 84.3524 130.232 84.3494C130.29 84.3464 130.347 84.3666 130.391 84.4056C130.434 84.4446 130.46 84.4992 130.463 84.5573C130.466 84.6154 130.445 84.6724 130.406 84.7156C130.106 85.0491 129.806 85.3672 129.515 85.6618C129.495 85.6826 129.471 85.699 129.444 85.7103C129.417 85.7215 129.388 85.7273 129.359 85.7272ZM124.059 84.5318C124.04 84.5317 124.02 84.5291 124.001 84.524C123.612 84.4231 123.206 84.3973 122.807 84.4481C122.778 84.4516 122.749 84.4494 122.722 84.4416C122.694 84.4339 122.668 84.4207 122.645 84.4029C122.622 84.3851 122.604 84.3631 122.589 84.338C122.575 84.3129 122.566 84.2852 122.563 84.2566C122.559 84.228 122.561 84.199 122.569 84.1712C122.577 84.1435 122.59 84.1175 122.608 84.0948C122.626 84.0721 122.648 84.0532 122.673 84.0391C122.698 84.0249 122.726 84.0159 122.754 84.0124C123.21 83.9548 123.672 83.9846 124.116 84.1002C124.168 84.114 124.212 84.1461 124.242 84.1904C124.271 84.2347 124.284 84.2882 124.277 84.341C124.27 84.3937 124.244 84.4422 124.204 84.4772C124.164 84.5123 124.112 84.5316 124.059 84.5315V84.5318ZM131.09 83.8147C131.048 83.8147 131.007 83.8027 130.972 83.7802C130.937 83.7578 130.909 83.7257 130.891 83.6878C130.874 83.6499 130.867 83.6078 130.873 83.5664C130.878 83.525 130.895 83.486 130.922 83.454C131.188 83.138 131.461 82.8036 131.734 82.4593C131.752 82.4363 131.774 82.417 131.8 82.4026C131.825 82.3882 131.853 82.379 131.882 82.3754C131.91 82.3719 131.94 82.3741 131.968 82.382C131.996 82.3899 132.022 82.4033 132.045 82.4214C132.067 82.4394 132.086 82.4619 132.1 82.4873C132.114 82.5128 132.123 82.5408 132.126 82.5698C132.13 82.5987 132.127 82.6279 132.119 82.6558C132.11 82.6837 132.097 82.7096 132.078 82.7322C131.802 83.0797 131.526 83.4176 131.258 83.7365C131.238 83.761 131.212 83.7807 131.183 83.7942C131.154 83.8077 131.122 83.8147 131.09 83.8147H131.09ZM132.696 81.7949C132.655 81.7948 132.615 81.7834 132.58 81.7619C132.546 81.7404 132.518 81.7097 132.5 81.6731C132.481 81.6366 132.474 81.5957 132.478 81.5551C132.481 81.5145 132.496 81.4757 132.521 81.4431C132.772 81.1112 133.029 80.7634 133.286 80.4092C133.32 80.3621 133.371 80.3304 133.429 80.3212C133.486 80.312 133.545 80.326 133.592 80.3602C133.639 80.3943 133.671 80.4458 133.68 80.5033C133.689 80.5607 133.675 80.6195 133.641 80.6666C133.383 81.0233 133.124 81.3735 132.871 81.7077C132.851 81.7347 132.824 81.7567 132.794 81.7718C132.764 81.7869 132.73 81.7948 132.696 81.7949H132.696ZM134.211 79.7057C134.171 79.7057 134.131 79.6947 134.097 79.6738C134.063 79.653 134.035 79.6232 134.016 79.5877C133.998 79.5521 133.989 79.5121 133.992 79.4721C133.994 79.4321 134.008 79.3936 134.031 79.3607C134.27 79.0184 134.515 78.661 134.759 78.2996C134.792 78.2514 134.843 78.2181 134.9 78.207C134.957 78.196 135.016 78.208 135.064 78.2406C135.112 78.2732 135.146 78.3237 135.157 78.3808C135.168 78.438 135.156 78.4972 135.123 78.5454C134.877 78.9086 134.632 79.2676 134.391 79.6121C134.371 79.641 134.344 79.6646 134.312 79.6809C134.281 79.6972 134.246 79.7057 134.211 79.7057L134.211 79.7057ZM135.656 77.5676C135.616 77.5675 135.577 77.5568 135.543 77.5365C135.509 77.5162 135.481 77.4872 135.463 77.4523C135.444 77.4175 135.435 77.3783 135.437 77.3387C135.438 77.2992 135.451 77.2609 135.472 77.2278C135.704 76.8737 135.94 76.5091 136.173 76.1442C136.204 76.0951 136.254 76.0605 136.311 76.0479C136.367 76.0354 136.427 76.0459 136.476 76.0772C136.525 76.1085 136.56 76.1581 136.572 76.2149C136.585 76.2717 136.574 76.3312 136.543 76.3803C136.309 76.7467 136.072 77.1129 135.839 77.4687C135.819 77.4991 135.792 77.524 135.76 77.5412C135.728 77.5585 135.692 77.5675 135.656 77.5675L135.656 77.5676ZM137.045 75.3907C137.006 75.3906 136.968 75.3801 136.934 75.3603C136.901 75.3404 136.873 75.3119 136.854 75.2777C136.835 75.2435 136.825 75.2048 136.826 75.1657C136.827 75.1266 136.839 75.0885 136.859 75.0553C137.082 74.6981 137.309 74.329 137.535 73.958C137.565 73.9083 137.614 73.8727 137.67 73.8589C137.727 73.8451 137.786 73.8544 137.836 73.8847C137.886 73.9149 137.922 73.9637 137.935 74.0203C137.949 74.0768 137.94 74.1365 137.909 74.1863C137.683 74.5584 137.455 74.9289 137.232 75.2872C137.212 75.3187 137.185 75.3447 137.152 75.3627C137.12 75.3807 137.083 75.3902 137.046 75.3901L137.045 75.3907ZM138.387 73.186C138.348 73.186 138.31 73.1757 138.277 73.1562C138.243 73.1366 138.216 73.1086 138.197 73.0749C138.177 73.0412 138.168 73.0031 138.168 72.9643C138.168 72.9256 138.179 72.8876 138.199 72.8543C138.421 72.482 138.639 72.112 138.853 71.7443C138.868 71.719 138.887 71.6968 138.91 71.679C138.933 71.6612 138.959 71.6481 138.987 71.6405C139.015 71.6329 139.044 71.631 139.073 71.6348C139.102 71.6386 139.13 71.6482 139.155 71.6628C139.18 71.6775 139.202 71.697 139.22 71.7202C139.237 71.7434 139.25 71.7698 139.257 71.798C139.264 71.8261 139.266 71.8554 139.261 71.8842C139.257 71.9129 139.247 71.9406 139.232 71.9655C139.017 72.3341 138.798 72.7053 138.576 73.0789C138.557 73.1115 138.529 73.1385 138.496 73.1572C138.463 73.176 138.426 73.1859 138.388 73.1859L138.387 73.186ZM139.689 70.9571C139.65 70.9571 139.612 70.9469 139.579 70.9277C139.546 70.9085 139.518 70.8809 139.499 70.8476C139.48 70.8143 139.469 70.7766 139.469 70.7381C139.469 70.6997 139.479 70.6619 139.498 70.6285C139.715 70.2499 139.927 69.8762 140.135 69.5075C140.149 69.4823 140.168 69.4601 140.19 69.4421C140.213 69.4242 140.239 69.411 140.267 69.4031C140.295 69.3953 140.324 69.393 140.352 69.3964C140.381 69.3998 140.409 69.4089 140.434 69.423C140.459 69.4372 140.481 69.4562 140.499 69.4789C140.517 69.5017 140.53 69.5277 140.538 69.5556C140.546 69.5834 140.548 69.6125 140.544 69.6412C140.541 69.6698 140.531 69.6975 140.517 69.7227C140.31 70.0919 140.097 70.4664 139.879 70.8462C139.86 70.8797 139.832 70.9075 139.799 70.9268C139.765 70.9461 139.728 70.9563 139.689 70.9563L139.689 70.9571ZM140.954 68.7072C140.916 68.7071 140.879 68.6971 140.846 68.6782C140.812 68.6592 140.785 68.632 140.765 68.5991C140.746 68.5662 140.736 68.5288 140.735 68.4907C140.735 68.4525 140.744 68.4149 140.763 68.3815C140.976 67.9953 141.182 67.6183 141.382 67.2507C141.41 67.1995 141.457 67.1615 141.513 67.145C141.569 67.1285 141.629 67.1349 141.68 67.1627C141.731 67.1905 141.769 67.2374 141.786 67.2932C141.802 67.3491 141.796 67.4091 141.768 67.4603C141.568 67.8284 141.361 68.2063 141.147 68.5938C141.128 68.6281 141.1 68.6566 141.066 68.6764C141.032 68.6962 140.994 68.7067 140.955 68.7066L140.954 68.7072ZM142.187 66.4383C142.15 66.4382 142.112 66.4283 142.079 66.4096C142.046 66.3909 142.019 66.364 142 66.3315C141.98 66.2989 141.969 66.262 141.968 66.2241C141.968 66.1862 141.976 66.1487 141.994 66.1153C142.206 65.7186 142.408 65.3387 142.598 64.9755C142.612 64.9494 142.63 64.9262 142.652 64.9072C142.674 64.8882 142.7 64.8738 142.727 64.8649C142.755 64.856 142.784 64.8527 142.814 64.8552C142.843 64.8577 142.871 64.866 142.897 64.8796C142.923 64.8932 142.945 64.9118 142.964 64.9343C142.982 64.9568 142.996 64.9828 143.005 65.0107C143.013 65.0386 143.016 65.068 143.013 65.097C143.01 65.126 143.001 65.1541 142.987 65.1796C142.796 65.5429 142.594 65.9237 142.381 66.3222C142.362 66.3571 142.335 66.3863 142.3 66.4067C142.266 66.427 142.227 66.4378 142.188 66.4378L142.187 66.4383ZM143.389 64.1512C143.351 64.1512 143.314 64.1415 143.282 64.123C143.249 64.1046 143.221 64.078 143.202 64.0458C143.182 64.0137 143.171 63.977 143.17 63.9394C143.169 63.9018 143.177 63.8645 143.194 63.831C143.413 63.4084 143.609 63.0235 143.782 62.6819C143.795 62.656 143.813 62.633 143.835 62.6141C143.857 62.5951 143.882 62.5807 143.91 62.5716C143.937 62.5626 143.966 62.559 143.995 62.5612C144.024 62.5633 144.052 62.5712 144.078 62.5842C144.104 62.5973 144.127 62.6154 144.146 62.6373C144.164 62.6593 144.179 62.6848 144.188 62.7123C144.196 62.7398 144.2 62.7688 144.198 62.7976C144.195 62.8265 144.187 62.8546 144.174 62.8803C144.001 63.2226 143.803 63.6088 143.584 64.0325C143.566 64.0681 143.538 64.098 143.504 64.1189C143.469 64.1397 143.43 64.1507 143.389 64.1507L143.389 64.1512Z'
									fill='white'
								/>
								<path
									d='M121.126 94.545C121.083 94.545 121.041 94.5326 121.005 94.5092C120.97 94.4858 120.942 94.4525 120.925 94.4134C120.907 94.3742 120.902 94.3309 120.909 94.2889C120.916 94.2468 120.936 94.2077 120.965 94.1764C121.116 94.0128 121.264 93.8517 121.407 93.6928C121.426 93.6708 121.449 93.6528 121.475 93.6399C121.501 93.627 121.53 93.6194 121.559 93.6176C121.588 93.6158 121.617 93.6198 121.644 93.6294C121.672 93.639 121.697 93.6539 121.719 93.6734C121.741 93.6929 121.758 93.7165 121.771 93.7429C121.783 93.7692 121.79 93.7978 121.791 93.8269C121.793 93.856 121.788 93.885 121.778 93.9124C121.768 93.9397 121.753 93.9648 121.733 93.9861C121.589 94.1467 121.44 94.3096 121.287 94.4747C121.266 94.4969 121.241 94.5146 121.214 94.5267C121.186 94.5388 121.156 94.5451 121.126 94.545Z'
									fill='white'
								/>
								<path
									d='M111.94 80.4218C111.903 80.4217 111.866 80.4122 111.833 80.394C111.801 80.3759 111.773 80.3497 111.754 80.318C111.734 80.2863 111.723 80.2501 111.721 80.2128C111.719 80.1755 111.727 80.1384 111.743 80.105C111.922 79.7435 112.019 79.5219 112.02 79.5198C112.043 79.4666 112.087 79.4249 112.141 79.4038C112.195 79.3826 112.255 79.3837 112.308 79.4068C112.361 79.43 112.403 79.4732 112.425 79.5271C112.446 79.5811 112.445 79.6413 112.422 79.6946C112.418 79.7039 112.321 79.9272 112.137 80.2995C112.119 80.3362 112.091 80.3671 112.056 80.3887C112.021 80.4103 111.981 80.4218 111.94 80.4218Z'
									fill='white'
								/>
								<path
									d='M101.318 90.9556C101.276 90.9556 101.234 90.9432 101.198 90.9199C101.163 90.8966 101.134 90.8634 101.117 90.8244C101.1 90.7854 101.095 90.7422 101.102 90.7002C101.109 90.6581 101.128 90.619 101.157 90.5877C101.47 90.2471 101.767 89.9112 102.041 89.5896C102.06 89.5673 102.082 89.5489 102.108 89.5354C102.134 89.5219 102.162 89.5137 102.191 89.5112C102.22 89.5087 102.249 89.512 102.277 89.5209C102.304 89.5297 102.33 89.544 102.352 89.5628C102.374 89.5816 102.392 89.6047 102.406 89.6306C102.419 89.6565 102.427 89.6847 102.429 89.7137C102.431 89.7427 102.427 89.7718 102.418 89.7993C102.409 89.8269 102.394 89.8523 102.375 89.8742C102.098 90.2 101.797 90.54 101.48 90.8846C101.459 90.907 101.434 90.9249 101.407 90.9372C101.379 90.9494 101.349 90.9557 101.318 90.9556ZM103.053 88.9093C103.012 88.9092 102.972 88.8978 102.937 88.8761C102.902 88.8545 102.874 88.8236 102.856 88.7868C102.838 88.7501 102.831 88.709 102.835 88.6683C102.839 88.6275 102.854 88.5887 102.879 88.5562C103.166 88.1819 103.425 87.8189 103.649 87.4777C103.665 87.4536 103.685 87.4328 103.709 87.4166C103.733 87.4004 103.76 87.389 103.788 87.3831C103.816 87.3772 103.845 87.377 103.873 87.3823C103.902 87.3877 103.929 87.3986 103.953 87.4144C103.977 87.4302 103.998 87.4505 104.014 87.4744C104.03 87.4982 104.041 87.5249 104.047 87.5532C104.053 87.5814 104.054 87.6105 104.048 87.6388C104.043 87.6671 104.032 87.6941 104.016 87.7182C103.787 88.0686 103.521 88.4405 103.227 88.8234C103.207 88.8501 103.18 88.8718 103.15 88.8867C103.12 88.9016 103.087 88.9093 103.053 88.9093ZM104.57 87.7114C104.514 87.7113 104.461 87.6899 104.42 87.6515C104.379 87.6132 104.355 87.5609 104.352 87.5052C104.348 87.4495 104.366 87.3946 104.402 87.3517C104.438 87.3088 104.488 87.2811 104.544 87.2742C104.968 87.2196 105.382 87.1069 105.776 86.9393C105.829 86.9168 105.89 86.9165 105.944 86.9385C105.997 86.9606 106.04 87.0031 106.063 87.0568C106.085 87.1105 106.086 87.1709 106.064 87.2248C106.042 87.2787 105.999 87.3216 105.945 87.3441C105.515 87.5271 105.061 87.6502 104.597 87.7099C104.588 87.7109 104.579 87.7114 104.57 87.7114ZM103.236 87.6665C103.222 87.6665 103.208 87.6652 103.194 87.6626C102.735 87.5716 102.29 87.4179 101.873 87.2056C101.821 87.1792 101.782 87.1335 101.764 87.0785C101.746 87.0234 101.751 86.9635 101.777 86.9117C101.803 86.86 101.848 86.8206 101.903 86.8022C101.958 86.7838 102.018 86.7878 102.07 86.8134C102.451 87.0075 102.857 87.1482 103.277 87.2316C103.331 87.2419 103.378 87.2718 103.411 87.3154C103.444 87.3591 103.459 87.4134 103.454 87.4677C103.449 87.5221 103.424 87.5725 103.383 87.6093C103.343 87.646 103.29 87.6664 103.236 87.6665ZM107.034 86.7134C106.987 86.7135 106.941 86.6985 106.903 86.6707C106.866 86.6429 106.838 86.6038 106.824 86.559C106.81 86.5143 106.811 86.4662 106.826 86.4219C106.841 86.3777 106.871 86.3395 106.909 86.313C107.269 86.0642 107.61 85.7899 107.93 85.4921C107.951 85.4725 107.975 85.4573 108.003 85.4473C108.03 85.4374 108.058 85.4328 108.087 85.4339C108.116 85.4351 108.144 85.4419 108.17 85.4539C108.197 85.466 108.22 85.4831 108.24 85.5043C108.259 85.5254 108.274 85.5502 108.284 85.5773C108.294 85.6043 108.299 85.6331 108.298 85.6619C108.297 85.6907 108.29 85.7189 108.278 85.7451C108.266 85.7713 108.249 85.7948 108.227 85.8144C107.892 86.1265 107.534 86.414 107.157 86.6746C107.121 86.6999 107.078 86.7134 107.033 86.7134H107.034ZM104.503 86.6564C104.466 86.6564 104.43 86.6469 104.397 86.6288C104.364 86.6107 104.337 86.5846 104.317 86.553C104.298 86.5214 104.286 86.4853 104.284 86.4481C104.282 86.4109 104.29 86.3739 104.306 86.3404C104.502 85.9592 104.647 85.5542 104.738 85.1357C104.749 85.0785 104.782 85.0281 104.831 84.9956C104.879 84.963 104.938 84.9509 104.995 84.962C105.052 84.973 105.103 85.0064 105.135 85.0546C105.168 85.1028 105.18 85.162 105.169 85.2192C105.07 85.6757 104.913 86.1175 104.701 86.5335C104.683 86.5704 104.654 86.6016 104.619 86.6233C104.584 86.6451 104.544 86.6565 104.503 86.6564H104.503ZM100.869 86.4737C100.811 86.4737 100.755 86.4507 100.714 86.4097C100.339 86.0359 100.148 85.6373 100.148 85.2238C100.148 85.1581 100.153 85.0924 100.163 85.0274C100.172 84.9698 100.203 84.918 100.25 84.8834C100.296 84.8488 100.355 84.8342 100.413 84.8429C100.47 84.8515 100.522 84.8826 100.557 84.9294C100.591 84.9762 100.606 85.0349 100.597 85.0924C100.591 85.136 100.587 85.18 100.587 85.2241C100.587 85.5162 100.734 85.8105 101.024 86.0991C101.055 86.1297 101.076 86.1688 101.084 86.2114C101.093 86.254 101.088 86.2982 101.072 86.3383C101.055 86.3785 101.027 86.4128 100.991 86.4369C100.955 86.4611 100.912 86.474 100.869 86.474V86.4737ZM109.012 84.9083C108.97 84.9083 108.929 84.8962 108.893 84.8733C108.858 84.8505 108.83 84.8179 108.812 84.7795C108.795 84.7411 108.789 84.6986 108.795 84.6569C108.801 84.6152 108.819 84.5761 108.847 84.5444C109.125 84.2269 109.404 83.8794 109.677 83.5115C109.712 83.4652 109.763 83.4346 109.821 83.4262C109.878 83.4179 109.936 83.4326 109.983 83.4671C110.029 83.5016 110.06 83.5531 110.069 83.6104C110.078 83.6677 110.064 83.7261 110.029 83.7729C109.75 84.1503 109.463 84.5071 109.177 84.8335C109.157 84.8571 109.131 84.876 109.103 84.8889C109.074 84.9019 109.043 84.9085 109.012 84.9083H109.012ZM101.122 84.2017C101.076 84.2017 101.031 84.1872 100.994 84.1603C100.956 84.1334 100.929 84.0954 100.914 84.0517C100.899 84.008 100.899 83.9608 100.913 83.9169C100.926 83.8729 100.954 83.8344 100.99 83.8067C101.374 83.5257 101.805 83.3156 102.262 83.1863C102.317 83.1716 102.376 83.1792 102.426 83.2074C102.476 83.2356 102.513 83.2822 102.529 83.3372C102.545 83.3922 102.539 83.4513 102.512 83.5018C102.485 83.5524 102.439 83.5904 102.384 83.6077C101.978 83.723 101.596 83.9091 101.254 84.1574C101.216 84.1862 101.17 84.2016 101.122 84.2014L101.122 84.2017ZM104.791 84.099C104.755 84.099 104.719 84.0899 104.686 84.0723C104.654 84.0548 104.627 84.0295 104.607 83.9987C104.372 83.6362 103.944 83.5165 103.625 83.48C103.596 83.477 103.568 83.4683 103.543 83.4544C103.518 83.4405 103.495 83.4217 103.477 83.3991C103.459 83.3765 103.445 83.3505 103.437 83.3226C103.429 83.2947 103.427 83.2655 103.43 83.2367C103.433 83.2079 103.442 83.18 103.457 83.1547C103.471 83.1293 103.49 83.1071 103.513 83.0891C103.535 83.0712 103.562 83.058 103.589 83.0503C103.617 83.0425 103.647 83.0404 103.675 83.044C104.267 83.1119 104.716 83.36 104.975 83.7604C104.997 83.7935 105.009 83.8318 105.01 83.8713C105.012 83.9107 105.003 83.9498 104.984 83.9845C104.965 84.0192 104.937 84.0481 104.903 84.0683C104.869 84.0884 104.831 84.099 104.791 84.099H104.791ZM110.616 82.756C110.576 82.756 110.538 82.7454 110.504 82.7252C110.47 82.7051 110.442 82.6762 110.423 82.6416C110.404 82.607 110.395 82.5679 110.397 82.5285C110.398 82.4891 110.41 82.4509 110.432 82.4177C110.667 82.0523 110.898 81.6691 111.12 81.2786C111.134 81.2533 111.153 81.2311 111.175 81.2132C111.198 81.1952 111.224 81.182 111.252 81.1742C111.28 81.1663 111.309 81.1641 111.338 81.1676C111.367 81.1711 111.394 81.1803 111.42 81.1945C111.445 81.2088 111.467 81.2279 111.485 81.2508C111.502 81.2736 111.516 81.2998 111.523 81.3277C111.531 81.3556 111.533 81.3848 111.529 81.4135C111.525 81.4422 111.516 81.4699 111.502 81.495C111.276 81.8926 111.04 82.283 110.801 82.6553C110.781 82.6864 110.753 82.7119 110.721 82.7296C110.688 82.7473 110.652 82.7565 110.615 82.7564L110.616 82.756Z'
									fill='white'
								/>
								<path
									d='M99.9265 92.4052C99.8832 92.4053 99.8408 92.3924 99.8047 92.3684C99.7686 92.3443 99.7405 92.3101 99.7239 92.2701C99.7072 92.23 99.7028 92.186 99.7112 92.1434C99.7195 92.1009 99.7403 92.0618 99.7709 92.031C99.9289 91.873 100.082 91.7175 100.231 91.5643C100.272 91.5226 100.328 91.4988 100.386 91.4981C100.444 91.4973 100.5 91.5197 100.542 91.5603C100.583 91.601 100.607 91.6565 100.608 91.7147C100.609 91.7729 100.586 91.829 100.546 91.8707C100.395 92.025 100.241 92.1818 100.081 92.3412C100.061 92.3615 100.037 92.3776 100.01 92.3886C99.9838 92.3996 99.9553 92.4053 99.9265 92.4052Z'
									fill='white'
								/>
							</svg>

							<div className={s.Form_Subtitle2}>
								<span>Проверьте свою почту</span>
							</div>

							<div className={s.Form_Description}>
								<span>
									Пройдите по ссылке отправленной на codelord@pen.com и задайте
									новый пароль
								</span>
							</div>

							<BaseButton
								title='На главную'
								type='blue'
								to_details
								icon_position='left'
								className={s.Form_Button2}
								onClick={() => router.push('/')}
							/>

							<Link
								href='/password-recovery-confirmation'
								className={s.Form_Register_Link}
							>
								Якобы переходим с почты(удалить)
							</Link>
						</div>
					</>
				)}
			</div>
		</BaseContainer>
	);
};

export default PasswordRecovery;

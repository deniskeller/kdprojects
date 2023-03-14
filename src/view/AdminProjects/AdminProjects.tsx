import { BaseButton, BaseContainer } from '@base/index';
import { ProjectCard } from 'components/content';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './AdminProjects.module.scss';

interface IValue {
	email: string;
	password: string;
}

const AdminProjects: React.FC = () => {
	const router = useRouter();

	const [empty, setEmpty] = useState(false);

	return (
		<BaseContainer className={s.BaseContainer}>
			<div className={s.AdminProjects}>
				{empty ? (
					<>
						<div className={s.Empty}>
							<svg
								width='623'
								height='312'
								viewBox='0 0 623 312'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={s.Empty_Image}
							>
								<ellipse
									cx='311.5'
									cy='171.5'
									rx='145.5'
									ry='105.5'
									fill='#EAEEF2'
								/>
								<path
									opacity='0.96'
									d='M312.069 208.446L252 173.846L309.408 108.639L312.069 208.446Z'
									fill='#3ABFF8'
								/>
								<path
									d='M374.136 172.515L314.066 137.915L419.862 115.292L374.136 172.515Z'
									fill='#E1E4E8'
								/>
								<path
									d='M309.018 94L309.408 108.638L319.389 97.3016'
									stroke='#65493C'
									stroke-width='0.5'
								/>
								<path
									opacity='0.96'
									d='M374.614 172.515L312.068 208.445L309.406 107.973L374.614 172.515Z'
									fill='#0284C5'
								/>
								<path
									d='M300.092 98.6572L309.407 107.878'
									stroke='#65493C'
									stroke-width='0.5'
								/>
								<path
									opacity='0.96'
									d='M356.649 182.556L329.844 197.8L328.703 155.175L356.649 182.556Z'
									fill='#0C4A6E'
								/>
								<path
									opacity='0.96'
									d='M356.649 182.556V169.854C356.649 169.854 354.653 169.874 349.995 168.523C345.338 167.172 328.703 155.175 328.703 155.175L356.649 182.556Z'
									fill='#3ABFF8'
								/>
								<path
									opacity='0.96'
									d='M318.723 185.823L329.844 197.8L328.703 155.175C328.703 155.175 326.993 172.499 325.044 178.483C323.095 184.468 318.723 185.823 318.723 185.823Z'
									fill='#3ABFF8'
								/>
								<path
									d='M220.944 131.499C239.688 107.242 299.46 82.1961 318.577 58.1829C333.859 38.9861 335.771 15.1097 322.844 4.87946C312.501 -3.30657 294.2 2.51057 281.972 17.8716C272.18 30.1707 270.958 45.438 279.24 51.9922C285.866 57.2353 297.569 53.5154 305.402 43.676C311.66 35.815 312.443 26.0325 307.15 21.8433C302.91 18.4883 295.416 20.8707 290.404 27.1665C286.391 32.2064 285.891 38.4557 289.285 41.1416C291.995 43.2866 296.798 41.76 300.002 37.7349'
									stroke='#D9E6EF'
									stroke-linecap='round'
								/>
								<path
									d='M388.861 208.116C436.28 172.285 484.932 144.745 497.305 132.11C507.198 122.009 509.702 108.437 502.897 101.811C497.452 96.5087 486.62 98.7628 478.704 106.845C472.367 113.317 470.765 121.995 475.125 126.24C478.613 129.636 485.54 128.195 490.61 123.018C494.661 118.882 495.687 113.321 492.901 110.608C490.669 108.434 486.233 109.358 482.989 112.67'
									stroke='#D9E6EF'
									stroke-linecap='round'
								/>
								<path
									d='M159 256C187 242.5 193.946 242.207 204.96 228.372C213.766 217.311 214.867 203.554 207.419 197.659C201.459 192.943 190.915 196.294 183.869 205.145C178.228 212.232 177.523 221.028 182.295 224.805C186.113 227.826 192.856 225.682 197.369 220.013'
									stroke='#D9E6EF'
									stroke-linecap='round'
								/>
								<ellipse cx='450' cy='78.5' rx='12' ry='8.5' fill='#EDF1F5' />
								<ellipse
									cx='497.5'
									cy='234.5'
									rx='37.5'
									ry='26.5'
									fill='#EDF1F5'
								/>
								<ellipse cx='148' cy='109.5' rx='29' ry='20.5' fill='#EDF1F5' />
								<ellipse cx='526.5' cy='167' rx='8.5' ry='6' fill='#EDF1F5' />
								<ellipse cx='405.5' cy='272' rx='8.5' ry='6' fill='#D7DEE4' />
								<ellipse cx='589.5' cy='283' rx='8.5' ry='6' fill='#EDF1F5' />
								<ellipse cx='84.5' cy='70.5' rx='6.5' ry='4.5' fill='#EDF1F5' />
								<ellipse cx='110.5' cy='254' rx='8.5' ry='6' fill='#EDF1F5' />
								<path
									d='M399.795 258.794C400.536 257.484 400.486 257.457 401.948 255.964C403.591 254.285 406.333 251.693 408.578 250.812C410.358 250.114 411.781 250.368 412.646 252.114C413.035 252.899 413.057 254.78 412.574 255.609C412.039 256.528 410.57 257.141 409.646 257.283C407.984 257.539 405.863 257.216 404.324 256.61C402.677 255.96 400.822 254.688 399.652 253.306C399.015 252.553 397.584 250.141 399.594 249.875C400.847 249.709 402.389 250.391 403.426 250.908C404.791 251.588 405.919 252.31 406.901 253.497C407.635 254.384 408.458 256.609 406.705 256.992C404.606 257.451 402.065 255.595 400.992 253.907C400.423 253.013 400.002 251.98 400.68 250.981C402.016 249.013 405.064 250.128 406.549 251.113C408.096 252.138 409.854 254.152 410.616 255.891C411.138 257.08 411.386 258.743 410.483 259.868C409.778 260.746 407.936 261.243 406.959 261.379C405.937 261.521 404.086 261.452 403.052 261.16C401.6 260.751 400.26 259.331 401.281 257.766C402.341 256.139 404.809 255.92 405.802 257.693C406.115 258.252 406.367 258.978 405.886 259.563C405.205 260.393 404.081 260.145 403.216 259.914C401.207 259.375 399.378 258.306 397.654 257.16C395.936 256.019 394.221 254.735 392.928 253.079C392.336 252.319 391.524 251.257 392.354 250.28C393.251 249.225 395.196 249.128 396.315 249.088C398.689 249.002 400.579 249.282 402.86 249.984C405.156 250.69 407.633 251.862 409.184 253.825C409.405 254.106 410.026 255.196 409.78 255.727C409.526 256.274 408.45 256.088 408.151 256.009C406.117 255.474 403.831 253.914 402.749 252.041C401.827 250.445 403.146 249.435 404.636 249.256C407.829 248.873 410.553 251.174 412.436 253.534C412.749 253.926 412.941 254.424 413.309 254.762C413.503 254.941 413.265 254.23 413.229 253.966C412.948 251.906 412.973 249.765 412.548 247.732C412.144 245.804 410.533 245.283 408.779 245.06C406.049 244.713 402.476 244.859 401.254 247.873C400.536 249.645 400.173 252.509 401.343 254.189C402.491 255.837 404.344 255.225 405.499 253.989C406.218 253.22 406.966 251.917 407.466 250.985C407.717 250.518 407.819 249.958 408.151 249.547C408.314 249.346 408.178 250.07 408.151 250.33C408.001 251.806 407.703 253.254 407.021 254.58C406.163 256.248 404.595 257.705 402.629 256.96C400.7 256.23 398.321 253.396 400.075 251.308C401.152 250.026 402.893 249.772 404.413 249.679C406.806 249.533 408.871 249.878 411.142 250.676C413.319 251.441 414.778 252.245 416.397 253.87C417.023 254.499 416.242 255.835 415.213 256.96C414.802 257.41 416.03 258.245 415.547 258.257C414.581 258.281 413.443 258.047 412.539 257.72C411.374 257.3 410.514 256.612 409.557 255.873C409.235 255.623 409.307 256.659 409.193 257.056C408.971 257.822 408.681 258.605 408.32 259.313C407.981 259.978 407.42 261.091 406.656 261.388C406.266 261.54 405.756 261.044 406.149 260.719C406.522 260.411 407.191 260.638 407.088 261.21C406.811 262.752 404.025 262.003 403.234 261.72C402.053 261.297 401.275 260.805 400.337 259.982C399.896 259.594 398.641 258.499 399.812 258.02C400.42 257.772 402.355 257.54 402.856 257.52C404.136 257.469 405.582 257.564 406.807 257.993C407.697 258.305 408.855 259.009 409.46 259.795C409.773 260.203 410.109 261.046 409.7 261.561C409.259 262.115 407.812 262.455 407.279 262.471C405.788 262.515 404.168 262.067 402.954 261.16C401.571 260.128 400.296 258.328 399.901 256.601C399.442 254.592 400.254 252.471 402.255 251.85C404.698 251.092 406.651 253.257 407.39 255.386C408.32 258.062 407.49 260.422 404.854 261.515C401.874 262.751 398.772 261.901 396.626 259.499C394.198 256.782 393.18 252.168 396.511 249.675C398.505 248.182 401.925 247.679 404.164 248.892C404.737 249.202 405.395 249.959 405.054 250.721C404.679 251.561 403.399 251.993 402.634 252.005C399.809 252.047 397.02 249.843 395.754 247.372C395.507 246.89 395.169 245.882 395.727 245.379C396.769 244.44 399.11 244.793 400.257 245.047C402.239 245.484 404.431 246.557 405.219 248.614C405.568 249.527 405.097 250.388 404.106 249.807C403.707 249.573 403.283 249.183 403.439 248.623C403.668 247.799 404.622 247.511 405.286 247.313C406.491 246.953 407.801 246.843 409.05 246.881C410.246 246.916 412.035 247.076 412.806 248.237C414.469 250.739 407.67 253.231 406.718 249.484C406.208 247.475 408.432 246.469 409.985 246.38C412.817 246.218 415.063 248.263 415.213 251.167C415.321 253.242 413.677 254.212 411.809 254.116C410.66 254.057 409.867 253.75 408.912 253.115C408.729 252.993 406.748 251.541 408.027 251.104C409.802 250.496 412.043 251.949 412.913 253.443C414.028 255.359 413.619 257.764 411.538 258.648C411.45 258.686 409.453 259.07 409.446 259.163C409.422 259.513 410.344 259.876 410.443 260.291C410.655 261.178 409.058 261.943 408.512 262.225C407.639 262.676 406.803 262.802 405.891 263.053C405.865 263.061 405.937 263.102 405.926 263.126C405.856 263.287 405.508 263.397 405.428 263.418M405.428 263.418C403.675 263.869 401.642 263.606 399.981 262.926C398.683 262.395 396.441 261.034 397.445 259.24C397.89 258.446 399.097 257.579 399.821 257.183C400.859 256.616 402.732 255.765 403.942 256.391C404.508 256.684 404.529 257.197 404.298 257.725C403.969 258.476 403.412 258.83 402.607 258.953C399.972 259.358 397.238 257.328 395.643 255.395C394.65 254.191 393.421 252.006 394.726 250.557C395.498 249.701 397.364 249.137 398.433 249.711C398.77 249.892 398.821 250.49 398.646 250.02C398.206 248.834 398.374 247.408 398.824 246.253C399.149 245.421 399.785 244.6 400.693 244.423C401.331 244.299 401.988 244.755 401.922 245.465C401.886 245.842 401.564 245.307 401.601 245.101C401.76 244.228 403.204 244.352 403.786 244.405C404.263 244.449 406.324 244.686 406.349 245.502C406.358 245.803 405.833 245.93 405.699 245.966C405.097 246.126 404.414 246.091 404.022 245.506C403.456 244.662 403.782 243.433 404.752 243.085C405.997 242.639 406.797 244.037 406.923 245.097C407.057 246.215 406.133 246.897 405.125 246.416C404.151 245.952 403.347 243.995 404.952 243.85C406.575 243.703 408.397 244.637 409.718 245.493C409.891 245.605 412.116 247.012 411.239 247.55C410.841 247.794 409.634 247.853 409.295 247.454C409.173 247.31 409.649 247.28 409.833 247.304C411.074 247.462 412.418 248.169 413.34 249.01C414.064 249.671 414.946 250.751 414.862 251.868C414.778 252.982 413.78 253.815 412.948 254.316C412.263 254.729 411.216 255.012 410.421 255.181C410.218 255.224 409.631 255.161 409.807 255.272C410.225 255.537 410.561 255.487 410.385 256.218C410.082 257.476 409.101 258.247 408.294 259.144C408.186 259.264 408.591 259.029 408.739 258.967C409.47 258.662 410.003 258.471 410.777 258.207C411.16 258.076 412.114 257.752 412.601 257.652C412.777 257.616 412.944 257.554 412.877 257.77C412.798 258.025 412.338 258.672 412.009 258.512C411.678 258.351 411.57 257.766 411.533 257.497C411.369 256.307 411.715 255.137 412.744 254.435C413.989 253.585 414.345 252.801 415.213 254.316C416.063 255.8 415.325 257.657 413.941 258.448C412.645 259.188 412.899 259.68 411.489 259.504C410.572 259.39 410.994 259.288 410.937 260.05C410.853 261.181 409.813 261.704 408.886 262.043C408.373 262.231 406.756 262.514 407.288 262.394C407.476 262.351 408.122 262.268 408.214 262.517C408.462 263.188 406.832 264.365 406.425 264.655C406.343 264.713 402.653 264.926 402.665 264.928C403.392 265.054 404.156 265.064 404.854 265.347C404.913 265.371 407.891 264.89 407.84 264.928C407.721 265.017 407.933 263.49 407.786 263.499C407.136 263.542 406.036 263.494 405.428 263.418ZM405.428 263.418C403.762 263.207 401.714 265.182 400.542 263.914C400.375 263.733 400.035 263.407 400.035 263.113C400.035 263.069 400.042 263.091 399.977 263.099C399.735 263.128 399.694 263.141 399.398 263.017C398.261 262.54 397.33 261.488 396.786 260.382C396.4 259.596 396.297 258.649 397.356 258.512C397.409 258.505 399.018 258.624 398.673 258.94C398.06 259.501 396.486 258.912 395.914 258.612C395.774 258.538 394.936 257.989 394.891 257.684C394.819 257.202 395.67 257.062 396.137 256.965C397.454 256.69 400.194 256.425 401.361 256.355C404.316 256.178 407.574 255.976 410.474 256.774C412.001 257.194 413.26 258.393 412.258 260.018C411.488 261.269 409.796 262.418 408.343 262.567C407.499 262.653 406.799 261.77 407.84 261.311C408.627 260.963 409.635 260.932 410.456 260.96C411.603 260.999 413.336 259.976 414.212 260.915C415.273 262.052 412.256 262.825 411.809 262.926C410.04 263.325 408.245 264.364 406.447 264.364C406.062 264.364 405.988 264.392 405.722 264.528'
									stroke='#98988C'
									stroke-width='0.5'
									stroke-linecap='round'
								/>
								<path
									d='M390.5 266C380.5 268 373.987 279.513 372 292C357 284 343 294.5 333 311'
									stroke='#E3E3E3'
									stroke-width='0.5'
								/>
							</svg>

							<div className={s.Empty_Title}>
								<span>Нет проектов</span>
							</div>

							<div className={s.Empty_Subtitle}>
								<span>
									Вы или пользователи пока не предложили ни одного проекта.
								</span>
							</div>

							<BaseButton
								title='Предложить проект'
								type='blue'
								className={s.Empty_Button}
							/>
						</div>
					</>
				) : (
					<>
						<div className={s.Projects}>
							<div className={s.Projects_Navbar}>
								<div className={s.Projects_Navbar_Tabs}></div>

								<BaseButton
									title='Добавить проект'
									type='blue'
									className={s.Projects_Navbar_Button}
								/>
							</div>

							<div className={s.Projects_List}>
								<ProjectCard />
								<ProjectCard />
								<ProjectCard />
								<ProjectCard />
							</div>

							<BaseButton
								title='Показать ещё'
								type='white'
								className={s.Projects_Button}
							/>
						</div>
					</>
				)}
			</div>
		</BaseContainer>
	);
};

export default AdminProjects;

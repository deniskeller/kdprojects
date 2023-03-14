export enum OthersIcons {
	LOGO = 'LOGO',
	CHEVERON = 'CHEVERON',
	CHECKBOX_TICK = 'CHECKBOX_TICK',
	TOOLTIP = 'TOOLTIP',
	LOCATION_MARKER = 'LOCATION_MARKER',
	DOCUMENT = 'DOCUMENT',
	MAIL = 'MAIL',
	GLOBE = 'GLOBE',
	VK = 'VK',
	ADD_PROJECT = 'ADD_PROJECT',
}

export const othersIcons = {
	[OthersIcons.LOGO]: (
		<>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M299.123 3.51562C300.094 3.51562 300.881 4.30256 300.881 5.27329V10.5463C300.881 11.517 300.094 12.304 299.123 12.304C298.152 12.304 297.366 11.517 297.366 10.5463V5.27329C297.366 4.30256 298.152 3.51562 299.123 3.51562ZM284.209 9.69332C284.895 9.00691 286.008 9.00691 286.695 9.69332L290.423 13.4219C291.11 14.1083 291.11 15.2212 290.423 15.9076C289.737 16.594 288.624 16.594 287.938 15.9076L284.209 12.179C283.523 11.4926 283.523 10.3797 284.209 9.69332ZM314.038 9.69332C314.724 10.3797 314.724 11.4926 314.038 12.179L310.309 15.9076C309.623 16.594 308.51 16.594 307.823 15.9076C307.137 15.2212 307.137 14.1083 307.823 13.4219L311.552 9.69332C312.238 9.00691 313.351 9.00691 314.038 9.69332ZM298.065 20.2294C298.796 20.0335 299.57 20.3273 299.987 20.9587L312.237 39.5123C312.628 40.1056 312.624 40.8763 312.226 41.4653C311.828 42.0542 311.114 42.3452 310.418 42.2027L305.502 41.197L307.951 50.3344C308.202 51.2721 307.646 52.2359 306.708 52.4871C305.77 52.7383 304.807 52.1819 304.555 51.2442L302.107 42.107L298.354 45.4351C297.822 45.9068 297.058 46.0117 296.419 45.7007C295.78 45.3898 295.391 44.7244 295.433 44.0148L296.765 21.8218C296.811 21.0666 297.334 20.4252 298.065 20.2294ZM278.031 24.6076C278.031 23.6369 278.818 22.8499 279.789 22.8499H285.062C286.033 22.8499 286.82 23.6369 286.82 24.6076C286.82 25.5783 286.033 26.3653 285.062 26.3653H279.789C278.818 26.3653 278.031 25.5783 278.031 24.6076ZM311.427 24.6076C311.427 23.6369 312.214 22.8499 313.185 22.8499H318.458C319.428 22.8499 320.215 23.6369 320.215 24.6076C320.215 25.5783 319.428 26.3653 318.458 26.3653H313.185C312.214 26.3653 311.427 25.5783 311.427 24.6076ZM290.423 33.3076C291.11 33.994 291.11 35.1069 290.423 35.7933L286.695 39.5219C286.008 40.2083 284.895 40.2083 284.209 39.5219C283.523 38.8355 283.523 37.7226 284.209 37.0362L287.938 33.3076C288.624 32.6212 289.737 32.6212 290.423 33.3076Z'
				fill='#075783'
			/>
			<path
				d='M3.32931 12.4501H8.70742V42.6699H3.32931V12.4501ZM22.7599 17.1452H13.4976V12.4501H37.4004V17.1452H28.138V42.6699H22.7599V17.1452ZM46.9834 34.3467H36.7394V29.9929H46.9834V34.3467ZM77.3447 12.4501V42.6699H72.0093V17.0599H58.8628V42.6699H53.5274V12.4501H77.3447ZM85.695 12.4501H95.5975C97.191 12.4501 98.6707 12.6208 100.037 12.9623C101.402 13.2753 102.569 13.7875 103.537 14.4989C104.533 15.2102 105.301 16.1208 105.842 17.2306C106.411 18.3119 106.695 19.6351 106.695 21.2002C106.695 22.7652 106.396 24.1169 105.799 25.2551C105.23 26.3649 104.433 27.2754 103.409 27.9868C102.413 28.6982 101.232 29.2246 99.8659 29.5661C98.5 29.8791 97.0345 30.0356 95.4695 30.0356H91.0304V42.6699H85.695V12.4501ZM91.0304 25.7246H95.0853C95.9959 25.7246 96.8354 25.6392 97.6037 25.4685C98.372 25.2978 99.0264 25.0274 99.5671 24.6575C100.136 24.2876 100.563 23.8181 100.848 23.249C101.161 22.6798 101.317 21.9969 101.317 21.2002C101.317 20.3749 101.161 19.692 100.848 19.1514C100.535 18.5822 100.108 18.127 99.5671 17.7855C99.0264 17.444 98.372 17.2021 97.6037 17.0599C96.8638 16.9176 96.0528 16.8464 95.1707 16.8464H91.0304V25.7246ZM143.843 27.4746C143.843 29.8364 143.43 31.9991 142.605 33.9625C141.808 35.8975 140.684 37.5764 139.233 38.9991C137.81 40.4219 136.103 41.5317 134.111 42.3285C132.148 43.0968 130.013 43.4809 127.708 43.4809C125.404 43.4809 123.269 43.0968 121.306 42.3285C119.343 41.5317 117.635 40.4219 116.184 38.9991C114.733 37.5764 113.594 35.8975 112.769 33.9625C111.973 31.9991 111.574 29.8364 111.574 27.4746C111.574 25.1128 111.973 22.9644 112.769 21.0294C113.594 19.066 114.733 17.4013 116.184 16.0355C117.635 14.6411 119.343 13.5598 121.306 12.7915C123.269 12.0232 125.404 11.6391 127.708 11.6391C130.013 11.6391 132.148 12.0232 134.111 12.7915C136.103 13.5598 137.81 14.6411 139.233 16.0355C140.684 17.4013 141.808 19.066 142.605 21.0294C143.43 22.9644 143.843 25.1128 143.843 27.4746ZM138.123 27.4746C138.123 25.9665 137.881 24.5437 137.398 23.2063C136.914 21.8689 136.217 20.7022 135.306 19.7062C134.396 18.7103 133.3 17.9278 132.02 17.3586C130.739 16.7611 129.302 16.4623 127.708 16.4623C126.115 16.4623 124.678 16.7611 123.397 17.3586C122.117 17.9278 121.021 18.7103 120.111 19.7062C119.2 20.7022 118.503 21.8689 118.019 23.2063C117.536 24.5437 117.294 25.9665 117.294 27.4746C117.294 29.0112 117.536 30.4625 118.019 31.8283C118.532 33.1942 119.229 34.3751 120.111 35.3711C121.021 36.367 122.117 37.1638 123.397 37.7613C124.678 38.3304 126.115 38.615 127.708 38.615C129.274 38.615 130.696 38.3304 131.977 37.7613C133.286 37.1638 134.381 36.367 135.263 35.3711C136.174 34.3751 136.871 33.1942 137.355 31.8283C137.867 30.4625 138.123 29.0112 138.123 27.4746ZM155.905 38.0601H170.929V42.6699H150.697V12.4501H170.289V17.0599H155.905V24.9136H169.393V29.31H155.905V38.0601ZM177.571 42.6699V12.4501H182.906V24.2734C183.476 24.2734 184.03 24.3018 184.571 24.3587C185.112 24.3872 185.652 24.4299 186.193 24.4868L196.437 12.4501H202.285L191.486 25.7246C194.531 26.9197 196.964 28.8832 198.785 31.6149C200.634 34.3467 201.958 38.0317 202.754 42.6699H196.907C196.451 40.2512 195.854 38.1597 195.114 36.3955C194.403 34.6312 193.492 33.18 192.382 32.0417C191.272 30.9035 189.935 30.0783 188.37 29.5661C186.805 29.0539 184.984 28.8263 182.906 28.8832V42.6699H177.571ZM220.303 42.6699H214.924V17.0599H205.662V12.4501H229.565V17.0599H220.303V42.6699ZM240.072 12.4501V24.0599H243.487C245.137 24.0599 246.66 24.2449 248.054 24.6148C249.477 24.9848 250.7 25.5539 251.725 26.3222C252.778 27.062 253.589 28.0153 254.158 29.182C254.755 30.3202 255.054 31.6718 255.054 33.2369C255.054 34.8019 254.755 36.182 254.158 37.3772C253.56 38.5439 252.735 39.5256 251.682 40.3223C250.658 41.0906 249.434 41.674 248.011 42.0724C246.589 42.4707 245.052 42.6699 243.402 42.6699H234.737V12.4501H240.072ZM240.072 38.1028H243.7C245.778 38.1028 247.286 37.7044 248.225 36.9077C249.164 36.1109 249.633 34.9015 249.633 33.2796C249.633 31.9137 249.15 30.8039 248.182 29.9503C247.243 29.0681 245.749 28.6271 243.7 28.6271H240.072V38.1028ZM262.823 12.4501V42.6699H257.487V12.4501H262.823ZM2.71345 84.6699V63.0843H5.6708V71.9259C6.15861 71.9259 6.62609 71.9462 7.07325 71.9868C7.54074 72.0072 7.99806 72.0377 8.44522 72.0783L16.2502 63.0843H19.4819L11.4635 72.7795C13.8416 73.5926 15.7014 74.9747 17.0429 76.9259C18.3844 78.8772 19.3193 81.4585 19.8478 84.6699H16.5856C16.2807 82.8813 15.8437 81.3365 15.2746 80.0357C14.7258 78.7349 14.0144 77.678 13.1404 76.865C12.2664 76.0316 11.2095 75.432 9.96963 75.0662C8.7501 74.68 7.31716 74.5072 5.6708 74.5479V84.6699H2.71345ZM25.5267 84.6699H22.2949L31.5633 63.0843H34.4292L43.6367 84.6699H40.3134L38.1183 79.365H27.6913L25.5267 84.6699ZM28.667 76.804H37.1427L32.9353 66.377L28.667 76.804ZM47.9669 84.6699H44.7657L53.8511 63.0843H56.8085L65.894 84.6699H62.6317L55.2841 66.9563L47.9669 84.6699ZM72.1912 80.4321L83.8377 63.0843H87.3743V84.6699H84.4169V67.2307H84.356L72.7095 84.6699H69.1729V63.0843H72.1302V80.4321H72.1912ZM93.7277 63.0843H96.6851V72.1393H107.6V63.0843H110.557V84.6699H107.6V74.7613H96.6851V84.6699H93.7277V63.0843ZM119.931 80.4321L131.578 63.0843H135.114V84.6699H132.157V67.2307H132.096L120.45 84.6699H116.913V63.0843H119.87V80.4321H119.931ZM141.468 63.0843H144.425V72.1393H155.34V63.0843H158.297V84.6699H155.34V74.7613H144.425V84.6699H141.468V63.0843ZM167.611 84.6699H164.653V63.0843H177.245V65.7063H167.611V84.6699ZM181.556 63.0843H188.111C189.229 63.0843 190.256 63.2063 191.191 63.4502C192.125 63.6737 192.928 64.0294 193.599 64.5173C194.27 65.0051 194.788 65.625 195.154 66.377C195.52 67.1291 195.703 68.0234 195.703 69.06C195.703 70.0966 195.51 71.0011 195.123 71.7734C194.737 72.5255 194.199 73.1556 193.508 73.6637C192.837 74.1515 192.024 74.5174 191.069 74.7613C190.134 75.0052 189.117 75.1271 188.02 75.1271H184.514V84.6699H181.556V63.0843ZM184.514 72.6881H187.837C189.361 72.6881 190.55 72.3934 191.404 71.8039C192.278 71.2145 192.715 70.31 192.715 69.0905C192.715 67.8303 192.278 66.9258 191.404 66.377C190.53 65.8282 189.351 65.5538 187.867 65.5538H184.514V72.6881ZM201.243 84.6699H198.012L207.28 63.0843H210.146L219.353 84.6699H216.03L213.835 79.365H203.408L201.243 84.6699ZM204.384 76.804H212.859L208.652 66.377L204.384 76.804ZM223.043 84.6699V88.9078H220.33V82.0479H223.257L230.421 63.0843H233.287L240.361 82.0479H243.348V88.9078H240.604V84.6699H223.043ZM226.275 82.0479H237.281L231.763 66.4075L226.275 82.0479ZM247.584 84.6699H244.352L253.621 63.0843H256.487L265.694 84.6699H262.371L260.176 79.365H249.749L247.584 84.6699ZM250.724 76.804H259.2L254.993 66.377L250.724 76.804Z'
				fill='#075783'
			/>
		</>
	),

	[OthersIcons.CHEVERON]: (
		<>
			<path
				d='M19 9L12 16L5 9'
				stroke='#111827'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[OthersIcons.CHECKBOX_TICK]: (
		<>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M13.3851 0.496566C13.9392 -0.119199 14.8877 -0.169117 15.5034 0.385072C16.1192 0.93926 16.1691 1.88769 15.6149 2.50346L6.61494 12.5035C6.04003 13.1422 5.04703 13.1684 4.43934 12.5607L0.43934 8.56067C-0.146447 7.97489 -0.146447 7.02514 0.43934 6.43935C1.02513 5.85357 1.97487 5.85357 2.56066 6.43935L5.44271 9.3214L13.3851 0.496566Z'
				fill='#1A1A1A'
			/>
		</>
	),

	[OthersIcons.TOOLTIP]: (
		<>
			<circle cx='8' cy='8' r='6' stroke='#9CA3B0' />
			<path
				d='M8.33317 4.99935C8.33317 5.18344 8.18393 5.33268 7.99984 5.33268C7.81574 5.33268 7.6665 5.18344 7.6665 4.99935C7.6665 4.81525 7.81574 4.66602 7.99984 4.66602C8.18393 4.66602 8.33317 4.81525 8.33317 4.99935Z'
				fill='#9CA3B0'
				stroke='#9CA3B0'
			/>
			<path d='M8 11.3327V6.66602' stroke='#9CA3B0' />
		</>
	),

	[OthersIcons.LOCATION_MARKER]: (
		<>
			<path
				d='M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z'
				stroke='#6B7280'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z'
				stroke='#6B7280'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[OthersIcons.DOCUMENT]: (
		<>
			<path
				d='M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z'
				stroke='#6B7280'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[OthersIcons.MAIL]: (
		<>
			<path
				d='M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z'
				stroke='#6B7280'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[OthersIcons.GLOBE]: (
		<>
			<path
				d='M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3'
				stroke='#6B7280'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[OthersIcons.VK]: (
		<>
			<mask id='path-1-inside-1_7368_184764' fill='white'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3.40333 3.40333C2 4.80667 2 7.066 2 11.5833V12.4167C2 16.9333 2 19.1933 3.40333 20.5967C4.80667 22 7.066 22 11.5833 22H12.4167C16.9333 22 19.1933 22 20.5967 20.5967C22 19.1933 22 16.934 22 12.4167V11.5833C22 7.06667 22 4.80667 20.5967 3.40333C19.1933 2 16.934 2 12.4167 2H11.5833C7.06667 2 4.80667 2 3.40333 3.40333ZM5.95866 8.25H7.41666C7.78933 8.25 7.92933 8.41333 8.06933 8.81733C8.78266 10.8947 9.98532 12.7107 10.4793 12.7107C10.6653 12.7107 10.75 12.6253 10.75 12.154V10.0067C10.7166 9.39538 10.503 9.13096 10.3449 8.93511C10.2472 8.81421 10.1707 8.71944 10.1707 8.58533C10.1707 8.422 10.31 8.25 10.5413 8.25H12.8333C13.1427 8.25 13.25 8.41533 13.25 8.786V11.6753C13.25 11.984 13.384 12.0927 13.4767 12.0927C13.662 12.0927 13.8167 11.984 14.1567 11.644C15.2073 10.47 15.9487 8.66267 15.9487 8.66267C16.0413 8.446 16.2127 8.25 16.5833 8.25H18.0413C18.4827 8.25 18.576 8.47733 18.4827 8.786C18.2973 9.636 16.5207 12.1387 16.5207 12.1387C16.366 12.386 16.304 12.5093 16.5207 12.7873C16.5971 12.8944 16.7602 13.0543 16.9467 13.2371C17.1375 13.4241 17.3527 13.6351 17.5247 13.838C18.1513 14.5427 18.6233 15.1373 18.7547 15.5467C18.8753 15.958 18.6667 16.1667 18.25 16.1667H16.7913C16.4008 16.1667 16.2043 15.948 15.7794 15.475C15.5994 15.2746 15.3783 15.0285 15.084 14.734C14.218 13.9 13.848 13.792 13.6313 13.792C13.338 13.792 13.25 13.8753 13.25 14.292V15.6C13.25 15.958 13.1353 16.1667 12.208 16.1667C10.6633 16.1667 8.96532 15.2287 7.76066 13.498C5.95266 10.9647 5.45866 9.04867 5.45866 8.66267C5.45866 8.446 5.54199 8.25 5.95866 8.25Z'
				/>
			</mask>
			<path
				d='M3.40333 20.5967L2.69623 21.3038L2.69623 21.3038L3.40333 20.5967ZM20.5967 20.5967L21.3038 21.3038L21.3038 21.3038L20.5967 20.5967ZM20.5967 3.40333L21.3038 2.69623L21.3038 2.69623L20.5967 3.40333ZM8.06933 8.81733L9.01512 8.49256L9.0142 8.4899L8.06933 8.81733ZM10.75 10.0067H11.75V9.97938L11.7485 9.95213L10.75 10.0067ZM10.3449 8.93511L9.56691 9.56344L9.56691 9.56345L10.3449 8.93511ZM14.1567 11.644L14.8638 12.3511L14.8834 12.3315L14.9018 12.3109L14.1567 11.644ZM15.9487 8.66267L15.0292 8.26943L15.0263 8.27628L15.0235 8.28317L15.9487 8.66267ZM18.4827 8.786L17.5255 8.49656L17.514 8.53437L17.5056 8.57297L18.4827 8.786ZM16.5207 12.1387L15.7052 11.5598L15.6883 11.5837L15.6728 11.6085L16.5207 12.1387ZM16.5207 12.7873L17.3346 12.2063L17.3223 12.1892L17.3094 12.1726L16.5207 12.7873ZM16.9467 13.2371L16.2468 13.9513L16.2468 13.9513L16.9467 13.2371ZM17.5247 13.838L16.7617 14.4844L16.7694 14.4936L16.7774 14.5025L17.5247 13.838ZM18.7547 15.5467L19.7142 15.2652L19.7107 15.2531L19.7068 15.2412L18.7547 15.5467ZM15.7794 15.475L15.0355 16.1433L15.0355 16.1433L15.7794 15.475ZM15.084 14.734L15.7913 14.0271L15.7846 14.0204L15.7777 14.0137L15.084 14.734ZM7.76066 13.498L8.58146 12.9267L8.57462 12.9171L7.76066 13.498ZM3 11.5833C3 9.2964 3.00212 7.68162 3.1665 6.45881C3.32702 5.26472 3.62558 4.5953 4.11044 4.11044L2.69623 2.69623C1.77775 3.6147 1.37465 4.77661 1.18433 6.19235C0.997877 7.57938 1 9.35293 1 11.5833H3ZM3 12.4167V11.5833H1V12.4167H3ZM4.11044 19.8896C3.62561 19.4047 3.32703 18.7352 3.1665 17.5409C3.00212 16.318 3 14.7033 3 12.4167H1C1 14.6467 0.997877 16.4203 1.18433 17.8074C1.37464 19.2232 1.77773 20.3853 2.69623 21.3038L4.11044 19.8896ZM11.5833 21C9.2964 21 7.68162 20.9979 6.45881 20.8335C5.26472 20.673 4.5953 20.3744 4.11044 19.8896L2.69623 21.3038C3.6147 22.2222 4.77661 22.6254 6.19235 22.8157C7.57938 23.0021 9.35293 23 11.5833 23V21ZM12.4167 21H11.5833V23H12.4167V21ZM19.8896 19.8896C19.4047 20.3744 18.7352 20.673 17.5409 20.8335C16.318 20.9979 14.7033 21 12.4167 21V23C14.6467 23 16.4203 23.0021 17.8074 22.8157C19.2232 22.6254 20.3853 22.2223 21.3038 21.3038L19.8896 19.8896ZM21 12.4167C21 14.7036 20.9979 16.3184 20.8335 17.5412C20.673 18.7353 20.3744 19.4047 19.8896 19.8896L21.3038 21.3038C22.2222 20.3853 22.6254 19.2234 22.8157 17.8076C23.0021 16.4206 23 14.6471 23 12.4167H21ZM21 11.5833V12.4167H23V11.5833H21ZM19.8896 4.11044C20.3744 4.59527 20.673 5.26483 20.8335 6.45905C20.9979 7.68195 21 9.29674 21 11.5833H23C23 9.35326 23.0021 7.57972 22.8157 6.19261C22.6254 4.77684 22.2223 3.61473 21.3038 2.69623L19.8896 4.11044ZM12.4167 3C14.7036 3 16.3184 3.00212 17.5412 3.1665C18.7353 3.32702 19.4047 3.62558 19.8896 4.11044L21.3038 2.69623C20.3853 1.77775 19.2234 1.37465 17.8076 1.18433C16.4206 0.997877 14.6471 1 12.4167 1V3ZM11.5833 3H12.4167V1H11.5833V3ZM4.11044 4.11044C4.59527 3.62561 5.26483 3.32703 6.45905 3.1665C7.68195 3.00212 9.29674 3 11.5833 3V1C9.35326 1 7.57972 0.997877 6.19261 1.18433C4.77684 1.37464 3.61473 1.77773 2.69623 2.69623L4.11044 4.11044ZM7.41666 7.25H5.95866V9.25H7.41666V7.25ZM9.0142 8.4899C8.9367 8.26626 8.80172 7.91763 8.50801 7.64689C8.16311 7.32897 7.75632 7.25 7.41666 7.25V9.25C7.44016 9.25 7.41015 9.25302 7.35197 9.23444C7.28484 9.213 7.21319 9.17341 7.15248 9.11744C7.09787 9.06711 7.077 9.02635 7.07919 9.03044C7.08274 9.03706 7.09783 9.06795 7.12445 9.14477L9.0142 8.4899ZM10.4793 11.7107C10.5997 11.7107 10.6888 11.7377 10.7358 11.7557C10.7836 11.774 10.8099 11.7912 10.8132 11.7934C10.817 11.7959 10.785 11.7742 10.7183 11.7042C10.5869 11.5665 10.4077 11.334 10.2016 11.0083C9.79309 10.3627 9.34736 9.46011 9.01512 8.49256L7.12353 9.14211C7.50462 10.2519 8.0169 11.296 8.51154 12.0777C8.75702 12.4657 9.01575 12.817 9.27108 13.0847C9.39773 13.2175 9.5463 13.3538 9.71316 13.4637C9.86153 13.5614 10.1319 13.7107 10.4793 13.7107V11.7107ZM9.74999 12.154C9.74999 12.2474 9.74544 12.2878 9.74434 12.2954C9.74234 12.3091 9.75023 12.2319 9.80948 12.1248C9.88253 11.9928 10.0098 11.8591 10.1892 11.7783C10.3405 11.7101 10.4625 11.7107 10.4793 11.7107V13.7107C10.5892 13.7107 10.7915 13.7006 11.0109 13.6017C11.2585 13.4901 11.4419 13.3056 11.5593 13.0933C11.7425 12.7623 11.75 12.38 11.75 12.154H9.74999ZM9.74999 10.0067V12.154H11.75V10.0067H9.74999ZM9.56691 9.56345C9.64333 9.65806 9.66589 9.69017 9.6868 9.73534C9.70551 9.77574 9.74097 9.86874 9.75148 10.0612L11.7485 9.95213C11.7256 9.53331 11.6376 9.18846 11.5016 8.89486C11.3679 8.60603 11.2046 8.40801 11.1228 8.30678L9.56691 9.56345ZM9.17066 8.58533C9.17066 9.1324 9.51716 9.50186 9.56691 9.56344L11.1228 8.30678C11.0958 8.27335 11.0851 8.25986 11.0775 8.24975C11.0711 8.24122 11.0794 8.25127 11.0921 8.2739C11.1059 8.29826 11.1268 8.34041 11.1436 8.39781C11.161 8.4571 11.1707 8.52084 11.1707 8.58533H9.17066ZM10.5413 7.25C9.76266 7.25 9.17066 7.86478 9.17066 8.58533H11.1707C11.1707 8.97922 10.8573 9.25 10.5413 9.25V7.25ZM12.8333 7.25H10.5413V9.25H12.8333V7.25ZM14.25 8.786C14.25 8.55368 14.227 8.13953 13.9588 7.78046C13.6342 7.34612 13.1639 7.25 12.8333 7.25V9.25C12.8271 9.25 12.7577 9.24993 12.6595 9.2109C12.5486 9.1668 12.4389 9.08778 12.3566 8.97754C12.2815 8.87709 12.2581 8.78962 12.2518 8.76099C12.2459 8.73402 12.25 8.73615 12.25 8.786H14.25ZM14.25 11.6753V8.786H12.25V11.6753H14.25ZM13.4767 11.0927C13.8257 11.0927 14.0524 11.2871 14.1533 11.4342C14.2552 11.5828 14.25 11.6949 14.25 11.6753H12.25C12.25 12.1587 12.518 13.0927 13.4767 13.0927V11.0927ZM13.4496 10.9369C13.371 11.0154 13.313 11.0707 13.2684 11.1103C13.2467 11.1297 13.2306 11.1431 13.2191 11.1523C13.2075 11.1614 13.2026 11.1647 13.2033 11.1642C13.2049 11.1632 13.2365 11.1422 13.2932 11.123C13.3217 11.1133 13.3531 11.1054 13.3865 11.1C13.4198 11.0946 13.4503 11.0927 13.4767 11.0927V13.0927C14.1416 13.0927 14.5822 12.6327 14.8638 12.3511L13.4496 10.9369ZM15.9487 8.66267C15.0235 8.28317 15.0235 8.28306 15.0236 8.28295C15.0236 8.28292 15.0236 8.28282 15.0236 8.28276C15.0237 8.28266 15.0237 8.28258 15.0237 8.28252C15.0238 8.28241 15.0238 8.28241 15.0237 8.28252C15.0236 8.28273 15.0234 8.28337 15.0229 8.28442C15.0221 8.28653 15.0205 8.2903 15.0182 8.29566C15.0137 8.30639 15.0065 8.32346 14.9966 8.34629C14.9769 8.39199 14.9468 8.46056 14.9071 8.54735C14.8275 8.72133 14.7104 8.9663 14.5627 9.24546C14.2611 9.81571 13.8575 10.4787 13.4115 10.9771L14.9018 12.3109C15.5065 11.6353 15.9989 10.8076 16.3306 10.1807C16.4996 9.86128 16.6335 9.58105 16.7257 9.37946C16.772 9.27847 16.8079 9.19668 16.8329 9.13894C16.8453 9.11006 16.855 9.08716 16.8619 9.07084C16.8653 9.06268 16.8681 9.05616 16.8701 9.05135C16.8711 9.04895 16.8719 9.04698 16.8725 9.04544C16.8728 9.04468 16.8731 9.04402 16.8733 9.04347C16.8734 9.0432 16.8735 9.04295 16.8736 9.04273C16.8737 9.04263 16.8737 9.04248 16.8737 9.04243C16.8738 9.04229 16.8739 9.04216 15.9487 8.66267ZM16.5833 7.25C16.2102 7.25 15.8557 7.35305 15.5591 7.57707C15.275 7.79162 15.1183 8.06108 15.0292 8.26943L16.8681 9.0559C16.8717 9.04758 16.847 9.11071 16.7644 9.1731C16.7228 9.20452 16.6788 9.22607 16.6391 9.23849C16.6008 9.25044 16.5792 9.25 16.5833 9.25V7.25ZM18.0413 7.25H16.5833V9.25H18.0413V7.25ZM19.4399 9.07544C19.5177 8.81788 19.6135 8.30242 19.2816 7.82855C18.9366 7.33604 18.3884 7.25 18.0413 7.25V9.25C18.1356 9.25 17.8547 9.27763 17.6434 8.97595C17.4452 8.69291 17.5409 8.44545 17.5255 8.49656L19.4399 9.07544ZM16.5207 12.1387C17.3361 12.7175 17.3361 12.7175 17.3362 12.7174C17.3362 12.7174 17.3362 12.7173 17.3363 12.7172C17.3364 12.7171 17.3365 12.7169 17.3367 12.7167C17.337 12.7163 17.3374 12.7157 17.3379 12.715C17.3389 12.7136 17.3404 12.7115 17.3422 12.7089C17.3459 12.7036 17.3513 12.696 17.3582 12.6862C17.372 12.6666 17.392 12.6382 17.4173 12.602C17.4679 12.5295 17.5399 12.4257 17.6267 12.2987C17.8 12.0451 18.034 11.6966 18.275 11.3192C18.5146 10.944 18.7679 10.5295 18.9764 10.1462C19.1671 9.7955 19.3796 9.36663 19.4597 8.99903L17.5056 8.57297C17.5057 8.57277 17.5017 8.58988 17.4882 8.62776C17.4752 8.66425 17.4564 8.71124 17.4308 8.76925C17.379 8.88615 17.3079 9.02809 17.2194 9.19065C17.0426 9.51574 16.817 9.88629 16.5893 10.2429C16.3629 10.5975 16.1412 10.9278 15.9756 11.17C15.893 11.2909 15.8248 11.3892 15.7775 11.457C15.7538 11.4908 15.7354 11.517 15.7231 11.5345C15.717 11.5432 15.7123 11.5498 15.7093 11.554C15.7078 11.5562 15.7067 11.5577 15.706 11.5587C15.7057 11.5592 15.7054 11.5595 15.7053 11.5597C15.7052 11.5598 15.7052 11.5598 15.7052 11.5599C15.7052 11.5599 15.7052 11.5599 15.7052 11.5599C15.7052 11.5598 15.7052 11.5598 16.5207 12.1387ZM17.3094 12.1726C17.2873 12.1442 17.3087 12.1652 17.3334 12.2258C17.3634 12.2993 17.3882 12.4065 17.3782 12.5316C17.369 12.6459 17.3346 12.7209 17.3275 12.7358C17.3239 12.7433 17.3277 12.7341 17.3685 12.6689L15.6728 11.6085C15.6251 11.6848 15.4154 11.9879 15.3846 12.3714C15.3472 12.8376 15.5648 13.1877 15.7319 13.4021L17.3094 12.1726ZM17.6467 12.523C17.5507 12.4288 17.4738 12.3534 17.4115 12.2889C17.3811 12.2575 17.3592 12.2338 17.344 12.2165C17.3274 12.1976 17.3268 12.1954 17.3346 12.2063L15.7068 13.3683C15.8481 13.5663 16.0964 13.8039 16.2468 13.9513L17.6467 12.523ZM18.2877 13.1916C18.0802 12.9467 17.8298 12.7024 17.6467 12.523L16.2468 13.9513C16.4452 14.1458 16.6253 14.3234 16.7617 14.4844L18.2877 13.1916ZM19.7068 15.2412C19.5891 14.8743 19.356 14.5151 19.1297 14.2088C18.89 13.8844 18.5917 13.5331 18.2719 13.1735L16.7774 14.5025C17.0843 14.8476 17.3354 15.1459 17.5212 15.3974C17.7203 15.6669 17.7888 15.8097 17.8025 15.8522L19.7068 15.2412ZM18.25 17.1667C18.5842 17.1667 19.0963 17.0878 19.4617 16.6633C19.8583 16.2026 19.8256 15.6449 19.7142 15.2652L17.7951 15.8282C17.8044 15.8597 17.7277 15.6121 17.9459 15.3585C18.1331 15.1412 18.3324 15.1667 18.25 15.1667V17.1667ZM16.7913 17.1667H18.25V15.1667H16.7913V17.1667ZM15.0355 16.1433C15.222 16.3509 15.4501 16.6112 15.6966 16.7969C16.0064 17.0303 16.3614 17.1667 16.7913 17.1667V15.1667C16.7909 15.1667 16.8185 15.1673 16.8575 15.1809C16.895 15.194 16.9113 15.208 16.9 15.1995C16.8838 15.1873 16.8482 15.1571 16.7802 15.0869C16.7117 15.0161 16.6333 14.9291 16.5233 14.8067L15.0355 16.1433ZM14.3766 15.4409C14.6507 15.7151 14.8565 15.9441 15.0355 16.1433L16.5233 14.8067C16.3422 14.6051 16.1059 14.3419 15.7913 14.0271L14.3766 15.4409ZM13.6313 14.792C13.5317 14.792 13.5078 14.755 13.615 14.8168C13.7431 14.8906 13.9854 15.0643 14.3903 15.4543L15.7777 14.0137C14.8941 13.1628 14.2718 12.792 13.6313 12.792V14.792ZM14.25 14.292C14.25 14.2138 14.2549 14.2032 14.2502 14.2278C14.2452 14.2534 14.2187 14.3773 14.1098 14.5126C13.9871 14.6651 13.835 14.7406 13.7259 14.7721C13.6409 14.7967 13.5911 14.792 13.6313 14.792V12.792C13.4666 12.792 12.9259 12.7935 12.5515 13.2589C12.384 13.4672 12.3171 13.6899 12.2865 13.8483C12.2561 14.0058 12.25 14.1618 12.25 14.292H14.25ZM14.25 15.6V14.292H12.25V15.6H14.25ZM12.208 17.1667C12.6723 17.1667 13.2138 17.1296 13.6335 16.8482C14.2106 16.4614 14.25 15.8669 14.25 15.6H12.25C12.25 15.6512 12.2432 15.5936 12.277 15.5C12.2963 15.4466 12.3272 15.3849 12.3743 15.3241C12.4215 15.2632 12.4733 15.2182 12.5199 15.1869C12.6049 15.13 12.6521 15.1323 12.5866 15.144C12.5252 15.1549 12.4085 15.1667 12.208 15.1667V17.1667ZM6.93991 14.0693C8.28712 16.0047 10.2654 17.1667 12.208 17.1667V15.1667C11.0613 15.1667 9.64353 14.4526 8.5814 12.9267L6.93991 14.0693ZM4.45866 8.66267C4.45866 8.899 4.52031 9.19804 4.59931 9.48781C4.68615 9.80634 4.81869 10.2012 5.00776 10.6577C5.38634 11.5719 5.99877 12.7507 6.94669 14.0789L8.57462 12.9171C7.71455 11.712 7.17597 10.6661 6.85556 9.89246C6.69513 9.50506 6.59117 9.1902 6.52888 8.96175C6.45876 8.70454 6.45866 8.61934 6.45866 8.66267H4.45866ZM5.95866 7.25C5.61596 7.25 5.16996 7.32889 4.83044 7.68316C4.49457 8.03362 4.45866 8.45215 4.45866 8.66267H6.45866C6.45866 8.66767 6.45881 8.71648 6.43778 8.78817C6.41474 8.86675 6.36656 8.97083 6.27438 9.06701C6.08069 9.26911 5.88469 9.25 5.95866 9.25V7.25Z'
				fill='#6B7280'
				mask='url(#path-1-inside-1_7368_184764)'
			/>
		</>
	),

	[OthersIcons.ADD_PROJECT]: (
		<>
			<path
				d='M17.5 11.046C15.1839 11.9836 12.6523 12.4998 10 12.4998C7.34775 12.4998 4.81608 11.9836 2.5 11.046M13.3333 4.99984V3.33317C13.3333 2.4127 12.5871 1.6665 11.6667 1.6665H8.33333C7.41286 1.6665 6.66667 2.4127 6.66667 3.33317V4.99984M10 9.99984H10.0083M4.16667 16.6665H15.8333C16.7538 16.6665 17.5 15.9203 17.5 14.9998V6.6665C17.5 5.74603 16.7538 4.99984 15.8333 4.99984H4.16667C3.24619 4.99984 2.5 5.74603 2.5 6.6665V14.9998C2.5 15.9203 3.24619 16.6665 4.16667 16.6665Z'
				stroke='white'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</>
	),
};

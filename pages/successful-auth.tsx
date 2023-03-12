import { Auth } from '@layouts/index';
import { SuccessfulAuth } from '@view/index';

const SuccessfulAuthPage = () => {
	return (
		<Auth auth>
			<SuccessfulAuth />
		</Auth>
	);
};

export default SuccessfulAuthPage;

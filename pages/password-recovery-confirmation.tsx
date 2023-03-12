import { Auth } from '@layouts/index';
import PasswordRecoveryConfirmation from '@view/PasswordRecoveryConfirmation/PasswordRecoveryConfirmation';

const PasswordRecoveryConfirmationPage = () => {
	return (
		<Auth>
			<PasswordRecoveryConfirmation />
		</Auth>
	);
};

export default PasswordRecoveryConfirmationPage;

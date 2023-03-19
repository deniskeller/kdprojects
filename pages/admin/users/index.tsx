import { Auth } from '@layouts/index';
import { Users } from '@view/index';

const UsersPage = () => {
	return (
		<Auth app auth>
			<Users />
		</Auth>
	);
};

export default UsersPage;

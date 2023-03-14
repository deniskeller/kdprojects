import { Auth } from '@layouts/index';
import { UserProjects } from '@view/index';

const UserProjectsPage = () => {
	return (
		<Auth app auth>
			<UserProjects />
		</Auth>
	);
};

export default UserProjectsPage;

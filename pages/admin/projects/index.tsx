import { Auth } from '@layouts/index';
import { AdminProjects } from '@view/index';

const AdminProjectsPage = () => {
	return (
		<Auth app auth>
			<AdminProjects />
		</Auth>
	);
};

export default AdminProjectsPage;

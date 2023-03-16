import { Auth } from '@layouts/index';
import { EditProject } from '@view/index';

const EditProjectPage = () => {
	return (
		<Auth app auth>
			<EditProject />
		</Auth>
	);
};

export default EditProjectPage;

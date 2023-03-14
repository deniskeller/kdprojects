import { Auth } from '@layouts/index';
import { CreateProject } from '@view/index';

const CreateProjectPage = () => {
	return (
		<Auth app auth>
			<CreateProject />
		</Auth>
	);
};

export default CreateProjectPage;

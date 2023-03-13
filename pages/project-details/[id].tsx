import { Auth } from '@layouts/index';
import { ProjectDetailsAdmin } from '@view/index';
import { useRouter } from 'next/router';

const ProjectDetailsPage = () => {
	const router = useRouter();
	const query = router.query;
	const id = typeof query?.id === 'string' ? query?.id : '';
	return (
		<Auth auth app>
			<ProjectDetailsAdmin id={id} />
		</Auth>
	);
};

export default ProjectDetailsPage;

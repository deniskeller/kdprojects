import { Auth } from '@layouts/index';
import { ProjectDetailsUser } from '@view/index';
import { useRouter } from 'next/router';

const ProjectDetailsPage = () => {
	const router = useRouter();
	const query = router.query;
	const id = typeof query?.id === 'string' ? query?.id : '';
	return (
		<Auth auth app>
			<ProjectDetailsUser id={id} status='Модерация' actions />
		</Auth>
	);
};

export default ProjectDetailsPage;

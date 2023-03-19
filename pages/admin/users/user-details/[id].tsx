import { Auth } from '@layouts/index';
import { UserDetails } from '@view/index';
import { useRouter } from 'next/router';

const ProjectDetailsPage = () => {
	const router = useRouter();
	const query = router.query;
	const id = typeof query?.id === 'string' ? query?.id : '';
	return (
		<Auth auth app>
			<UserDetails id={id} status='Модерация' />
		</Auth>
	);
};

export default ProjectDetailsPage;

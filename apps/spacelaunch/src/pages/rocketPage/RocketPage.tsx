import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { 
	RocketContent, 
	RocketSection 
} from '@spacelaunch/shared/ui';
import { 
	useGetRocketQuery 
} from 'libs/redux/store/src/lib/rocketpage/rocketpageApi';
import { useParams } from 'react-router';

export const RocketPage = () => {
	
	const { id } = useParams();
	const { data } = useGetRocketQuery(`${id}`);

	return (
		<SpacelaunchLayout 
			heroComponent={RocketContent} 
			contentComponent={RocketSection} 
			settings={{
				hasHeaderLink: true,
				bg: data?.image_url
			}}/>
	);
};

export default RocketPage;

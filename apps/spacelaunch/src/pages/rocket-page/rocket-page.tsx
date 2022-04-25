import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { 
	RocketContent, 
	RocketSection 
} from '@spacelaunch/spacelaunch/ui-shared';
import { 
	useGetRocketQuery 
} from 'libs/redux/store/src/lib/rocketpage/rocketpageApi';
import { useParams } from 'react-router';

/* eslint-disable-next-line */
export interface RocketPageProps {}

// eslint-disable-next-line no-unused-vars
export function RocketPage(props: RocketPageProps) {
	
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
}

export default RocketPage;

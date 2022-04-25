import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { HomeContent, HomeSection } from '@spacelaunch/shared/ui';

/* eslint-disable-next-line */
export interface HomePageProps {}

// eslint-disable-next-line no-unused-vars
export function HomePage(props: HomePageProps) {
	return (
		<SpacelaunchLayout 
			heroComponent={HomeContent} 
			contentComponent={HomeSection} 
			settings={{
				hasHeaderLink: false,
				bg: 
				// eslint-disable-next-line max-len
				'http://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-6.jpg'
			}}/>
	);
}

export default HomePage;

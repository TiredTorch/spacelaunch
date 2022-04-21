import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { HomeContent, HomeSection } from '@spacelaunch/spacelaunch/ui-shared';

/* eslint-disable-next-line */
export interface HomePageProps {}

// eslint-disable-next-line no-unused-vars
export function HomePage(props: HomePageProps) {
	return (
		<SpacelaunchLayout 
			heroComponent={HomeContent} 
			contentComponent={HomeSection} 
			settings={{
				hasHeaderLink: false
			}}/>
	);
}

export default HomePage;

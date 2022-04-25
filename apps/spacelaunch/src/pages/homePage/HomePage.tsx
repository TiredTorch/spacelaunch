import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { HomeContent, HomeSection } from '@spacelaunch/shared/ui';
import { assets } from '@spacelaunch/shared/assets';

export const HomePage = () => {
	return (
		<SpacelaunchLayout 
			heroComponent={HomeContent} 
			contentComponent={HomeSection} 
			settings={{
				hasHeaderLink: false,
				bg: assets.HomepageBG
			}}/>
	);
};

export default HomePage;

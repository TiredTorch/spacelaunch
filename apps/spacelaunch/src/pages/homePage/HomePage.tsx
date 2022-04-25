import { SpacelaunchLayout } from '@spacelaunch/shared/layout';
import { HomeContent, HomeSection } from '@spacelaunch/shared/ui';
import BG from
	// eslint-disable-next-line max-len
	'../../../../../libs/shared/assets/assets/background/homepageBackground.svg';

export const HomePage = () => {
	return (
		<SpacelaunchLayout 
			heroComponent={HomeContent} 
			contentComponent={HomeSection} 
			settings={{
				hasHeaderLink: false,
				bg: BG
			}}/>
	);
};

export default HomePage;

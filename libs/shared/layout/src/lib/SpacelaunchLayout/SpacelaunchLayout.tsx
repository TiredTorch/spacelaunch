import { 
	ContentSection, 
	Footer, 
	Header, 
	Overlay 
} from '@spacelaunch/shared/ui';
import { SpacelaunchLayoutProps } from './SpacelaunchLayout.types';

/**
 * Function that returns layout for the page
 * 
 * @param {FC} props.heroComponent component for the hero section
 * @param {FC} props.contentComponent component for the content section
 * @param {boolean} props.setting.hasHeaderLink is header has a link to homepage
 * @param {string | null | undefined} props.setting.bg path to background image
 * @returns page layout
 */
export const SpacelaunchLayout = (props: SpacelaunchLayoutProps) => {
	return (
		<>
			<Header hasLinkToHome={props.settings.hasHeaderLink}/>
			<Overlay bg={props.settings.bg}>
				<props.heroComponent/>
			</Overlay>
			<ContentSection>
				<props.contentComponent/>
			</ContentSection>
			<Footer/>
		</>
	);
};

export default SpacelaunchLayout;

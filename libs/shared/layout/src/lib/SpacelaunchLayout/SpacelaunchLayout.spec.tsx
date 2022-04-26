import { assets } from '@spacelaunch/shared/assets';
import { render } from '@testing-library/react';

import SpacelaunchLayout from './SpacelaunchLayout';

describe('SpacelaunchLayout', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<SpacelaunchLayout 
				heroComponent={() => <></>} 
				contentComponent={() => <></>} 
				settings={{
					hasHeaderLink: false,
					bg: assets.HomepageBG
				}} />);
		expect(baseElement).toBeTruthy();
	});
});

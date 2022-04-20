import { render } from '@testing-library/react';

import SpacelaunchLayout from './spacelaunch-layout';

describe('SpacelaunchLayout', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<SpacelaunchLayout />);
		expect(baseElement).toBeTruthy();
	});
});

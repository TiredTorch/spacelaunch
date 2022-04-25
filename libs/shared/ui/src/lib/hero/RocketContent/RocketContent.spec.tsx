import { render } from '@testing-library/react';

import RocketContent from './RocketContent';

describe('RocketContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<RocketContent />);
		expect(baseElement).toBeTruthy();
	});
});

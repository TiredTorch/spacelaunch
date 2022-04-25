import { render } from '@testing-library/react';

import LaunchSection from './LaunchSection';

describe('LaunchSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LaunchSection />);
		expect(baseElement).toBeTruthy();
	});
});

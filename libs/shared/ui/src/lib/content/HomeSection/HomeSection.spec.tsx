import { render } from '@testing-library/react';

import HomeSection from './HomeSection';

describe('HomeSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<HomeSection />);
		expect(baseElement).toBeTruthy();
	});
});

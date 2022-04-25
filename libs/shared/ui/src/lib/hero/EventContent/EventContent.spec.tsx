import { render } from '@testing-library/react';

import EventContent from './EventContent';

describe('EventContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<EventContent />);
		expect(baseElement).toBeTruthy();
	});
});

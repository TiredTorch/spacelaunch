import { render } from '@testing-library/react';

import LaunchContent from './LaunchContent';

describe('LaunchContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LaunchContent />);
		expect(baseElement).toBeTruthy();
	});
});

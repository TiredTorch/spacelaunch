import { render } from '@testing-library/react';

import LaunchPage from './LaunchPage';

describe('LaunchPage', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LaunchPage />);
		expect(baseElement).toBeTruthy();
	});
});

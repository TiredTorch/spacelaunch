import { render } from '@testing-library/react';

import RocketPage from './RocketPage';

describe('RocketPage', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<RocketPage />);
		expect(baseElement).toBeTruthy();
	});
});

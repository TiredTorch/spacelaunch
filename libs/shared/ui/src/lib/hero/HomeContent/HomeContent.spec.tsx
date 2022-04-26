import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomeContent from './HomeContent';

describe('HomeContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<HomeContent />
			</BrowserRouter>
		);
		expect(baseElement).toBeTruthy();
	});
});

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Button from './Button';

describe('Button', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<Button userSize={'rp'} title={''} />
			</BrowserRouter>
		);
		expect(baseElement).toBeTruthy();
	});
});

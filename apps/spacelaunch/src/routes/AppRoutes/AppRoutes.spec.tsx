import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';


describe('AppRoutes', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		);
		expect(baseElement).toBeTruthy();
	});
});

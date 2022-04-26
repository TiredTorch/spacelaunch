import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<BrowserRouter>
					<HomePage />
				</BrowserRouter>
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

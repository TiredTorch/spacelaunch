import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import LaunchSection from './LaunchSection';

describe('LaunchSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<BrowserRouter>
					<LaunchSection />
				</BrowserRouter>
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

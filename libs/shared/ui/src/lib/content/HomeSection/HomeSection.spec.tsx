import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import HomeSection from './HomeSection';

describe('HomeSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<BrowserRouter>
					<HomeSection />
				</BrowserRouter>
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

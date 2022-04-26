import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import LaunchesList from './LaunchesList';

describe('LaunchesList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<BrowserRouter>
					<LaunchesList />
				</BrowserRouter>
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

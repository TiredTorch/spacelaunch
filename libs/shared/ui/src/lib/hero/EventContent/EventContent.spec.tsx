import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import EventContent from './EventContent';

describe('EventContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<BrowserRouter>
					<EventContent />
				</BrowserRouter>
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

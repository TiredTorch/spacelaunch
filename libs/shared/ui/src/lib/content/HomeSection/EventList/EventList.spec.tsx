import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import EventList from './EventList';

describe('EventList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<EventList/>
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

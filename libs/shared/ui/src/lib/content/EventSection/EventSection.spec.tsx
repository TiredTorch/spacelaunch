import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import EventSection from './EventSection';

describe('EventSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<EventSection />
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import RocketSection from './RocketSection';

describe('RocketSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<RocketSection />
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import LaunchContent from './LaunchContent';

describe('LaunchContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<LaunchContent />
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

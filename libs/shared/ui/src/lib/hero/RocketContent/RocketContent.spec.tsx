import { store } from '@spacelaunch/redux/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import RocketContent from './RocketContent';

describe('RocketContent', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Provider store={store}>
				<RocketContent />
			</Provider>
		);
		expect(baseElement).toBeTruthy();
	});
});

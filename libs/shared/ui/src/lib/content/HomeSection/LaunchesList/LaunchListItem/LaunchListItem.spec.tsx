import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LaunchListItem from './LaunchListItem';

describe('LaunchListItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<LaunchListItem 
					url={''} 
					img={''} 
					dataTitle={new Date()} 
					launchTitle={''} 
				/>
			</BrowserRouter>
		);
		expect(baseElement).toBeTruthy();
	});
});

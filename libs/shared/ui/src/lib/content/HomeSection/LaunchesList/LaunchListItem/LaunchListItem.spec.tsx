import { render } from '@testing-library/react';

import LaunchListItem from './LaunchListItem';

describe('LaunchListItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<LaunchListItem 
				url={''} 
				img={''} 
				dataTitle={new Date()} 
				launchTitle={''} 
			/>);
		expect(baseElement).toBeTruthy();
	});
});

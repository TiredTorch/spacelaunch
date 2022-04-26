import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import EventListItem from './EventListItem';

describe('EventListItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<EventListItem 
					url={''} 
					img={null} 
					dataTitle={new Date()} 
					eventTitle={''} 
				/>
			</BrowserRouter>
		);
		expect(baseElement).toBeTruthy();
	});
});

import { render } from '@testing-library/react';

import EventList from './EventList';

describe('EventList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<EventList />);
		expect(baseElement).toBeTruthy();
	});
});

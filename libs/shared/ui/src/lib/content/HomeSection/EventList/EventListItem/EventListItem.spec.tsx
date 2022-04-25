import { render } from '@testing-library/react';

import EventListItem from './EventListItem';

describe('EventListItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<EventListItem />);
		expect(baseElement).toBeTruthy();
	});
});

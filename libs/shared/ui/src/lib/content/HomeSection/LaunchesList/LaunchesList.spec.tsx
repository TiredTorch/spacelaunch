import { render } from '@testing-library/react';

import LaunchesList from './LaunchesList';

describe('LaunchesList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<LaunchesList />);
		expect(baseElement).toBeTruthy();
	});
});

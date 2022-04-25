import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Logo logoSize={'sm'} src={''} />);
		expect(baseElement).toBeTruthy();
	});
});

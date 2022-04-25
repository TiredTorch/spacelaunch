import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Button userSize={'rp'} title={''} />
		);
		expect(baseElement).toBeTruthy();
	});
});

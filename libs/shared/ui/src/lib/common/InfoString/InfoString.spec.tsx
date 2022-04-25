import { render } from '@testing-library/react';

import InfoString from './InfoString';

describe('InfoString', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<InfoString title={''} info={''} />);
		expect(baseElement).toBeTruthy();
	});
});

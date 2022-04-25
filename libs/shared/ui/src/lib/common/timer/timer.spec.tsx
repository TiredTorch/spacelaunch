import { render } from '@testing-library/react';

import Timer from './Timer';

describe('Timer', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Timer time={undefined} />);
		expect(baseElement).toBeTruthy();
	});
});

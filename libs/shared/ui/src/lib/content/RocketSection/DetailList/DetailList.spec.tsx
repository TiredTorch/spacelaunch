import { render } from '@testing-library/react';

import DetailList from './DetailList';

describe('DetailList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DetailList details={[]} />);
		expect(baseElement).toBeTruthy();
	});
});

import { render } from '@testing-library/react';

import DetailItem from './DetailItem';

describe('DetailItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<DetailItem logo={''} title={''}>
        
			</DetailItem>
		);
		expect(baseElement).toBeTruthy();
	});
});

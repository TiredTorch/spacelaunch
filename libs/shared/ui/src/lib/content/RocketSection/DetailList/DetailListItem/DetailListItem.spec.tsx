import { render } from '@testing-library/react';

import DetailListItem from './DetailListItem';

describe('DetailListItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<DetailListItem title={''} value={''} />
		);
		expect(baseElement).toBeTruthy();
	});
});

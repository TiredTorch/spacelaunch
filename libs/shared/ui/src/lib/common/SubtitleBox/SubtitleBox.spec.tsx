import { render } from '@testing-library/react';

import SubtitleBox from './SubtitleBox';

describe('SubtitleBox', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<SubtitleBox title={''} />);
		expect(baseElement).toBeTruthy();
	});
});

import { render } from '@testing-library/react';

import VideoPlayer from './VideoPlayer';

describe('VideoPlayed', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<VideoPlayer videoSrc={''} />);
		expect(baseElement).toBeTruthy();
	});
});

import { render } from '@testing-library/react';

import ContentSection from './ContentSection';

describe('ContentSection', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<ContentSection>
        
			</ContentSection>
		);
		expect(baseElement).toBeTruthy();
	});
});

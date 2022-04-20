import { render } from '@testing-library/react';

import EventSection from './event-section';

describe('EventSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventSection />);
    expect(baseElement).toBeTruthy();
  });
});

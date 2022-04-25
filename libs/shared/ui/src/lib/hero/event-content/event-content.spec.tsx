import { render } from '@testing-library/react';

import EventContent from './event-content';

describe('EventContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventContent />);
    expect(baseElement).toBeTruthy();
  });
});

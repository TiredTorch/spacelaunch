import { render } from '@testing-library/react';

import EventPage from './event-page';

describe('EventPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventPage />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import EventItem from './event-item';

describe('EventItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventItem />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import LaunchListItem from './launch-list-item';

describe('LaunchListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LaunchListItem />);
    expect(baseElement).toBeTruthy();
  });
});

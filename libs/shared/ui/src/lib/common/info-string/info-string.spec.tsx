import { render } from '@testing-library/react';

import InfoString from './info-string';

describe('InfoString', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoString />);
    expect(baseElement).toBeTruthy();
  });
});

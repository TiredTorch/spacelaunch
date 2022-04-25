import { render } from '@testing-library/react';

import DetailItem from './detail-item';

describe('DetailItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailItem />);
    expect(baseElement).toBeTruthy();
  });
});

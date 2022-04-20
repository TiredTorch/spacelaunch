import { render } from '@testing-library/react';

import DetailListItem from './detail-list-item';

describe('DetailListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailListItem />);
    expect(baseElement).toBeTruthy();
  });
});

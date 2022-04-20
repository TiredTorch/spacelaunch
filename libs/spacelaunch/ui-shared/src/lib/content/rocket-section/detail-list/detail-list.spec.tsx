import { render } from '@testing-library/react';

import DetailList from './detail-list';

describe('DetailList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailList />);
    expect(baseElement).toBeTruthy();
  });
});

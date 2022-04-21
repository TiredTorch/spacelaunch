import { render } from '@testing-library/react';

import RocketPage from './rocket-page';

describe('RocketPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RocketPage />);
    expect(baseElement).toBeTruthy();
  });
});

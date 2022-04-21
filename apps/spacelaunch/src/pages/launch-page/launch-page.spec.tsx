import { render } from '@testing-library/react';

import LaunchPage from './launch-page';

describe('LaunchPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LaunchPage />);
    expect(baseElement).toBeTruthy();
  });
});

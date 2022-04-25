import { render } from '@testing-library/react';

import HomeContent from './home-content';

describe('HomeContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeContent />);
    expect(baseElement).toBeTruthy();
  });
});

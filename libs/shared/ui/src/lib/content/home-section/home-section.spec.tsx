import { render } from '@testing-library/react';

import HomeSection from './home-section';

describe('HomeSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeSection />);
    expect(baseElement).toBeTruthy();
  });
});

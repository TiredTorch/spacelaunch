import { render } from '@testing-library/react';

import RocketSection from './rocket-section';

describe('RocketSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RocketSection />);
    expect(baseElement).toBeTruthy();
  });
});

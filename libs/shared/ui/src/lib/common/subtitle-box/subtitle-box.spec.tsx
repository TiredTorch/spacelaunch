import { render } from '@testing-library/react';

import SubtitleBox from './subtitle-box';

describe('SubtitleBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubtitleBox />);
    expect(baseElement).toBeTruthy();
  });
});

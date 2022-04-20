import { render } from '@testing-library/react';

import LaunchesList from './launches-list';

describe('LaunchesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LaunchesList />);
    expect(baseElement).toBeTruthy();
  });
});

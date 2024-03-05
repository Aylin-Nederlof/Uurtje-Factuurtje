import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Label from './Label';

describe('Styled Label component', () => {
  it('renders label with correct styles', () => {
    const { container } = render(<Label />);
    const labelElement = container.querySelector('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle(`
      font-size: 0.875rem;
      font-weight: medium;
    `);
  });
});
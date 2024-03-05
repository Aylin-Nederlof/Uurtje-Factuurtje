import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Input from './Input';

describe('Styled Input component', () => {
  it('renders input with correct styles', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle(`
      border: 1px solid #000;
      border-radius: 8px;
      background-color: #F8F8F8;
    `);
  });
});

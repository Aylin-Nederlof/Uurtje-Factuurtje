import styled from 'styled-components';

export interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'black' | 'underlined';
  onClick: () => void; 
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  
  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return `
          color: black;
          background-color: #cbfc56; 
          border: 2px solid #cbfc56;
          &:hover {
            background-color: #bafc22; 
            border-color: #bafc22; 
          }
        `;
      case 'secondary':
        return `
          color: white;
          background-color: #7d57fc; 
          border: 2px solid #7d57fc;
          &:hover {
            background-color: #6537fb; 
            border-color: #6537fb;
          }
        `;
      case 'black':
        return `
          color: white;
          background-color: black;
          border: 2px solid black;
          &:hover {
            background-color: #2d2d2d;
            border-color: #2d2d2d;
          }
        `;
      case 'underlined':
        return `
          color: black;
          background-color: transparent;
          border: none;
          &:hover {
            text-decoration: underline;
          }
        `;
    }
  }}
`;

export default Button;
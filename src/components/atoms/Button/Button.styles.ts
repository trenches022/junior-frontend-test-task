import styled from "styled-components";

export const StyledButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.5s ease;
  border: 2px solid black; 
  height: 44px;
  
  ${props => props.$variant === 'primary' ? `
    background: #1E1E1E;
    color: #FFFFFF;
    width: 103px;
    
    &:hover {
      background: #FFFFFF;
      color: #4285f4;
      border: 2px solid #4285f4;
    }
  ` : `
    background: #FFFFFF;
    color: #1E1E1E;
    width: 96px;
    
    &:hover {
      background: #4285f4;
      color: #FFFFFF;
    }
  `}
`;
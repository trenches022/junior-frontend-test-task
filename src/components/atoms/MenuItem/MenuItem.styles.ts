import styled from "styled-components";

export const StyledMenuItem = styled.div<{ $hasDropdown?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  color: #1E1E1E;
  font-size: 17px;
  font-weight: 400;
  transition: background-color 0.5s ease;
  cursor: default;

  &:hover {
    background: #F5F5F5;
  }

  ${props => props.$hasDropdown && `
    &::after {
      content: '';
      border: solid #1E1E1E;
      border-width: 0 1.5px 1.5px 0;
      display: inline-block;
      transform: rotate(45deg);
      margin-left: 4px;
      width: 5px;
      height: 5px;
    }
  `}
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: -9%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: #ffffff;
  padding: 8px 0;
  min-width: 130px; 
  min-height: 138px;
  border: 1px solid #0000001A;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }

`;

export const DropdownOption = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  color: #1E1E1E;
  text-align: center;
  gap: 10px;
  cursor: default;

  &:hover {
    background: #f5f5f5;
    color: #5533ff;
  }
`;

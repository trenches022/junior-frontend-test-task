import styled from "styled-components";

export const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  background: #FFFFFF;
  padding: ${({ $isOpen }) => ($isOpen ? '24px' : '0 24px')};
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${({ $isOpen }) => ($isOpen ? '20px' : '0')};

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
  margin-left: -12px;
  gap: 10px;
`;

export const MobileAuthButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  button:first-child {
    justify-self: start;
  }

  button:last-child {
    justify-self: end;
  }
`;

export const MobileSubmenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #ffffff;
  margin-left: 12px;
  margin-top: 8px;
`;

export const SubmenuItem = styled.div`
  font-size: 16px;
  color: #1E1E1E;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

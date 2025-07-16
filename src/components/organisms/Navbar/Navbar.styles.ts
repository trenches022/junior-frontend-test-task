import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  padding: 20px;
`;


export const NavbarContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1439px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  position: relative;
  width: 40px;
  height: 24px;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span,
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${({ $isOpen }) => ($isOpen ? '#005BC5' : '#1e1e1e')};
    transition: all 0.5s ease;
    border-radius: 3px;
  }

  &::before {
    top: ${({ $isOpen }) => ($isOpen ? '10px' : '0')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'none')};
    background-color: #005BC5;
  }

  &::after {
    bottom: ${({ $isOpen }) => ($isOpen ? '10px' : '0')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'none')};
    background-color: #005BC5;
  }

  span {
    top: 10px;
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }
`;

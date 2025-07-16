import { useState } from "react";
import type { MenuItemProps } from "../../../types";
import {
  StyledMenuItem,
  DropdownContainer,
  DropdownOption,
} from "./MenuItem.styles";

export const MenuItem: React.FC<MenuItemProps> = ({ children, hasDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledMenuItem
      $hasDropdown={hasDropdown}
      onClick={openMenuHandler}
    >
      {children}
      {hasDropdown && isOpen && (
        <DropdownContainer>
          <DropdownOption>Service 1</DropdownOption>
          <DropdownOption>Service 2</DropdownOption>
          <DropdownOption>Service 3</DropdownOption>
        </DropdownContainer>
      )}
    </StyledMenuItem>
  );
};
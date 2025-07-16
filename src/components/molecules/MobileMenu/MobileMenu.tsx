import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { MenuItem } from "../../atoms/MenuItem/MenuItem";
import {
  MobileAuthButtons,
  MobileMenuContainer,
  MobileMenuItems,
  MobileSubmenu,
  SubmenuItem,
} from "./MobileMenu.styles";

interface Props {
  isOpen: boolean;
}

export const MobileMenu: React.FC<Props> = ({ isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <MobileMenuContainer $isOpen={isOpen}>
      <MobileMenuItems>
        <MenuItem>Home</MenuItem>
        <MenuItem>About us</MenuItem>
        <div onClick={toggleDropdown}>
          <MenuItem hasDropdown>Services</MenuItem>
          {isDropdownOpen && (
            <MobileSubmenu>
              <SubmenuItem>Service 1</SubmenuItem>
              <SubmenuItem>Service 2</SubmenuItem>
              <SubmenuItem>Service 3</SubmenuItem>
            </MobileSubmenu>
          )}
        </div>
        <MenuItem>Testimonials</MenuItem>
      </MobileMenuItems>

      <MobileAuthButtons>
        <Button variant="primary">Register</Button>
        <Button variant="secondary">Sign In</Button>
      </MobileAuthButtons>
    </MobileMenuContainer>
  );
};
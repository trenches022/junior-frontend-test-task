import { useState } from "react";
import { Logo } from "../../atoms/Logo/Logo";
import { AuthButtons } from "../../molecules/AuthButtons/AuthButtons";
import { MobileMenu } from "../../molecules/MobileMenu/MobileMenu";
import { Navigation } from "../../molecules/Navigation/Navigation";
import { BurgerButton, NavbarContainer, NavbarContent, Left, Right, LogoWrapper } from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Left>
            <Navigation />
          </Left>

          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <Right>
            <AuthButtons />
          </Right>

          <BurgerButton $isOpen={isMobileMenuOpen} onClick={toggleMobileMenu}>
            <span></span>
          </BurgerButton>
        </NavbarContent>
      </NavbarContainer>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};


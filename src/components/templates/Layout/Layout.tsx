import { Navbar } from "../../organisms/Navbar/Navbar";
import { LayoutContainer, MainContent } from "./Layout.styles";

export const Layout: React.FC = () => (
  <LayoutContainer>
    <Navbar />
    <MainContent>
    </MainContent>
  </LayoutContainer>
);
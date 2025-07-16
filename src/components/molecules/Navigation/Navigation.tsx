import { MenuItem } from "../../atoms/MenuItem/MenuItem";
import { NavigationContainer } from "./Navigation.styles";

export const Navigation: React.FC = () => (
  <NavigationContainer>
    <MenuItem>Home</MenuItem>
    <MenuItem>About us</MenuItem>
    <MenuItem hasDropdown>Services</MenuItem>
    <MenuItem>Testimonials</MenuItem>
  </NavigationContainer>
);
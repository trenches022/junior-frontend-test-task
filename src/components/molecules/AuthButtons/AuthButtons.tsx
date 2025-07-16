import { Button } from "../../atoms/Button/Button";
import { AuthContainer } from "./AuthButtons.styles";

export const AuthButtons: React.FC = () => (
  <AuthContainer>
    <Button variant="primary">Register</Button>
    <Button variant="secondary">Sign in</Button>
  </AuthContainer>
);
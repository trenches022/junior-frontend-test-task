import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "../../../types";

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => (
  <StyledButton $variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);
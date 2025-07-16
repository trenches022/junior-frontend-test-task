export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface MenuItemProps {
  hasDropdown?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
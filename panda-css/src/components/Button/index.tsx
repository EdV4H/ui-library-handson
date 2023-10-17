import { button } from "./recipe.local";

type ButtonProps = {
  variant: "filled" | "outlined" | "text";
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { icon, children, variant, disabled, onClick } = props;
  return (
    <button className={button({ variant, disabled })} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

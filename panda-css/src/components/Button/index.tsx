import { css, cx } from "../../../styled-system/css";
import { SystemStyleObject } from "../../../styled-system/types";
import { button } from "./recipe.local";

type ButtonProps = {
  variant: "filled" | "outlined" | "text";
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  css?: SystemStyleObject;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { icon, children, variant, disabled, onClick, css: cssProps } = props;
  return (
    <button
      className={cx(button({ variant, disabled }), css(cssProps))}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

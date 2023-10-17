import { cx, css } from "../../../../styled-system/css";
import { BaseButtonProps } from "../types.local";
import { button } from "./index.style";

type FilledButtonProps = BaseButtonProps;

export const FilledButton: React.FC<FilledButtonProps> = (props) => {
  const { icon, onClick, children, ...rest } = props;
  const [buttonProps, cssProps] = button.splitVariantProps(rest);
  console.debug("buttonProps", buttonProps);
  console.debug("cssProps", cssProps);

  return (
    <button
      className={cx(button(buttonProps), css(cssProps))}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

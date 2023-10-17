import { SystemStyleObject } from "../../../styled-system/types";

export type BaseButtonProps = {
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  css?: SystemStyleObject;
};

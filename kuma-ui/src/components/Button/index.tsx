import { Button as KumaButton } from "@kuma-ui/core";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <KumaButton>{children}</KumaButton>;
};

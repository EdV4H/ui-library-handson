import { button, stateLayer } from "./index.style";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={button({ variant: "filled" })} onClick={onClick}>
      {children}
    </button>
  );
};

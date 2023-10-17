import { button } from "./index.style";

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const TextButton: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button className={button({ disabled })} onClick={onClick}>
      {children}
    </button>
  );
};

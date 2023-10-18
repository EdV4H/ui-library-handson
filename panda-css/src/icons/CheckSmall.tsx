import { SVGProps } from "react";

export const CheckSmall: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path d="m10 16.05-3.825-3.825 1.05-1.05L10 13.95l6.775-6.775 1.05 1.05L10 16.05Z" />
  </svg>
);

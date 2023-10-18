import { divider, hstack } from "../../../styled-system/patterns";

type Inset = "fullWidth" | "lg" | "md";
type InsetPadding = "0" | "16px" | "8px";

type DividerProps = {
  inset?: Inset;
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
};

export const Divider: React.FC<DividerProps> = ({
  inset = "fullWidth",
  orientation = "horizontal",
  children,
}) => {
  const insetStyle = (
    {
      fullWidth: "0",
      lg: "16px",
      md: "8px",
    } satisfies Record<Inset, InsetPadding>
  )[inset];

  const dividerStyle = divider({
    flexGrow: 1,
    orientation: orientation,
    color: "outlineVariant",
  });

  return (
    <div
      className={hstack({
        width: "100%",
        gap: "8px",
        paddingX: insetStyle,
      })}
    >
      <div className={dividerStyle} />
      {children}
      {children && <div className={dividerStyle} />}
    </div>
  );
};

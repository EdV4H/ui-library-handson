import { sva } from "../../../styled-system/css";

export const radioGroup = sva({
  slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
  base: {
    root: {},
    label: {},
    item: {},
    itemText: {},
    itemControl: {},
    indicator: {},
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

import { checkbox as checkboxRecipe } from "./recipe.local";
import { CheckSmall } from "../../icons/CheckSmall.tsx";
import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/react";

export type CheckboxProps = {
  checked: boolean | "indeterminate";
  disabled?: boolean;
  onChange: (checked: boolean | "indeterminate") => void;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { root, control, icon } = checkboxRecipe({
    checked: props.checked,
    disabled: props.disabled,
  });

  const [state, send] = useMachine(
    checkbox.machine({
      id: "1",
      checked: props.checked,
      onCheckedChange(details) {
        props.onChange(details.checked);
      },
    })
  );
  const api = checkbox.connect(state, send, normalizeProps);

  return (
    <label {...api.rootProps} className={root}>
      <div {...api.controlProps} className={control}>
        {api.isIndeterminate && "-"}
        {api.isChecked && <CheckSmall className={icon} />}
      </div>
      <input {...api.hiddenInputProps} />
    </label>
  );
};

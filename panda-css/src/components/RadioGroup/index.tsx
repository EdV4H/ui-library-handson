import * as radio from "@zag-js/radio-group";
import { normalizeProps, useMachine } from "@zag-js/react";

const items = [
  { id: "apple", label: "Apple" },
  { id: "banana", label: "Banana" },
  { id: "orange", label: "Orange" },
];

export const RadioGroup = () => {
  const [state, send] = useMachine(radio.machine({ id: "1" }));

  const api = radio.connect(state, send, normalizeProps);

  return (
    <div {...api.rootProps}>
      {items.map((item) => (
        <label key={item.id} {...api.getItemProps({ value: item.id })}>
          <span {...api.getItemTextProps({ value: item.id })}>
            {item.label}
          </span>
          <input {...api.getItemHiddenInputProps({ value: item.id })} />
          <div {...api.getItemControlProps({ value: item.id })} />
        </label>
      ))}
    </div>
  );
};

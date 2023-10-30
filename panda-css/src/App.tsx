import { useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Divider } from "./components/Divider";
import { css } from "../styled-system/css";

function App() {
  const [count, setCount] = useState(0);
  const [variant, setVariant] = useState<"filled" | "outlined" | "text">(
    "filled"
  );
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  return (
    <>
      <div>
        <Button
          variant={variant}
          disabled={disabled}
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </Button>
        <Button
          variant={variant}
          disabled={disabled}
          onClick={() => setCount(count + 1)}
          css={{ backgroundColor: "red" }}
        >
          count is {count}
        </Button>
        <button onClick={() => setVariant("filled")}>filled</button>
        <button onClick={() => setVariant("outlined")}>outlined</button>
        <button onClick={() => setVariant("text")}>text</button>
        <button onClick={() => setDisabled(!disabled)}>toggle disabled</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
      <Divider inset="md" />

      <div>
        <Checkbox checked={checked} onChange={setChecked} disabled={disabled} />
      </div>
      <Divider>end</Divider>
    </>
  );
}

export default App;

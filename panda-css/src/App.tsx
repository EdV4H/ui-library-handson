import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [variant, setVariant] = useState<"filled" | "outlined" | "text">(
    "filled"
  );
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        disabled={disabled}
        onClick={() => setCount(count + 1)}
      >
        count is {count}
      </Button>
      <button onClick={() => setVariant("filled")}>filled</button>
      <button onClick={() => setVariant("outlined")}>outlined</button>
      <button onClick={() => setVariant("text")}>text</button>
      <button onClick={() => setDisabled(!disabled)}>toggle disabled</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
}

export default App;

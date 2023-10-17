import { useState } from "react";
import { OutlinedButton } from "./components/Button/OutlinedButton";
import { TextButton } from "./components/Button/TextButton";
import { FilledButton } from "./components/Button/FilledButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FilledButton onClick={() => setCount(count + 1)}>
        count is {count}
      </FilledButton>
      <FilledButton icon={<p>👋</p>} onClick={() => setCount(count + 1)}>
        count is {count}
      </FilledButton>
      <FilledButton disabled>Disabled</FilledButton>
      <OutlinedButton onClick={() => setCount(count + 1)}>
        count is {count}
      </OutlinedButton>
      <OutlinedButton disabled>Disabled</OutlinedButton>
      <TextButton onClick={() => setCount(count + 1)}>
        count is {count}
      </TextButton>
      <TextButton disabled>Disabled</TextButton>
    </>
  );
}

export default App;

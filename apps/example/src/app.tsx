import "@repo/react/styles.css";

import * as Header from "@repo/react/v3/blocks/header";
import * as Button from "@repo/react/v3/components/button";
import { Button as Btn } from "@repo/react";

export function App() {
  return (
    <div>
      <Button.Root>Button</Button.Root>

      <Btn.Root variant="neutral-secondary">Button</Btn.Root>

      <Header.Root></Header.Root>
    </div>
  );
}

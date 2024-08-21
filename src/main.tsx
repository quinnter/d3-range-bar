import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RangeBar from ".";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RangeBar
      rangeMin={0}
      rangeMax={100}
      minValue={25}
      maxValue={75}
      height={20}
      radius={5}
      theme="beatrice"
      width={300}
    />
  </StrictMode>
);

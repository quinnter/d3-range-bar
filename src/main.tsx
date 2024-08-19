import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RangeBar from ".";
import { weatherData } from "./data";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "100%" }}>
      {/* <RangeBar /> */}
      <RangeBar
        rangeMin={weatherData.weekMin}
        rangeMax={weatherData.weekMax}
        minValue={weatherData.week[0].dayMin}
        maxValue={weatherData.week[0].dayMax}
        height={20}
        radius={5}
        theme="poppy"
      />
      <RangeBar
        rangeMin={weatherData.weekMin}
        rangeMax={weatherData.weekMax}
        minValue={weatherData.week[1].dayMin}
        maxValue={weatherData.week[1].dayMax}
        height={20}
        radius={5}
        theme="poppy"
      />
    </div>
  </StrictMode>
);

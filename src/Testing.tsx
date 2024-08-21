import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import RangeBar from ".";

type Props = {};

export const Testing = (props: Props) => {
  const [width, setWidth] = React.useState<number>(0);

  return (
    <AnimatedDiv onResize={setWidth}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div style={{ color: "white", fontFamily: "Arial Narrow" }}>
          weeee!❀
        </div>
        <RangeBar
          rangeMin={0}
          rangeMax={100}
          minValue={25}
          maxValue={75}
          height={20}
          radius={5}
          theme="beatrice"
          width={width}
        />
      </div>
    </AnimatedDiv>
  );
};

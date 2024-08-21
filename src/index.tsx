import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import chroma from "chroma-js";
import { colourScales, ThemeName } from "./colourScales";

type Props = {
  rangeMin: number;
  rangeMax: number;
  minValue: number;
  maxValue: number;
  radius?: number;
  height?: number;
  colour?: string;
  theme?: ThemeName;
  width?: number;
};

function RangeBar({
  rangeMax = 100,
  rangeMin = 0,
  minValue = 0,
  maxValue = 100,
  radius = 12,
  height = 24,
  theme = "charli",
  width,
}: Props) {
  const marginLeft = 0;
  const marginRight = 0;

  const svgContainer = useRef(null);
  // const [width, setWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(width || 0);

  const uniqueId = useMemo(
    () => `clipRect-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  const getSvgContainerSize = () => {
    if (svgContainer.current) {
      const newWidth = svgContainer.current.clientWidth || 0;
      setContainerWidth(newWidth);
    }
  };

  useEffect(() => {
    if (width !== undefined) {
      // If width prop is provided, set the width and skip observing
      setContainerWidth(width);
    } else {
      // If width prop is not provided, observe the container's size
      getSvgContainerSize();

      const resizeObserver = new ResizeObserver(() => {
        getSvgContainerSize();
      });

      if (svgContainer.current) {
        resizeObserver.observe(svgContainer.current);
      }

      return () => {
        if (svgContainer.current) {
          resizeObserver.unobserve(svgContainer.current);
        }
      };
    }
  }, [width]);

  const colourScale = colourScales[theme].domain([rangeMin, rangeMax]);

  function palette(min: number, max: number) {
    const d = (max - min) / 11;
    return d3
      .scaleThreshold<number, string>()
      .range(colourScale.colors(11))
      .domain([
        min + d * 1,
        min + d * 2,
        min + d * 3,
        min + d * 4,
        min + d * 5,
        min + d * 6,
        min + d * 7,
        min + d * 8,
        min + d * 9,
        min + d * 10,
      ]);
  }

  function mapColoursToLinearGradientStops() {
    const stops = palette(rangeMin, rangeMax)
      .range()
      .map((colour, i) => {
        return {
          offset: `${(i / 10) * 100}%`,
          stopColor: chroma(colour).css(),
          stopOpacity: 1,
        };
      });
    return stops;
  }

  // Recalculate xScale whenever width, minValue, or maxValue changes
  const xScale = useMemo(() => {
    const scale = d3.scaleLinear(
      [rangeMin, rangeMax], // domain
      [marginLeft, containerWidth - marginRight] // range
    );
    return scale;
  }, [containerWidth, rangeMin, rangeMax]);

  const rectX = useMemo(() => {
    const value = xScale(minValue);
    return value;
  }, [xScale, minValue]);
  const rectWidth = useMemo(() => {
    const value = xScale(maxValue) - xScale(minValue);
    return value;
  }, [xScale, minValue, maxValue]);

  return (
    <div ref={svgContainer} style={{ width: "100%" }}>
      {containerWidth > 0 && (
        <svg
          width="100%"
          height={height}
          preserveAspectRatio="xMidYMid meet"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: radius,
          }}
        >
          <defs>
            <linearGradient
              id={`barGrad-${uniqueId}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {mapColoursToLinearGradientStops().map((stop) => (
                <stop
                  key={stop.offset}
                  offset={stop.offset}
                  stopColor={stop.stopColor}
                  stopOpacity={stop.stopOpacity}
                />
              ))}
            </linearGradient>
            <clipPath id={uniqueId}>
              <rect
                x={rectX}
                y={0}
                width={rectWidth}
                height={height}
                rx={radius}
                ry={radius}
              />
            </clipPath>
          </defs>
          <g>
            <rect
              key="backgroundBar"
              x={0}
              width={containerWidth}
              height={height}
              fill={`url(#barGrad-${uniqueId})`}
              clipPath={`url(#${uniqueId})`}
            />
          </g>
        </svg>
      )}
    </div>
  );
}

export default RangeBar;

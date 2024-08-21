import { Meta } from "@storybook/react";
import RangeBar from "../index";
import { StoryObj } from "@storybook/react";
import { colourScales, ThemeName } from "../colourScales";
import { weatherData } from "../data";
import bratAlbum from "../assets/bratAlbum.png";
import { Testing } from "../Testing";

const themeOptions = Object.keys(colourScales) as ThemeName[];
const themeLabels = themeOptions.reduce(
  (acc, theme) => {
    acc[theme] = theme;
    return acc;
  },
  {} as Record<ThemeName, string>
);

const themeArgType = {
  control: {
    type: "select" as const,
    labels: themeLabels,
  },
  options: themeOptions,
  mapping: themeLabels,
};

const meta = {
  title: "RangeBar",
  component: RangeBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    rangeMin: {
      control: {
        type: "number",
      },
    },
    rangeMax: {
      control: {
        type: "number",
      },
    },
    minValue: {
      control: {
        type: "number",
      },
    },
    maxValue: {
      control: {
        type: "number",
      },
    },
    radius: {
      control: {
        type: "number",
      },
    },
    height: {
      control: {
        type: "number",
      },
    },
    colour: {
      control: {
        type: "color",
      },
    },
    theme: themeArgType,
  },
  args: { rangeMin: 0, rangeMax: 100, minValue: 20, maxValue: 74 },
} satisfies Meta<typeof RangeBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "400px" }}>
      <RangeBar {...args} />
    </div>
  ),
};

export const WeatherCard: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        backgroundColor: "cornflowerblue",
        padding: "3em",
        borderRadius: "12px",
        fontFamily: "Rubik",
        color: "white",
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 500, paddingBottom: "0.5em" }}>
        Good Morning 🌞
      </div>
      {weatherData.week.map((day, i) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: "0.5em",
              gap: "0.5em",
            }}
          >
            <div style={{ width: 40, fontWeight: 500 }}>{day.day}</div>
            <span style={{ width: 20 }} />
            <div style={{ display: "flex", gap: "0.5em", width: "100%" }}>
              <div style={{ opacity: 0.5, width: 20 }}>{day.dayMin}</div>
              <RangeBar
                key={i}
                rangeMin={weatherData.weekMin}
                rangeMax={weatherData.weekMax}
                minValue={day.dayMin}
                maxValue={day.dayMax}
                height={12}
                radius={4}
                theme="poppy"
              />
              <div>{day.dayMax}</div>
            </div>
          </div>
        );
      })}
    </div>
  ),
};

export const CharliXCX: Story = {
  render: () => (
    <div
      style={{
        width: "500px",
        borderRadius: "12px",
        height: "200px",
        fontFamily: "Arial Narrow",
        display: "flex",
        padding: "12px",
      }}
    >
      <img src={bratAlbum} />
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1em",
        }}
      >
        <div>
          <div style={{ fontSize: 48 }}>B2b</div>
          <div style={{ fontSize: 24 }}>Charli XCX</div>
        </div>

        <div>
          <div>The best part is here ⤵</div>
          <div
            style={{
              display: "flex",
              gap: "0.5em",
              justifyContent: "center",
            }}
          >
            <span>0:00</span>
            <RangeBar
              rangeMin={0}
              rangeMax={178}
              minValue={75}
              maxValue={108}
              height={12}
              radius={4}
              theme="charli"
            />
            <span>2:58</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AnimatedDiv: Story = {
  args: {
    maxValue: 100
  },

  render: () => <Testing />
};

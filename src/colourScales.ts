import chroma from "chroma-js";

export const colourScales = {
  amy: chroma.scale(["#221F1D"]),
  barbara: chroma.scale(["#F0E7D6"]),
  beatrice: chroma.scale(["#001361"]),
  brit: chroma.scale(["#728234"]),
  brody: chroma.scale(["#76000B"]),
  charli: chroma.scale(["#78C008"]),
  chappell: chroma.scale(["#A31C06"]),
  clementine: chroma.scale(["#EF9D8B"]),
  dolly: chroma.scale(["#E17897"]),
  erykha: chroma.scale(["#AAEFF1"]),
  florence: chroma.scale(["#3A7B6C"]),
  gaga: chroma.scale(["#437EF1"]),
  hayley: chroma.scale(["#D64F10"]),
  hemlocke: chroma.scale(["#8E97D4"]),
  pj: chroma.scale(["#2F412C"]),
  poppy: chroma.scale(["#F7A327"]),
  remi: chroma.scale(["#7D2C23"]),
  rina: chroma.scale(["#91B4DE"]),
  riri: chroma.scale(["#D0B3A5"]),
  shania: chroma.scale(["#A30B4C"]),
  sophie: chroma.scale(["#AD87C7"]),
  stevie: chroma.scale(["#B82BB2"]),
  sza: chroma.scale(["#432397"]),
  yukimi: chroma.scale(["#39BE5B"]),
} as const;

export type ThemeName = keyof typeof colourScales;

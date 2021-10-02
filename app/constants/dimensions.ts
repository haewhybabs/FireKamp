import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const screenHeight = (num) => {
  return (num / 100) * height;
};

export const screenWidth = (num) => {
  return (num / 100) * width;
};

export const WIDTH = width;

import React from "react";
import { Platform, Text, Dimensions, PixelRatio} from "react-native";
import { black, textColor } from "../../constants/colors";
interface TextsProps{
  children?:any,
  style?:any,
  scale?:any,
  bigFont?:any,
  medium?:any,
  bold?:any,
  regular?:any
}
export default function Texts({
  children,
  style,
  scale,
  bigFont,
  medium,
  bold,
  regular,
}:TextsProps) {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  function actuatedNormalize(size:any) {
    const scale = SCREEN_WIDTH / 340;
    const newSize = size * scale;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
  return (
    <Text
      style={[
        {color:black},
        style,
        bigFont && { fontSize: 24, lineHeight: 32 },
        scale && { fontSize: scale && actuatedNormalize(12) },
      ]}
    >
      {children}
    </Text>
  );
}
const fontWeight = {
  regular: {
    android: "normal",
    ios: "400",
  },
  medium: {
    android: "normal",
    ios: "500",
  },
  bold: {
    android: "bold",
    ios: "700",
  },
  extrabold: {
    android: "bold",
    ios: "900",
  },
  light: {
    android: "normal",
    ios: "300",
  },
};

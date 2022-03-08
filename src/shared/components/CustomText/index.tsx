import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { useFonts } from "expo-font";

type CustomTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  fontFamily?: keyof typeof fontList;
  fontSize?: number;
  color?: string;
} & TextProps;

const fontList = {
  OpenSansRegular: require("../../../../assets/fonts/OpenSans-Regular.ttf"),
  OpenSansSemiBold: require("../../../../assets/fonts/OpenSans-SemiBold.ttf"),
  OpenSansBold: require("../../../../assets/fonts/OpenSans-Bold.ttf"),
};

export default function CustomText({
  children,
  style,
  fontFamily = "OpenSansRegular",
  fontSize,
  color = "white",
  ...otherProps
}: CustomTextProps) {
  const [loaded] = useFonts(fontList);

  return (
    <>
      {loaded ? (
        <Text
          style={{ fontFamily, fontSize, color, ...(style as object) }}
          {...otherProps}
        >
          {children}
        </Text>
      ) : (
        <Text>{children}</Text>
      )}
    </>
  );
}

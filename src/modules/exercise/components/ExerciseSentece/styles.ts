import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 50,
  },
  wordLine: {
    height: 1.4,
    marginBottom: 3,
    marginHorizontal: 8,
    width: 90,
    backgroundColor: "white",
  },
  optionContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    margin: 8,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
});

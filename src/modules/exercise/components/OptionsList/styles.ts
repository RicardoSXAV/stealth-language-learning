import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export const styles = StyleSheet.create({
  optionContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    margin: 8,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 40,
  },
});

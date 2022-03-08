import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants/colors";

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  exerciseWrapper: {
    flexDirection: "column",
    alignItems: "center",
    height: 620,
    paddingHorizontal: 10,
    backgroundColor: COLORS.backgroundBlackBlue,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  continueButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingHorizontal: 110,
    paddingVertical: 20,
    marginTop: 50,
    borderRadius: 50,
  },
  checkButton: {
    backgroundColor: COLORS.correctBlue,
    paddingHorizontal: 110,
    paddingVertical: 20,
    marginTop: 50,
    borderRadius: 50,
  },
});

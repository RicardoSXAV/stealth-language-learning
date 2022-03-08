import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    padding: 30,
    paddingHorizontal: 50,
    top: "75%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  continueButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 20,
    marginTop: 30,
    borderRadius: 50,
  },
});

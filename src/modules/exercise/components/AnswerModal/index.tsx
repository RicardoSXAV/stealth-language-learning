import { View, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import CustomText from "../../../../shared/components/CustomText";
import { COLORS } from "../../../../constants/colors";

type AnswerModalProps = {
  type: "success" | "fail";
  answer?: string;
  onPressContinue?: Function;
  setModal?: Function;
};

export default function AnswerModal({
  type,
  answer,
  onPressContinue,
  setModal,
}: AnswerModalProps) {
  const color = {
    success: COLORS.correctBlue,
    fail: COLORS.wrongRed,
  };

  const handleContinue = () => {
    onPressContinue?.();
    setModal?.();
  };

  const textColor = type === "success" ? COLORS.correctBlue : COLORS.wrongRed;

  return (
    <View style={[styles.modalContainer, { backgroundColor: color[type] }]}>
      {type === "success" ? (
        <CustomText fontSize={15} fontFamily="OpenSansBold">
          Great job!
        </CustomText>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <CustomText fontSize={15} fontFamily="OpenSansBold">
            Answer:
          </CustomText>
          <CustomText fontSize={15}>{"  " + answer}</CustomText>
        </View>
      )}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <CustomText fontFamily="OpenSansBold" style={{ color: textColor }}>
          CONTINUE
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

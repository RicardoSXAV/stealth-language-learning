import { View } from "react-native";

import { styles } from "./styles";
import CustomText from "../../../../shared/components/CustomText";
import { COLORS } from "../../../../constants/colors";
import { ModalObject } from "../../contexts/ModalContext";

type ExerciseSentenceProps = {
  sentence: string;
  missingWord: string;
  selectedWord?: string;
  modal?: ModalObject;
};

export default function ExerciseSentence({
  sentence,
  missingWord,
  selectedWord,
  modal,
}: ExerciseSentenceProps) {
  const splittedSentence = sentence.split(missingWord);

  const answerStyle =
    modal?.type === "success"
      ? { backgroundColor: COLORS.correctBlue }
      : modal?.type === "fail"
      ? { backgroundColor: COLORS.wrongRed }
      : {};

  return (
    <View
      style={
        selectedWord
          ? [styles.rowContainer, { alignItems: "center" }]
          : styles.rowContainer
      }
    >
      <CustomText fontFamily="OpenSansSemiBold" fontSize={20}>
        {splittedSentence[0]}
      </CustomText>

      {selectedWord ? (
        <View style={[styles.optionContainer, answerStyle]}>
          <CustomText
            fontFamily="OpenSansBold"
            fontSize={20}
            color={!modal ? COLORS.blackGray : COLORS.white}
          >
            {selectedWord}
          </CustomText>
        </View>
      ) : (
        <View style={styles.wordLine} />
      )}

      <CustomText fontFamily="OpenSansSemiBold" fontSize={20}>
        {splittedSentence[1]}
      </CustomText>
    </View>
  );
}

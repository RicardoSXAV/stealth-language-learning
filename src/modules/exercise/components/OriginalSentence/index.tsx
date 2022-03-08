import { View } from "react-native";
import CustomText from "../../../../shared/components/CustomText";

import { styles } from "./styles";

type OriginalSenteceProps = {
  sentence: string;
  highlight: string;
};

export default function OriginalSentence({
  sentence,
  highlight,
}: OriginalSenteceProps) {
  const splittedSentence = sentence.split(highlight);

  return (
    <View style={styles.sentenceContainer}>
      <CustomText style={styles.titleText} fontFamily="OpenSansRegular">
        {splittedSentence[0]}
      </CustomText>

      <View>
        <CustomText style={styles.titleText} fontFamily="OpenSansBold">
          {highlight}
        </CustomText>
        <View style={styles.line} />
      </View>

      <CustomText style={styles.titleText} fontFamily="OpenSansRegular">
        {splittedSentence[1]}
      </CustomText>
    </View>
  );
}

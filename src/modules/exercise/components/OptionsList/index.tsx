import { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";

import { COLORS } from "../../../../constants/colors";
import CustomText from "../../../../shared/components/CustomText";
import { ModalObject } from "../../contexts/ModalContext";
import { styles } from "./styles";

type OptionsListProps = {
  options: string[];
  selectedWord: string;
  onOptionPress: (option: string) => any;
  modal: ModalObject | undefined;
};

export default function OptionsList({
  options,
  selectedWord,
  onOptionPress,
  modal,
}: OptionsListProps) {
  const disabledStyle = modal && {
    backgroundColor: COLORS.mediumGray,
    color: COLORS.blackGray,
  };

  return (
    <View style={styles.listContainer}>
      {options.map((option, index) =>
        option !== selectedWord ? (
          <TouchableOpacity
            style={[styles.optionContainer, disabledStyle]}
            onPress={() => onOptionPress(option)}
            disabled={Boolean(modal)}
            key={index}
          >
            <CustomText
              fontFamily="OpenSansBold"
              fontSize={20}
              color={COLORS.blackGray}
            >
              {option}
            </CustomText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.optionContainer,
              { backgroundColor: COLORS.mediumBlue },
            ]}
            key={index}
            disabled
          >
            <CustomText
              fontFamily="OpenSansBold"
              fontSize={20}
              color="transparent"
            >
              {option}
            </CustomText>
          </TouchableOpacity>
        )
      )}
    </View>
  );
}

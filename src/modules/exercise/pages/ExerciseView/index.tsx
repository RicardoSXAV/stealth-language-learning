import { useEffect, useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { getExercises } from "../../services/exercise";
import { Exercise } from "../../../../shared/types";
import CustomText from "../../../../shared/components/CustomText";
import OriginalSentence from "../../components/OriginalSentence";
import ExerciseSentence from "../../components/ExerciseSentece";
import OptionsList from "../../components/OptionsList";
import { useModal } from "../../contexts/ModalContext";
import { defaultList } from "../../../../data/exercises";

export default function ExerciseView() {
  const [exercises, setExercises] = useState<Exercise[]>(defaultList);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string>("");

  const { viewModal, modal } = useModal();

  const goToNextExercise = () => {
    if (currentExercise + 1 === exercises.length) {
      setCurrentExercise(0);
      setSelectedWord("");
      return;
    }

    setCurrentExercise((prev) => prev + 1);
    setSelectedWord("");
  };

  const checkAnswer = () => {
    if (exercises[currentExercise].missingWord === selectedWord) {
      viewModal("success", goToNextExercise);
    } else {
      viewModal(
        "fail",
        goToNextExercise,
        exercises[currentExercise].missingWord
      );
    }
  };

  useEffect(() => {
    (async () => {
      const result = await getExercises();

      if (result.length > 0) {
        setExercises(result);
      }
    })();
  }, []);

  const exercise = exercises[currentExercise];

  return (
    <View style={styles.globalContainer}>
      <View style={styles.exerciseWrapper}>
        <CustomText style={{ color: "white", marginTop: 80 }}>
          Fill in the missing word
        </CustomText>

        <OriginalSentence
          sentence={exercise.sentence}
          highlight={exercise.originalWord}
        />

        <ExerciseSentence
          sentence={exercise.translatedSentence}
          missingWord={exercise.missingWord}
          selectedWord={selectedWord}
          modal={modal}
        />

        <OptionsList
          options={[exercise.missingWord, ...exercise.wrongOptions]}
          selectedWord={selectedWord}
          onOptionPress={setSelectedWord}
          modal={modal}
        />

        {selectedWord ? (
          <TouchableOpacity style={styles.checkButton} onPress={checkAnswer}>
            <CustomText fontFamily="OpenSansBold">CHECK ANSWER</CustomText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.continueButton} disabled>
            <CustomText fontFamily="OpenSansBold">CONTINUE</CustomText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

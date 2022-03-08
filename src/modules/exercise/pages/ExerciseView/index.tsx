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

export default function ExerciseView() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string>("");

  const { viewModal, modal } = useModal();

  const goToNextExercise = () => {
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
      setExercises(result);
    })();
  }, []);

  const defaultList = [
    {
      sentence: "The house is small.",
      translatedSentence: "Das Hause ist klein.",
      missingWord: "Hause",
      originalWord: "house",
      wrongOptions: ["folgen", "Schaf", "Bereiden"],
    },
    {
      sentence: "The dog is funny.",
      translatedSentence: "Der Hund ist lustig.",
      missingWord: "lustig",
      originalWord: "funny",
      wrongOptions: ["folgen", "Schaf", "Bereiden"],
    },
    {
      sentence: "She eat an apple.",
      translatedSentence: "Sie isst einen Apfel.",
      missingWord: "isst",
      originalWord: "eat",
      wrongOptions: ["folgen", "Schaf", "Bereiden"],
    },
    {
      sentence: "They walk slowly.",
      translatedSentence: "Sie gehen langsam.",
      missingWord: "langsam",
      originalWord: "slowly",
      wrongOptions: ["folgen", "Schaf", "Bereiden"],
    },
    {
      sentence: "Today is your birthday.",
      translatedSentence: "Heute ist dein Geburtstag.",
      missingWord: "Heute",
      originalWord: "Today",
      wrongOptions: ["folgen", "Schaf", "Bereiden"],
    },
  ];

  const exercise = exercises[currentExercise] || defaultList[currentExercise];

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

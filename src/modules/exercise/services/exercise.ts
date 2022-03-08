import { database } from "../../../config/firebaseConfig";
import { Exercise } from "../../../shared/types";

const exercisesCollectionRef = database.collection("exercises");

export const getExercises = async (): Promise<Exercise[]> => {
  const data = await exercisesCollectionRef.get();

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

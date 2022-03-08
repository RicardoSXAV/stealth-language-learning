import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  /* Your firebaseConfig */
};

const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore(app);

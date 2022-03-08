import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  /* Your firebaseConfig */
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore(app);

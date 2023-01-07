import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Query,
} from "firebase/firestore/lite";
import Excercise from "../model/exercise/excercise";

const firebaseConfig = {
  //Get the config from Firebase website.
  apiKey: "AIzaSyDmr8q4JuzLV7Xy4YZfF8xj_5fiYvwtUQ8",
  authDomain: "workoutpartner-2be4d.firebaseapp.com",
  projectId: "workoutpartner-2be4d",
  storageBucket: "workoutpartner-2be4d.appspot.com",
  messagingSenderId: "564734617592",
  appId: "1:564734617592:web:c5f3e1b3c19efd41db180d",
  measurementId: "G-L2PX1JRHRJ",
};

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const analytics = getAnalytics(fireBaseApp);

class FirebaseRepository {
  static async query() {
    const excerciesesCol: Query<any> = collection(db, "excercise");
    const dataSnapshot = await getDocs(excerciesesCol);
    const excercieses: Excercise[] = dataSnapshot.docs.map((doc) => doc.data());
    console.log(excercieses);
    return excercieses;
  }

  static async add() {
    await addDoc(collection(db, "excercise"), {
      bodyPart: "leg",
      name: "dead lift",
      repetition: 8,
      weight: 70,
    });
  }
}

export default FirebaseRepository;

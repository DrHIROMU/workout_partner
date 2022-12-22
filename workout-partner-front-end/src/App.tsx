import React, { useEffect } from "react";
import "./App.scss";
import Record from "./component/record/record";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Query,
} from "firebase/firestore/lite";
import Excercise from "./model/exercise/excercise";

const firebaseConfig = {
  //Get the config from Firebase website.
};

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const analytics = getAnalytics(fireBaseApp);

async function query() {
  const excerciesesCol: Query<any> = collection(db, "excercise");
  const dataSnapshot = await getDocs(excerciesesCol);
  const excercieses: Excercise[] = dataSnapshot.docs.map((doc) => doc.data());
  console.log(excercieses);
  return excercieses;
}

async function add() {
  await addDoc(collection(db, "excercise"), {
    bodyPart: "leg",
    name: "dead lift",
    repetition: 8,
    weight: 70,
  });
}

function App() {
  useEffect(() => {
    query();
    //add();
  });

  return (
    <div className="App">
      <Record></Record>
    </div>
  );
}

export default App;

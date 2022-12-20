import React from "react";
import "./App.scss";
import Record from "./component/record/record";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmr8q4JuzLV7Xy4YZfF8xj_5fiYvwtUQ8",
  authDomain: "workoutpartner-2be4d.firebaseapp.com",
  projectId: "workoutpartner-2be4d",
  storageBucket: "workoutpartner-2be4d.appspot.com",
  messagingSenderId: "564734617592",
  appId: "1:564734617592:web:c5f3e1b3c19efd41db180d",
  measurementId: "G-L2PX1JRHRJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Record></Record>
    </div>
  );
}

export default App;

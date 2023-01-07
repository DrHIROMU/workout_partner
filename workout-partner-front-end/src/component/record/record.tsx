import { query } from "firebase/firestore/lite";
import { useEffect } from "react";
import "./record-style.scss";
import FirebaseRepository from "../../service/firebase-service";

function Record(props: {}) {
  useEffect(() => {
    FirebaseRepository.query();
    //add();
  });

  return (
    <div>
      <span className="notice">test</span>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Record;

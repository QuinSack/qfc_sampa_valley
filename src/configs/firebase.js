import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCopgVs2Fd7BnOE9QwCCMlY28lm77K3g0E",
  authDomain: "qfc-sampa-valley.firebaseapp.com",
  projectId: "qfc-sampa-valley",
  storageBucket: "qfc-sampa-valley.appspot.com",
  messagingSenderId: "503523112024",
  appId: "1:503523112024:web:999a436e4921e02232862d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Conecta con Firestore NoSQL
//Pendiente modificar apiKey por seguridad

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtxIO--zSxbV2ODigqE8DccPDoCxwyJpE",
  authDomain: "encuentratuaula-454d9.firebaseapp.com",
  projectId: "encuentratuaula-454d9",
  storageBucket: "encuentratuaula-454d9.firebasestorage.app",
  messagingSenderId: "709373717033",
  appId: "1:709373717033:web:cf09fc32f95050aac5ca38",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

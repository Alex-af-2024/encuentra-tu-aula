// Hace las querys directamente a la colección aulas

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getAulaByCode = async (codigoNormalizado) => {
  try {
    const aulasRef = collection(db, "aulas");

    const q = query(
      aulasRef,
      where("codigoNormalizado", "==", codigoNormalizado),
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    // Tomamos el primer resultado
    return snapshot.docs[0].data();
  } catch (error) {
    console.error("Error al consultar aula:", error);
    throw error;
  }
};

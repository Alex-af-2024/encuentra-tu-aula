// Hace que al escribir en App React el código, busque en Firebase lo necesario

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getAulaByCodigo = async (codigoNormalizado) => {
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

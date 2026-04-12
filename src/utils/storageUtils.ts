import { HistoryItem, Aula } from "../types";

// Guardar búsqueda en historial
export const addSearchToHistory = (codigoNormalizado: string, aulaData: Aula): void => {
  const history = getSearchHistory();

  const newSearch: HistoryItem = {
    id: Date.now(),
    codigo: codigoNormalizado,
    aulaData: aulaData,
    timestamp: new Date().toISOString(),
  };

  // Agregar al inicio y limitar a 20 elementos
  const updatedHistory = [newSearch, ...history].slice(0, 20);
  localStorage.setItem("aulaSearchHistory", JSON.stringify(updatedHistory));
};

// Obtener historial de búsquedas
export const getSearchHistory = (): HistoryItem[] => {
  try {
    const history = localStorage.getItem("aulaSearchHistory");
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error("Error reading search history:", error);
    return [];
  }
};

// Limpiar historial
export const clearSearchHistory = (): void => {
  localStorage.removeItem("aulaSearchHistory");
};

// Eliminar un elemento del historial
export const removeFromHistory = (id: number): void => {
  const history = getSearchHistory();
  const filtered = history.filter((item) => item.id !== id);
  localStorage.setItem("aulaSearchHistory", JSON.stringify(filtered));
};

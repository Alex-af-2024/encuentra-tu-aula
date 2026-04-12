export interface Aula {
  campus: string;
  pabellon: string;
  piso: string;
  codigoNormalizado: string;
  // Añadir más campos según lo que devuelva el documento de firebase (e.g., name, capacity, etc.)
  [key: string]: any;
}

export interface HistoryItem {
  id: number;
  codigo: string;
  aulaData: Aula;
  timestamp: string;
}

export const normalizeCode = (code: string): string => {
  if (!code) return "";

  // Transforma input a UpperCase, reemplaza espacios vacios y guiones en "". No se necesita trim()
  return code.toUpperCase().replace(/[\s-]/g, "");
};

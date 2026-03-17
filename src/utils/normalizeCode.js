export const normalizeCode = (code) => {
  if (!code) return "";

  return code.toUpperCase().replace(/-/g, "").trim();
};

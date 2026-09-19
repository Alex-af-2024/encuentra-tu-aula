import { normalizeCode } from "./normalizeCode";

describe("normalizeCode", () => {
  it("devuelve una cadena vacía cuando recibe una cadena vacía", () => {
    expect(normalizeCode("")).toBe("");
  });

  it("convierte las letras a mayúsculas", () => {
    expect(normalizeCode("s-01-p02-a")).toBe("S01P02A");
  });

  it("elimina espacios y guiones", () => {
    expect(normalizeCode("S - 01 - P02 - A")).toBe("S01P02A");
    expect(normalizeCode(" s 01 p02 a ")).toBe("S01P02A");
  });

  it("normaliza códigos con minúsculas y espacios mixtos", () => {
    expect(normalizeCode(" t - 00 - p04 - r ")).toBe("T00P04R");
  });
});

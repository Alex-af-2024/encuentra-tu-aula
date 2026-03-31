import { useState, forwardRef, useImperativeHandle } from "react";
import "./SearchBar.css";
import { normalizeCode } from "../../utils/normalizeCode";

const SearchBar = forwardRef(({ onSearch }, ref) => {
  const [input, setInput] = useState("");

  useImperativeHandle(ref, () => ({
    clearInput: () => setInput(""),
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = normalizeCode(input);

    if (!normalized) return;

    onSearch(normalized);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        id="search-input"
        type="text"
        placeholder="Ej: S-02-P03-B"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />

      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;

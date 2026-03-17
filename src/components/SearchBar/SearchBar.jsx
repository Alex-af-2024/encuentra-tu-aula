import { useState } from "react";
import "./SearchBar.css";
import { normalizeCode } from "../../utils/normalizeCode";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = normalizeCode(input);

    if (!normalized) return;

    onSearch(normalized);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
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
};

export default SearchBar;

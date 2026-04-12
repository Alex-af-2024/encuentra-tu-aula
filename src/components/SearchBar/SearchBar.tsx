import { useState, forwardRef, useImperativeHandle } from "react";
import { normalizeCode } from "../../utils/normalizeCode";

interface SearchBarProps {
  onSearch: (codigo: string) => void;
}

export interface SearchBarHandle {
  clearInput: () => void;
}

const SearchBar = forwardRef<SearchBarHandle, SearchBarProps>(({ onSearch }, ref) => {
  const [input, setInput] = useState("");

  useImperativeHandle(ref, () => ({
    clearInput: () => setInput(""),
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeCode(input);
    if (!normalized) return;
    onSearch(normalized);
  };

  return (
    <form className="w-full relative glass-card p-2 group focus-within:ring-2 focus-within:ring-accent transition-all shadow-md" onSubmit={handleSubmit}>
      <input
        id="search-input"
        type="text"
        placeholder="Ej: S-02-P03-B / S02P03B"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-transparent border-none text-slate-800 text-lg px-4 py-3 placeholder:text-slate-400 focus:outline-none"
      />

      <button 
        type="submit" 
        className="absolute right-2 top-2 bottom-2 bg-accent hover:bg-teal-700 text-white font-medium px-6 rounded-2xl transition-all shadow-md active:scale-95 flex items-center justify-center"
      >
        Buscar
      </button>
    </form>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;

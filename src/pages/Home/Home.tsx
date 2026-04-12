import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import SearchBar, { SearchBarHandle } from "../../components/SearchBar/SearchBar";
import AulaResult from "../../components/AulaResult/AulaResult";
import { getAulaByCode } from "../../services/aulaService";
import { addSearchToHistory } from "../../utils/storageUtils";
import { Aula } from "../../types";

export interface HomeHandle {
  resetSearch: () => void;
  displayAula: (codigo: string, aulaData: Aula) => void;
}

const Home = forwardRef<HomeHandle>((_props, ref) => {
  const searchBarRef = useRef<SearchBarHandle>(null);
  const [aula, setAula] = useState<Aula | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [_searchCode, setSearchCode] = useState<string>("");

  useImperativeHandle(ref, () => ({
    resetSearch: () => {
      setAula(null);
      setError("");
      setSearchCode("");
      if (searchBarRef.current) {
        searchBarRef.current.clearInput();
      }
    },
    displayAula: (codigo: string, aulaData: Aula) => {
      setAula(aulaData);
      setSearchCode(codigo);
      setError("");
    },
  }));

  const handleSearch = async (codigoNormalizado: string) => {
    setLoading(true);
    setError("");
    setAula(null);
    setSearchCode(codigoNormalizado);

    try {
      const result = await getAulaByCode(codigoNormalizado);

      if (!result) {
        setError("No se encontró el aula");
      } else {
        setAula(result);
        addSearchToHistory(codigoNormalizado, result);
      }
    } catch (err) {
      setError("Error al consultar el aula");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full h-full pb-8">
      <div className="w-full text-center mt-8 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-emerald-500 drop-shadow-sm tracking-tight mb-2">
          EncuentraTuAula
        </h1>
        <p className="text-slate-500 font-medium tracking-wide">BUSCADOR DE AULAS</p>
      </div>

      <SearchBar ref={searchBarRef} onSearch={handleSearch} />

      <div className="w-full mt-8 animate-fade-in transition-all">
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-teal-200 border-t-accent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="glass-card bg-red-50/80 border-red-200 p-6 text-center text-red-600 font-medium">
            <span className="block text-3xl mb-2">😕</span>
            <p>{error}</p>
          </div>
        )}

        {aula && !loading && !error && <AulaResult aula={aula} />}
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;

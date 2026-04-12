import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import SearchBar, { SearchBarHandle } from "../../components/SearchBar/SearchBar";
import AulaResult from "../../components/AulaResult/AulaResult";
import { getAulaByCode } from "../../services/aulaService";
import { addSearchToHistory } from "../../utils/storageUtils";
import { Aula } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
        {!aula && (
          <motion.div
            key="search-container"
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full text-center mt-8 mb-10">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-emerald-500 drop-shadow-sm tracking-tight mb-2">
                EncuentraTuAula
              </h1>
              <p className="text-slate-500 font-medium tracking-wide">BUSCADOR DE AULAS</p>
            </div>

            <SearchBar ref={searchBarRef} onSearch={handleSearch} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full mt-8">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center items-center py-10"
            >
              <div className="w-10 h-10 border-4 border-teal-200 border-t-accent rounded-full animate-spin"></div>
            </motion.div>
          )}

          {error && !loading && (
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass-card bg-red-50/80 border-red-200 p-6 text-center text-red-600 font-medium"
            >
              <span className="block text-3xl mb-2">😕</span>
              <p>{error}</p>
            </motion.div>
          )}

          {aula && !loading && !error && (
            <motion.div 
              key="aula-result"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <AulaResult aula={aula} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;

import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getAulaByCode } from "../../services/aulaService";
import { addSearchToHistory } from "../../utils/storageUtils";
import "./Home.css";
import sanJoaquinImg from "../../assets/images/san-joaquin.jpg";
import raquelImg from "../../assets/images/raquel.jpg";

const Home = forwardRef((props, ref) => {
  const searchBarRef = useRef(null);
  const [aula, setAula] = useState(null); //constantes seteables 7,8,9
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchCode, setSearchCode] = useState("");

  // Métodos expuestos a través de ref
  useImperativeHandle(ref, () => ({
    resetSearch: () => {
      setAula(null);
      setError("");
      setSearchCode("");
      if (searchBarRef.current) {
        searchBarRef.current.clearInput();
      }
    },
    displayAula: (codigo, aulaData) => {
      setAula(aulaData);
      setSearchCode(codigo);
      setError("");
    },
  }));

  const handleSearch = async (codigoNormalizado) => {
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
        // Guardar búsqueda en historial
        addSearchToHistory(codigoNormalizado, result);
      }
    } catch (err) {
      setError("Error al consultar el aula");
    }

    setLoading(false);
  };

  const getImageByCode = (codigo) => {
    const parts = codigo.split("-");
    const lastPart = parts[parts.length - 1];
    if (["A", "B", "C"].includes(lastPart)) {
      return sanJoaquinImg;
    } else if (lastPart === "R") {
      return raquelImg;
    }
    return null;
  };

  return (
    <div className="home-container">
      <h1 className="title">EncuentraTuAula</h1>

      <SearchBar ref={searchBarRef} onSearch={handleSearch} />

      {loading && <p className="loading-text">Buscando aula...</p>}

      {error && <p className="error-text">{error}</p>}

      {aula && (
        <div className="result-box">
          <h2 className="aula-title">{aula.codigo}</h2>

          <p>
            <strong>Sede:</strong> {aula.sede}
          </p>
          <p>
            <strong>Edificio:</strong> {aula.edificio}
          </p>
          <p>
            <strong>Piso:</strong> {aula.piso}
          </p>

          {getImageByCode(aula.codigo) && (
            <img
              src={getImageByCode(aula.codigo)}
              alt="Imagen del aula"
              className="result-image"
            />
          )}

          <p className="guide-text">
            <strong>Guía:</strong> {aula.guia}
          </p>
        </div>
      )}
    </div>
  );
});

Home.displayName = "Home";

export default Home;

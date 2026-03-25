import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getAulaByCode } from "../../services/aulaService";
import "./Home.css";

const Home = () => {
  const [aula, setAula] = useState(null); //constantes seteables 7,8,9
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (codigoNormalizado) => {
    setLoading(true);
    setError("");
    setAula(null);

    try {
      const result = await getAulaByCode(codigoNormalizado);

      if (!result) {
        setError("No se encontró el aula");
      } else {
        setAula(result);
      }
    } catch (err) {
      setError("Error al consultar el aula");
    }

    setLoading(false);
  };

  return (
    <div className="home-container">
      <h1 className="title">EncuentraTuAula</h1>

      <SearchBar onSearch={handleSearch} />

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

          <p className="guide-text">
            <strong>Guía:</strong> {aula.guia}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;

import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

const Home = () => {
  const [codigo, setCodigo] = useState("");

  const handleSearch = (normalizedCode) => {
    console.log("Código normalizado:", normalizedCode);
    setCodigo(normalizedCode);
  };

  return (
    <div className="home-container">
      <h1>Encuentra Tu Aula</h1>

      <SearchBar onSearch={handleSearch} />

      {codigo && <p className="result-text">Buscando aula: {codigo}</p>}
    </div>
  );
};

export default Home;

import { useState, useRef } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const homeRef = useRef(null);

  const handleNavigateHome = () => {
    if (homeRef.current) {
      homeRef.current.resetSearch();
      window.scrollTo(0, 0);
    }
  };

  const handleSelectFromHistory = (codigo, aulaData) => {
    if (homeRef.current) {
      homeRef.current.displayAula(codigo, aulaData);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="app-container">
      <Home ref={homeRef} />
      <Navbar
        onNavigateHome={handleNavigateHome}
        onSelectFromHistory={handleSelectFromHistory}
        onResetInput={() => homeRef.current?.resetSearch()}
      />
    </div>
  );
}

export default App;

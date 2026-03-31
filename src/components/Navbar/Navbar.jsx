import { useState } from "react";
import "./Navbar.css";
import HistoryModal from "../History/HistoryModal";
import HelpModal from "../Help/HelpModal";

const Navbar = ({ onNavigateHome, onSelectFromHistory, onResetInput }) => {
  const [showHistory, setShowHistory] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleHomeClick = () => {
    if (onResetInput) onResetInput();
    onNavigateHome();
  };

  return (
    <>
      <nav className="navbar-bottom">
        <button
          className="navbar-btn navbar-btn-home"
          onClick={handleHomeClick}
          title="Ir al inicio"
          aria-label="Inicio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Inicio</span>
        </button>

        <button
          className="navbar-btn navbar-btn-history"
          onClick={() => setShowHistory(true)}
          title="Ver historial de búsquedas"
          aria-label="Historial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Historial</span>
        </button>

        <button
          className="navbar-btn navbar-btn-help"
          onClick={() => setShowHelp(true)}
          title="Ver guía de códigos"
          aria-label="Ayuda"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>Ayuda</span>
        </button>
      </nav>

      {showHistory && (
        <HistoryModal
          onClose={() => setShowHistory(false)}
          onSelectSearch={onSelectFromHistory}
        />
      )}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
};

export default Navbar;

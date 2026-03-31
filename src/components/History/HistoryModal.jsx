import { useState, useEffect } from "react";
import {
  getSearchHistory,
  clearSearchHistory,
  removeFromHistory,
} from "../../utils/storageUtils";
import "./HistoryModal.css";

const HistoryModal = ({ onClose, onSelectSearch }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getSearchHistory());
    // Bloquear scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSelectSearch = (searchItem) => {
    onSelectSearch(searchItem.codigo, searchItem.aulaData);
    onClose();
  };

  const handleRemove = (id) => {
    removeFromHistory(id);
    setHistory(getSearchHistory());
  };

  const handleClearAll = () => {
    if (window.confirm("¿Está seguro de que desea borrar todo el historial?")) {
      clearSearchHistory();
      setHistory([]);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Ayer";
    } else {
      return date.toLocaleDateString("es-ES", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content history-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Historial de búsquedas</h2>
          <button
            className="modal-close"
            onClick={onClose}
            title="Cerrar"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          {history.length === 0 ? (
            <p className="empty-state">No hay búsquedas anteriores</p>
          ) : (
            <>
              <div className="history-list">
                {history.map((item) => (
                  <div key={item.id} className="history-item">
                    <button
                      className="history-item-btn"
                      onClick={() => handleSelectSearch(item)}
                    >
                      <div className="history-item-code">{item.codigo}</div>
                      <div className="history-item-details">
                        {item.aulaData?.sede && (
                          <span className="history-item-meta">
                            {item.aulaData.sede}
                          </span>
                        )}
                        <span className="history-item-time">
                          {formatDate(item.timestamp)}
                        </span>
                      </div>
                    </button>
                    <button
                      className="history-item-delete"
                      onClick={() => handleRemove(item.id)}
                      title="Eliminar"
                      aria-label="Eliminar búsqueda"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button className="btn-danger" onClick={handleClearAll}>
                  Borrar todo el historial
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;

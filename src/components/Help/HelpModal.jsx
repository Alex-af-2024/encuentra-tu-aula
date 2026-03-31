import { useEffect } from "react";
import "./HelpModal.css";

const HelpModal = ({ onClose }) => {
  useEffect(() => {
    // Bloquear scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content help-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Guía de códigos</h2>
          <button
            className="modal-close"
            onClick={onClose}
            title="Cerrar"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="modal-body help-body">
          <div className="help-section">
            <h3>¿Cómo funciona el código del aula?</h3>
            <p>
              Cada aula tiene un código único que te ayuda a identificarla. Te
              mostramos cómo interpretarlo:
            </p>

            <div className="help-example">
              <div className="code-structure">
                <span className="code-part code-letter">S</span>
                <span className="code-part code-number">03</span>
                <span className="code-part code-floor">P</span>
                <span className="code-part code-floor">02</span>
                <span className="code-part code-building">A</span>
              </div>
              <p className="code-example-text">Ejemplo: S-03-P02-A</p>
            </div>

            <div className="help-items">
              <div className="help-item">
                <div className="help-icon">
                  <span>1</span>
                </div>
                <div className="help-content">
                  <h4>Primera letra (S)</h4>
                  <p>Tipo de espacio</p>
                  <ul>
                    <li>
                      <strong>S</strong> = Sala/Laboratorio/Taller
                    </li>
                    <li>
                      <strong>A</strong> = Aula de clase
                    </li>
                    <li>
                      <strong>O</strong> = Oficina
                    </li>
                  </ul>
                </div>
              </div>

              <div className="help-item">
                <div className="help-icon">
                  <span>2</span>
                </div>
                <div className="help-content">
                  <h4>Número (03)</h4>
                  <p>Identificador único del espacio</p>
                  <ul>
                    <li>Va del 01 al 08</li>
                    <li>Es único dentro de cada tipo</li>
                  </ul>
                </div>
              </div>

              <div className="help-item">
                <div className="help-icon">
                  <span>3</span>
                </div>
                <div className="help-content">
                  <h4>Piso (P + número)</h4>
                  <p>En qué piso se encuentra</p>
                  <ul>
                    <li>
                      <strong>P01</strong> = Piso 1
                    </li>
                    <li>
                      <strong>P02</strong> = Piso 2
                    </li>
                    <li>
                      <strong>P03</strong> = Piso 3
                    </li>
                  </ul>
                </div>
              </div>

              <div className="help-item">
                <div className="help-icon">
                  <span>4</span>
                </div>
                <div className="help-content">
                  <h4>Edificio (Letra)</h4>
                  <p>En qué edificio se ubica</p>
                  <ul>
                    <li>
                      <strong>A</strong> = Edificio A
                    </li>
                    <li>
                      <strong>B</strong> = Edificio B
                    </li>
                    <li>
                      <strong>C</strong> = Edificio C
                    </li>
                    <li>
                      <strong>R</strong> = Edificio Raquela Salas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="help-section">
            <h3>Cómo buscar</h3>
            <p>
              Ingresa el código del aula en la barra de búsqueda. Puedes usar:
            </p>
            <ul className="help-tips">
              <li>Letras mayúsculas o minúsculas</li>
              <li>Incluir o no los guiones (S03P02A o S-03-P02-A)</li>
              <li>El sistema buscará automáticamente</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>Información del aula</h3>
            <p>Al encontrar un aula, verás:</p>
            <ul className="help-tips">
              <li>
                <strong>Ubicación:</strong> Sede y edificio
              </li>
              <li>
                <strong>Sector:</strong> Piso y sección
              </li>
              <li>
                <strong>Imagen:</strong> Foto de la ubicación
              </li>
              <li>
                <strong>Guía:</strong> Indicaciones paso a paso
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;

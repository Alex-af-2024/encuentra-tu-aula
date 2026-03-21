import "./AulaResult.css";

const AulaResult = ({ aula }) => {
    if (!aula) return null;

    const getImageBySede = (sede) => {
        if (sede === "San Joaquín"){
            return "/assets/san-joaquin.jpg";
        }

        if (sede === "Raquel"){
            return "/assets/raquel.jpg";
        }

        return "";
    };

     return (
    <div className="result-container">
      <h2>{aula.codigo}</h2>

      <p><strong>Sede:</strong> {aula.sede}</p>
      <p><strong>Edificio:</strong> {aula.edificio}</p>
      <p><strong>Piso:</strong> {aula.piso}</p>

      <img
        src={getImageBySede(aula.sede)}
        alt={aula.sede}
        className="result-image"
      />

      <p className="guide-text">
        <strong>Guía:</strong> {aula.guia}
      </p>
    </div>
  );
};

export default AulaResult;
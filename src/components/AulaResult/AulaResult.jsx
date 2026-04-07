import "./AulaResult.css";
import sanJoaquinImg from '../../assets/images/san-joaquin.jpg';
import raquelImg from '../../assets/images/raquel.jpg';

const AulaResult = ({ aula }) => {
    if (!aula) return null;

    const sedeImages = {
        "san joaquín": sanJoaquinImg,
        "san joaquin": sanJoaquinImg,
        "raquel": raquelImg,
    };

    const getImageByCode = (codigo) => {
        const lastChar = codigo[codigo.length - 1];
        if (['A', 'B', 'C'].includes(lastChar)) {
            return sanJoaquinImg;
        } else if (lastChar === 'R') {
            return raquelImg;
        }
        return null;
    };

    const getImageBySede = (sede) => {
        if (!sede) return null;
        const key = sede.trim().toLowerCase();
        return sedeImages[key] || null;
    };

    const image = getImageBySede(aula.sede) || getImageByCode(aula.codigo);

     return (
    <div className="result-container">
      <h2>{aula.codigo}</h2>

      <p><strong>Sede:</strong> {aula.sede}</p>
      <p><strong>Edificio:</strong> {aula.edificio}</p>
      <p><strong>Piso:</strong> {aula.piso}</p>

      {image && (
        <img
          src={image}
          alt={`Imagen de la sede ${aula.sede}`}
          className="result-image"
        />
      )}

      <p className="guide-text">
        <strong>Guía:</strong> {aula.guia}
      </p>
    </div>
  );
};

export default AulaResult;
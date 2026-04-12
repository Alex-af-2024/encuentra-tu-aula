import sanJoaquinImg from '../../assets/images/san-joaquin.jpg';
import raquelImg from '../../assets/images/raquel.jpg';
import { Aula } from '../../types';

interface AulaResultProps {
  aula: Aula | null;
}

const AulaResult = ({ aula }: AulaResultProps) => {
    if (!aula) return null;

    const sedeImages: Record<string, string> = {
        "san joaquín": sanJoaquinImg,
        "san joaquin": sanJoaquinImg,
        "raquel": raquelImg,
    };

    const getImageByCode = (codigo: string) => {
        const lastChar = codigo[codigo.length - 1];
        if (['A', 'B', 'C'].includes(lastChar)) {
            return sanJoaquinImg;
        } else if (lastChar === 'R') {
            return raquelImg;
        }
        return null;
    };

    const getImageBySede = (sede: string) => {
        if (!sede) return null;
        const key = sede.trim().toLowerCase();
        return sedeImages[key] || null;
    };

    const image = getImageBySede(aula.sede) || getImageByCode(aula.codigo);

    return (
    <div className="glass-card flex flex-col p-6 overflow-hidden animate-fade-in divide-y divide-slate-100">
      <div className="pb-4 mb-2 flex flex-col items-center">
        <span className="text-xs tracking-wider text-accent font-bold uppercase mb-1 drop-shadow-sm">AULA ENCONTRADA</span>
        <h2 className="text-4xl font-bold text-slate-800 tracking-tight">{aula.codigo}</h2>
      </div>

      <div className="py-4 space-y-3">
        <div className="flex items-center justify-between text-slate-600">
            <span className="font-semibold text-slate-500">Sede</span>
            <span className="text-right text-slate-800 font-medium">{aula.sede}</span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
            <span className="font-semibold text-slate-500">Edificio</span>
            <span className="text-right text-slate-800 font-medium">{aula.edificio}</span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
            <span className="font-semibold text-slate-500">Piso</span>
            <span className="text-right text-slate-800 font-medium">{aula.piso}</span>
        </div>
      </div>

      {image && (
        <div className="py-4 -mx-6 px-6">
          <img
            src={image}
            alt={`Imagen de la sede ${aula.sede}`}
            className="w-full h-48 object-cover rounded-2xl shadow-sm border border-slate-200"
          />
        </div>
      )}

      <div className="pt-4 mt-2">
        <span className="block font-semibold text-slate-500 mb-2">Guía de llegada</span>
        <p className="bg-slate-50/80 p-4 rounded-xl border border-slate-100 text-slate-700 leading-relaxed shadow-sm">
          {aula.guia}
        </p>
      </div>
    </div>
  );
};

export default AulaResult;
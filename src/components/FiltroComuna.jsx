import obrasData from "../data/obras.json";
import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const FiltroComuna = () => {
  // Obtener lista única de comunas del JSON
  const comunas = [
    ...new Set(obrasData.features.map((obra) => obra.properties.Comuna)),
  ];

  const {filters, setFilter} = useContext(FilterContext);

  return (
    <div className="flex flex-col gap-1 border-t-2 border-white p-2">
      <label htmlFor="comuna">Selecciona una Comuna:</label>
      <select className="bg-white p-1 text-black rounded" id="comuna" onChange={(e) => setFilter("comuna", e.target.value || undefined)}>
        <option value="">Todas las comunas</option>
        {comunas.map((comuna, index) => (
          <option key={index} value={comuna} selected={filters["comuna"] === comuna}>
            {comuna}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroComuna;
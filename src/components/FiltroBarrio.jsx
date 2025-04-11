import obrasData from "../data/obras.json";
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

const FiltroBarrio = () => {
  // Obtener lista única de comunas del JSON
  const barrios = [
    ...new Set(obrasData.features.map((obra) => obra.properties["Nombre Barrio"])),
  ];

  const {filters, setFilter} = useContext(FilterContext);

  return (
    <div className="flex flex-col gap-1 border-t-2 border-white p-2">
      <label htmlFor="barrio">Selecciona un Barrio:</label>
      <select className="bg-white p-1 text-black rounded" id="barrio" onChange={(e) => setFilter("barrio", e.target.value || undefined)}>
        <option value="">Todas los barrios</option>
        {barrios.map((barrio, index) => (
          <option key={index} value={barrio} selected={filters["barrio"] === barrio}>
            {barrio}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroBarrio;

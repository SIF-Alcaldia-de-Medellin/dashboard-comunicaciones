import obrasData from "../data/obras.json";
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

const FiltroGrupo = () => {
  // Obtener lista única de comunas del JSON
  const gruposProyectosUnicos = [
    ...new Set(obrasData.features.map((obra) => obra.properties["Grupo del Proyecto"])),
  ];

  const {filters, setFilter} = useContext(FilterContext);

  return (
    <div className="flex flex-col gap-1 border-t-2 border-white p-2">
      <label htmlFor="categoria">Selecciona un grupo de proyecto:</label>
      <select className="bg-white p-1 text-black rounded" id="grupo" onChange={(e) => setFilter("grupo", e.target.value || undefined)}>
        <option value="">Todas las grupos</option>
        {gruposProyectosUnicos.map((grupo, index) => (
          <option key={index} value={grupo} selected={filters["grupo"] === grupo}>
            {grupo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroGrupo;
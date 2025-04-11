import obrasData from "../data/obras.json";
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

const FiltroCategoria = () => {
  // Obtener lista única de comunas del JSON
  const categoriasUnicas = [
    ...new Set(obrasData.features.map((obra) => obra.properties.Categoria)),
  ];

  const {filters, setFilter} = useContext(FilterContext);

  return (
    <div className="flex flex-col gap-1 border-t-2 border-white p-2">
      <label htmlFor="categoria">Selecciona una Categoria:</label>
      <select className="bg-white p-1 text-black rounded" id="categoria" onChange={(e) => setFilter("categoria", e.target.value || undefined)}>
        <option value="">Todas las categorias</option>
        {categoriasUnicas.map((categoria, index) => (
          <option key={index} value={categoria} selected={filters["categoria"] === categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroCategoria;
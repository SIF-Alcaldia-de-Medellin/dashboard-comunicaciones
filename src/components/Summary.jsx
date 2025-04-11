import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";

const Summary = ({ data, className }) => {
  const categoriaData = Object.entries(
    data.reduce((acc, obra) => {
      const categoria = obra.properties?.Categoria;
      if (!acc[categoria]) acc[categoria] = 0;
      acc[categoria]++;
      return acc;
    }, {})
  ).map(([categoria, cantidad]) => ({ categoria, cantidad }))
   .sort((a, b) => b.cantidad - a.cantidad);


  return (
    <div className={`bg-gray-50 p-2 px-4 rounded max-h-[400px] overflow-auto ${className}`}>
      <h3 className="heading-4 font-bold border-b-2">Resumen General</h3>
      <div className="flex">
        <div className="p-2 flex flex-col gap-1 w-1/2">
          <h4 className="heading-5 font-semibold flex items-center gap-1"><FontAwesomeIcon className="text-4xl" icon={faMagnifyingGlassChart} />Categoría:</h4>
          <ul className="">
            {categoriaData.map((c, i) => (
              <li key={i} className=" border-b-2 border-gray-700">
                {c.categoria}: <p className="font-semibold heading-5">{c.cantidad}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;

import React from "react";
import "../styles.css";

const Summary = ({ data }) => {
  return (
    <div className="summary-container">
      <h3>Resumen General</h3>

      <p><strong>Total de obras:</strong> {data.total}</p>

      <h4>Por Estado:</h4>
      <ul>
        {data.estados.map((e, i) => (
          <li key={i}>
            {e.estado}: {e.cantidad}
          </li>
        ))}
      </ul>

      <h4>Por Categoría:</h4>
      <ul>
        {data.categorias.map((c, i) => (
          <li key={i}>
            {c.categoria}: {c.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;

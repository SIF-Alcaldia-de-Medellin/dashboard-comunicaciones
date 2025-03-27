import React from "react";
import "../styles.css";

const Paneles = () => {
  return (
    <div className="paneles-container">
      <div className="panel-card">
        <h4>Obras Totales</h4>
        <p>10</p>
      </div>
      <div className="panel-card">
        <h4>En Ejecución</h4>
        <p>5</p>
      </div>
      <div className="panel-card">
        <h4>Proyectadas</h4>
        <p>3</p>
      </div>
      <div className="panel-card">
        <h4>Finalizadas</h4>
        <p>2</p>
      </div>
    </div>
  );
};

export default Paneles;

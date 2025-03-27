import React from "react";
import {
  Treemap,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
import "../styles.css";

// 🎨 Diccionario de colores por categoría
const coloresPorCategoria = {
  "Cicloparquederos": "#8dd1e1",
  "Presupuesto Participativo": "#82ca9d",
  "Vías Urbanas": "#ffc658",
  "Espacios Públicos y Recreación": "#a4de6c",
  "Andenes y Pasarelas": "#d0ed57",
  "Otros": "#d28fd0"
};

// 👉 Añadir propiedad "fill" según categoría
const colorearDatos = (data) =>
  data.map((item) => ({
    ...item,
    fill: coloresPorCategoria[item.categoria] || "#ccc",
    name: `${item.categoria} (${item.cantidad})` // nombre que se muestra en tooltip y bloque
  }));

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const { payload: p } = payload[0];
    return (
      <div className="custom-tooltip">
        <strong>{p.categoria}</strong>
        <br />
        Obras: {p.cantidad}
      </div>
    );
  }
  return null;
};

const TreeMapObras = ({ data }) => {
  const dataConColor = colorearDatos(data);

  return (
    <div className="treemap-container">
      <h3>Obras por Categoría (Visual Treemap)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <Treemap
          data={dataConColor}
          dataKey="cantidad"
          stroke="#fff"
          isAnimationActive
          aspectRatio={4 / 3}
          content={({ depth, x, y, width, height, index, name, fill }) => (
            depth === 1 ? (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill,
                    stroke: "#fff",
                    strokeWidth: 2
                  }}
                />
                <text
                  x={x + 5}
                  y={y + 20}
                  fill="#fff"
                  fontSize={12}
                  fontWeight="bold"
                >
                  {name}
                </text>
              </g>
            ) : null
          )}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default TreeMapObras;

import React from "react";
import {
  Treemap,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

// 🎨 Diccionario de colores por categoría
const coloresPorCategoria = {
  "Cicloparquederos": "#AE3E97",
  "Presupuesto Participativo": "#FF8403",
  "Vías Urbanas": "#00904C",
  "Espacios Públicos y Recreación": "#00AEEF",
  "Andenes y Pasarelas": "#3366CC",
  "Otros": "#004884"
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
      <div className="bg-white p-2 px-4 rounded">
        <strong>{p.categoria}</strong>
        <br />
        Obras: {p.cantidad}
      </div>
    );
  }
  return null;
};

const TreeMapObras = ({ data, className }) => {
  const dataConColor = colorearDatos(data);

  return (
    <div className={`treemap-container ${className}`}>
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
                  fontSize={16}
                  fontWeight="normal"
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

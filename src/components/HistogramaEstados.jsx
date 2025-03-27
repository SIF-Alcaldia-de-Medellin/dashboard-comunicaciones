import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
import "../styles.css";

const getBarColor = (estado) => {
  switch (estado) {
    case "Proyectado":
      return "#8884d8";
    case "En Ejecucion":
      return "#82ca9d";
    case "Finalizada":
      return "#ffc658";
    default:
      return "#a6a6a6"; // color neutro para otros
  }
};

const HistogramaEstados = ({ data }) => {
  return (
    <div className="histograma-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          barSize={50}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="estado" />
          <YAxis />
          <Tooltip />
          {data.map((entry, index) => (
            <Bar
              key={index}
              dataKey="cantidad"
              data={[entry]}
              fill={getBarColor(entry.estado)}
              isAnimationActive={false}
            >
              <LabelList dataKey="cantidad" position="top" />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistogramaEstados;

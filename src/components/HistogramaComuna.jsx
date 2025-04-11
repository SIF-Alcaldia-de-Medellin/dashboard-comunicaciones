import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle
} from "recharts";

const HistogramaComuna = ({ data }) => {
  const dataBarChart = Object.entries(
    data.reduce((acc, obra) => {
      const comuna = obra.properties?.Comuna;
      if (!acc[comuna]) acc[comuna] = 0;
      acc[comuna]++;
      return acc;
    }, {})
  ).map(([comuna, Cantidad]) => ({ comuna, Cantidad }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart width={150} height={40} data={dataBarChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="comuna" 
          tick={false} 
          axisLine={true} 
        />
        <YAxis />
        <Tooltip 
          formatter={(value, _) => [value, 'Cantidad']}
          labelFormatter={(label) => `${label}`}
        />
        <Bar dataKey="Cantidad" fill="#004884" activeBar={<Rectangle fill="#FF8403" stroke="#d76e00" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistogramaComuna;

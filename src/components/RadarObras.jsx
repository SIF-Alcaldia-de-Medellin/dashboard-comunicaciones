import React from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip
} from "recharts";

const RadarObras = ({ data }) => {
  return (
    <RadarChart cx="50%" cy="50%" outerRadius="80%" width={400} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="categoria" />
      <PolarRadiusAxis />
      <Tooltip />
      <Radar name="Categoría" dataKey="cantidad" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarObras;

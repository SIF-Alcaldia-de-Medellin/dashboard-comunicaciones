import {useMemo} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = {
    "Cicloparqueaderos": "#AE3E97",
    "Presupuesto Participativo": "#FF8403",
    "Parques": "#00904C",
    "Andenes": "#00AEEF",
};

const PieChartObras = ({data}) => {
    const dataChart = useMemo(() => {
        const counts = data.reduce((acc, obra) => {
          const categoria = obra.properties?.Categoria;
          if (!acc[categoria]) {
            acc[categoria] = 0;
          }
          acc[categoria]++;
          return acc;
        }, {});
      
        return Object.entries(counts).map(([name, value]) => ({ name, value }));
      }, [data]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                data={dataChart}
                cx="50%"
                cy="50%"
                
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label
                >
                    {dataChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry?.name]} />
                    ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right"/>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartObras
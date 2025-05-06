import {useMemo, useState, useEffect} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = {
    "Cicloparqueaderos": "#AE3E97",
    "Presupuesto Participativo": "#FF8403",
    "Parques": "#00904C",
    "Andenes": "#00AEEF",
};

const PieChartObras = ({data}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // consider <768px as mobile
        };

        handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                <Legend 
                    layout={isMobile ? "horizontal" : "vertical"}
                    verticalAlign={isMobile ? "top" : "middle"}
                    align={isMobile ? "center" : "right"}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartObras
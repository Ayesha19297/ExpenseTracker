import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from "recharts";

const PieChartComp = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#FFBB28", "#00C49F", "#AF19FF", "#FF8042", "#0088FE"];
  return (
    <div className="chart-container">
      <div className="chart">
        <PieChart width={500} height={300}>
          <Pie dataKey="value" data={data01} label>
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};
export default PieChartComp;

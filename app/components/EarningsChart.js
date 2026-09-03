import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample dataset
const data = [
  { month: 'Jan', Capital: 30000, Profit: 2400, Drawdown: 2400 },
  { month: 'Feb', Capital: 40400, Profit: 1398, Drawdown: 2210 },
  { month: 'Mar', Capital: 41000, Profit: 9800, Drawdown: 2290 },
  { month: 'Apr', Capital: 51300, Profit: 3908, Drawdown: 2000 },
  { month: 'May', Capital: 60500, Profit: 4800, Drawdown: 2181 },
  { month: 'Jun', Capital: 75000, Profit: 3800, Drawdown: 2500 },
  { month: 'Jul', Capital: 93900, Profit: 4300, Drawdown: 2100 },
];

const EarningsChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {/* Legend automatically generates items based on the Line 'name' or 'dataKey' props */}
          <Legend verticalAlign="top" height={36} />
          
          <Line
            type="monotone"
            dataKey="Capital"
            name="Capital"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Profit"
            name="Profit"
            stroke="#82ca9d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Drawdown"
            name="Drawdown"
            stroke="#ff7300"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
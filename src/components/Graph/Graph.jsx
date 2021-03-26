import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const Graph = ({ data, dateKey = 'votes' }) => (
  <ResponsiveContainer width="100%" height="100%" minHeight="300px" margin={{ top: 16 }}>
    <BarChart width={150} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dateKey} fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default Graph;

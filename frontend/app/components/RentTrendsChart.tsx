"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Define the type for rent trend data
interface RentData {
  month: string;
  price: number;
}

// Sample Data (Replace with real data from API later)
const sampleData: RentData[] = [
  { month: "Jan", price: 1800 },
  { month: "Feb", price: 1850 },
  { month: "Mar", price: 1900 },
  { month: "Apr", price: 2000 },
  { month: "May", price: 2100 },
  { month: "Jun", price: 2200 },
];

export default function RentTrendsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
      <h3 className="text-xl font-bold mb-4 text-center">
        Average Rent Prices (Last 6 Months)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={sampleData}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

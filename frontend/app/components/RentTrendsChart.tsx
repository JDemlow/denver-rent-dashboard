"use client";

import { useState } from "react";
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
  neighborhood: string;
}

// Sample Data (Replace with real data from API later)
const sampleData: RentData[] = [
  { month: "Jan", price: 1800, neighborhood: "Downtown" },
  { month: "Feb", price: 1850, neighborhood: "Downtown" },
  { month: "Mar", price: 1900, neighborhood: "Downtown" },
  { month: "Apr", price: 2000, neighborhood: "Downtown" },
  { month: "May", price: 2100, neighborhood: "Downtown" },
  { month: "Jun", price: 2200, neighborhood: "Downtown" },
  { month: "Jan", price: 1500, neighborhood: "Capitol Hill" },
  { month: "Feb", price: 1550, neighborhood: "Capitol Hill" },
  { month: "Mar", price: 1600, neighborhood: "Capitol Hill" },
  { month: "Apr", price: 1700, neighborhood: "Capitol Hill" },
  { month: "May", price: 1750, neighborhood: "Capitol Hill" },
  { month: "Jun", price: 1800, neighborhood: "Capitol Hill" },
];

export default function RentTrendsChart() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Downtown");

  // Get unique neighborhoods from data
  const neighborhoods = Array.from(
    new Set(sampleData.map((d) => d.neighborhood))
  );

  // Filter data based on selected neighborhood
  const filteredData = sampleData.filter(
    (d) => d.neighborhood === selectedNeighborhood
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
      <h3 className="text-xl font-bold mb-4 text-center">
        Rent Prices by Neighborhood
      </h3>

      {/* Dropdown to select neighborhood */}
      <div className="mb-4 flex justify-center">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
          value={selectedNeighborhood}
          onChange={(e) => setSelectedNeighborhood(e.target.value)}
        >
          {neighborhoods.map((neighborhood) => (
            <option key={neighborhood} value={neighborhood}>
              {neighborhood}
            </option>
          ))}
        </select>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={filteredData}
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

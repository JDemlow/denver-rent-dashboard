"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
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

// Fetch rental data from API
const fetchRentData = async (): Promise<RentData[]> => {
  const res = await fetch("http://localhost:5000/rentals");
  if (!res.ok) throw new Error("Failed to fetch rent data");
  return res.json();
};

export default function RentTrendsChart() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<
    string | null
  >(null);

  // Fetch data using React Query
  const {
    data: rentData,
    isLoading,
    error,
  } = useQuery<RentData[]>({
    queryKey: ["rentData"],
    queryFn: fetchRentData,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  // Show loading state
  if (isLoading) {
    return <p className="text-center text-gray-600">Loading rent trends...</p>;
  }

  // Show error state
  if (error || !rentData) {
    return <p className="text-center text-red-500">Error fetching data</p>;
  }

  // Get unique neighborhoods from API data (fallback to empty array if undefined)
  const neighborhoods = Array.from(
    new Set(rentData?.map((d) => d.neighborhood) || [])
  );

  // Set default neighborhood if not already selected
  if (!selectedNeighborhood && neighborhoods.length > 0) {
    setSelectedNeighborhood(neighborhoods[0]); // Set first neighborhood as default
  }

  // Filter data based on selected neighborhood
  const filteredData =
    rentData?.filter((d) => d.neighborhood === selectedNeighborhood) || [];

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4 text-center">
        Rent Prices by Neighborhood
      </h3>

      {/* Dropdown to select neighborhood */}
      <div className="mb-4 flex justify-center">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 transition-all duration-200 hover:shadow-lg"
          value={selectedNeighborhood || ""}
          onChange={(e) => setSelectedNeighborhood(e.target.value)}
        >
          {neighborhoods.map((neighborhood) => (
            <option key={neighborhood} value={neighborhood}>
              {neighborhood}
            </option>
          ))}
        </select>
      </div>

      {/* Animated Chart Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNeighborhood}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredData.length > 0 ? (
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
          ) : (
            <p className="text-center text-gray-600">
              No data available for this neighborhood.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

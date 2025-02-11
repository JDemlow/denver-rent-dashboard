import RentTrendsChart from "../components/RentTrendsChart";

export default function RentTrends() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6 sm:p-8">
      {/* Page Header */}
      <header className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Denver Rent Trends
        </h2>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          Explore rental price trends across different neighborhoods.
        </p>
      </header>

      {/* Search Input */}
      <section className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for a neighborhood..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </section>

      {/* Rent Trends Chart */}
      <section className="mt-10 flex flex-col items-center">
        <RentTrendsChart />
      </section>
    </main>
  );
}

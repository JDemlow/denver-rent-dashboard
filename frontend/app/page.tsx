export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold">Denver Rent Dashboard</h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Trends
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Submit Rent
            </a>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className="mt-8 text-center">
        <h2 className="text-4xl font-semibold">
          Track Denver&apos;s Rental Market
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          View real-time rent trends and submit your own data.
        </p>
      </header>

      {/* Content Area */}
      <section className="mt-12 flex flex-col items-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h3 className="text-2xl font-bold mb-4">
            Coming Soon: Interactive Rent Data
          </h3>
          <p className="text-gray-700">
            We are working on bringing real-time data visualizations to help
            renters and buyers make informed decisions.
          </p>
        </div>
      </section>
    </main>
  );
}

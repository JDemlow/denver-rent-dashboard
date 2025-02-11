export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6 sm:p-8">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-300 p-4 bg-white dark:bg-gray-900">
        <h1 className="text-xl font-bold text-center sm:text-left">
          Denver Rent Dashboard
        </h1>
      </nav>

      {/* Header */}
      <header className="mt-6 text-center sm:mt-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Track Denver&apos;s Rental Market
        </h2>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          View real-time rent trends and submit your own data.
        </p>
      </header>

      {/* Content Area */}
      <section className="mt-10 flex flex-col items-center">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-4xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
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

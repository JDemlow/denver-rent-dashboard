export default function Footer() {
  return (
    <footer className="mt-12 py-6 px-4 text-center border-t border-gray-300 text-sm sm:text-base">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Denver Rent Dashboard
      </p>
      <p className="text-gray-500 mt-2">
        Data sourced from{" "}
        <a
          href="https://www.denvergov.org/opendata"
          target="_blank"
          className="underline"
        >
          Denver Open Data Catalog
        </a>
        .
      </p>
    </footer>
  );
}

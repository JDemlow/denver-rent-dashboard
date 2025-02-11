import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar /> {/* ✅ Navbar now loads on all pages */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}

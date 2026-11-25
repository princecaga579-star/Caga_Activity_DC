import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince Caga | Personal Site",
  description: "A personal website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-white">
        <header className="border-b border-gray-800 bg-gray-900">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-xl font-bold text-white"
            >
              Prince Caga
            </Link>

            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-300 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-300 transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-gray-300 transition hover:text-blue-400"
              >
                Projects
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="border-t border-gray-800 px-6 py-6 text-center text-sm text-gray-500">
          © 2026 Prince Caga. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
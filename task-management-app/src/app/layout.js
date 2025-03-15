import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DarkModeToggle from "@/components/DarkModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Task Management App",
  description: "A simple to do list created with React and Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <DarkModeToggle />
        <header className="bg-blue-600 dark:bg-gray-800 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </header>
        <Navbar />
        <main className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
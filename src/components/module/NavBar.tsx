"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMounted, setIsMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/profile", label: "Profile" },
  ];

  if (!isMounted) {
    return <nav className="h-16 bg-gray-100 dark:bg-gray-800"></nav>;
  }

  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Brand</h1>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md ${
                  pathname === link.href
                    ? "bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="hidden md:flex items-center gap-2 px-4 py-2  rounded-md ">
            {theme === "light" ? (
              <>
                <span>🌞</span>
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <span>🌜</span>
                <span className="text-white">Light Mode</span>
              </>
            )}
          </button>

          {/* Menu for Mobile */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 dark:bg-gray-800 shadow-lg z-50 transform transition-transform w-10/12 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Brand</h1>
            {/* Close Button */}
            <button
              onClick={() => setDrawerOpen(false)}
              className="self-end text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md ${
                pathname === link.href
                  ? "bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="flex items-center gap-2 px-4 py-2 ">
            {theme === "light" ? (
              <>
                <span>🌞</span>
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <span>🌜</span>
                <span className="text-white">Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setDrawerOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;

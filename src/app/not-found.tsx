import Image from "next/image";
import Link from "next/link";
import noDataFound from "../@assets/noDataFound.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* Image */}
      <Image src={noDataFound} alt={""} />
      {/* Text Content */}
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      {/* Return Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 py-8 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We are a passionate team committed to providing excellent solutions and building amazing products.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-gray-900 dark:hover:text-white">
              <a href="/">Home</a>
            </li>
            <li className="mb-2 hover:text-gray-900 dark:hover:text-white">
              <a href="/about">About</a>
            </li>
            <li className="mb-2 hover:text-gray-900 dark:hover:text-white">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/arjun.das.31457/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.45 8.87 8 9.8v-6.93H8.9V12h2.1V9.85c0-2.08 1.24-3.23 3.13-3.23.91 0 1.86.16 1.86.16v2h-1.05c-1.04 0-1.37.65-1.37 1.32V12h2.34l-.37 2.87h-1.97v6.93c4.55-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arjundasbd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8.94 19H6.16v-8.61h2.78V19zM7.55 9.51c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6 1.6.72 1.6 1.6-.72 1.6-1.6 1.6zm11.43 9.49h-2.78v-4.09c0-.98-.02-2.23-1.36-2.23-1.36 0-1.56 1.06-1.56 2.16v4.16h-2.78V10.39h2.67v1.16h.04c.37-.71 1.27-1.46 2.62-1.46 2.8 0 3.32 1.84 3.32 4.23v4.67z" />
              </svg>
            </a>
            <a
              href="https://github.com/arjun1571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.798 8.205 11.385.6.113.82-.262.82-.582 0-.287-.012-1.243-.012-2.26-3.338.735-4.042-1.415-4.042-1.415-.547-1.39-1.337-1.76-1.337-1.76-1.093-.755.082-.74.082-.74 1.205.084 1.84 1.235 1.84 1.235 1.073 1.833 2.809 1.303 3.494.995.11-.776.42-1.303.764-1.602-2.665-.307-5.466-1.336-5.466-5.942 0-1.312.47-2.382 1.235-3.223-.123-.308-.536-1.54.117-3.206 0 0 1.007-.322 3.3 1.23a11.48 11.48 0 013.006-.405c1.02.005 2.046.14 3.006.405 2.29-1.552 3.295-1.23 3.295-1.23.653 1.665.24 2.898.117 3.206.77.84 1.235 1.91 1.235 3.223 0 4.617-2.807 5.63-5.482 5.922.431.372.815 1.103.815 2.22 0 1.602-.014 2.89-.014 3.283 0 .324.217.7.825.582C20.565 21.794 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
        © 2024 Arjun Chandra Das. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

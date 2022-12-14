import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
//inserto comentario para poder hacer commit
const NavbarComponent = () => {
  return (
    <nav className="bg-green-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-white font-bold text-2xl">Cabo Luna</h1>
            </div>
            <div className=" sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Inicio
                </Link>
                <Link
                  to="/category/CBD-Human"
                  className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  CDB-Humanos
                </Link>
                <Link
                  to="/category/Dog-CBD"
                  className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  CBD-Perros
                </Link>
              </div>
            </div>
          </div>
          <CartWidget />
        </div>
      </div>

      <div className="sm:hidden bg-green" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/"
            className="bg-green-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </Link>

          <Link
            to="/category/CBD-Human"
            className="text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            CBD Humanos
          </Link>

          <Link
            to="/category/Dog-CBD"
            className="text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            CBD Perros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

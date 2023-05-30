import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="dark:bg-gray-900">
      <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-28">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CINEZONE
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              // clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "ml-2 px-3 py-2 rounded-md text-base font-medium text-white"
                  : isActive
                  ? "ml-2 px-3 py-2 rounded-md text-base font-medium text-yellow-500"
                  : "ml-2 px-3 py-2 rounded-md text-base font-medium text-white"
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/shows"
              className={({ isActive, isPending }) =>
                isPending
                  ? "ml-2 px-3 py-2 rounded-md text-base font-medium text-white"
                  : isActive
                  ? "ml-2 px-3 py-2 rounded-md text-base font-medium text-yellow-500"
                  : "ml-2 px-3 py-2 rounded-md text-base font-medium text-white"
              }
            >
              TV Shows
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-900 py-4 shadow-md">
      <ul className="flex justify-center gap-8 text-xl font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-white hover:text-amber-400 transition-colors"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-amber-500"
                : "text-white hover:text-amber-400 transition-colors"
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

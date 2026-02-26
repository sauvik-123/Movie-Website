import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="px-2 flex items-center justify-between bg-black h-16 fixed z-100 left-0 right-0 top-0 text-purple-500">
      {/* Logo */}
      <NavLink to="/" className="font-bold tracking-wider pl-2">
        Movie App
      </NavLink>

      {/* Home Page */}
      <ul className="flex items-center justify-center gap-x-2 font tracking-wider font-medium">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `h-7 flex items-center justify-center w-26 rounded-full font-medium transition-all duration-300 ease-in-out ${isActive ? 'bg-purple-50 text-black' : 'text-purple-500'} `
          }
        >
          Home
        </NavLink>

        {/* Favorite Page */}
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `h-7 flex items-center justify-center w-26 rounded-full font-medium transition-all duration-300 ease-in-out ${isActive ? 'bg-purple-50 text-black' : 'text-purple-500'} `
          }
        >
          Favorites
        </NavLink>
      </ul>
    </nav>
  );
}

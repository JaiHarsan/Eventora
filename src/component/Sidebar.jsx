import { NavLink } from "react-router-dom";

export const Sidebar = ({ isOpen, onClose }) => {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 text-sm ${
      isActive
        ? "bg-green-100 font-semibold text-green-700"
        : "text-black hover:bg-gray-100"
    }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-52 border-r border-gray-200 bg-white p-4 md:static ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <nav className="space-y-1">
          <NavLink to="/" end onClick={onClose} className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/explore" onClick={onClose} className={linkClass}>
            Explore Events
          </NavLink>

          <NavLink to="/my-events" onClick={onClose} className={linkClass}>
            My Events
          </NavLink>

          <NavLink to="/favorites" onClick={onClose} className={linkClass}>
            Favorites
          </NavLink>

          <NavLink to="/settings" onClick={onClose} className={linkClass}>
            Settings
          </NavLink>

          <NavLink to="/register" onClick={onClose} className={linkClass}>
            Register Event
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

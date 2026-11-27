import { Link } from "react-router-dom";

function Navbar({ onMenuClick }) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
      <Link to="/" className="text-lg font-bold text-green-600">
        Eventora
      </Link>

      <button
        type="button"
        onClick={onMenuClick}
        className="border border-gray-300 px-2 py-1 text-sm text-black md:hidden"
      >
        Menu
      </button>
    </header>
  );
}

export default Navbar;

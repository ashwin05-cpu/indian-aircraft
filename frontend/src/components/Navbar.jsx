import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"

function Navbar({
  search,
  setSearch,
  darkMode,
  setDarkMode,
  filteredAircrafts = [],
  
}) {

    const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* LOGO */}
        <h1 className="text-3xl font-bold text-sky-400 tracking-wide">
          IAF COMMAND
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-10 text-lg text-white">

          <Link to="/" className="hover:text-sky-400 transition">
            Home
          </Link>

          <Link to="/inventory" className="hover:text-sky-400 transition">
            Inventory
          </Link>

          <Link to="/compare" className="hover:text-sky-400 transition">
            Compare
          </Link>

          <Link to="/timeline" className="hover:text-sky-400 transition">
            Timeline
          </Link>

          <Link to="/about" className="hover:text-sky-400 transition">
            About
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white"
>

  {
    menuOpen
      ? <X size={32} />
      : <Menu size={32} />
  }

</button>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* SEARCH */}
          <div className="relative w-[300px]">

            {/* SEARCH BAR */}
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2">

              <Search
                className="text-sky-300"
                size={18}
              />

              <input
                type="text"
                placeholder="Search aircraft..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-white px-3 w-full placeholder:text-gray-300"
              />

            </div>

            {/* AUTOCOMPLETE DROPDOWN */}
            {
              search.trim() !== "" &&
              filteredAircrafts.length > 0 && (

                <div className="absolute top-14 left-0 w-full bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-[999]">

                  {filteredAircrafts.map((aircraft) => (

                    <Link
                      key={aircraft.id}
                      to={`/aircraft/${aircraft.id}`}
                      className="block px-5 py-4 hover:bg-white/10 transition text-white border-b border-white/10"
                    >
                      {aircraft.name}
                    </Link>

                  ))}

                </div>

              )
            }

          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
          >

            {darkMode ? (
              <Sun className="text-yellow-300" />
            ) : (
              <Moon className="text-sky-300" />
            )}

          </button>

        </div>

      </div>

      {
  menuOpen && (

    <div className="md:hidden bg-slate-950 border-t border-white/10 px-8 py-6 space-y-6 text-lg text-white">

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className="block hover:text-sky-400"
      >
        Home
      </Link>

      <Link
        to="/inventory"
        onClick={() => setMenuOpen(false)}
        className="block hover:text-sky-400"
      >
        Inventory
      </Link>

      <Link
        to="/compare"
        onClick={() => setMenuOpen(false)}
        className="block hover:text-sky-400"
      >
        Compare
      </Link>

      <Link
        to="/timeline"
        onClick={() => setMenuOpen(false)}
        className="block hover:text-sky-400"
      >
        Timeline
      </Link>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className="block hover:text-sky-400"
      >
        About
      </Link>

    </div>

  )
}

    </nav>
  )
}

export default Navbar
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

    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-[#140000] to-black border-b border-red-900 shadow-2xl backdrop-blur-xl">

      {/* TOP FLAG STRIP */}

      <div className="h-1 w-full flex">

        <div className="bg-orange-500 flex-1"></div>
        <div className="bg-white flex-1"></div>
        <div className="bg-green-600 flex-1"></div>

      </div>

      {/* MAIN NAVBAR */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-[90px]">

          {/* LEFT SECTION */}

          <div className="flex items-center gap-4">

            {/* AIRCRAFT ICON */}

            <div className="text-3xl animate-pulse">
              ⚔️
            </div>

            {/* FLAG */}

            <img
              src="/ind-flag.png"
              alt="Flag"
              className="w-12 h-12 object-cover rounded shadow-md"
            />

            {/* TITLE */}

            <div className="flex flex-col leading-tight">

              <h1 className="text-xl lg:text-2xl font-bold tracking-[0.3em] uppercase text-red-500">

                 MOTIVE 

              </h1>

              <p className="text-gray-300 text-sm lg:text-base font-medium">

                Touch The Sky With Glory 🔥

              </p>

            </div>

          </div>

          {/* CENTER NAV LINKS */}

          <div className="hidden md:flex items-center gap-8 text-[17px] font-medium text-gray-200">

            <Link
              to="/"
              className="hover:text-red-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/inventory"
              className="hover:text-red-400 transition duration-300"
            >
              Inventory
            </Link>

            <Link
              to="/compare"
              className="hover:text-red-400 transition duration-300"
            >
              Compare
            </Link>

            <Link
              to="/timeline"
              className="hover:text-red-400 transition duration-300"
            >
              Timeline
            </Link>

            <Link
              to="/about"
              className="hover:text-red-400 transition duration-300"
            >
              About
            </Link>

          </div>

          {/* RIGHT SECTION */}

          <div className="flex items-center gap-4">

            {/* SEARCH BAR */}

            <div className="relative hidden lg:block w-[280px]">

              <div className="flex items-center bg-[#1a1a1a] border border-red-900 rounded-full px-4 py-3 shadow-lg">

                <Search
                  className="text-red-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search aircraft..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none text-white px-3 w-full placeholder:text-gray-400"
                />

              </div>

              {/* AUTOCOMPLETE */}

              {
                search.trim() !== "" &&
                filteredAircrafts.length > 0 && (

                  <div className="absolute top-16 left-0 w-full bg-black border border-red-900 rounded-2xl overflow-hidden shadow-2xl z-[999]">

                    {filteredAircrafts.map((aircraft) => (

                      <Link
                        key={aircraft.id}
                        to={`/aircraft/${aircraft.id}`}
                        className="block px-5 py-4 hover:bg-red-950 transition text-white border-b border-white/10"
                      >

                        ✈️ {aircraft.name}

                      </Link>

                    ))}

                  </div>

                )
              }

            </div>

            {/* THEME BUTTON */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-[#1f1f1f] border border-red-900 p-3 rounded-full hover:bg-red-900/30 transition duration-300"
            >

              {
                darkMode ? (
                  <Sun className="text-yellow-300" size={20} />
                ) : (
                  <Moon className="text-red-400" size={20} />
                )
              }

            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >

              {
                menuOpen
                  ? <X size={30} />
                  : <Menu size={30} />
              }

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (

          <div className="md:hidden bg-black border-t border-red-900 px-6 py-6 space-y-5 text-white">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-400 transition"
            >
              Home
            </Link>

            <Link
              to="/inventory"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-400 transition"
            >
              Inventory
            </Link>

            <Link
              to="/compare"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-400 transition"
            >
              Compare
            </Link>

            <Link
              to="/timeline"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-400 transition"
            >
              Timeline
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-400 transition"
            >
              About
            </Link>

            {/* MOBILE SEARCH */}

            <div className="pt-3">

              <div className="flex items-center bg-[#1a1a1a] border border-red-900 rounded-full px-4 py-3">

                <Search
                  className="text-red-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search aircraft..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none text-white px-3 w-full placeholder:text-gray-400"
                />

              </div>

            </div>

          </div>

        )
      }

    </nav>

  )
}

export default Navbar
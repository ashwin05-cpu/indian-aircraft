import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import StatsSection from "./components/StatsSection"
import LoadingScreen from "./components/LoadingScreen"
import ScrollProgress from "./components/ScrollProgress"

import aircrafts from "./data/aircraftData"


import Home from "./pages/Home"
import AircraftInventory from "./pages/AircraftInventory"
import AircraftDetails from "./pages/AircraftDetails"
import AboutIAF from "./pages/AboutIAF"
import Timeline from "./pages/Timeline"
import SearchResults from "./pages/SearchResults"
import Contact from "./pages/Contact"
import Compare from "./pages/Compare"


function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  const filteredAircrafts = aircrafts.filter((aircraft) =>
  aircraft.name.toLowerCase().includes(search.toLowerCase())
)

  useEffect(() => {

  setTimeout(() => {
    setLoading(false)
  }, 2500)

}, [])

if (loading) {
  return <LoadingScreen />
}

  return (

    <BrowserRouter>

      <div
        className={`min-h-screen transition duration-500

          ${
            darkMode
              ? "bg-slate-950 text-white"
              : "bg-slate-100 text-black"
          }
        `}
      >
      
      <ScrollProgress />
        <Navbar
  search={search}
  setSearch={setSearch}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  filteredAircrafts={filteredAircrafts}
/>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/inventory"
            element={<AircraftInventory />}
          />

          <Route
            path="/aircraft/:id"
            element={<AircraftDetails />}
          />

          <Route
            path="/about"
            element={<AboutIAF />}
          />

          <Route
            path="/timeline"
            element={<Timeline />}
          />

          <Route
            path="/search"
            element={<SearchResults />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/compare"
            element={<Compare />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App
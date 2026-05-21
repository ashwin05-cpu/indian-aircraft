import { useState } from "react"

import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AircraftCard from "../components/AircraftCard"
import SidebarFilters from "../components/SidebarFilters"
import aircrafts from "../data/aircraftData"
import StatsSection from "../components/StatsSection"
import TimelineSection from "../components/TimelineSection"
import SquadronSection from "../components/SquadronSection"

function Home() {

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAircrafts = aircrafts.filter((aircraft) => {

    const matchesSearch =
      aircraft.name.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      aircraft.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {/* HERO */}
      <HeroSection />
      <SquadronSection />
      <StatsSection />
      <TimelineSection />

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center text-sky-400 mb-20">
          Aircraft Inventory
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <div>
            <SidebarFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* AIRCRAFT GRID */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">

            {filteredAircrafts.map((aircraft) => (
              <AircraftCard
                key={aircraft.id}
                aircraft={aircraft}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home
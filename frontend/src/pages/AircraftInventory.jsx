import AircraftCard from "../components/AircraftCard"
import aircrafts from "../data/aircraftData"

function AircraftInventory() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">

      <h1 className="text-6xl font-bold text-sky-400 mb-16 text-center">
        Aircraft Inventory
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {aircrafts.map((aircraft) => (
          <AircraftCard
            key={aircraft.id}
            aircraft={aircraft}
          />
        ))}
      </div>
    </div>
  )
}

export default AircraftInventory
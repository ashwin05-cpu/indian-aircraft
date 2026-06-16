import aircrafts from "../data/aircraftData"
import AircraftCard from "../components/AircraftCard"

function AircraftInventory() {

  return (

    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-16
        text-transparent bg-clip-text
        bg-gradient-to-r from-red-500 to-red-800">
          IAF AIRCRAFT INVENTORY
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {aircrafts.map((aircraft) => (

            <AircraftCard
              key={aircraft.id}
              aircraft={aircraft}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default AircraftInventory
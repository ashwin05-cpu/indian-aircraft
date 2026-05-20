import { useParams } from "react-router-dom"

import aircrafts from "../data/aircraftData"

function AircraftDetails() {

  const { id } = useParams()

  const aircraft = aircrafts.find(
    (a) => a.id === Number(id)
  )

  if (!aircraft) {
    return (
      <div className="text-white p-20">
        Aircraft not found
      </div>
    )
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* IMAGE */}
        <img
          src={aircraft.image}
          alt={aircraft.name}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        {/* CONTENT */}
        <div className="mt-10">

          <h1 className="text-6xl font-bold text-sky-400 mb-8">
            {aircraft.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl">

            <div className="space-y-5">

              <p>
                <span className="text-sky-300 font-semibold">
                  Role:
                </span>{" "}
                {aircraft.role}
              </p>

              <p>
                <span className="text-sky-300 font-semibold">
                  Category:
                </span>{" "}
                {aircraft.category}
              </p>

              <p>
                <span className="text-sky-300 font-semibold">
                  Max Speed:
                </span>{" "}
                {aircraft.speed}
              </p>

            </div>

            <div className="space-y-5">

              <p>
                <span className="text-sky-300 font-semibold">
                  Combat Range:
                </span>{" "}
                {aircraft.range}
              </p>

              <p>
                <span className="text-sky-300 font-semibold">
                  Generation:
                </span>{" "}
                {aircraft.generation}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AircraftDetails
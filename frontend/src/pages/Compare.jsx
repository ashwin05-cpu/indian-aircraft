import { useState } from "react"

import aircrafts from "../data/aircraftData"

function Compare() {

  const [firstAircraft, setFirstAircraft] = useState(aircrafts[0])
  const [secondAircraft, setSecondAircraft] = useState(aircrafts[1])

  return (

    <div className="bg-slate-950 text-white min-h-screen px-6 py-32">

      <h1 className="text-6xl font-bold text-center text-sky-400 mb-20">
        Aircraft Comparison
      </h1>

      {/* SELECTORS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">

        {/* FIRST */}
        <select
          className="bg-white/10 border border-white/20 p-4 rounded-2xl text-white"
          onChange={(e) =>
            setFirstAircraft(
              aircrafts.find(
                (a) => a.id === Number(e.target.value)
              )
            )
          }
        >

          {aircrafts.map((aircraft) => (

            <option
              key={aircraft.id}
              value={aircraft.id}
              className="text-black"
            >
              {aircraft.name}
            </option>

          ))}

        </select>

        {/* SECOND */}
        <select
          className="bg-white/10 border border-white/20 p-4 rounded-2xl text-white"
          onChange={(e) =>
            setSecondAircraft(
              aircrafts.find(
                (a) => a.id === Number(e.target.value)
              )
            )
          }
        >

          {aircrafts.map((aircraft) => (

            <option
              key={aircraft.id}
              value={aircraft.id}
              className="text-black"
            >
              {aircraft.name}
            </option>

          ))}

        </select>

      </div>

      {/* COMPARISON TABLE */}
      <div className="max-w-6xl mx-auto overflow-x-auto">

        <table className="w-full border border-white/20">

          <thead className="bg-sky-500">

            <tr>

              <th className="p-5 text-left">
                Specification
              </th>

              <th className="p-5 text-left">
                {firstAircraft.name}
              </th>

              <th className="p-5 text-left">
                {secondAircraft.name}
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t border-white/20">
              <td className="p-5 font-semibold">Role</td>
              <td className="p-5">{firstAircraft.role}</td>
              <td className="p-5">{secondAircraft.role}</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-5 font-semibold">Category</td>
              <td className="p-5">{firstAircraft.category}</td>
              <td className="p-5">{secondAircraft.category}</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-5 font-semibold">Max Speed</td>
              <td className="p-5">{firstAircraft.speed}</td>
              <td className="p-5">{secondAircraft.speed}</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-5 font-semibold">Range</td>
              <td className="p-5">{firstAircraft.range}</td>
              <td className="p-5">{secondAircraft.range}</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-5 font-semibold">Generation</td>
              <td className="p-5">{firstAircraft.generation}</td>
              <td className="p-5">{secondAircraft.generation}</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Compare
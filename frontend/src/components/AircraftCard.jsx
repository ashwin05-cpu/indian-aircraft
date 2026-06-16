import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function AircraftCard({ aircraft }) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -8,
      }}

      className="bg-gradient-to-br from-red-950/40 to-black/80
      border border-red-700/30
      rounded-3xl
      overflow-hidden
      shadow-[0_0_20px_rgba(255,0,0,0.2)]
      hover:shadow-[0_0_35px_rgba(255,0,0,0.5)]
      transition-all duration-500"
    >

      <img
        src={aircraft.image}
        alt={aircraft.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-3xl font-bold text-red-500 mb-3">
          {aircraft.name}
        </h2>

        <p className="text-gray-300 mb-5">
          {aircraft.description}
        </p>

        <div className="space-y-2 text-sm text-gray-400">

          <p>
            <span className="text-red-400 font-semibold">
              Generation:
            </span>{" "}
            {aircraft.generation}
          </p>

          <p>
            <span className="text-red-400 font-semibold">
              Top Speed:
            </span>{" "}
            {aircraft.topSpeed}
          </p>

          <p>
            <span className="text-red-400 font-semibold">
              Manufacturer:
            </span>{" "}
            {aircraft.manufacturer}
          </p>

        </div>

        <Link to={`/aircraft/${aircraft.id}`}>

          <button
            className="mt-6 bg-red-700 hover:bg-red-600
            px-6 py-3 rounded-xl font-semibold transition"
          >
            View Details
          </button>

        </Link>

      </div>

    </motion.div>

  )
}

export default AircraftCard
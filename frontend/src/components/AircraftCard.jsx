import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function AircraftCard({ aircraft }) {
  return (

    <Link to={`/aircraft/${aircraft.id}`}>

      <motion.div

        whileHover={{
          scale: 1.05,
          y: -10,
        }}

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.6,
        }}

        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
      >

        {/* IMAGE */}
        <img
          src={aircraft.images[0]}
          alt={aircraft.name}
          className="w-full h-64 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">

          <h2 className="text-3xl font-bold text-sky-400 mb-3">
            {aircraft.name}
          </h2>

          <p className="text-gray-300 mb-4">
            {aircraft.role}
          </p>

          <div className="space-y-2 text-gray-200">

            <p>
              <span className="text-sky-300 font-semibold">
                Speed:
              </span>{" "}
              {aircraft.speed}
            </p>

            <p>
              <span className="text-sky-300 font-semibold">
                Range:
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

      </motion.div>

    </Link>
  )
}

export default AircraftCard
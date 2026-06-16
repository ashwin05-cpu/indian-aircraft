import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import aircrafts from "../data/aircraftData"

function AircraftDetails() {

  const { id } = useParams()

  const aircraft = aircrafts.find(
    (a) => a.id === parseInt(id)
  )

  if (!aircraft) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-bold">
        Aircraft Not Found
      </div>

    )
  }

  return (

    <section className="min-h-screen bg-black text-white py-20 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-red-950/20 to-black -z-10"></div>

      {/* GRID */}
      <div className="fixed inset-0 opacity-10 -z-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HERO IMAGE */}
        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

        >

          <img
            src={aircraft.image}
            alt={aircraft.name}
            className="w-full h-[500px] object-cover rounded-3xl mb-10
            border border-red-700/30
            shadow-[0_0_40px_rgba(255,0,0,0.3)]"
          />

        </motion.div>

        {/* TITLE */}
        <motion.div

          initial={{
            opacity: 0,
            x: -50,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}

        >

          <h1 className="text-5xl md:text-7xl font-black text-red-500 mb-3">
            {aircraft.name}
          </h1>

          <p className="text-red-300 text-2xl italic mb-8">
            {aircraft.Nickname}
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-14 max-w-5xl">
            {aircraft.description}
          </p>

        </motion.div>

        {/* COMBAT ROLES */}
        <div className="mb-16">

          <h2 className="text-4xl font-black text-red-500 mb-8">
            Combat Roles
          </h2>

          <div className="flex flex-wrap gap-4">

            {aircraft.role.map((role, index) => (

              <motion.div

                key={index}

                whileHover={{
                  scale: 1.05,
                }}

                className="bg-red-900/20 border border-red-700/40
                px-5 py-3 rounded-full
                text-sm md:text-base
                shadow-[0_0_15px_rgba(255,0,0,0.15)]"
              >

                {role}

              </motion.div>

            ))}

          </div>

        </div>

        {/* OVERVIEW */}
        <div className="mb-16">

          <h2 className="text-4xl font-black text-red-500 mb-8">
            Aircraft Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {aircraft.overview.map((item, index) => (

              <motion.div

                key={index}

                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}

                className="bg-red-950/20 border border-red-700/30
                p-5 rounded-2xl backdrop-blur-lg"
              >

                <div className="flex gap-3">

                  <span className="text-red-500 text-xl">
                    ▸
                  </span>

                  <p className="text-gray-300 leading-relaxed">
                    {item}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* SPECIFICATIONS */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          {/* SPECS */}
          <motion.div

            whileHover={{
              scale: 1.01,
            }}

            className="bg-gradient-to-br from-red-950/30 to-black/80
            border border-red-700/30
            rounded-3xl p-8
            shadow-[0_0_30px_rgba(255,0,0,0.15)]"
          >

            <h2 className="text-3xl font-black text-red-400 mb-8">
              Specifications
            </h2>

            <div className="space-y-5 text-gray-300">

              <p>
                <span className="text-red-400 font-bold">
                  Country:
                </span>{" "}
                {aircraft.country}
              </p>

              <p>
                <span className="text-red-400 font-bold">
                  Manufacturer:
                </span>{" "}
                {aircraft.manufacturer}
              </p>

              <p>
                <span className="text-red-400 font-bold">
                  Generation:
                </span>{" "}
                {aircraft.generation}
              </p>

              <p>
                <span className="text-red-400 font-bold">
                  Type:
                </span>{" "}
                {aircraft.type}
              </p>

              <p>
                <span className="text-red-400 font-bold">
                  Engines:
                </span>{" "}
                {aircraft.engines}
              </p>

              <p>
                <span className="text-red-400 font-bold">
                  Top Speed:
                </span>{" "}
                {aircraft.topSpeed}
              </p>

              <p>
                <span className="text-red-400 font-bold">
                  Combat Radius:
                </span>{" "}
                {aircraft.combatRadius}
              </p>

            </div>

          </motion.div>

          {/* AVIONICS */}
          <motion.div

            whileHover={{
              scale: 1.01,
            }}

            className="bg-gradient-to-br from-red-950/30 to-black/80
            border border-red-700/30
            rounded-3xl p-8
            shadow-[0_0_30px_rgba(255,0,0,0.15)]"
          >

            <h2 className="text-3xl font-black text-red-400 mb-8">
              Avionics & Electronics
            </h2>

            <ul className="space-y-4 text-gray-300">

              {aircraft.avionics.map((item, index) => (

                <li
                  key={index}
                  className="flex gap-3"
                >

                  <span className="text-red-500">
                    ▸
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </motion.div>

        </div>

        {/* WEAPONS & STRENGTHS */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          {/* WEAPONS */}
          <div className="bg-gradient-to-br from-red-950/30 to-black/80
          border border-red-700/30
          rounded-3xl p-8">

            <h2 className="text-3xl font-black text-red-400 mb-8">
              Weapons Systems
            </h2>

            <ul className="space-y-4 text-gray-300">

              {aircraft.weapons.map((weapon, index) => (

                <li
                  key={index}
                  className="flex gap-3"
                >

                  <span className="text-red-500">
                    ▸
                  </span>

                  {weapon}

                </li>

              ))}

            </ul>

          </div>

          {/* STRENGTHS */}
          <div className="bg-gradient-to-br from-red-950/30 to-black/80
          border border-red-700/30
          rounded-3xl p-8">

            <h2 className="text-3xl font-black text-red-400 mb-8">
              Combat Strengths
            </h2>

            <ul className="space-y-4 text-gray-300">

              {aircraft.strengths.map((strength, index) => (

                <li
                  key={index}
                  className="flex gap-3"
                >

                  <span className="text-red-500">
                    ▸
                  </span>

                  {strength}

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* IMPORTANT EVENTS */}
        <div>

          <h2 className="text-5xl font-black text-red-500 mb-12">
            Important Historical Events
          </h2>

          <div className="relative">

            {/* TIMELINE LINE */}
            <div className="absolute left-3 top-0 h-full w-[3px]
            bg-gradient-to-b from-red-700 to-red-900"></div>

            <div className="space-y-10">

              {aircraft.importantEvents.map((event, index) => (

                <motion.div

                  key={index}

                  initial={{
                    opacity: 0,
                    x: -50,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}

                  className="relative pl-14"
                >

                  {/* DOT */}
                  <div className="absolute left-0 top-2
                  w-6 h-6 rounded-full
                  bg-red-600 border-4 border-black
                  shadow-[0_0_20px_red]"></div>

                  {/* CARD */}
                  <div className="bg-gradient-to-br from-red-950/20 to-black/70
                  border border-red-700/30
                  rounded-2xl p-6
                  shadow-[0_0_25px_rgba(255,0,0,0.15)]">

                    <h3 className="text-2xl font-black text-red-400">
                      {event.year}
                    </h3>

                    <h4 className="text-xl font-bold mt-2 mb-4">
                      {event.title}
                    </h4>

                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AircraftDetails
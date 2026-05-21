import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function StatsSection() {

  const stats = [
    {
      title: "Combat Aircraft",
      value: "650+",
    },

    {
      title: "Active Squadrons",
      value: "45",
    },

    {
      title: "Airbases",
      value: "60+",
    },

    {
      title: "Operations Completed",
      value: "1200+",
    },
  ]

  return (

    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-sky-950">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-sky-400 mb-20">
          Indian Air Force Strength
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}

              whileHover={{
                scale: 1.05,
              }}

              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-center shadow-2xl"
            >

              <h3 className="text-5xl font-bold text-sky-400 mb-4">
                {stat.value}
              </h3>

              <p className="text-xl text-gray-300">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default StatsSection
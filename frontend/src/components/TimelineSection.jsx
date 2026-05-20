import { motion } from "framer-motion"

function TimelineSection() {

  const events = [

    {
      year: "1947",
      title: "First Indo-Pak War",
      description:
        "Indian Air Force supported operations in Kashmir after independence."
    },

    {
      year: "1971",
      title: "Bangladesh Liberation War",
      description:
        "IAF achieved air superiority and played a decisive role."
    },

    {
      year: "1999",
      title: "Kargil War",
      description:
        "Operation Safed Sagar was launched against infiltrators."
    },

    {
      year: "2019",
      title: "Balakot Air Strike",
      description:
        "IAF conducted precision strikes against terror camps."
    },

  ]

  return (

    <section className="py-24 px-6 bg-slate-950">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-sky-400 mb-24">
          Indian Air Force Timeline
        </h2>

        <div className="relative border-l-4 border-sky-500">

          {events.map((event, index) => (

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
                duration: 0.7,
                delay: index * 0.2,
              }}

              className="mb-20 ml-10"
            >

              {/* DOT */}
              <div className="absolute w-6 h-6 bg-sky-500 rounded-full -left-[14px]"></div>

              {/* CARD */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

                <h3 className="text-3xl font-bold text-sky-400 mb-3">
                  {event.year}
                </h3>

                <h4 className="text-2xl font-semibold mb-4">
                  {event.title}
                </h4>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {event.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default TimelineSection
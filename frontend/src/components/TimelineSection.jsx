import { motion } from "framer-motion"
import {
  Plane,
  Rocket,
  Shield,
  Radar,
  Stars,
} from "lucide-react"

function TimelineSection() {

  const events = [

    {
      year: "1932",
      title: "Birth of the Indian Air Force",
      icon: <Plane size={20} />,
      description: [
        "Officially established on 8 October 1932.",
        "Started with only 4 Westland Wapiti aircraft.",
        "Initially consisted of 6 RAF-trained officers.",
        "Known as a small colonial air arm under British rule.",
      ],
    },

    {
      year: "1945",
      title: "Royal Indian Air Force",
      icon: <Stars size={20} />,
      description: [
        "Served alongside Allied forces during World War II.",
        "Operations conducted in Burma and North Africa.",
        "Earned recognition for bravery and tactical flying.",
        "Received the title 'Royal Indian Air Force'.",
      ],
    },

    {
      year: "1947",
      title: "First Indo-Pak War",
      icon: <Shield size={20} />,
      description: [
        "Supported Indian Army in Kashmir conflict.",
        "Dakota aircraft airlifted troops into Srinagar.",
        "Played a decisive role in defending Kashmir.",
        "Became India's first active combat air force.",
      ],
    },

    {
      year: "1954",
      title: "First Indian Air Chief",
      icon: <Plane size={20} />,
      description: [
        "Subroto Mukerjee became first Indian Air Chief.",
        "Widely known as Father of the Indian Air Force.",
        "Led modernization and indigenous expansion.",
        "Strengthened post-independence air capability.",
      ],
    },

    {
      year: "1965",
      title: "1965 Indo-Pak Air War",
      icon: <Rocket size={20} />,
      description: [
        "First major full-scale air war for India.",
        "Folland Gnat earned nickname 'Sabre Slayer'.",
        "IAF heavily engaged Pakistan Air Force.",
        "Improved tactical combat doctrine significantly.",
      ],
    },

    {
      year: "1971",
      title: "Bangladesh Liberation War",
      icon: <Shield size={20} />,
      description: [
        "Achieved rapid air superiority.",
        "Destroyed strategic enemy infrastructure.",
        "Supported liberation of Bangladesh.",
        "Established IAF as dominant regional power.",
      ],
    },

    {
      year: "1984",
      title: "India Goes to Space",
      icon: <Stars size={20} />,
      description: [
        "Rakesh Sharma became first Indian in space.",
        "Mission aboard Soviet Salyut-7 spacecraft.",
        "Major aerospace milestone for India.",
        "Famous reply: 'Saare Jahan Se Achha'.",
      ],
    },

    {
      year: "1999",
      title: "Kargil War",
      icon: <Rocket size={20} />,
      description: [
        "Operation Safed Sagar launched by IAF.",
        "Mirage 2000 performed precision bombing.",
        "First high-altitude air warfare operation.",
        "Transformed India's precision strike capability.",
      ],
    },

    {
      year: "2019",
      title: "Balakot Air Strike",
      icon: <Radar size={20} />,
      description: [
        "Conducted deep precision strikes in Balakot.",
        "Targeted terror infrastructure successfully.",
        "Showcased long-range strike capability.",
        "Demonstrated strategic deterrence capability.",
      ],
    },

    {
      year: "2020",
      title: "Rafale Era",
      icon: <Plane size={20} />,
      description: [
        "Rafale fighters inducted into the IAF.",
        "Enhanced electronic warfare capability.",
        "Improved Beyond Visual Range combat.",
        "Integrated Meteor and SCALP missiles.",
      ],
    },

    {
      year: "2025",
      title: "Retirement of MiG-21",
      icon: <Rocket size={20} />,
      description: [
        "Served the IAF for more than 60 years.",
        "Participated in multiple historic wars.",
        "One of India's most iconic aircraft.",
        "Marked end of a legendary aviation era.",
      ],
    },

    {
      year: "2026",
      title: "Modern Indian Air Force",
      icon: <Radar size={20} />,
      description: [
        "AMCA and Tejas Mk1A under development.",
        "AI-assisted warfare systems expanding.",
        "Drone and indigenous systems increasing.",
        "Among world's largest combat air forces.",
      ],
    },

  ]

  return (

    <section className="relative overflow-hidden bg-black py-20 px-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h2

          initial={{
            opacity: 0,
            y: -50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="text-center text-4xl md:text-5xl font-black mb-20 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 tracking-widest"
        >
          INDIAN AIR FORCE TIMELINE
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-red-700 via-red-500 to-red-900 -translate-x-1/2 shadow-[0_0_20px_red]"></div>

          {events.map((event, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}

              className={`relative mb-16 flex items-center ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              {/* CARD */}
              <motion.div

                whileHover={{
                  scale: 1.03,
                  y: -6,
                }}

                transition={{
                  type: "spring",
                  stiffness: 250,
                }}

                className="group relative w-full md:w-[42%]
                bg-gradient-to-br from-red-950/40 to-black/80
                border border-red-700/30
                backdrop-blur-lg
                rounded-2xl
                p-5
                shadow-[0_0_20px_rgba(255,0,0,0.2)]
                hover:shadow-[0_0_35px_rgba(255,0,0,0.5)]
                transition-all duration-500"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl bg-red-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

                {/* YEAR */}
                <h3 className="text-3xl font-black text-red-500 mb-3 tracking-wider">
                  {event.year}
                </h3>

                {/* TITLE */}
                <div className="flex items-center gap-3 mb-4">

                  <div className="text-red-400">
                    {event.icon}
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-white">
                    {event.title}
                  </h4>

                </div>

                {/* DESCRIPTION */}
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">

                  {event.description.map((point, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-2"
                    >

                      <span className="text-red-500 mt-1">
                        ▸
                      </span>

                      <span>{point}</span>

                    </li>

                  ))}

                </ul>

              </motion.div>

              {/* CENTER DOT */}
              <motion.div

                whileHover={{
                  scale: 1.2,
                }}

                className="absolute left-1/2 -translate-x-1/2
                w-6 h-6 rounded-full
                bg-red-600 border-4 border-black
                shadow-[0_0_20px_red]"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default TimelineSection
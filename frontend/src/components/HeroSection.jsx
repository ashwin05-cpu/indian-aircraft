import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function HeroSection() {

  return (

    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}

      
      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* RED GRADIENT OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#140000]/70 to-black"></div>

      {/* GLOW EFFECT */}

      <div className="absolute w-[700px] h-[700px] bg-red-900/20 blur-[150px] rounded-full top-[-200px]"></div>

      {/* CONTENT */}

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
          duration: 1.2,
        }}

        className="relative z-10 text-center px-6 max-w-6xl"
      >

        {/* SMALL TITLE */}

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{ delay: 0.4 }}

          className="uppercase tracking-[0.4em] text-red-500 font-semibold mb-5 text-sm md:text-base mt-12"
        >

          Indian Military Aviation

        </motion.p>

        {/* MAIN TITLE */}

        <motion.h1

          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1,
          }}

          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight"
        >

          INDIAN AIR FORCE

        </motion.h1>

        {/* RED LINE */}

        <div className="w-40 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

        {/* DESCRIPTION */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.6,
            duration: 1,
          }}

          className="mt-8 text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >

          Guardians of the Indian skies — explore advanced fighter aircraft,
          military aviation technology, strategic air power,
          and legendary missions of the Indian Air Force.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.9,
            duration: 1,
          }}

          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >

          {/* MAIN BUTTON */}

          <Link to="/inventory">

            <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-full text-lg md:text-xl font-semibold transition duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-105">

              Explore Aircraft

            </button>

          </Link>

          {/* SECOND BUTTON */}

          <Link to="/timeline">

            <button className="border border-red-700 text-red-400 hover:bg-red-900/20 px-10 py-4 rounded-full text-lg md:text-xl font-semibold transition duration-300 hover:scale-105">

              View Timeline

            </button>

          </Link>

        </motion.div>

        {/* BOTTOM SCROLL TEXT */}

        <motion.div

          animate={{
            y: [0, 10, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}

          className="mt-20 text-gray-500 text-sm tracking-[0.3em]"
        >

          SCROLL TO EXPLORE

        </motion.div>

      </motion.div>

    </section>

  )
}

export default HeroSection
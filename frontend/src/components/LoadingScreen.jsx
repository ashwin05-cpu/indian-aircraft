import { motion } from "framer-motion"

function LoadingScreen() {

  return (

    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">

      <div className="text-center">

        {/* ANIMATED JET */}
        <motion.div

          animate={{
            x: [0, 100, 0],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="text-7xl mb-8"
        >
          ✈️
        </motion.div>

        {/* TITLE */}
        <motion.h1

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="text-5xl font-bold text-sky-400"
        >
          Loading Aircraft Database
        </motion.h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-gray-300 text-xl">
          Initializing Air Defense Systems...
        </p>

      </div>

    </div>
  )
}

export default LoadingScreen
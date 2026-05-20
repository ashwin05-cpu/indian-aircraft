import { motion } from "framer-motion"

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
        alt="fighter jet"
        className="absolute w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 to-slate-950"></div>

      {/* ANIMATED CONTENT */}
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

        className="relative z-10 text-center px-6"
      >

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          INDIAN AIR FORCE
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-sky-200 max-w-3xl mx-auto leading-relaxed">
          Guardians of the Indian Skies — Explore fighter aircraft,
          military aviation technology, and operational air power.
        </p>

        <button className="mt-10 px-8 py-4 bg-sky-500 hover:bg-sky-400 transition rounded-full text-lg font-semibold">
          Explore Aircraft
        </button>

      </motion.div>

    </section>
  )
}

export default HeroSection
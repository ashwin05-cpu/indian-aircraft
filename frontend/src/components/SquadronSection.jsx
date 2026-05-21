import squadronData from "../data/squadronData"
import { Link } from "react-router-dom"

function SquadronSection() {

  return (

    <section className="bg-[#020b24] text-white py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-sky-400 mb-6">
          IAF Combat Squadrons
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The Indian Air Force currently operates around
          30 active fighter squadrons equipped with
          advanced aircraft including the Su-30MKI,
          Rafale, Tejas, Mirage 2000, MiG-29, and Jaguar.
        </p>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold text-sky-400">
              30+
            </h3>

            <p className="mt-3 text-gray-300">
              Active Fighter Squadrons
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold text-sky-400">
              550+
            </h3>

            <p className="mt-3 text-gray-300">
              Combat Aircraft
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold text-sky-400">
              42
            </h3>

            <p className="mt-3 text-gray-300">
              Target Squadron Strength
            </p>
          </div>

        </div>


        {/* Dynamic Squadron Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {squadronData.map((squadron) => (

            <Link
              key={squadron.id}
              to={`/squadron/${squadron.id}`}
            >

              <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer">

                <img
                  src={squadron.image}
                  alt={squadron.name}
                  className="w-full h-48 object-cover rounded-xl"
                />

                <h3 className="text-3xl font-bold text-sky-400 mt-6">
                  {squadron.name}
                </h3>

                <p className="text-gray-300 mt-2">
                  {squadron.nickname}
                </p>

                <p className="text-gray-400 mt-4">
                  Aircraft: {squadron.aircraft}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  )
}

export default SquadronSection
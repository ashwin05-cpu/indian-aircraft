import { useParams } from "react-router-dom"

import squadronData from "../data/squadronData"

function SquadronDetails() {

  const { id } = useParams()

  const squadron = squadronData.find(
    (s) => s.id === Number(id)
  )

  if (!squadron) {
    return <h1>Squadron Not Found</h1>
  }

  return (

    <div className="min-h-screen bg-[#020b24] text-white p-10">

      <img
        src={squadron.image}
        alt={squadron.name}
        className="w-full max-h-[500px] object-cover rounded-2xl"
      />

      <h1 className="text-6xl font-bold text-sky-400 mt-8">
        {squadron.name}
      </h1>

      <p className="text-2xl text-gray-300 mt-4">
        {squadron.nickname}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Aircraft
          </h2>

          <p className="text-gray-300 mt-2">
            {squadron.aircraft}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Base
          </h2>

          <p className="text-gray-300 mt-2">
            {squadron.base}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Role
          </h2>

          <p className="text-gray-300 mt-2">
            {squadron.role}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Motto
          </h2>

          <p className="text-gray-300 mt-2">
            {squadron.motto}
          </p>
        </div>

      </div>

    </div>

  )
}

export default SquadronDetails
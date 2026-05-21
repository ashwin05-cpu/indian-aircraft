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
      title: "Formation of the Indian Air Force",
      icon: <Plane size={20} />,
      description: [
        "The Indian Air Force was officially established on 8 October 1932 during British rule.",
        "No. 1 Squadron became the first operational squadron.",
        "Initially operated Westland Wapiti aircraft.",
        "Started as a small auxiliary force under the Royal Air Force (RAF).",
        "Marked the birth of India's military aviation capability.",
      ],
      extra:
        "The early IAF was extremely small in manpower and equipment but laid the foundation for India's future aerospace power.",
    },

    {
      year: "1939 – 1945",
      title: "World War II Era",
      icon: <Rocket size={20} />,
      description: [
        "The IAF fought Japanese forces in Burma during World War II.",
        "Conducted bomber escort, reconnaissance, and close air support missions.",
        "Aircraft like Hawker Hurricane, Dakota, and Spitfire were inducted.",
        "Earned international recognition for combat performance.",
        "Expanded rapidly in both manpower and operational capability.",
      ],
      extra:
        "Because of its wartime achievements, King George VI granted the title 'Royal Indian Air Force' in 1945.",
    },

    {
      year: "1947 – 1948",
      title: "Independence & Kashmir War",
      icon: <Shield size={20} />,
      description: [
        "India became independent in 1947.",
        "Air assets were divided between India and Pakistan.",
        "IAF airlifted Indian troops into Srinagar during the Kashmir conflict.",
        "Dakota transport aircraft played a decisive role.",
        "Successfully defended Jammu & Kashmir from invading forces.",
      ],
      extra:
        "This became the first major combat operation of independent India and demonstrated the strategic importance of air mobility.",
    },

    {
      year: "1950s",
      title: "Republic Era & Jet Modernization",
      icon: <Plane size={20} />,
      description: [
        "The word 'Royal' was removed after India became a republic.",
        "Officially renamed as the Indian Air Force.",
        "Transitioned into the jet age with modern fighter aircraft.",
        "Focused on indigenous growth and modernization.",
        "Expanded operational infrastructure across India.",
      ],
      extra:
        "This period marked the transformation from a colonial air arm into a sovereign national air force.",
    },

    {
      year: "1960 – 1961",
      title: "Goa Liberation & UN Missions",
      icon: <Radar size={20} />,
      description: [
        "Participated in UN operations in Congo.",
        "Conducted Operation Vijay during liberation of Goa.",
        "Bombed Portuguese airfields and military targets.",
        "Provided close air support to Indian ground forces.",
        "Helped integrate Goa into the Indian Union.",
      ],
      extra:
        "The IAF demonstrated both expeditionary and humanitarian operational capabilities during this period.",
    },

    {
      year: "1962",
      title: "Sino-Indian War",
      icon: <Shield size={20} />,
      description: [
        "IAF was mainly used for transport and logistics roles.",
        "Combat air power remained largely underutilized.",
        "India recognized weaknesses in air defense preparedness.",
        "Triggered major modernization initiatives.",
        "Improved future focus on rapid response capability.",
      ],
      extra:
        "The war became a turning point that accelerated India's military aviation modernization programs.",
    },

    {
      year: "1965",
      title: "Indo-Pak Air War",
      icon: <Rocket size={20} />,
      description: [
        "First major air war between India and Pakistan.",
        "Folland Gnat became famous as the 'Sabre Slayer'.",
        "IAF prevented Pakistan from gaining air superiority.",
        "MiG-21 and HF-24 Marut were inducted afterward.",
        "Para Commandos were also introduced during this era.",
      ],
      extra:
        "The conflict gave the IAF its first true experience in modern aerial warfare and tactical air combat.",
    },

    {
      year: "1971",
      title: "Bangladesh Liberation War",
      icon: <Stars size={20} />,
      description: [
        "One of the greatest victories in IAF history.",
        "Achieved complete air superiority in East Pakistan.",
        "Flew over 16,000 sorties during the conflict.",
        "Destroyed enemy runways and infrastructure.",
        "Played a decisive role in the liberation of Bangladesh.",
      ],
      extra:
        "The 1971 war established the IAF as one of the most dominant regional air powers in Asia.",
    },

    {
      year: "1984 – 1988",
      title: "Siachen & Regional Operations",
      icon: <Radar size={20} />,
      description: [
        "Conducted Operation Meghdoot in Siachen Glacier.",
        "Launched Operation Poomalai in Sri Lanka.",
        "Executed Operation Cactus in the Maldives.",
        "Demonstrated strategic airlift capability.",
        "Mastered extreme high-altitude logistics operations.",
      ],
      extra:
        "These operations proved the IAF's ability to rapidly deploy forces across difficult terrain and foreign regions.",
    },

    {
      year: "1999",
      title: "Kargil War – Operation Safed Sagar",
      icon: <Rocket size={20} />,
      description: [
        "First air war fought at extremely high altitude.",
        "Mirage 2000 aircraft carried out precision strikes.",
        "Enemy bunkers and supply routes were destroyed.",
        "Supported recapture of Tiger Hill.",
        "Changed India's precision warfare doctrine forever.",
      ],
      extra:
        "Operation Safed Sagar became one of the most technologically important campaigns in Indian military aviation history.",
    },

    {
      year: "2000s",
      title: "Modernization Era",
      icon: <Plane size={20} />,
      description: [
        "Su-30MKI became backbone of the IAF fleet.",
        "AWACS and advanced radar systems inducted.",
        "Network-centric warfare systems introduced.",
        "Focus shifted toward indigenous defense technology.",
        "Precision warfare and electronic warfare capabilities expanded.",
      ],
      extra:
        "The IAF transformed into a highly digitized and network-enabled modern air force.",
    },

    {
      year: "2019",
      title: "Balakot Air Strike",
      icon: <Shield size={20} />,
      description: [
        "Precision strikes conducted on terror camps in Balakot.",
        "Demonstrated deep strike capability.",
        "Showcased strategic deterrence and precision warfare.",
        "Operation displayed long-range offensive reach.",
        "Marked a new era of counter-terror air operations.",
      ],
      extra:
        "The Balakot strike became one of the most internationally discussed air operations conducted by India.",
    },

    {
      year: "2025",
      title: "Operation Sindoor",
      icon: <Radar size={20} />,
      description: [
        "One of the most advanced modern IAF operations.",
        "Used Rafale fighters, BrahMos, SCALP missiles, and drones.",
        "Integrated electronic warfare and AI-assisted systems.",
        "Demonstrated multi-domain combat capability.",
        "Showcased Integrated Air Command and Control System (IACCS).",
      ],
      extra:
        "Operation Sindoor reflected the IAF's transition into AI-driven network-centric warfare and advanced aerospace dominance.",
    },

    {
      year: "Present Day",
      title: "Modern Indian Air Force",
      icon: <Stars size={20} />,
      description: [
        "One of the world's largest air forces.",
        "Nuclear-capable strategic force.",
        "Leader in high-altitude and precision warfare.",
        "Rapidly modernizing with Rafale, Tejas, drones, and AI systems.",
        "Expanding indigenous missile and radar technology.",
      ],
      extra:
        "Today the Indian Air Force stands among the world's most combat-experienced and technologically evolving aerospace powers.",
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

      <div className="relative max-w-6xl mx-auto">

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

          className="text-center text-4xl md:text-5xl font-black mb-20 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 tracking-widest mt-12"
        >
          IAF HISTORY
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

                {/* EXTRA INFO */}
                <p className="mt-4 text-xs text-red-300 leading-relaxed border-t border-red-800/40 pt-4 italic">
                  {event.extra}
                </p>

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
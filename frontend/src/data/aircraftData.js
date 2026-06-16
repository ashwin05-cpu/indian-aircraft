import rafaleImage from "../assets/images/rafale.jpg";

const aircrafts = [

  {
    id: 1,
    name: "Dassault Rafale",
    Nickname: "Omnirole Fighter",
    country: "France",
    manufacturer: "Dassault Aviation",
    generation: "4.5 Generation",
    type: "Omnirole Fighter",
    topSpeed: "Mach 1.8",
    combatRadius: "1850 km",
    engines: "2 × Safran M88",
    role: [
      "Air Superiority",
      "Ground Attack",
      "Nuclear Strike",
      "Electronic Warfare",
      "Reconnaissance",
      "Maritime Strike",
    ],

   image: rafaleImage,

    description:
      "The Dassault Rafale is one of the world’s most advanced 4.5 generation multirole fighter aircraft. Known as the Omnirole Fighter, it can perform multiple combat missions in a single sortie.",

    overview: [
      "Designed and developed by Dassault Aviation.",
      "Entered Indian Air Force service in 2020.",
      "Uses advanced fly-by-wire technology.",
      "Equipped with SPECTRA electronic warfare suite.",
      "Highly combat proven in multiple global conflicts.",
    ],

    weapons: [
      "Meteor Missile",
      "SCALP Cruise Missile",
      "MICA Missile",
      "HAMMER Precision Bomb",
      "ASMP-A Nuclear Missile",
    ],

    avionics: [
      "RBE2 AESA Radar",
      "SPECTRA EW Suite",
      "Helmet Mounted Display",
      "Advanced Targeting Systems",
    ],

    strengths: [
      "Extremely versatile",
      "Excellent survivability",
      "Advanced electronic warfare",
      "Combat proven globally",
      "Low maintenance",
    ],

    importantEvents: [

      {
        year: "1983",
        title: "Rafale Program Launch",
        description:
          "France launched the Rafale program to create an independent multirole fighter aircraft.",
      },

      {
        year: "1986",
        title: "First Flight",
        description:
          "Rafale prototype conducted its first flight on 4 July 1986.",
      },

      {
        year: "2001",
        title: "French Navy Service",
        description:
          "Rafale M entered service aboard aircraft carrier Charles de Gaulle.",
      },

      {
        year: "2011",
        title: "Libya Operations",
        description:
          "Rafale demonstrated true multirole combat capability during NATO Libya intervention.",
      },

      {
        year: "2016",
        title: "India-Rafale Deal",
        description:
          "India signed deal for 36 Rafale fighters worth €7.8 billion.",
      },

      {
        year: "2020",
        title: "Arrival in India",
        description:
          "First Rafales arrived at Ambala Air Force Station.",
      },

      {
        year: "2025",
        title: "Operation Sindoor",
        description:
          "Rafales reportedly performed precision strikes and electronic warfare operations.",
      },

    ],

  },

]

export default aircrafts
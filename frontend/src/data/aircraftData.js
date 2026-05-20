const aircrafts = [

  {
    id: 1,
    name: "Rafale EH/DH",
    role: "Multirole Fighter",
    category: "Fighter",
    speed: "Mach 1.8",
    range: "1850 km",
    generation: "4.5",

    images: [
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 2,
    name: "Su-30MKI",
    role: "Air Superiority Fighter",
    category: "Fighter",
    speed: "Mach 2.0",
    range: "3000 km",
    generation: "4++",

    images: [
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    ]
  },

  {
    id: 3,
    name: "HAL Tejas Mk1A",
    role: "Light Combat Aircraft",
    category: "Fighter",
    speed: "Mach 1.6",
    range: "1700 km",
    generation: "4+",

    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 4,
    name: "MiG-29UPG",
    role: "Air Superiority Fighter",
    category: "Fighter",
    speed: "Mach 2.25",
    range: "1430 km",
    generation: "4",

    images: [
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    ]
  },

  {
    id: 5,
    name: "Mirage 2000I/TI",
    role: "Multirole Fighter",
    category: "Fighter",
    speed: "Mach 2.2",
    range: "1550 km",
    generation: "4",

    images: [
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    ]
  },

  {
    id: 6,
    name: "Jaguar DARIN III",
    role: "Strike Aircraft",
    category: "Fighter",
    speed: "Mach 1.6",
    range: "3500 km",
    generation: "3",

    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
    ]
  },

  {
    id: 7,
    name: "MiG-21 Bison",
    role: "Interceptor Fighter",
    category: "Fighter",
    speed: "Mach 2.05",
    range: "1210 km",
    generation: "3",

    images: [
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 8,
    name: "C-17 Globemaster III",
    role: "Strategic Airlifter",
    category: "Transport",
    speed: "830 km/h",
    range: "10400 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 9,
    name: "C-130J Super Hercules",
    role: "Tactical Airlifter",
    category: "Transport",
    speed: "671 km/h",
    range: "3300 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 10,
    name: "Apache AH-64E",
    role: "Attack Helicopter",
    category: "Helicopter",
    speed: "293 km/h",
    range: "480 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 11,
    name: "Chinook CH-47F",
    role: "Heavy Lift Helicopter",
    category: "Helicopter",
    speed: "315 km/h",
    range: "741 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 12,
    name: "HAL Prachand",
    role: "Light Combat Helicopter",
    category: "Helicopter",
    speed: "268 km/h",
    range: "700 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
    ]
  },

  {
    id: 13,
    name: "HAL Dhruv",
    role: "Utility Helicopter",
    category: "Helicopter",
    speed: "250 km/h",
    range: "630 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    ]
  },

  {
    id: 14,
    name: "Mi-17V5",
    role: "Transport Helicopter",
    category: "Helicopter",
    speed: "250 km/h",
    range: "580 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2"
    ]
  },

  {
    id: 15,
    name: "Netra AEW&C",
    role: "Airborne Early Warning",
    category: "AEW&C",
    speed: "850 km/h",
    range: "2500 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
    ]
  },

  {
    id: 16,
    name: "Heron UAV",
    role: "Reconnaissance UAV",
    category: "UAV",
    speed: "207 km/h",
    range: "1000 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    ]
  },

  {
    id: 17,
    name: "Searcher UAV",
    role: "Reconnaissance UAV",
    category: "UAV",
    speed: "200 km/h",
    range: "300 km",
    generation: "Modern",

    images: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      "https://images.unsplash.com/photo-1544015759-91f688b7c2b2",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad"
    ]
  }

]

export default aircrafts
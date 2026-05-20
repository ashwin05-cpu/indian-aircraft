function SidebarFilters({ selectedCategory, setSelectedCategory }) {

  const categories = [
    "All",
    "Fighter",
    "Transport",
    "Helicopter",
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 h-fit">

      <h2 className="text-2xl font-bold text-sky-400 mb-6">
        Filters
      </h2>

      <div className="space-y-4">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-4 py-3 rounded-xl transition

              ${
                selectedCategory === category
                  ? "bg-sky-500 text-white"
                  : "bg-white/10 hover:bg-white/20"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

    </div>
  )
}

export default SidebarFilters
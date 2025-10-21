export default function MyWork() {
  const projects = [
    {
      title: "Hospital Management System",
      tech: "Java",
      desc: "A full desktop app for managing hospital staff, patients, and records.",
    },
    {
      title: "Coffee Shop Website",
      tech: "HTML • CSS • JS • PHP • SQL",
      desc: "A responsive coffee shop website with backend order and product management.",
    },
    {
      title: "AI Discord Bot",
      tech: "Python • Suronix",
      desc: "An AI-powered Discord bot built with Suronix that interacts like a smart assistant.",
    },
    {
      title: "Portfolio Website",
      tech: "React • Tailwind",
      desc: "This very website — built with React and Tailwind",
    },
    {
      title: "Game Debugging",
      tech: "C# • Unity",
      desc: "Debugging and optimizing multiple Unity games for performance and logic fixes.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900 text-center text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">My Work</h2>

      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{p.tech}</p>
            <p className="text-gray-300 text-base">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

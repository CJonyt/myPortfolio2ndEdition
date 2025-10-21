export default function Experience() {
  const experiences = [
    { title: "Internship at CIMS", date: "August 2024", desc: "Worked on practical software and system management tasks." },
    { title: "Suronix", date: "October 2023 - Present", desc: "Developing AI-powered bots and tools for Discord using Python." },
    { title: "Freelancing", date: "Ongoing", desc: "Taking independent development projects across web and game development." },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-950 text-center text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">Experiences</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((e, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-6 text-left shadow-md hover:shadow-blue-400/30 transition"
          >
            <h3 className="text-2xl text-blue-300 font-semibold">{e.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{e.date}</p>
            <p className="text-gray-300">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

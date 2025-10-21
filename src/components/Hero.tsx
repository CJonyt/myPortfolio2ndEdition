export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-center px-4"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-4 animate-fadeIn">
        Hamdi Ben Hassene
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 animate-fadeIn">
        Full-Stack MERN Developer • Unity C# Game Dev • Java & Python Enthusiast
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition-all duration-300 animate-fadeIn"
      >
        View My Work
      </a>
    </section>
  )
}

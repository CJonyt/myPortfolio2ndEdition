import { useState, useEffect } from "react"
import LoadingPage from "./components/loadingPage"

export default function App() {
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 13000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {!showMain && <LoadingPage />}
      {showMain && (
        <div className="animate-fadeIn flex flex-col items-center justify-center min-h-screen">
          <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex justify-center gap-8 text-blue-400 font-semibold">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <section id="home" className="mt-20 text-center">
            <h1 className="text-6xl font-bold text-blue-500">Welcome to My Portfolio 💼</h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
              Full Stack Developer • Game Dev Enthusiast • Creative Thinker
            </p>
          </section>
        </div>
      )}
    </div>
  )
}

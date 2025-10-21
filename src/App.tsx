import { useState, useEffect } from "react"
import Loader from "./components/loadingPage"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MyWork from "./components/MyWork"
import Experience from "./components/Experience"
import "./App.css"
import Footer from "./components/footer"

export default function App() {
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 13000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {!showMain && <Loader />}
      {showMain && (
        <>
           <Navbar />
    <Hero />
    <MyWork />
    <Experience />
    <Footer />
    
        </>
      )}
    </div>
  )
}

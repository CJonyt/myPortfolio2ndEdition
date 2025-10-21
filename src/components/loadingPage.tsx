import { useEffect, useState } from "react"

export default function LoadingPage() {
  const [stage, setStage] = useState<number>(0)
  const [fadeOut, setFadeOut] = useState<boolean>(false)

  const stages: { text: string; color: string; sub?: string }[] = [
    { text: "Welcome to my portfolio", color: "text-blue-400" },
    { text: "Hamdi Ben Hassene", color: "text-blue-300" },
    {
      text: "About Me",
      color: "text-white",
      sub: "Hey there! I’m Hamdi — a passionate full-stack MERN developer and Unity C# game dev enthusiast, with experience in crafting Java applications and Python projects.",
    },
  ]

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    stages.forEach((_, index) => {
      timers.push(
        setTimeout(() => setFadeOut(true), index * 3000 + 2000),
        setTimeout(() => {
          setFadeOut(false)
          setStage(index + 1)
        }, (index + 1) * 3000)
      )
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 animate-gradientMove transition-opacity duration-1000 ${
        stage >= stages.length ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {stage < stages.length && (
        <div
          className={`text-center transition-all duration-1000 transform ${
            fadeOut ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${stages[stage].color}`}>
            {stages[stage].text}
          </h1>
          {stages[stage].sub && (
            <p className="text-gray-300 text-lg">{stages[stage].sub}</p>
          )}
        </div>
      )}
    </div>
  )
}

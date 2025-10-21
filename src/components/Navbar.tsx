export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/40 backdrop-blur-md border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Hamdi.dev</h1>
        <div className="flex gap-6 text-gray-300 font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors duration-200">Experience</a>
          <a href="#footer" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
  )
}

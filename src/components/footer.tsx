import { FaGithub, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 bg-opacity-70 text-white py-6 text-center backdrop-blur-md">
      <div className="flex justify-center gap-6 text-2xl mb-3">
        <a
          href="https://www.facebook.com/hamdi.ben.hassene.2025"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/CJonYT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="hamdibenhassene192@gmail.com"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
        <a href="tel:+21626155766" className="hover:text-blue-400 transition">
          <FaPhone />
        </a>
      </div>
      <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Hamdi Ben Hassene. All rights reserved.</p>
    </footer>
  )
}

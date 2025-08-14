import * as React from "react"

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-800 text-gray-300 py-4 shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Texto © */}
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} MinhaEmpresa. Todos os direitos
          reservados.
        </p>

        {/* Links sociais */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-white">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-white">
            Twitter
          </a>
          <a href="https://linkedin.com" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}



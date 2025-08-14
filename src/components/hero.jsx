import * as React from "react"
import { Menu, X } from "lucide-react"

export default function HeroSection(){
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MinhaLogo</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de ação */}
        <div className="hidden md:block">
          <a
            href="#login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md font-medium"
          >
            Entrar
          </a>
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-center">
          <ul className="flex flex-col space-y-4 py-6">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contato
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md font-medium"
              >
                Entrar
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Hero Content */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6">
          Bem-vindo ao Nosso Site
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Nós oferecemos soluções modernas e eficientes para impulsionar o seu
          negócio.
        </p>
        <div className="flex space-x-4">
          <a
            href="#services"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md font-medium"
          >
            Saiba Mais
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md font-medium"
          >
            Contato
          </a>
        </div>
      </main>
    </div>
  )
}

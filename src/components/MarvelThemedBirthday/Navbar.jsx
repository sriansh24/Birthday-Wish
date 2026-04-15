import AvengersLogo from '../../components/MarvelThemedBirthday/AvengersLogo.jsx';
import { NAV_LINKS } from '../../constants/MarvelThemedBirthday/heroesData.js';

function Navbar() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/6">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <AvengersLogo className="w-8 h-8" />
        <span className="font-bebas text-xl tracking-widest text-white">Avengers</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar;
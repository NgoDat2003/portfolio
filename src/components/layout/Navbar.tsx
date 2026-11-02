import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { profileContactInfo } from '../../data/profile-contact-info'

const NAV_LINKS = [
  { href: '/#about', label: 'Về tôi' },
  { href: '/#experience', label: 'Kinh nghiệm' },
  { href: '/#projects', label: 'Dự án' },
  { href: '/#contact', label: 'Liên hệ' },
]

/** Sticky top bar; collapses links into a toggle menu below the md breakpoint. */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 px-4 backdrop-blur-sm md:px-8">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between" aria-label="Điều hướng chính">
        <Link to="/" className="font-hand text-2xl text-ink" onClick={closeMenu}>
          {profileContactInfo.fullName}
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profileContactInfo.cvUrl} download className="btn-ink hidden px-5 py-2 sm:inline-flex">
            Tải CV <Download size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-card md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-nav" className="-mx-4 border-t-2 border-ink bg-paper px-4 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="block py-3 text-base font-medium text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a href={profileContactInfo.cvUrl} download onClick={closeMenu} className="btn-ink w-full">
                Tải CV <Download size={15} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

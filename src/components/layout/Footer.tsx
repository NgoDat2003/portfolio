import { Link } from 'react-router-dom'
import { profileContactInfo } from '../../data/profile-contact-info'

/** Site footer with a hand-drawn wavy divider; shown on every route. */
export default function Footer() {
  const { fullName, role, email, phone, githubUrl } = profileContactInfo
  return (
    <footer className="mt-8 px-4 pb-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <svg viewBox="0 0 1200 16" preserveAspectRatio="none" className="mb-8 h-4 w-full text-ink/50" fill="none" aria-hidden="true">
          <path
            d="M0 8 Q 50 0 100 8 T 200 8 T 300 8 T 400 8 T 500 8 T 600 8 T 700 8 T 800 8 T 900 8 T 1000 8 T 1100 8 T 1200 8"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="font-hand text-2xl text-ink">{fullName}</Link>
            <p className="mt-1 text-sm text-ink-soft">{role} · Next.js · NestJS · PostgreSQL</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-ink-soft md:items-end">
            <a href={`mailto:${email}`} className="hover:text-accent-dark">{email}</a>
            <a href={`tel:${phone}`} className="hover:text-accent-dark">{phone}</a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent-dark">GitHub</a>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">© 2026 {fullName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-full border border-white/10 backdrop-blur-2xl bg-slate-950/60 shadow-2xl flex items-center space-x-10">
      <Link to="/" className="text-2xl font-display font-extrabold tracking-tighter flex items-center text-white">
        D<span className="text-primary">.</span>AT
      </Link>
      <div className="w-[1px] h-5 bg-white/10"></div>
      <ul className="flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
        <li className="hover:text-white cursor-pointer transition-colors"><a href="/#home">Home</a></li>
        <li className="hover:text-white cursor-pointer transition-colors"><a href="/#projects">Work</a></li>
        <li className="hover:text-white cursor-pointer transition-colors"><a href="/#experience">Story</a></li>
        <li className="hover:text-white cursor-pointer transition-colors"><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

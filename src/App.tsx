import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import ProjectDetail from './pages/ProjectDetail'

import { AnimatePresence, motion } from 'framer-motion'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, filter: 'blur(10px)', transition: { duration: 0.3 } }
};

function HomePage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </motion.div>
  )
}

function AppContent() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative bg-background overflow-x-hidden scroll-smooth selection:bg-primary/30 selection:text-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

function App() {
  return <AppContent />
}

export default App

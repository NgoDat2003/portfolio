import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import ProjectDetail from './pages/ProjectDetail'

/** On route change: scroll to the `#hash` section if present, otherwise to the top. */
function ScrollToHashOrTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // The target section mounts only after the previous page's exit animation, so poll briefly.
    let frameId = 0;
    const deadline = performance.now() + 1500;
    const scrollWhenMounted = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
      if (performance.now() < deadline) frameId = requestAnimationFrame(scrollWhenMounted);
    };
    scrollWhenMounted();
    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
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
    // MotionConfig honours the visitor's "reduce motion" OS setting for every framer-motion animation.
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-paper">
        <ScrollToHashOrTop />
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

function App() {
  return <AppContent />
}

export default App

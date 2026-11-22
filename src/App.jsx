import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Effects from "./components/Effects";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function Page({ children }) {
  return (
    <motion.main
      id="conteudo"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const title = location.pathname.startsWith("/projetos")
      ? "Projetos — Jonathan Christian"
      : "Jonathan Christian — Tech Lead e Full Stack";
    document.title = title;
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Effects />
      <Navbar />
      <AnimatePresence mode="wait">
        <Page key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Page>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  );
}

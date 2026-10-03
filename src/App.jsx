import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingDonate } from './components/layout/FloatingDonate';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ScrollProgress } from './components/layout/ScrollProgress';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const OurWork = React.lazy(() => import('./pages/OurWork'));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <ScrollProgress />
        <ScrollToTop />
        <SkipLink />
        <Navbar />
        <main id="main" className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-work" element={<OurWork />} />
          </Routes>
        </main>
        <Footer />
        <FloatingDonate />
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;

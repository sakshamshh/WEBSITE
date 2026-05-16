/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-accent selection:text-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <WhyUs />
          <Industries />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}


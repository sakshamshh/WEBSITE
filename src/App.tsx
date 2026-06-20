import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import AssistantShowcase from './components/AssistantShowcase';
import LiveMapShowcase from './components/LiveMapShowcase';
import HowItWorks from './components/HowItWorks';
import CompatibleCameras from './components/CompatibleCameras';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-bg text-text-primary">
        <div className="bg-bg-light text-center py-1.5 text-[11px] text-text-muted tracking-wide border-b border-card-border">
          A <span className="text-white font-medium">Skymlabs Pvt Ltd</span> product
        </div>
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <AssistantShowcase />
          <LiveMapShowcase />
          <HowItWorks />
          <CompatibleCameras />
          <Pricing />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

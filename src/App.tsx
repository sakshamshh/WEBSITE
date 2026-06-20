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

import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import HowItWorks from '@/components/sections/how-it-works';
import Benefits from '@/components/sections/benefits';
import Demo from '@/components/sections/demo';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';
import Pricing from '@/components/sections/pricing';
import Cta from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <Benefits />
      <Demo />
      <About />
      <Testimonials />
      <Pricing />
      <Cta />
    </>
  );
}
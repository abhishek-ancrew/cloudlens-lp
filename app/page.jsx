import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Privacy from "../sections/Privacy";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

// Add or remove sections here. Order = visual order on the page.
export default function Home() {
  return (
    <main className="flex-grow">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Privacy />
      <CTA />
      <Footer />
    </main>
  );
}

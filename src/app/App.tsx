import Hero from './components/Hero';
import About from './components/About';
import WeeklyBouquets from './components/WeeklyBouquets';
import Gallery from './components/Gallery';
import Social from './components/Social';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WeeklyBouquets />
      <Gallery />
      <Social />
      <Footer />
    </div>
  );
}
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Mentor from './components/Mentor';
import Experience from './components/Experience';
import Audience from './components/Audience';
import Certification from './components/Certification';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <Hero />
      <Modules />
      <Mentor />
      <Experience />
      <Audience />
      <Certification />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

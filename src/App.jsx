import About from "./components/About";
import Contact from "./components/Contact";
import Expertises from "./components/Expertises";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Galerie";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
        <Hero />
        <Expertises />
        <Gallery />
        <About />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

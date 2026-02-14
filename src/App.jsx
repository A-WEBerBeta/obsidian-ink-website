import Expertises from "./components/Expertises";
import Footer from "./components/Footer";
import Gallery from "./components/Galerie";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
        <Hero />
        <Expertises />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;

import About from "./components/About";
import Cta from "./components/Cta";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Count from "./components/Count";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";


function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Cta />
      <Features />
      <Clients />
      <Count />
      <Portfolio />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

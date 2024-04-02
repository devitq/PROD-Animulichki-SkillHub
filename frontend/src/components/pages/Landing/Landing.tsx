import { About } from "../../About";
import { FAQ } from "../../FAQ";
import { Features } from "../../Features";
import { Footer } from "../../Footer";
import { Hero } from "../../Hero";
import { HowItWorks } from "../../HowItWorks";
import { Navbar } from "../../Navbar";
import { ScrollToTop } from "../../ScrollToTop";
import { Services } from "../../Services";
import { Team } from "../../Team";
import "../../../App.css";
import { ThemeProvider } from "../../theme-provider.tsx";

function Landing() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      {/* <Features />
      <Services /> */}
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default Landing;

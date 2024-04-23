import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";

function RightContainer() {
  return (
    <div className="text-purple-500 pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default RightContainer;

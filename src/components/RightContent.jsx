import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";

function RightContainer() {
  return (
    <div className=" text-purple-500 w-1/2 py-24">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default RightContainer;

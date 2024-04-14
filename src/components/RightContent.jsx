import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";

function RightContainer() {
  return (
    <div className=" text-purple-500 w-1/2 py-16">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default RightContainer;

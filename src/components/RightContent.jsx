import About from "./About";
import Experience from "./Experience/Experience";

function RightContainer() {
  return (
    <div className="text-purple-500 w-1/2 gap-2 py-20">
      <About />
      <div className="flex flex-col gap-4">
        <Experience />
        <Experience />
        <Experience />
      </div>
    </div>
  );
}

export default RightContainer;

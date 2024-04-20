import Navigator from "./Navigator";
import Socials from "./Socials";

function Header() {
  return (
    <div className="sticky top-0 flex flex-col max-h-screen w-1/2 justify-between py-20">
      <div>
        <h1 className="text-purple-500 text-6xl font-bold">Kevin Zheng</h1>
        <h2 className="text-purple-500 text-2xl font-bold">
          Frontend Engineer
        </h2>
        <p className="text-purple-300 text-base mt-4 w-3/5">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <Navigator />
      </div>
      <Socials />
    </div>
  );
}

export default Header;

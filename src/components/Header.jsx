import Navigator from "./Navigator";
import Socials from "./Socials";

function Header() {
  return (
    <div className="sticky top-0 flex flex-col max-h-screen w-2/5 justify-between py-14">
      <div>
        <h1 className="text-purple-500 text-4xl font-bold">Kevin Zheng</h1>
        <h2 className="text-purple-500 text-base font-bold mt-1">
          Frontend Engineer
        </h2>
        <p className="text-purple-500 text-xs mt-2 w-3/5">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <Navigator />
      </div>
      <Socials />
    </div>
  );
}

export default Header;

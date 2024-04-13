import About from "./About";
import Experience from "./Experience/Experience";

function RightContainer() {
  return (
    <div className=" text-purple-500 w-3/5 py-14">
      <About />
      <Experience>
        <p className="w-1/3 text-xxs">JAN 2022 - OCT 2023</p>
        <div className="flex flex-col w-2/3 gap-3">
          <p className="text-xs font-bold">
            Software Engineer • Quan Wellbeing
          </p>
          <p className="text-xxs">
            Collaborated with a cross-functional team of developers, designers,
            and product managers to successfully build the initial version of
            the application. Developed and built components used on the Quan
            product from the ground up.
          </p>
          <ul className="flex flex-wrap gap-2 text-xxxs text-purple-300">
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">JavaScript</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">TypeScript</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">HTML</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">CSS</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">React</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">Next.js</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">Node.js</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">SQL</li>
          </ul>
        </div>
      </Experience>
      <Experience>
        <p className="w-1/3 text-xxs">JAN 2020 - APR 2020</p>
        <div className="flex flex-col w-2/3 gap-3">
          <p className="text-xs font-bold">Software Developer • Getaboard</p>
          <p className="text-xxs">
            Designed and developed a 2-D platformer game featuring functionality
            akin to Super Mario Bros., including multiple challenging levels,
            diverse enemy types, and formidable boss encounters.
          </p>
          <ul className="flex flex-wrap gap-2 text-xxxs text-purple-300">
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">HTML</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">CSS</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">JavaScript</li>
            <li className="px-2 py-1 bg-purple-900 rounded-2xl">Phaser</li>
          </ul>
        </div>
      </Experience>
    </div>
  );
}

export default RightContainer;

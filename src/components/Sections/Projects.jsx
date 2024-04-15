import crunchyroll from "../../assets/CrunchyrollHero.png";
import computron from "../../assets/Computron.png";

function Projects() {
  return (
    <div id="projects" className="mt-20 scroll-mt-12">
      <ul>
        <a
          href="https://computrondevteam.itch.io/computron2-0"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 hover:border hover:border-purple-500 rounded p-4 mb-4">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={computron}
              alt="Crunchyroll Hero Image"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-xs font-bold">Computron</p>
              <p className="text-xxs text-purple-300">
                {`Game that helps people learn coding logic and techniques that is
                similar to games like "Human Resource Machine" and
                "7 Billion Humans".`}
              </p>
            </div>
          </li>
        </a>
        <a
          href="https://crunchyroll-landing-page-kz.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 hover:border hover:border-purple-500 rounded p-4 mb-4">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={crunchyroll}
              alt="Crunchyroll Hero Image"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-xs font-bold">Crunchyroll Landing Page</p>
              <p className="text-xxs text-purple-300">
                Created a landing page to be responsive and compatible with any
                device.
              </p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Projects;

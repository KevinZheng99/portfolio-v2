import crunchyroll from "../../assets/CrunchyrollHero.png";
import computron from "../../assets/Computron.png";
import mbdtfAlbum from "../../assets/MBDTFAlbum.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-12">
      <p className="text-purple-500 text-lg font-bold mb-6 lg:hidden">
        PROJECTS
      </p>
      <ul>
        <a
          href="https://mbdtf-album.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={mbdtfAlbum}
              alt="My Beautiful Dark Twisted Fantasy Album Audio Player"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-lg font-medium">Album Audio Player</p>
              <p className="text-sm text-purple-300">
                {`An Album release page with a custom and full functioning audio player for the My Beautiful Dark Twisted Fantasy album by Kanye West.`}
              </p>
            </div>
          </li>
        </a>
        <a
          href="https://computrondevteam.itch.io/computron2-0"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={computron}
              alt="Computron Game"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-lg font-medium">Computron</p>
              <p className="text-sm text-purple-300">
                {`Game that helps people learn coding logic and techniques that is
                similar to games like "Human Resource Machine" and
                "7 Billion Humans".`}
              </p>
            </div>
          </li>
        </a>
        <a
          href="https://crunchyroll-kz.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={crunchyroll}
              alt="Crunchyroll Hero Image"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-lg font-medium">Crunchyroll Landing Page</p>
              <p className="text-sm text-purple-300">
                Created a landing page to be responsive and compatible with any
                device.
              </p>
            </div>
          </li>
        </a>
      </ul>
      <Link
        className="group text-slate-200 font-medium hover:text-purple-500 transition-all"
        to="/archive"
      >
        <span className="mr-0.5">View Projects Archive</span>
        <svg
          className="inline group-hover:translate-x-1.5 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
          />
        </svg>
      </Link>
    </section>
  );
}

export default Projects;

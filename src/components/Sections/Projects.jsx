import crunchyroll from "../../assets/CrunchyrollHero.png";
import computron from "../../assets/Computron.png";

function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-12">
      <ul>
        <a
          href="https://computrondevteam.itch.io/computron2-0"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={computron}
              alt="Crunchyroll Hero Image"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-xs font-medium">Computron</p>
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
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <img
              className="w-1/4 h-full border border-gray-500 rounded"
              src={crunchyroll}
              alt="Crunchyroll Hero Image"
            />
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-xs font-medium">Crunchyroll Landing Page</p>
              <p className="text-xxs text-purple-300">
                Created a landing page to be responsive and compatible with any
                device.
              </p>
            </div>
          </li>
        </a>
      </ul>
      <a
        className="group text-slate-200 text-xs font-medium hover:text-purple-500 transition-all"
        href="/archive"
      >
        <span className="mr-0.5">View Projects Archive</span>
        <svg
          className="inline group-hover:translate-x-1 transition-transform"
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
      </a>
    </section>
  );
}

export default Projects;

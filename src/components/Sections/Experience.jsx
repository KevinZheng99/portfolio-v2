import { QuanSkills, GetaboardSkills } from "../../conts";
import Skill from "../shared/Skill";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-12">
      <ul>
        <a
          href="https://www.quanwellbeing.com/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <p className="w-1/3 text-sm text-purple-300">JAN 2022 - OCT 2023</p>
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-lg font-medium">
                Software Engineer • Quan Wellbeing
              </p>
              <p className="text-sm text-purple-300">
                Collaborated with a cross-functional team of developers,
                designers, and product managers to successfully build the
                initial version of the application. Developed and built
                components used on the Quan product from the ground up.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-purple-200">
                {QuanSkills.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </ul>
            </div>
          </li>
        </a>
        <a href="https://getaboard.org/" target="_blank" rel="noreferrer">
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4 transition-all">
            <p className="w-1/3 text-sm text-purple-300">JAN 2020 - APR 2020</p>
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-lg font-medium">
                Software Developer • Getaboard
              </p>
              <p className="text-sm text-purple-300">
                Designed and developed a 2-D platformer game featuring
                functionality akin to Super Mario Bros., including multiple
                challenging levels, diverse enemy types, and formidable boss
                encounters.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-purple-200">
                {GetaboardSkills.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </ul>
            </div>
          </li>
        </a>
      </ul>
      <a
        className="group text-slate-200 font-medium hover:text-purple-500 transition-all"
        href="https://drive.google.com/file/d/1TAV-DTB6SrybSW5X8pzV7TLO8MAjNKYh/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <span className="mr-0.5">View Full Resume</span>
        <svg
          className="inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
          />
        </svg>
      </a>
    </section>
  );
}

export default Experience;

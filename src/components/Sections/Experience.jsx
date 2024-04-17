import { QuanSkills, GetaboardSkills } from "../../conts";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-12">
      <ul>
        <a
          href="https://www.quanwellbeing.com/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4">
            <p className="w-1/3 text-xxs text-purple-300">
              JAN 2022 - OCT 2023
            </p>
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-xs font-medium">
                Software Engineer • Quan Wellbeing
              </p>
              <p className="text-xxs text-purple-300">
                Collaborated with a cross-functional team of developers,
                designers, and product managers to successfully build the
                initial version of the application. Developed and built
                components used on the Quan product from the ground up.
              </p>
              <ul className="flex flex-wrap gap-2 text-xxxs text-purple-200">
                {QuanSkills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2 py-1 bg-purple-900 rounded-2xl"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </a>
        <a href="https://getaboard.org/" target="_blank" rel="noreferrer">
          <li className="flex gap-4 border border-transparent hover:border-purple-500 rounded p-4 mb-4">
            <p className="w-1/3 text-xxs text-purple-300">
              JAN 2020 - APR 2020
            </p>
            <div className="flex flex-col w-2/3 gap-3">
              <p className="text-xs font-medium">
                Software Developer • Getaboard
              </p>
              <p className="text-xxs text-purple-300">
                Designed and developed a 2-D platformer game featuring
                functionality akin to Super Mario Bros., including multiple
                challenging levels, diverse enemy types, and formidable boss
                encounters.
              </p>
              <ul className="flex flex-wrap gap-2 text-xxxs text-purple-200">
                {GetaboardSkills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2 py-1 bg-purple-900 rounded-2xl"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </a>
      </ul>
    </section>
  );
}

export default Experience;

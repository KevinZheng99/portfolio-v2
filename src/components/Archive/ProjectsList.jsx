import { ProjectsArchive } from "../../conts";
import Skill from "../shared/Skill";

function ProjectsList() {
  return (
    <table className="text-slate-200 w-full my-8">
      <tr className="text-left border-b border-slate-500">
        <th className="py-4">Year</th>
        <th className="py-4">Project</th>
        <th className="py-4">Made At</th>
        <th className="py-4">Built with</th>
        <th className="py-4">Link</th>
      </tr>
      {ProjectsArchive.map((project) => {
        return (
          <tr className="border-b border-slate-500" key={project.projectName}>
            <td className="py-4 text-slate-400">{project.year}</td>
            <td className="py-4 font-bold">{project.projectName}</td>
            <td className="py-4 text-slate-400">{project.madeAt}</td>
            <td className="py-4">
              <ul className="flex gap-2 text-sm">
                {project.builtWith.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </ul>
            </td>
            {project.link && (
              <td className="group py-4 text-slate-400 hover:text-purple-500 transition-all">
                <a href={project.link.url} target="_blank" rel="noreferrer">
                  {project.link.name}
                </a>
                <svg
                  className="inline group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
              </td>
            )}
          </tr>
        );
      })}
    </table>
  );
}

export default ProjectsList;

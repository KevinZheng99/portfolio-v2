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
            <td className="py-4">{project.year}</td>
            <td className="py-4">{project.projectName}</td>
            <td className="py-4">{project.madeAt}</td>
            <td className="py-4">
              <ul className="flex gap-2">
                {project.builtWith.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </ul>
            </td>
            <td className="py-4">{project.link}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default ProjectsList;

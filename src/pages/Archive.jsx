import ArchiveHeader from "../components/Archive/ArchiveHeader";
import ProjectsList from "../components/Archive/ProjectsList";

function Archive() {
  return (
    <div className="w-1/2 m-auto py-12">
      <ArchiveHeader />
      <ProjectsList />
    </div>
  );
}

export default Archive;

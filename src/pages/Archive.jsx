import ArchiveHeader from "../components/Archive/ArchiveHeader";
import ProjectsList from "../components/Archive/ProjectsList";

function Archive() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <ArchiveHeader />
      <ProjectsList />
    </div>
  );
}

export default Archive;

function Projects() {
  return (
    <div className="mt-20">
      <ul>
        <li className="flex hover:border hover:border-purple-500 rounded p-4 mb-4">
          <p className="w-1/3 text-xxs">IMAGE HERE</p>
          <div className="flex flex-col w-2/3 gap-3">
            <p className="text-xs font-bold">Project 1</p>
            <p className="text-xxs">Description</p>
          </div>
        </li>
        <li className="flex hover:border hover:border-purple-500 rounded p-4 mb-4">
          <p className="w-1/3 text-xxs">IMAGE HERE</p>
          <div className="flex flex-col w-2/3 gap-3">
            <p className="text-xs font-bold">Project 2</p>
            <p className="text-xxs">Description</p>
          </div>
        </li>
        <li className="flex hover:border hover:border-purple-500 rounded p-4 mb-4">
          <p className="w-1/3 text-xxs">IMAGE HERE</p>
          <div className="flex flex-col w-2/3 gap-3">
            <p className="text-xs font-bold">Project 3</p>
            <p className="text-xxs">Description</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;

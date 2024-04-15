function Navigator() {
  const linkClasses = "group transition-all hover:text-purple-300";
  const lineClasses =
    "inline-block w-8 border-t border-gray-500 -translate-y-1 mr-2 transition-all group-hover:w-12 group-hover:border-gray-100";

  return (
    <nav className="text-purple-500 text-xs font-bold mt-12">
      <ul className="flex flex-col gap-3">
        <li>
          <a className={linkClasses} href="#about">
            <span className={lineClasses} />
            About
          </a>
        </li>
        <li>
          <a className={linkClasses} href="#experience">
            <span className={lineClasses} />
            Experience
          </a>
        </li>
        <li>
          <a className={linkClasses} href="#projects">
            <span className={lineClasses} />
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;

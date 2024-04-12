function Navigator() {
  const linkClasses = "hover:text-purple-300";

  return (
    <nav className="text-purple-500 text-xs font-bold mt-12">
      <ul className="flex flex-col gap-3">
        <li>
          <a className={linkClasses} href="">
            About
          </a>
        </li>
        <li>
          <a className={linkClasses} href="">
            Experience
          </a>
        </li>
        <li>
          <a className={linkClasses} href="">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;

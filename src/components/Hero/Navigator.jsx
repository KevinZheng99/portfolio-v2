import { useScrollPosition } from "../../hooks/useScrollPosition";
import NavLink from "./NavLink";

function Navigator() {
  const scrollPosition = useScrollPosition();

  const defaultLinkClasses = "group transition-all";
  const defaultLineClasses =
    "inline-block border-t -translate-y-1 mr-2 transition-all group-hover:w-12 group-hover:border-gray-100";

  const activeLinkClasses = defaultLinkClasses + " text-purple-300";
  const inactiveLinkClasses = defaultLinkClasses + " hover:text-purple-300";
  const activeLineClasses = defaultLineClasses + " border-gray-100 w-12";
  const inactiveLineClasses = defaultLineClasses + " border-gray-500 w-8";

  return (
    <nav className="text-purple-500 font-bold mt-12 hidden lg:block">
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            name="About"
            href="#about"
            lineStyles={
              scrollPosition >= 0 && scrollPosition < 300
                ? activeLineClasses
                : inactiveLineClasses
            }
            linkStyles={
              scrollPosition >= 0 && scrollPosition < 300
                ? activeLinkClasses
                : inactiveLinkClasses
            }
          />
        </li>
        <li>
          <NavLink
            name="Experience"
            href="#experience"
            lineStyles={
              scrollPosition >= 300 && scrollPosition < 600
                ? activeLineClasses
                : inactiveLineClasses
            }
            linkStyles={
              scrollPosition >= 300 && scrollPosition < 600
                ? activeLinkClasses
                : inactiveLinkClasses
            }
          />
        </li>
        <li>
          <NavLink
            name="Projects"
            href="#projects"
            lineStyles={
              scrollPosition >= 600 ? activeLineClasses : inactiveLineClasses
            }
            linkStyles={
              scrollPosition >= 600 ? activeLinkClasses : inactiveLinkClasses
            }
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;

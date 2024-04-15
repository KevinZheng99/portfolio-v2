import { useScrollPosition } from "../../hooks/useScrollPosition";
import NavLink from "./NavLink";

function Navigator() {
  const scrollPosition = useScrollPosition();

  const linkClasses = "group transition-all hover:text-purple-300";
  const lineClasses =
    "inline-block w-8 border-t border-gray-500 -translate-y-1 mr-2 transition-all group-hover:w-12 group-hover:border-gray-100";

  const activeLinkClasses = linkClasses + " text-purple-300";
  const activeLineClasses = lineClasses + " border-gray-100 w-12";

  return (
    <nav className="text-purple-500 text-xs font-bold mt-12">
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            name="About"
            href="#about"
            lineStyles={
              scrollPosition >= 0 && scrollPosition < 300
                ? activeLineClasses
                : lineClasses
            }
            linkStyles={
              scrollPosition >= 0 && scrollPosition < 300
                ? activeLinkClasses
                : linkClasses
            }
          />
        </li>
        <li>
          <NavLink
            name="Experience"
            href="#experience"
            lineStyles={
              scrollPosition >= 300 && scrollPosition < 700
                ? activeLineClasses
                : lineClasses
            }
            linkStyles={
              scrollPosition >= 300 && scrollPosition < 700
                ? activeLinkClasses
                : linkClasses
            }
          />
        </li>
        <li>
          <NavLink
            name="Projects"
            href="#projects"
            lineStyles={scrollPosition >= 700 ? activeLineClasses : lineClasses}
            linkStyles={scrollPosition >= 700 ? activeLinkClasses : linkClasses}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;

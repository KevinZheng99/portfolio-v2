function NavLink({ name, href, lineStyles, linkStyles }) {
  return (
    <a className={linkStyles} href={href}>
      <span className={lineStyles} />
      <span>{name}</span>
    </a>
  );
}

export default NavLink;

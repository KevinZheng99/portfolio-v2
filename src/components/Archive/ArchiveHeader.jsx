function Header() {
  return (
    <section className="text-slate-200">
      <a className="group" href="/">
        <svg
          className="inline group-hover:-translate-x-1 transition-transform mr-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width=".75em"
          height=".75em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"
          />
        </svg>
        <span className="text-xs font-medium">Kevin Zheng</span>
      </a>
      <div className="text-3xl font-bold">All Projects</div>
    </section>
  );
}

export default Header;

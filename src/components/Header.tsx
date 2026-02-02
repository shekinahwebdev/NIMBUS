const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1e1e2f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-[rgb(170,143,82)]">
          DESIGN<span className="text-white">CORE</span>
        </div>

        {/* Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-[rgb(170,143,82)]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle (Visual Only) */}
        <button className="text-[rgb(170,143,82)] md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

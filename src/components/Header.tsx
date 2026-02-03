import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

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
          {["Home", "About", "Service", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-[rgb(170,143,82)]"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle (Visual Only) */}
        <button className="text-[rgb(170,143,82)] md:hidden">
          <BiMenu size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;

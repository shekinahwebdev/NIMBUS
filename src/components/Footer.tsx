const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#1e1e2f] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-xl font-serif font-bold text-[rgb(170,143,82)]">
              DESIGNCORE
            </div>
            <p className="text-sm text-gray-400">
              Crafting high-end digital experiences with precision and
              gold-standard aesthetics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[rgb(170,143,82)]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[rgb(170,143,82)]">
              Get in Touch
            </h4>
            <p className="text-sm text-gray-400">hello@designcore.com</p>
            <div className="mt-4 flex space-x-4">
              {/* Social Placeholders */}
              <div className="h-5 w-5 rounded-full bg-white/10 hover:bg-[rgb(170,143,82)] transition-colors cursor-pointer"></div>
              <div className="h-5 w-5 rounded-full bg-white/10 hover:bg-[rgb(170,143,82)] transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DesignCore Engine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

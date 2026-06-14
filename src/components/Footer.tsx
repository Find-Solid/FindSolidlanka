import { Shield, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  setSection: (section: string) => void;
}

export default function Footer({ setSection }: FooterProps) {
  const handleNavClick = (section: string) => {
    setSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4" id="footer-col-brand">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => handleNavClick('home')}
              id="footer-logo"
            >
              <div className="w-8 h-8 rounded-sm bg-[#0f1c2c] flex items-center justify-center text-[#cca23b]">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold text-[#0f1c2c]">
                Find Solid <span className="text-[#cca23b]">Lanka</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Delivering authority, precision, and luxury in architectural supply and certified safety solutions across Sri Lanka. Built to uncompromising international standards.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#47607e]" id="footer-socials">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white rounded-full border border-gray-200 hover:border-[#cca23b] hover:text-[#cca23b] transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white rounded-full border border-gray-200 hover:border-[#cca23b] hover:text-[#cca23b] transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div id="footer-col-solutions">
            <h3 className="text-[#0f1c2c] text-xs font-bold tracking-wider uppercase mb-5">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <button 
                  onClick={() => handleNavClick('products')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Fire Rated Doors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Fire Rated Timber Doors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Architectural Ironmongery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Glass Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div id="footer-col-company">
            <h3 className="text-[#0f1c2c] text-xs font-bold tracking-wider uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  About Us / Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('projects')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('certifications')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div id="footer-col-legal">
            <h3 className="text-[#0f1c2c] text-xs font-bold tracking-wider uppercase mb-5">
              Legal & Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#privacy" className="hover:text-[#cca23b] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#cca23b] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className="hover:text-[#cca23b] transition-colors"
                >
                  Head Office Address
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and License */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 Find Solid Lanka (Pvt) Ltd. All Rights Reserved.
          </div>
          <div className="flex gap-2 items-center">
            <span>Accredited Fire Safety Supply</span>
            <span className="text-gray-300">|</span>
            <span>Registered Under PV-124805 in Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setSection: (section: string) => void;
}

export default function Header({ currentSection, setSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Products', value: 'products' },
    { label: 'Projects', value: 'projects' },
    { label: 'Certifications', value: 'certifications' }
  ];

  const handleNavClick = (value: string) => {
    setSection(value);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm font-sans" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo conforming strictly to screenshots */}
          <div 
            className="flex items-center cursor-pointer gap-2 select-none" 
            onClick={() => handleNavClick('home')}
            id="logo-container"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1a1c1a] hover:text-[#47607e] transition-colors">
              Find Solid Lanka
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentSection === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'text-[#1a1c1a] font-bold' 
                      : 'text-gray-500 hover:text-gray-950'
                  }`}
                  id={`nav-item-${item.value}`}
                >
                  {item.label}
                  {isActive && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#cca23b] rounded-full"
                      id={`nav-active-line-${item.value}`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Request a Quote Action Button */}
          <div className="hidden md:flex items-center" id="header-actions">
            <button
              onClick={() => handleNavClick('quote')}
              className="bg-[#cca23b] hover:bg-[#b0882e] text-white px-5 py-3 text-xs font-bold tracking-wider uppercase rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
              id="cta-request-quote-button"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-950 p-2 focus:outline-none"
              id="hamburger-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-20 left-0 right-0 shadow-lg animate-fadeIn" id="mobile-nav-panel">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold ${
                  currentSection === item.value
                    ? 'bg-[#f9faf5] text-[#1a1c1a] border-l-4 border-[#cca23b]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
                }`}
                id={`mobile-nav-item-${item.value}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 px-4">
              <button
                onClick={() => handleNavClick('quote')}
                className="w-full text-center bg-[#cca23b] hover:bg-[#b0882e] text-white py-3.5 text-xs font-bold tracking-wider uppercase rounded-sm shadow-md transition-all duration-300"
                id="mobile-cta-request-quote"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Mentor', href: '#mentor' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#hero" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/images/LW@4x1.png" 
                alt="LinuxWorld Logo" 
                className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text-subtle">
                ELK Stack Training
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-accent-600 transition-colors font-medium text-sm lg:text-base"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="btn-primary group text-sm lg:text-base px-6 py-2.5"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-accent-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary-700/30 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-accent-600 transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="btn-primary group text-sm px-6 py-2.5 mt-2"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

